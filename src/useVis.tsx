import { useContext } from "react";

import VisContext from "./context/context";

export function useVis() {
  const {
    state: { nodes, edges, network, refNode },
  } = useContext(VisContext);
  return { nodes, edges, network, refNode };
}
