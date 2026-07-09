import { useEffect, useRef } from "react";

interface UseDragSliderOptions {
  speed?: number;
  resumeDelay?: number;
  /** 1 slides content leftward, -1 slides content rightward. */
  direction?: 1 | -1;
  /** Loops continuously in one direction over doubled content instead of bouncing. */
  loop?: boolean;
}

export function useDragSlider({
  speed = 40,
  resumeDelay = 2500,
  direction: initialDirection = 1,
  loop = false,
}: UseDragSliderOptions = {}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let direction = initialDirection;
    let rafId = 0;
    let lastTime = 0;
    let paused = false;
    let isDragging = false;
    let startX = 0;
    let startScrollLeft = 0;
    let resumeTimeout: ReturnType<typeof setTimeout> | undefined;

    const loopWidth = loop ? el.scrollWidth / 2 : 0;
    if (loop && direction === -1) {
      el.scrollLeft = loopWidth;
    }

    const tick = (time: number) => {
      if (!lastTime) lastTime = time;
      const dt = time - lastTime;
      lastTime = time;

      if (!paused && !isDragging) {
        if (loop && loopWidth > 0) {
          el.scrollLeft += direction * speed * (dt / 1000);
          if (el.scrollLeft >= loopWidth) {
            el.scrollLeft -= loopWidth;
          } else if (el.scrollLeft <= 0) {
            el.scrollLeft += loopWidth;
          }
        } else {
          const max = el.scrollWidth - el.clientWidth;
          if (max > 0) {
            el.scrollLeft += direction * speed * (dt / 1000);
            if (el.scrollLeft >= max) {
              el.scrollLeft = max;
              direction = -1;
            } else if (el.scrollLeft <= 0) {
              el.scrollLeft = 0;
              direction = 1;
            }
          }
        }
      }
      rafId = requestAnimationFrame(tick);
    };
    rafId = requestAnimationFrame(tick);

    const pause = () => {
      paused = true;
      if (resumeTimeout) clearTimeout(resumeTimeout);
    };

    const scheduleResume = () => {
      if (resumeTimeout) clearTimeout(resumeTimeout);
      resumeTimeout = setTimeout(() => {
        paused = false;
      }, resumeDelay);
    };

    const onPointerDown = (e: PointerEvent) => {
      isDragging = true;
      startX = e.clientX;
      startScrollLeft = el.scrollLeft;
      el.setPointerCapture(e.pointerId);
      el.style.cursor = "grabbing";
      el.style.userSelect = "none";
      pause();
    };

    const onPointerMove = (e: PointerEvent) => {
      if (!isDragging) return;
      e.preventDefault();
      el.scrollLeft = startScrollLeft - (e.clientX - startX);
    };

    const endDrag = (e: PointerEvent) => {
      if (!isDragging) return;
      isDragging = false;
      el.style.cursor = "grab";
      el.style.userSelect = "";
      try {
        el.releasePointerCapture(e.pointerId);
      } catch {
        // pointer capture may already be released
      }
      scheduleResume();
    };

    const onPointerEnter = () => pause();
    const onPointerLeave = (e: PointerEvent) => {
      if (!isDragging) scheduleResume();
      else endDrag(e);
    };

    el.style.cursor = "grab";
    el.addEventListener("pointerdown", onPointerDown);
    el.addEventListener("pointermove", onPointerMove);
    el.addEventListener("pointerup", endDrag);
    el.addEventListener("pointercancel", endDrag);
    el.addEventListener("pointerenter", onPointerEnter);
    el.addEventListener("pointerleave", onPointerLeave);

    return () => {
      cancelAnimationFrame(rafId);
      if (resumeTimeout) clearTimeout(resumeTimeout);
      el.removeEventListener("pointerdown", onPointerDown);
      el.removeEventListener("pointermove", onPointerMove);
      el.removeEventListener("pointerup", endDrag);
      el.removeEventListener("pointercancel", endDrag);
      el.removeEventListener("pointerenter", onPointerEnter);
      el.removeEventListener("pointerleave", onPointerLeave);
    };
  }, [speed, resumeDelay, initialDirection, loop]);

  return ref;
}
