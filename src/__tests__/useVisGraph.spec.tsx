import * as React from "react";
import { renderHook } from "@testing-library/react-hooks";

import "@testing-library/jest-dom/extend-expect";
import VisGraphProvicer, { useVis } from "../";
import { data, updatedData } from "./data";

describe("react-vis-hooks", () => {
  it("react-vis-hooks with one Provider and minimum needed options", () => {
    let providerData = { ...data };

    const wrapper = ({ children }: any) => (
      <VisGraphProvicer graph={providerData}>{children}</VisGraphProvicer>
    );
    const { result, rerender } = renderHook(() => useVis(), { wrapper });
    providerData = { ...updatedData };
    rerender();

    const combineResults = {
      edges: result.current.edges.get(),
      nodes: result.current.nodes.get(),
    };
    expect(combineResults).toStrictEqual(updatedData);
  });

  it("react-vis-hooks with one Provider and minimum needed options", () => {
    const wrapper = ({ children }: any) => (
      <VisGraphProvicer graph={data}>{children}</VisGraphProvicer>
    );

    const { result } = renderHook(() => useVis(), { wrapper });

    const combineResults = {
      edges: result.current.edges.get(),
      nodes: result.current.nodes.get(),
    };
    expect(combineResults).toStrictEqual(data);
  });

  it("react-vis-hooks check network", () => {
    const wrapper = ({ children }: any) => (
      <VisGraphProvicer graph={data}>{children}</VisGraphProvicer>
    );

    const { result } = renderHook(() => useVis(), { wrapper });

    expect(result.current.network).toBeNull();
  });

  it("react-vis-hooks check network", () => {
    const wrapper = ({ children }: any) => (
      <VisGraphProvicer graph={data}>{children}</VisGraphProvicer>
    );

    const { result } = renderHook(() => useVis(), { wrapper });

    expect(result.current.refNode).toBeNull();
  });
});
