"use client";

import { useEffect, useRef } from "react";

export default function Cursor() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let mx = 0, my = 0, cx = 0, cy = 0;
    let frame: number;

    const onMove = (e: MouseEvent) => { mx = e.clientX; my = e.clientY; };
    const loop = () => {
      cx += (mx - cx) * 0.18;
      cy += (my - cy) * 0.18;
      el.style.left = cx + "px";
      el.style.top = cy + "px";
      frame = requestAnimationFrame(loop);
    };

    const onOver = (e: MouseEvent) => {
      if ((e.target as Element).closest("a, [data-hover], .skill, .project")) {
        el.classList.add("hover");
      }
    };
    const onOut = (e: MouseEvent) => {
      if ((e.target as Element).closest("a, [data-hover], .skill, .project")) {
        el.classList.remove("hover");
      }
    };

    document.addEventListener("mousemove", onMove);
    document.addEventListener("mouseover", onOver);
    document.addEventListener("mouseout", onOut);
    frame = requestAnimationFrame(loop);

    return () => {
      document.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseover", onOver);
      document.removeEventListener("mouseout", onOut);
      cancelAnimationFrame(frame);
    };
  }, []);

  return <div className="cursor" ref={ref} />;
}
