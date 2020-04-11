import { Network, Edge, Node } from "vis-network/standalone";
import * as vis from "vis-network/standalone/esm/vis-network";

export enum Actions {
  ADD_REF,
  ADD_NETWORK,
  ADD_NEW_DATA
}
export type networkData = {
  edges: Edge[];
  nodes: Node[];
};

export type VisActions = {
  addRef(ref: React.MutableRefObject<HTMLDivElement>): void;
  addNetwork(network: Network): void;
  addNewData(data: networkData): void;
};

export const useAllVisActions = (dispatch: Function) => {
  const addRef = (ref: React.MutableRefObject<HTMLDivElement>) => {
    dispatch({
      type: Actions.ADD_REF,
      ref: ref
    });
  };

  const addNetwork = (network: Network) => {
    dispatch({
      type: Actions.ADD_NETWORK,
      network
    });
  };

  const addNewData = (data: networkData) => {
    dispatch({
      type: Actions.ADD_NEW_DATA,
      edges: new vis.DataSet(data.edges),
      nodes: new vis.DataSet(data.nodes)
    });
  };

  return {
    addRef,
    addNetwork,
    addNewData
  };
};
