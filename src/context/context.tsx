import React, { createContext } from "react";
import {
  Options,
  Network,
  DataSetEdges,
  DataSetNodes
} from "vis-network/standalone";

import { useAllVisActions, VisActions } from "./vis.actions";

export type ContextState = {
  network: null | Network;
  refNode: null | React.MutableRefObject<HTMLDivElement>;
  nodes: DataSetNodes;
  edges: DataSetEdges;
  options: Options;
};

export type ContextProps = {
  state: ContextState;
  actions: VisActions;
};

const VisContext = createContext<ContextProps>({
  state: {
    refNode: null,
    network: {} as Network,
    nodes: {} as DataSetNodes,
    edges: {} as DataSetEdges,
    options: {}
  },
  actions: { ...useAllVisActions(() => {}) }
});

export default VisContext;
