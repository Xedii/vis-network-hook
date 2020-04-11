import React from "react";
import { Options, Network, DataSetEdges, DataSetNodes } from "vis-network/standalone";
import { VisActions } from "./vis.actions";
export declare type ContextState = {
    network: null | Network;
    refNode: null | React.MutableRefObject<HTMLDivElement>;
    nodes: DataSetNodes;
    edges: DataSetEdges;
    options: Options;
};
export declare type ContextProps = {
    state: ContextState;
    actions: VisActions;
};
declare const VisContext: React.Context<ContextProps>;
export default VisContext;
