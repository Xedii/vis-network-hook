/// <reference types="react" />
export declare function useVis(): {
    nodes: import("vis-network/standalone").DataSetNodes;
    edges: import("vis-network/standalone").DataSetEdges;
    network: import("vis-network/standalone").Network | null;
    refNode: import("react").MutableRefObject<HTMLDivElement> | null;
};
