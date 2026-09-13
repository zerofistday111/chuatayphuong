import { useEffect, useRef } from "react";

const POOL = 8;

export function RippleCanvas() {
  const layerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const layer = layerRef.current;
    if (!layer) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;

    const pool: HTMLSpanElement[] = [];
    for (let i = 0; i < POOL; i++) {
      const el = document.createElement("span");
      el.className = "wave";
      layer.appendChild(el);
      pool.push(el);
    }

    let n = 0;
    let last = 0;

    function spawn(x: number, y: number, strong = false) {
      const el = pool[n % POOL];
      n += 1;
      el.classList.remove("go", "go-strong");
      el.style.left = `${x}px`;
      el.style.top = `${y}px`;
      void el.offsetWidth;
      el.classList.add(strong ? "go-strong" : "go");
    }

    const onMove = (e: PointerEvent) => {
      const now = performance.now();
      if (now - last < 42) return;
      last = now;
      spawn(e.clientX, e.clientY, false);
    };

    const onDown = (e: PointerEvent) => {
      spawn(e.clientX, e.clientY, true);
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    window.addEventListener("pointerdown", onDown, { passive: true });
    return () => {
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerdown", onDown);
    };
  }, []);

  return <div ref={layerRef} className="ripple-layer" aria-hidden="true" />;
}
