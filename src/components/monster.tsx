import type { CSSProperties } from "react";

interface MonsterProps {
  lines: string[];
  className?: string;
}

const lineStyle: CSSProperties = {
  fontFamily: "monsters",
  letterSpacing: "-1px",
  lineHeight: "100%",
  margin: "0px",
  textAlign: "left"
};

const Monster = ({ lines, className }: MonsterProps) => {
  const classNames = ["monster", "no-select"];
  if (className) {
    classNames.push(className);
  }

  return (
    <div className={classNames.join(" ")}>
      <div>
        {lines.map((line, index) => (
          <pre key={index} style={lineStyle}>{line}</pre>
        ))}
      </div>
    </div>
  );
};

export default Monster;
