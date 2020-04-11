# React vis.js hooks

React vis network wrapper

## Demo

[![Edit jovial-bell-3q37x](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/jovial-bell-3q37x?fontsize=14&hidenavigation=1&theme=dark)

## Installation

```
npm i -s vis-network-hook
```

### Peer dependencies

This package depends on the following peer dependencies:

```
  "react": "^16.8.1"
  "react-dom": "^16.8.1"
```

## Usage

First you have to wrap your app with the Provider which has the graph and optional- properties:

```
import * as React from "react";
import VisProvider, { VisGraph } from "vis-network-hook";

const basic = () => {
  const data = {
    nodes: [
      { id: 1, label: "Node 1" },
      { id: 2, label: "Node 2" },
      { id: 3, label: "Node 3" },
      { id: 4, label: "Node 4" },
      { id: 5, label: "Node 5" }
    ],
    edges: [
      { from: 1, to: 3 },
      { from: 1, to: 2 },
      { from: 2, to: 4 },
      { from: 2, to: 5 },
      { from: 3, to: 3 }
    ]
  };

  return (
    <VisProvider graph={data}>
      <VisGraph />
    </VisProvider>
  );
};
```

You have also access to all propertis from `vis.js`!

```
import React from "react";
import VisProvider from "vis-network-hook";
import Graph from "./Graph";

const basic = () => {
  const data = {
    nodes: [
      { id: 1, label: "Node 1" },
      { id: 2, label: "Node 2" },
      { id: 3, label: "Node 3" },
      { id: 4, label: "Node 4" },
      { id: 5, label: "Node 5" }
    ],
    edges: [
      { from: 1, to: 3 },
      { from: 1, to: 2 },
      { from: 2, to: 4 },
      { from: 2, to: 5 },
      { from: 3, to: 3 }
    ]
  };

  return (
    <VisProvider graph={data}>
      <Graph />
    </VisProvider>
  );
};
```

Then it is necessary to import the useVis hook. It provides an opportunity to use `vis.js` properties:

```
// Graph.js
import React from 'react'
import { VisGraph, useVis } from "vis-network-hook";

const Graph = () => {
  const { edges, nodes, network } = useVis(); // we can use all of vis.js operations

  return (
    <VisGraph />
  )
}

export default Graph
```

## Options

You can pass the following options as props to `Provider`:

```
type Props = {
  graph: {
    edges: Edge[]; // https://visjs.github.io/vis-network/docs/network/edges.html#
    nodes: Node[]; // https://visjs.github.io/vis-network/docs/network/nodes.html#
  };
  options?: Options; // https://visjs.github.io/vis-network/docs/network/#options
};
```

`VisGraph` :

```
type Props = {
  styles?: React.CSSProperties;
  id?: string;
  className?: string;
};
```

## Built With

- [vis.js](https://visjs.org/) - A dynamic, browser-based visualization library.

## Version: 0.4.1

## Author

- **Michał Mrotek** - _Initial work_

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details
