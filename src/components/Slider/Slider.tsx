import { Children, cloneElement, isValidElement, type ReactNode } from "react";
import { useDragSlider } from "../../hooks/useDragSlider";
import styles from "./Slider.module.css";

interface SliderProps {
  children: ReactNode;
  className?: string;
  speed?: number;
  /** When set, auto-slide loops continuously in this direction instead of bouncing. */
  direction?: "left" | "right";
}

function Slider({ children, className, speed, direction }: SliderProps) {
  const loop = direction !== undefined;
  const trackRef = useDragSlider({
    speed,
    direction: direction === "right" ? -1 : 1,
    loop,
  });

  const items = Children.toArray(children);

  return (
    <div ref={trackRef} className={`${styles.track} ${className ?? ""}`}>
      {items}
      {loop &&
        items.map((child, index) =>
          isValidElement(child) ? cloneElement(child, { key: `dup-${index}` }) : child,
        )}
    </div>
  );
}

export default Slider;
