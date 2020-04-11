import { FC } from "react";
import { Options, Node, Edge } from "vis-network/standalone";
declare type Props = {
    graph: {
        edges: Edge[];
        nodes: Node[];
    };
    options?: Options;
};
export declare const VisProvider: FC<Props>;
export {};
