import * as React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import VisGraphProvicer, { VisGraph } from "./../index";
import { data } from "./data";

describe("Renders react-vis-hooks", () => {
  test("Render provider", async () => {
    const { asFragment } = render(
      <VisGraphProvicer graph={data}>
        <VisGraph />
      </VisGraphProvicer>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
