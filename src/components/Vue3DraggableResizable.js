import { defineComponent, h, inject, ref, toRef } from 'vue';
import { initDraggableContainer, initLimitSizeAndMethods, initParent, initResizeHandle, initState, watchProps } from './hooks';
import './index.css';
import { filterHandles, getElSize, IDENTITY } from './utils';
export const ALL_HANDLES = [
    'tl',
    'tm',
    'tr',
    'ml',
    'mr',
    'bl',
    'bm',
    'br'
];
const VdrProps = {
    initW: {
        type: Number,
        default: null
    },
    initH: {
        type: Number,
        default: null
    },
    w: {
        type: Number,
        default: 0
    },
    h: {
        type: Number,
        default: 0
    },
    x: {
        type: Number,
        default: 0
    },
    y: {
        type: Number,
        default: 0
    },
    draggable: {
        type: Boolean,
        default: true
    },
    resizable: {
        type: Boolean,
        default: true
    },
    disabledX: {
        type: Boolean,
        default: false
    },
    disabledY: {
        type: Boolean,
        default: false
    },
    disabledW: {
        type: Boolean,
        default: false
    },
    disabledH: {
        type: Boolean,
        default: false
    },
    minW: {
        type: Number,
        default: 20
    },
    minH: {
        type: Number,
        default: 20
    },
    active: {
        type: Boolean,
        default: false
    },
    parent: {
        type: Boolean,
        default: false
    },
    handles: {
        type: Array,
        default: ALL_HANDLES,
        validator: (handles) => {
            return filterHandles(handles).length === handles.length;
        }
    },
    classNameDraggable: {
        type: String,
        default: 'draggable'
    },
    classNameResizable: {
        type: String,
        default: 'resizable'
    },
    classNameDragging: {
        type: String,
        default: 'dragging'
    },
    classNameResizing: {
        type: String,
        default: 'resizing'
    },
    classNameActive: {
        type: String,
        default: 'active'
    },
    classNameHandle: {
        type: String,
        default: 'handle'
    },
    lockAspectRatio: {
        type: Boolean,
        default: false
    },
    parentScaleX: {
        type: Number,
        default: 1
    },
    parentScaleY: {
        type: Number,
        default: 1
    },
    triggerKey: {
        type: String,
        default: 'left'
    },
    preventDeactivated: {
        type: Boolean,
        default: false,
    }
};
const emits = [
    'activated',
    'deactivated',
    'drag-start',
    'resize-start',
    'dragging',
    'resizing',
    'drag-end',
    'resize-end',
    'update:w',
    'update:h',
    'update:x',
    'update:y',
    'update:active'
];
const VueDraggableResizable = defineComponent({
    name: 'Vue3DraggableResizable',
    props: VdrProps,
    emits: emits,
    setup(props, { emit }) {
        const containerProps = initState(props, emit);
        const provideIdentity = inject('identity');
        let containerProvider = null;
        if (provideIdentity === IDENTITY) {
            containerProvider = {
                updatePosition: inject('updatePosition'),
                getPositionStore: inject('getPositionStore'),
                disabled: inject('disabled'),
                adsorbParent: inject('adsorbParent'),
                adsorbCols: inject('adsorbCols'),
                adsorbRows: inject('adsorbRows'),
                setMatchedLine: inject('setMatchedLine')
            };
        }
        const containerRef = ref();
        const parentSize = initParent(containerRef);
        const limitProps = initLimitSizeAndMethods(props, parentSize, containerProps);
        initDraggableContainer(containerRef, containerProps, limitProps, toRef(props, 'draggable'), emit, containerProvider, parentSize);
        const resizeHandle = initResizeHandle(containerProps, limitProps, parentSize, props, emit);
        watchProps(props, limitProps);
        return {
            containerRef,
            containerProvider,
            ...containerProps,
            ...parentSize,
            ...limitProps,
            ...resizeHandle
        };
    },
    computed: {
        style() {
            return {
                width: this.width + 'px',
                height: this.height + 'px',
                top: this.top + 'px',
                left: this.left + 'px'
            };
        },
        klass() {
            return {
                [this.classNameActive]: this.enable,
                [this.classNameDragging]: this.dragging,
                [this.classNameResizing]: this.resizing,
                [this.classNameDraggable]: this.draggable,
                [this.classNameResizable]: this.resizable
            };
        }
    },
    mounted() {
        if (!this.containerRef)
            return;
        this.containerRef.ondragstart = () => false;
        const { width, height } = getElSize(this.containerRef);
        this.setWidth(this.initW === null ? this.w || width : this.initW);
        this.setHeight(this.initH === null ? this.h || height : this.initH);
        if (this.containerProvider) {
            this.containerProvider.updatePosition(this.id, {
                x: this.left,
                y: this.top,
                w: this.width,
                h: this.height
            });
        }
    },
    render() {
        return h('div', {
            ref: 'containerRef',
            class: ['vdr-container', this.klass],
            style: this.style
        }, [
            this.$slots.default && this.$slots.default(),
            ...this.handlesFiltered.map((item) => h('div', {
                class: [
                    'vdr-handle',
                    'vdr-handle-' + item,
                    this.classNameHandle,
                    `${this.classNameHandle}-${item}`
                ],
                style: { display: this.enable ? 'block' : 'none' },
                onMousedown: (e) => this.resizeHandleDown(e, item),
                onTouchstart: (e) => this.resizeHandleDown(e, item)
            }))
        ]);
    }
});
export default VueDraggableResizable;
//# sourceMappingURL=Vue3DraggableResizable.js.map