import { Actions } from "./vis.actions";
import { ContextState } from "./context";
import React from "react";
import { Network, DataSetEdges, DataSetNodes } from "vis-network/standalone";

export type Action = {
  type: Actions;
  ref: React.MutableRefObject<HTMLDivElement>;
  network: Network;
  edges: DataSetEdges;
  nodes: DataSetNodes;
};

export const initState = {
  refNode: null,
  network: null,
  nodes: {} as DataSetNodes,
  edges: {} as DataSetEdges,
  options: {}
};

export const VisReducer = (
  state: ContextState,
  action: Action
): ContextState => {
  switch (action.type) {
    case Actions.ADD_REF: {
      return {
        ...state,
        refNode: action.ref
      };
    }
    case Actions.ADD_NETWORK: {
      return {
        ...state,
        network: action.network
      };
    }
    case Actions.ADD_NEW_DATA: {
      return {
        ...state,
        nodes: action.nodes,
        edges: action.edges
      };
    }
    default: {
      return state;
    }
  }
};
