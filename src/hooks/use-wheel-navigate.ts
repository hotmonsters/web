import { useEffect, useRef } from "react";

export function useWheelNavigate(
  direction: "up" | "down",
  onNavigate: () => void
): void {
  const callbackRef = useRef(onNavigate);
  callbackRef.current = onNavigate;

  useEffect(() => {
    let lastFired = 0;

    const handleWheel = (event: WheelEvent) => {
      const wheelingDown = event.deltaY > 0;
      if ((direction === "down") !== wheelingDown) {
        return;
      }

      const now = Date.now();
      if (now - lastFired < 1000) {
        return;
      }
      lastFired = now;

      callbackRef.current();
    };

    window.addEventListener("wheel", handleWheel);
    return () => window.removeEventListener("wheel", handleWheel);
  }, [direction]);
}
