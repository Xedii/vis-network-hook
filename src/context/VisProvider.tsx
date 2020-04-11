import React, { useReducer, FC, useEffect, useMemo } from "react";
import {
  VisReducer,
  initState as AllVisInitState,
  Action as AllVisAction,
} from "./vis.reducer";
import { Options, Node, Edge } from "vis-network/standalone";
import * as vis from "vis-network/standalone/esm/vis-network";

import { useAllVisActions } from "./vis.actions";
import VisContext, { ContextState } from "./context";

type Props = {
  graph: {
    edges: Edge[];
    nodes: Node[];
  };
  options?: Options;
};

const initialState = (initData: Props): ContextState => ({
  ...AllVisInitState,
  nodes: new vis.DataSet(initData.graph.nodes),
  edges: new vis.DataSet(initData.graph.edges),
  options: initData.options || {},
});

const mainReducer = (allVis: ContextState, action: AllVisAction) => ({
  ...VisReducer(allVis, action),
});

export const VisProvider: FC<Props> = ({ children, ...rest }) => {
  const [contextState, dispatch] = useReducer(mainReducer, initialState(rest));
  const allVisActions = useAllVisActions(dispatch);

  const contextValue = useMemo(
    () => ({ state: contextState, actions: allVisActions }),
    [contextState]
  );

  useEffect(() => {
    allVisActions.addNewData(rest.graph);
  }, [rest.graph]);

  return (
    <VisContext.Provider value={contextValue}>{children}</VisContext.Provider>
  );
};
