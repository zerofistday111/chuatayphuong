import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronDown } from "lucide-react";
import { SCENE_COUNT, SCENES } from "@/lib/content";
import { RippleCanvas } from "./ripple-canvas";
import { MotifLayer } from "./motifs";
import { SCATTER, SCENE_VIEWS } from "./scenes";

const DEPTH = 1700;
const LERP = 0.22;

function clamp(n: number, min = 0, max = 1) {
  return Math.min(max, Math.max(min, n));
}

export function ScrollExperience() {
  const stageRef = useRef<HTMLDivElement>(null);
  const worldRef = useRef<HTMLDivElement>(null);
  const sceneRefs = useRef<Array<HTMLElement | null>>([]);
  const camRef = useRef(0);
  const targetRef = useRef(0);
  const mouseRef = useRef({ x: 0, y: 0 });
  const spinExtra = useRef(0);
  const spinSmooth = useRef(0);
  const [active, setActive] = useState(0);

  const jumpTo = useCallback((index: number) => {
    const max = document.documentElement.scrollHeight - window.innerHeight;
    const y = (index / Math.max(1, SCENE_COUNT - 1)) * max;
    window.scrollTo({ top: y, behavior: "auto" });
    targetRef.current = index / Math.max(1, SCENE_COUNT - 1);
  }, []);

  useEffect(() => {
    const stage = stageRef.current;
    const world = worldRef.current;
    if (!stage || !world) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const lerp = reduce ? 1 : LERP;
    let raf = 0;
    let lastActive = 0;

    const stepEl = world.querySelector("#step-count");
    const ringEl = world.querySelector<HTMLElement>("#arhat-ring");
    world.querySelectorAll<HTMLElement>(".treasure-grid .plate").forEach((el, i) => {
      const s = SCATTER[i];
      if (!s) return;
      el.style.setProperty("--sx", String(s.sx));
      el.style.setProperty("--sy", String(s.sy));
      el.style.setProperty("--sz", String(s.sz));
      el.style.setProperty("--sr", String(s.sr));
    });

    let dragging = false;
    let lastX = 0;
    const onRingDown = (e: PointerEvent) => {
      dragging = true;
      lastX = e.clientX;
      ringEl?.setPointerCapture(e.pointerId);
    };
    const onRingMove = (e: PointerEvent) => {
      if (!dragging) return;
      spinExtra.current += (e.clientX - lastX) * 0.42;
      lastX = e.clientX;
    };
    const onRingUp = () => {
      dragging = false;
    };
    if (ringEl) {
      ringEl.addEventListener("pointerdown", onRingDown);
      ringEl.addEventListener("pointermove", onRingMove);
      ringEl.addEventListener("pointerup", onRingUp);
      ringEl.addEventListener("pointercancel", onRingUp);
    }

    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      targetRef.current = max > 0 ? window.scrollY / max : 0;
    };

    const onMove = (e: PointerEvent) => {
      mouseRef.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouseRef.current.y = (e.clientY / window.innerHeight) * 2 - 1;
      stage.style.setProperty("--mx", `${e.clientX}px`);
      stage.style.setProperty("--my", `${e.clientY}px`);
    };

    const onKey = (e: KeyboardEvent) => {
      if (e.key !== "ArrowDown" && e.key !== "ArrowUp" && e.key !== " ") return;
      e.preventDefault();
      const dir = e.key === "ArrowUp" ? -1 : 1;
      const next = clamp(lastActive + dir, 0, SCENE_COUNT - 1);
      jumpTo(next);
    };

    function tick() {
      camRef.current += (targetRef.current - camRef.current) * lerp;
      const cam = camRef.current;
      const camera = cam * (SCENE_COUNT - 1);
      stage!.style.setProperty("--cam", cam.toFixed(4));

      sceneRefs.current.forEach((el, i) => {
        if (!el) return;
        const dist = i - camera;
        const abs = Math.abs(dist);
        const local = clamp(1 - abs / 0.72);
        const z = dist * -DEPTH;
        const rotY = dist * -28;
        const rotX = dist * 9;
        const scale = dist > 0 ? 0.52 + local * 0.48 : 1 + abs * 0.22;
        let opacity = 0;
        if (abs < 0.06) opacity = 1;
        else if (abs < 0.7) opacity = 1 - (abs - 0.06) / 0.64;
        el.style.opacity = String(opacity);
        el.style.transform = `translate3d(0, ${dist * 18}px, ${z}px) rotateY(${rotY}deg) rotateX(${rotX}deg) scale(${scale})`;
        el.style.setProperty("--local", local.toFixed(3));
        el.style.setProperty("--signed", dist.toFixed(3));
        el.style.setProperty("--fold", clamp(abs).toFixed(3));
        const live = abs < 0.38;
        el.classList.toggle("is-live", live);
        el.style.visibility = opacity < 0.05 ? "hidden" : "visible";
        el.style.zIndex = String(Math.round((1 - abs) * 24));
        el.style.willChange = live ? "transform, opacity" : "auto";
        el.style.pointerEvents = live ? "auto" : "none";
        if (live && !reduce) {
          const arhat = Math.abs(camera - 4) < 0.45;
          const tx = mouseRef.current.y * (arhat ? -3 : -11);
          const ty = mouseRef.current.x * (arhat ? 4 : 14);
          el.style.setProperty("--tilt-x", tx.toFixed(2));
          el.style.setProperty("--tilt-y", ty.toFixed(2));
        } else {
          el.style.setProperty("--tilt-x", "0");
          el.style.setProperty("--tilt-y", "0");
        }
      });

      const idx = clamp(Math.round(camera), 0, SCENE_COUNT - 1);
      if (idx !== lastActive) {
        lastActive = idx;
        setActive(idx);
      }

      if (stepEl) {
        const t = clamp(1 - Math.abs(camera - 1) / 0.55);
        stepEl.textContent = String(Math.round(237 * t)).padStart(3, "0");
      }

      if (ringEl) {
        const near = Math.abs(camera - 4) < 0.62;
        if (near) {
          const fromMouse = (mouseRef.current.x + 1) * 180;
          const target = fromMouse + spinExtra.current;
          spinSmooth.current += (target - spinSmooth.current) * 0.16;
        }
        ringEl.style.setProperty("--spin", `${spinSmooth.current}deg`);
      }

      raf = requestAnimationFrame(tick);
    }

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("pointermove", onMove, { passive: true });
    window.addEventListener("keydown", onKey);
    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("keydown", onKey);
      if (ringEl) {
        ringEl.removeEventListener("pointerdown", onRingDown);
        ringEl.removeEventListener("pointermove", onRingMove);
        ringEl.removeEventListener("pointerup", onRingUp);
        ringEl.removeEventListener("pointercancel", onRingUp);
      }
    };
  }, [jumpTo]);

  return (
    <main>
      <div className="stage" ref={stageRef}>
        <div className="progress-track" aria-hidden="true">
          <div className="progress-fill" />
        </div>
        <header className="topbar">
          <div className="brand">
            <span className="brand-kicker">Thạch Thất · Hà Nội</span>
            <span className="brand-name">Tây Phương</span>
          </div>
        </header>

        <div className="world" ref={worldRef}>
          {SCENE_VIEWS.map((View, i) => (
            <section
              key={SCENES[i].id}
              className="scene"
              data-i={i}
              ref={(el) => {
                sceneRefs.current[i] = el;
              }}
              aria-label={SCENES[i].label}
            >
              <div className="scene-inner">
                <View />
              </div>
            </section>
          ))}
        </div>

        <MotifLayer />
        <div className="sheen" aria-hidden="true" />
        <RippleCanvas />

        <nav className="scene-nav" aria-label="Mục cảnh">
          {SCENES.map((s, i) => (
            <button
              key={s.id}
              type="button"
              aria-current={active === i}
              aria-label={s.label}
              onClick={() => jumpTo(i)}
            >
              <span className="lbl">{s.label}</span>
              <span className="dot" />
            </button>
          ))}
        </nav>

        <div className="hint">
          <span>Cuộn để hành hương</span>
          <ChevronDown className="hint-chevron" strokeWidth={1.6} />
        </div>
      </div>

      <div
        className="scroll-spacer"
        style={{ height: `${SCENE_COUNT * 140}vh` }}
        aria-hidden="true"
      />
    </main>
  );
}
