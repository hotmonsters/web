import type { CSSProperties } from "react";

interface IconProps {
  name: string;
  size?: "lg" | "2x" | "3x";
  style?: CSSProperties;
}

const Icon = ({ name, size, style }: IconProps) => {
  const cx = ["fa", `fa-${name}`];
  if (size) {
    cx.push(`fa-${size}`);
  }

  return <i className={cx.join(" ")} style={style} aria-hidden="true" />;
};

export default Icon;
