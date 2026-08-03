import { renderHook } from "@testing-library/react";

import { useWheelNavigate } from "./use-wheel-navigate";

const wheel = (deltaY: number) =>
  window.dispatchEvent(new WheelEvent("wheel", { deltaY }));

beforeEach(() => {
  vi.useFakeTimers();
});

afterEach(() => {
  vi.useRealTimers();
});

it("fires when wheeling in the watched direction", () => {
  const onNavigate = vi.fn();
  renderHook(() => useWheelNavigate("down", onNavigate));
  wheel(100);
  expect(onNavigate).toHaveBeenCalledTimes(1);
});

it("ignores the opposite direction", () => {
  const onNavigate = vi.fn();
  renderHook(() => useWheelNavigate("down", onNavigate));
  wheel(-100);
  expect(onNavigate).not.toHaveBeenCalled();
});

it("throttles to once per second", () => {
  const onNavigate = vi.fn();
  renderHook(() => useWheelNavigate("up", onNavigate));
  wheel(-100);
  wheel(-100);
  expect(onNavigate).toHaveBeenCalledTimes(1);
  vi.advanceTimersByTime(1001);
  wheel(-100);
  expect(onNavigate).toHaveBeenCalledTimes(2);
});

it("removes the listener on unmount", () => {
  const onNavigate = vi.fn();
  const { unmount } = renderHook(() =>
    useWheelNavigate("down", onNavigate)
  );
  unmount();
  wheel(100);
  expect(onNavigate).not.toHaveBeenCalled();
});
