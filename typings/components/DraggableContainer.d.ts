declare const _default: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    adsorbParent: {
        type: BooleanConstructor;
        default: boolean;
    };
    adsorbCols: {
        type: ArrayConstructor;
        default: null;
    };
    adsorbRows: {
        type: ArrayConstructor;
        default: null;
    };
    referenceLineVisible: {
        type: BooleanConstructor;
        default: boolean;
    };
    referenceLineColor: {
        type: StringConstructor;
        default: string;
    };
}>, {
    matchedRows: import("vue").ComputedRef<number[]>;
    matchedCols: import("vue").ComputedRef<number[]>;
}, {}, {}, {
    renderReferenceLine(): import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>[];
}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    adsorbParent: {
        type: BooleanConstructor;
        default: boolean;
    };
    adsorbCols: {
        type: ArrayConstructor;
        default: null;
    };
    adsorbRows: {
        type: ArrayConstructor;
        default: null;
    };
    referenceLineVisible: {
        type: BooleanConstructor;
        default: boolean;
    };
    referenceLineColor: {
        type: StringConstructor;
        default: string;
    };
}>> & Readonly<{}>, {
    disabled: boolean;
    adsorbParent: boolean;
    adsorbCols: unknown[];
    adsorbRows: unknown[];
    referenceLineVisible: boolean;
    referenceLineColor: string;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
export default _default;
