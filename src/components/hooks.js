import { onMounted, onUnmounted, ref, watch, computed } from 'vue';
import { getElSize, filterHandles, getId, getReferenceLineMap, addEvent, removeEvent } from './utils';
export function useState(initialState) {
    const state = ref(initialState);
    const setState = (value) => {
        state.value = value;
        return value;
    };
    return [state, setState];
}
export function initState(props, emit) {
    const [width, setWidth] = useState(props.initW);
    const [height, setHeight] = useState(props.initH);
    const [left, setLeft] = useState(props.x);
    const [top, setTop] = useState(props.y);
    const [enable, setEnable] = useState(props.active);
    const [dragging, setDragging] = useState(false);
    const [resizing, setResizing] = useState(false);
    const [resizingHandle, setResizingHandle] = useState('');
    const [resizingMaxWidth, setResizingMaxWidth] = useState(Infinity);
    const [resizingMaxHeight, setResizingMaxHeight] = useState(Infinity);
    const [resizingMinWidth, setResizingMinWidth] = useState(props.minW);
    const [resizingMinHeight, setResizingMinHeight] = useState(props.minH);
    const [parentScaleX, setParentScaleX] = useState(props.parentScaleX);
    const [parentScaleY, setParentScaleY] = useState(props.parentScaleY);
    const [triggerKey, setTriggerKey] = useState(props.triggerKey);
    const aspectRatio = computed(() => height.value / width.value);
    watch(width, (newVal) => {
        emit('update:w', newVal);
    }, { immediate: true });
    watch(height, (newVal) => {
        emit('update:h', newVal);
    }, { immediate: true });
    watch(top, (newVal) => {
        emit('update:y', newVal);
    });
    watch(left, (newVal) => {
        emit('update:x', newVal);
    });
    watch(enable, (newVal, oldVal) => {
        emit('update:active', newVal);
        if (!oldVal && newVal) {
            emit('activated');
        }
        else if (oldVal && !newVal) {
            emit('deactivated');
        }
    });
    watch(() => props.active, (newVal) => {
        setEnable(newVal);
    });
    watch(() => props.parentScaleX, () => {
        setParentScaleX(props.parentScaleX);
    });
    watch(() => props.parentScaleY, () => {
        setParentScaleY(props.parentScaleY);
    });
    watch(() => props.triggerKey, () => {
        setTriggerKey(props.triggerKey);
    });
    return {
        id: getId(),
        width,
        height,
        top,
        left,
        enable,
        dragging,
        resizing,
        resizingHandle,
        resizingMaxHeight,
        resizingMaxWidth,
        resizingMinWidth,
        resizingMinHeight,
        aspectRatio,
        parentScaleX,
        parentScaleY,
        triggerKey,
        setEnable,
        setDragging,
        setResizing,
        setResizingHandle,
        setResizingMaxHeight,
        setResizingMaxWidth,
        setResizingMinWidth,
        setResizingMinHeight,
        $setWidth: (val) => setWidth(Math.floor(val)),
        $setHeight: (val) => setHeight(Math.floor(val)),
        $setTop: (val) => setTop(Math.floor(val)),
        $setLeft: (val) => setLeft(Math.floor(val)),
        setWidth: (val) => setWidth(Math.floor(val)),
        setHeight: (val) => setHeight(Math.floor(val)),
        setTop: (val) => setTop(Math.floor(val)),
        setLeft: (val) => setLeft(Math.floor(val))
    };
}
export function initParent(containerRef) {
    const parentWidth = ref(0);
    const parentHeight = ref(0);
    onMounted(() => {
        if (containerRef.value && containerRef.value.parentElement) {
            const { width, height } = getElSize(containerRef.value.parentElement);
            parentWidth.value = width;
            parentHeight.value = height;
        }
    });
    return {
        parentWidth,
        parentHeight
    };
}
export function initLimitSizeAndMethods(props, parentSize, containerProps) {
    const { width, height, left, top, resizingMaxWidth, resizingMaxHeight, resizingMinWidth, resizingMinHeight } = containerProps;
    const { setWidth, setHeight, setTop, setLeft } = containerProps;
    const { parentWidth, parentHeight } = parentSize;
    const limitProps = {
        minWidth: computed(() => {
            return resizingMinWidth.value;
        }),
        minHeight: computed(() => {
            return resizingMinHeight.value;
        }),
        maxWidth: computed(() => {
            let max = Infinity;
            if (props.parent) {
                max = Math.min(parentWidth.value, resizingMaxWidth.value);
            }
            return max;
        }),
        maxHeight: computed(() => {
            let max = Infinity;
            if (props.parent) {
                max = Math.min(parentHeight.value, resizingMaxHeight.value);
            }
            return max;
        }),
        minLeft: computed(() => {
            return props.parent ? 0 : -Infinity;
        }),
        minTop: computed(() => {
            return props.parent ? 0 : -Infinity;
        }),
        maxLeft: computed(() => {
            return props.parent ? parentWidth.value - width.value : Infinity;
        }),
        maxTop: computed(() => {
            return props.parent ? parentHeight.value - height.value : Infinity;
        })
    };
    const limitMethods = {
        setWidth(val) {
            if (props.disabledW) {
                return width.value;
            }
            return setWidth(Math.min(limitProps.maxWidth.value, Math.max(limitProps.minWidth.value, val)));
        },
        setHeight(val) {
            if (props.disabledH) {
                return height.value;
            }
            return setHeight(Math.min(limitProps.maxHeight.value, Math.max(limitProps.minHeight.value, val)));
        },
        setTop(val) {
            if (props.disabledY) {
                return top.value;
            }
            return setTop(Math.min(limitProps.maxTop.value, Math.max(limitProps.minTop.value, val)));
        },
        setLeft(val) {
            if (props.disabledX) {
                return left.value;
            }
            return setLeft(Math.min(limitProps.maxLeft.value, Math.max(limitProps.minLeft.value, val)));
        }
    };
    return {
        ...limitProps,
        ...limitMethods
    };
}
const DOWN_HANDLES = ['mousedown', 'touchstart'];
const UP_HANDLES = ['mouseup', 'touchend'];
const MOVE_HANDLES = ['mousemove', 'touchmove'];
function getPosition(e) {
    if ('touches' in e) {
        return [e.touches[0].pageX, e.touches[0].pageY];
    }
    else {
        return [e.pageX, e.pageY];
    }
}
export function initDraggableContainer(containerRef, containerProps, limitProps, draggable, emit, containerProvider, parentSize) {
    const { left: x, top: y, width: w, height: h, dragging, id } = containerProps;
    const { setDragging, setEnable, setResizing, setResizingHandle, parentScaleX, parentScaleY, triggerKey } = containerProps;
    const { setTop, setLeft } = limitProps;
    let lstX = 0;
    let lstY = 0;
    let lstPageX = 0;
    let lstPageY = 0;
    let referenceLineMap = null;
    const documentElement = document.documentElement;
    const _unselect = (e) => {
        const target = e.target;
        if (!containerRef.value?.contains(target)) {
            setEnable(false);
            setDragging(false);
            setResizing(false);
            setResizingHandle('');
        }
    };
    const handleUp = () => {
        setDragging(false);
        // document.documentElement.removeEventListener('mouseup', handleUp)
        // document.documentElement.removeEventListener('mousemove', handleDrag)
        removeEvent(documentElement, UP_HANDLES, handleUp);
        removeEvent(documentElement, MOVE_HANDLES, handleDrag);
        referenceLineMap = null;
        if (containerProvider) {
            containerProvider.updatePosition(id, {
                x: x.value,
                y: y.value,
                w: w.value,
                h: h.value
            });
            containerProvider.setMatchedLine(null);
        }
    };
    const handleDrag = (e) => {
        e.preventDefault();
        const trigger = triggerKey.value == 'right' ? 3 : 1;
        // console.log("键",triggerKey.value)
        // console.log("对应key",trigger)
        // console.log('按下的键',e)
        if (trigger != e.which) {
            return;
        }
        if (!(dragging.value && containerRef.value))
            return;
        const [pageX, pageY] = getPosition(e);
        const deltaX = (pageX - lstPageX) / parentScaleX.value;
        const deltaY = (pageY - lstPageY) / parentScaleY.value;
        let newLeft = lstX + deltaX;
        let newTop = lstY + deltaY;
        if (referenceLineMap !== null) {
            const widgetSelfLine = {
                col: [newLeft, newLeft + w.value / 2, newLeft + w.value],
                row: [newTop, newTop + h.value / 2, newTop + h.value]
            };
            const matchedLine = {
                row: widgetSelfLine.row
                    .map((i, index) => {
                    let match = null;
                    Object.values(referenceLineMap.row).forEach((referItem) => {
                        if (i >= referItem.min && i <= referItem.max) {
                            match = referItem.value;
                        }
                    });
                    if (match !== null) {
                        if (index === 0) {
                            newTop = match;
                        }
                        else if (index === 1) {
                            newTop = Math.floor(match - h.value / 2);
                        }
                        else if (index === 2) {
                            newTop = Math.floor(match - h.value);
                        }
                    }
                    return match;
                })
                    .filter((i) => i !== null),
                col: widgetSelfLine.col
                    .map((i, index) => {
                    let match = null;
                    Object.values(referenceLineMap.col).forEach((referItem) => {
                        if (i >= referItem.min && i <= referItem.max) {
                            match = referItem.value;
                        }
                    });
                    if (match !== null) {
                        if (index === 0) {
                            newLeft = match;
                        }
                        else if (index === 1) {
                            newLeft = Math.floor(match - w.value / 2);
                        }
                        else if (index === 2) {
                            newLeft = Math.floor(match - w.value);
                        }
                    }
                    return match;
                })
                    .filter((i) => i !== null)
            };
            containerProvider.setMatchedLine(matchedLine);
        }
        emit('dragging', { x: setLeft(newLeft), y: setTop(newTop) });
    };
    const handleDown = (e) => {
        if (!draggable.value)
            return;
        setDragging(true);
        lstX = x.value;
        lstY = y.value;
        lstPageX = getPosition(e)[0];
        lstPageY = getPosition(e)[1];
        // document.documentElement.addEventListener('mousemove', handleDrag)
        // document.documentElement.addEventListener('mouseup', handleUp)
        addEvent(documentElement, MOVE_HANDLES, handleDrag);
        addEvent(documentElement, UP_HANDLES, handleUp);
        if (containerProvider && !containerProvider.disabled.value) {
            referenceLineMap = getReferenceLineMap(containerProvider, parentSize, id);
        }
    };
    watch(dragging, (cur, pre) => {
        if (!pre && cur) {
            emit('drag-start', { x: x.value, y: y.value });
            setEnable(true);
            setDragging(true);
        }
        else {
            emit('drag-end', { x: x.value, y: y.value });
            setDragging(false);
        }
    });
    onMounted(() => {
        const el = containerRef.value;
        if (!el)
            return;
        el.style.left = x + 'px';
        el.style.top = y + 'px';
        // document.documentElement.addEventListener('mousedown', _unselect)
        // el.addEventListener('mousedown', handleDown)
        addEvent(documentElement, DOWN_HANDLES, _unselect);
        addEvent(el, DOWN_HANDLES, handleDown);
    });
    onUnmounted(() => {
        if (!containerRef.value)
            return;
        // document.documentElement.removeEventListener('mousedown', _unselect)
        // document.documentElement.removeEventListener('mouseup', handleUp)
        // document.documentElement.removeEventListener('mousemove', handleDrag)
        removeEvent(documentElement, DOWN_HANDLES, _unselect);
        removeEvent(documentElement, UP_HANDLES, handleUp);
        removeEvent(documentElement, MOVE_HANDLES, handleDrag);
    });
    return { containerRef };
}
export function initResizeHandle(containerProps, limitProps, parentSize, props, emit) {
    const { setWidth, setHeight, setLeft, setTop } = limitProps;
    const { width, height, left, top, aspectRatio } = containerProps;
    const { setResizing, setResizingHandle, setResizingMaxWidth, setResizingMaxHeight, setResizingMinWidth, setResizingMinHeight } = containerProps;
    const { parentWidth, parentHeight } = parentSize;
    let lstW = 0;
    let lstH = 0;
    let lstX = 0;
    let lstY = 0;
    let lstPageX = 0;
    let lstPageY = 0;
    let tmpAspectRatio = 1;
    let idx0 = '';
    let idx1 = '';
    const documentElement = document.documentElement;
    const resizeHandleDrag = (e) => {
        e.preventDefault();
        let [_pageX, _pageY] = getPosition(e);
        let deltaX = _pageX - lstPageX;
        let deltaY = _pageY - lstPageY;
        let _deltaX = deltaX;
        let _deltaY = deltaY;
        if (props.lockAspectRatio) {
            deltaX = Math.abs(deltaX);
            deltaY = deltaX * tmpAspectRatio;
            if (idx0 === 't') {
                if (_deltaX < 0 || (idx1 === 'm' && _deltaY < 0)) {
                    deltaX = -deltaX;
                    deltaY = -deltaY;
                }
            }
            else {
                if (_deltaX < 0 || (idx1 === 'm' && _deltaY < 0)) {
                    deltaX = -deltaX;
                    deltaY = -deltaY;
                }
            }
        }
        if (idx0 === 't') {
            setHeight(lstH - deltaY);
            setTop(lstY - (height.value - lstH));
        }
        else if (idx0 === 'b') {
            setHeight(lstH + deltaY);
        }
        if (idx1 === 'l') {
            setWidth(lstW - deltaX);
            setLeft(lstX - (width.value - lstW));
        }
        else if (idx1 === 'r') {
            setWidth(lstW + deltaX);
        }
        emit('resizing', {
            x: left.value,
            y: top.value,
            w: width.value,
            h: height.value
        });
    };
    const resizeHandleUp = () => {
        emit('resize-end', {
            x: left.value,
            y: top.value,
            w: width.value,
            h: height.value
        });
        setResizingHandle('');
        setResizing(false);
        setResizingMaxWidth(Infinity);
        setResizingMaxHeight(Infinity);
        setResizingMinWidth(props.minW);
        setResizingMinHeight(props.minH);
        // document.documentElement.removeEventListener('mousemove', resizeHandleDrag)
        // document.documentElement.removeEventListener('mouseup', resizeHandleUp)
        removeEvent(documentElement, MOVE_HANDLES, resizeHandleDrag);
        removeEvent(documentElement, UP_HANDLES, resizeHandleUp);
    };
    const resizeHandleDown = (e, handleType) => {
        if (!props.resizable)
            return;
        e.stopPropagation();
        setResizingHandle(handleType);
        setResizing(true);
        idx0 = handleType[0];
        idx1 = handleType[1];
        if (aspectRatio.value) {
            if (['tl', 'tm', 'ml', 'bl'].includes(handleType)) {
                idx0 = 't';
                idx1 = 'l';
            }
            else {
                idx0 = 'b';
                idx1 = 'r';
            }
        }
        let minHeight = props.minH;
        let minWidth = props.minW;
        if (minHeight / minWidth > aspectRatio.value) {
            minWidth = minHeight / aspectRatio.value;
        }
        else {
            minHeight = minWidth * aspectRatio.value;
        }
        setResizingMinWidth(minWidth);
        setResizingMinHeight(minHeight);
        if (parent) {
            let maxHeight = idx0 === 't' ? top.value + height.value : parentHeight.value - top.value;
            let maxWidth = idx1 === 'l' ? left.value + width.value : parentWidth.value - left.value;
            if (props.lockAspectRatio) {
                if (maxHeight / maxWidth < aspectRatio.value) {
                    maxWidth = maxHeight / aspectRatio.value;
                }
                else {
                    maxHeight = maxWidth * aspectRatio.value;
                }
            }
            setResizingMaxHeight(maxHeight);
            setResizingMaxWidth(maxWidth);
        }
        lstW = width.value;
        lstH = height.value;
        lstX = left.value;
        lstY = top.value;
        const lstPagePosition = getPosition(e);
        lstPageX = lstPagePosition[0];
        lstPageY = lstPagePosition[1];
        tmpAspectRatio = aspectRatio.value;
        emit('resize-start', {
            x: left.value,
            y: top.value,
            w: width.value,
            h: height.value
        });
        // document.documentElement.addEventListener('mousemove', resizeHandleDrag)
        // document.documentElement.addEventListener('mouseup', resizeHandleUp)
        addEvent(documentElement, MOVE_HANDLES, resizeHandleDrag);
        addEvent(documentElement, UP_HANDLES, resizeHandleUp);
    };
    onUnmounted(() => {
        // document.documentElement.removeEventListener('mouseup', resizeHandleDrag)
        // document.documentElement.removeEventListener('mousemove', resizeHandleUp)
        removeEvent(documentElement, UP_HANDLES, resizeHandleUp);
        removeEvent(documentElement, MOVE_HANDLES, resizeHandleDrag);
    });
    const handlesFiltered = computed(() => props.resizable ? filterHandles(props.handles) : []);
    return {
        handlesFiltered,
        resizeHandleDown
    };
}
export function watchProps(props, limits) {
    const { setWidth, setHeight, setLeft, setTop } = limits;
    watch(() => props.w, (newVal) => {
        setWidth(newVal);
    });
    watch(() => props.h, (newVal) => {
        setHeight(newVal);
    });
    watch(() => props.x, (newVal) => {
        setLeft(newVal);
    });
    watch(() => props.y, (newVal) => {
        setTop(newVal);
    });
}
//# sourceMappingURL=hooks.js.map