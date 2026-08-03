import { render, fireEvent, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

import Editor from "./editor";

const renderEditor = () =>
  render(
    <MemoryRouter
      future={{ v7_startTransition: true, v7_relativeSplatPath: true }}
    >
      <Editor />
    </MemoryRouter>
  );

beforeEach(() => {
  localStorage.clear();
});

it("starts with four empty rows and a live preview", () => {
  const { container } = renderEditor();
  const inputs = container.querySelectorAll(".monster-editor input");
  expect(inputs).toHaveLength(4);

  fireEvent.change(inputs[0], { target: { value: "AaB" } });
  const preview = container.querySelector(".preview .monster pre");
  expect(preview).toHaveTextContent("AaB");
});

it("persists the draft to localStorage and restores it", () => {
  const { container, unmount } = renderEditor();
  fireEvent.change(
    container.querySelectorAll(".monster-editor input")[0],
    { target: { value: "AaB" } }
  );
  fireEvent.change(screen.getByPlaceholderText("name"), {
    target: { value: "gnick" }
  });
  unmount();

  const { container: fresh } = renderEditor();
  expect(
    fresh.querySelectorAll(".monster-editor input")[0]
  ).toHaveValue("AaB");
  expect(screen.getByPlaceholderText("name")).toHaveValue("gnick");
});

it("shows the pending note instead of saving", () => {
  renderEditor();
  fireEvent.click(screen.getByText("save"));
  expect(
    screen.getByText(/submissions are waking back up/)
  ).toBeInTheDocument();
});

it("links back to the menagerie and shows the guide", () => {
  const { container } = renderEditor();
  expect(screen.getByText("back to safety")).toBeInTheDocument();
  expect(
    container.querySelectorAll(".guide-glyph").length
  ).toBeGreaterThan(0);
});
