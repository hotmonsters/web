import { render, fireEvent } from "@testing-library/react";

import MonsterEditor from "./monster-editor";

it("renders one input per line with matching values", () => {
  const { container } = render(
    <MonsterEditor lines={["AB", "DC"]} onMonsterUpdate={vi.fn()} />
  );
  const inputs = container.querySelectorAll("input");
  expect(inputs).toHaveLength(2);
  expect(inputs[0]).toHaveValue("AB");
  expect(inputs[1]).toHaveValue("DC");
});

it("reports edits without mutating the given lines", () => {
  const lines = ["AB", "DC"];
  const onMonsterUpdate = vi.fn();
  const { container } = render(
    <MonsterEditor lines={lines} onMonsterUpdate={onMonsterUpdate} />
  );
  fireEvent.change(container.querySelectorAll("input")[1], {
    target: { value: "DCX" }
  });
  expect(onMonsterUpdate).toHaveBeenCalledWith(["AB", "DCX"]);
  expect(lines).toEqual(["AB", "DC"]);
});

it("adds and removes rows", () => {
  const onMonsterUpdate = vi.fn();
  const { getByText } = render(
    <MonsterEditor lines={["AB"]} onMonsterUpdate={onMonsterUpdate} />
  );
  fireEvent.click(getByText("+"));
  expect(onMonsterUpdate).toHaveBeenCalledWith(["AB", ""]);
  fireEvent.click(getByText("-"));
  expect(onMonsterUpdate).toHaveBeenCalledWith([]);
});

it("applies the plaintext class when requested", () => {
  const { container } = render(
    <MonsterEditor
      lines={["AB"]}
      onMonsterUpdate={vi.fn()}
      plaintext
    />
  );
  expect(container.querySelector("input")).toHaveClass("plaintext");
});
