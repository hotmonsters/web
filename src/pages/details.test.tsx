import { act, render, screen } from "@testing-library/react";
import { MemoryRouter, Routes, Route } from "react-router-dom";

import Details from "./details";

const renderDetails = () =>
  render(
    <MemoryRouter
      initialEntries={["/details"]}
      future={{ v7_startTransition: true, v7_relativeSplatPath: true }}
    >
      <Routes>
        <Route path="/" element={<p>home page</p>} />
        <Route path="/details" element={<Details />} />
      </Routes>
    </MemoryRouter>
  );

it("renders the title card with menagerie link", () => {
  renderDetails();
  expect(screen.getByText("HOTMONSTERS.ORG")).toBeInTheDocument();
  expect(screen.getByText("the menagerie")).toHaveAttribute(
    "href", "/monsteragerie"
  );
});

it("navigates home on wheel up", () => {
  renderDetails();
  act(() => {
    window.dispatchEvent(new WheelEvent("wheel", { deltaY: -100 }));
  });
  expect(screen.getByText("home page")).toBeInTheDocument();
});
