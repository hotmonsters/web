import { Children, useEffect, useRef } from "react";
import type { ReactNode } from "react";
import Packery from "packery";

interface PackedListProps {
  className?: string;
  children: ReactNode;
}

const PackedList = ({ className, children }: PackedListProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const packeryRef = useRef<Packery | null>(null);

  useEffect(() => {
    if (!containerRef.current) {
      return;
    }
    packeryRef.current = new Packery(containerRef.current, {});
    return () => {
      packeryRef.current?.destroy();
      packeryRef.current = null;
    };
  }, []);

  const childCount = Children.count(children);
  useEffect(() => {
    const timer = setTimeout(() => {
      packeryRef.current?.reloadItems();
      packeryRef.current?.layout();
    }, 1000);
    return () => clearTimeout(timer);
  }, [childCount]);

  return (
    <div ref={containerRef} className={className}>
      {children}
    </div>
  );
};

export default PackedList;
