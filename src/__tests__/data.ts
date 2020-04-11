export const data = {
  nodes: [
    { id: 1, label: "Node 1" },
    { id: 2, label: "Node 2" },
    { id: 3, label: "Node 3" },
    { id: 4, label: "Node 4" },
    { id: 5, label: "Node 5" }
  ],
  edges: [
    { from: 1, to: 2, id: "edge-1" },
    { from: 1, to: 3, id: "edge-2" },
    { from: 2, to: 4, id: "edge-3" },
    { from: 2, to: 5, id: "edge-4" }
  ]
};

export const updatedData = {
  nodes: [
    { id: 1, label: "Node 1" },
    { id: 2, label: "Node 2" },
    { id: 3, label: "Node 3" },
    { id: 4, label: "Node 4" },
    { id: 5, label: "Node 5" },
    { id: 6, label: "Node 6" }
  ],
  edges: [
    { from: 1, to: 2, id: "edge-1" },
    { from: 1, to: 3, id: "edge-2" },
    { from: 2, to: 4, id: "edge-3" },
    { from: 2, to: 5, id: "edge-4" },
    { from: 1, to: 5, id: "edge-5" }
  ]
};
