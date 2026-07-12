import { Children, cloneElement, isValidElement, useEffect, type ReactNode } from "react";
import { useDragSlider } from "../../hooks/useDragSlider";
import styles from "./Slider.module.css";

interface SliderProps {
  children: ReactNode;
  className?: string;
  speed?: number;
  /** When set, auto-slide loops continuously in this direction instead of bouncing. */
  direction?: "left" | "right";
  /** Reports the index of the original (non-duplicated) child nearest the track's center. */
  onCenterChange?: (index: number) => void;
}

/**
 * Total render passes of the item set when looping. The browser clamps
 * scrollLeft to scrollWidth - clientWidth, so with only one duplicate
 * (2 copies) a short item set on a wide viewport can have a wrap point
 * the browser will never let scrollLeft reach, freezing the auto-slide.
 * More copies give enough scrollable room to always reach the wrap point.
 */
const LOOP_COPIES = 4;

function Slider({ children, className, speed, direction, onCenterChange }: SliderProps) {
  const loop = direction !== undefined;
  const trackRef = useDragSlider({
    speed,
    direction: direction === "right" ? -1 : 1,
    loop,
    copies: loop ? LOOP_COPIES : 1,
  });

  const items = Children.toArray(children);
  const itemCount = items.length;

  useEffect(() => {
    if (!onCenterChange) return;
    const el = trackRef.current;
    if (!el) return;

    let rafId = 0;
    const measure = () => {
      rafId = 0;
      const trackRect = el.getBoundingClientRect();
      const center = trackRect.left + trackRect.width / 2;
      let closestIndex = 0;
      let closestDist = Infinity;
      Array.from(el.children)
        .slice(0, itemCount)
        .forEach((child, index) => {
          const rect = (child as HTMLElement).getBoundingClientRect();
          const dist = Math.abs(rect.left + rect.width / 2 - center);
          if (dist < closestDist) {
            closestDist = dist;
            closestIndex = index;
          }
        });
      onCenterChange(closestIndex);
    };

    const onScroll = () => {
      if (rafId) return;
      rafId = requestAnimationFrame(measure);
    };

    measure();
    el.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      el.removeEventListener("scroll", onScroll);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, [onCenterChange, itemCount, trackRef]);

  return (
    <div ref={trackRef} className={`${styles.track} ${className ?? ""}`}>
      {items}
      {loop &&
        Array.from({ length: LOOP_COPIES - 1 }).flatMap((_, copyIndex) =>
          items.map((child, index) =>
            isValidElement(child) ? cloneElement(child, { key: `dup-${copyIndex}-${index}` }) : child,
          ),
        )}
    </div>
  );
}

export default Slider;
