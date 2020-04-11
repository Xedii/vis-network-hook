import React, { useContext, FC, useLayoutEffect, useRef } from "react";
import * as vis from "vis-network/standalone/esm/vis-network";

import VisContext from "./context/context";

type Props = {
  styles?: React.CSSProperties;
  id?: string;
  className?: string;
};

export const VisGraph: FC<Props> = ({ styles, id, className }) => {
  const ref = useRef() as React.MutableRefObject<HTMLDivElement>;
  const {
    state: { nodes, edges, refNode, options },
    actions: { addRef, addNetwork },
  } = useContext(VisContext);

  useLayoutEffect(() => {
    try {
      addRef(ref);

      if (!ref.current) {
        return;
      }
      addNetwork(new vis.Network(ref.current, { nodes, edges }, options));
    } catch (error) {
      console.error(error);
    }
  }, [nodes, edges]);

  return (
    <div id={id} className={className} style={styles} ref={refNode || ref} />
  );
};
