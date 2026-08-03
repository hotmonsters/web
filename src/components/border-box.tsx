import type { ReactNode } from "react";

interface BorderBoxProps {
  className: string;
  thickBorder?: boolean;
  children?: ReactNode;
}

const BorderBox = ({
  className,
  thickBorder,
  children
}: BorderBoxProps) => {
  const cx = [`${className}-wrapper`, "border-box-wrapper"];
  if (thickBorder) {
    cx.push("thick");
  }

  return (
    <div className={cx.join(" ")}>
      <div className={className}>
        {children}
      </div>
    </div>
  );
};

export default BorderBox;
