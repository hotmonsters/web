import type { CSSProperties } from "react";

import Icon from "./icon";

interface ScrollAffordanceProps {
  direction?: "up" | "down";
  onClick?: () => void;
}

const style: CSSProperties = {
  color: "#999",
  width: "100%",
  textAlign: "center"
};

const ScrollAffordance = ({
  direction = "down",
  onClick
}: ScrollAffordanceProps) => (
  <div className="scroll-affordance" onClick={onClick}>
    <Icon name={`angle-double-${direction}`} size="2x" style={style} />
  </div>
);

export default ScrollAffordance;
