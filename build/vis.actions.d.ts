/// <reference types="react" />
import { Network, Edge, Node } from "vis-network/standalone";
export declare enum Actions {
    ADD_REF = 0,
    ADD_NETWORK = 1,
    ADD_NEW_DATA = 2
}
export declare type networkData = {
    edges: Edge[];
    nodes: Node[];
};
export declare type VisActions = {
    addRef(ref: React.MutableRefObject<HTMLDivElement>): void;
    addNetwork(network: Network): void;
    addNewData(data: networkData): void;
};
export declare const useAllVisActions: (dispatch: Function) => {
    addRef: (ref: import("react").MutableRefObject<HTMLDivElement>) => void;
    addNetwork: (network: Network) => void;
    addNewData: (data: networkData) => void;
};
