import VueDraggableResizable from './components/Vue3DraggableResizable';
import DraggableContainer from './components/DraggableContainer';
VueDraggableResizable.install = (app) => {
    app.component(VueDraggableResizable.name, VueDraggableResizable);
    app.component(DraggableContainer.name, DraggableContainer);
    return app;
};
export { default as DraggableContainer } from './components/DraggableContainer';
export default VueDraggableResizable;
//# sourceMappingURL=index.js.map