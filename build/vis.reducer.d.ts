import { Actions } from "./vis.actions";
import { ContextState } from "./context";
import React from "react";
import { Network, DataSetEdges, DataSetNodes } from "vis-network/standalone";
export declare type Action = {
    type: Actions;
    ref: React.MutableRefObject<HTMLDivElement>;
    network: Network;
    edges: DataSetEdges;
    nodes: DataSetNodes;
};
export declare const initState: {
    refNode: null;
    network: null;
    nodes: DataSetNodes;
    edges: DataSetEdges;
    options: {};
};
export declare const VisReducer: (state: ContextState, action: Action) => ContextState;
