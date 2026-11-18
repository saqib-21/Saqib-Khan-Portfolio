import { useRef, useState, type CSSProperties, type PointerEvent } from "react";
import "./SnowGlobe.css";

const flakes = [
  [14, 26, 12], [21, 16, -12], [27, 42, 23], [33, 20, -22],
  [40, 11, 26], [46, 37, -16], [53, 21, 14], [58, 45, 25],
  [64, 13, -20], [69, 30, 9], [75, 21, -15], [79, 47, 12],
];

const clamp = (value: number, limit: number) => Math.max(-limit, Math.min(limit, value));

export function SnowGlobe() {
  const [shakes, setShakes] = useState(0);
  const [motion, setMotion] = useState<{ x: number; y: number; drift: number; lift: number } | null>(null);
  const pointer = useRef<{ id: number; x: number; y: number; lastX: number; lastY: number } | null>(null);
  const dragged = useRef(false);

  function startDrag(event: PointerEvent<HTMLButtonElement>) {
    if (!event.isPrimary || event.button !== 0) return;
    const { clientX: x, clientY: y, pointerId: id } = event;
    dragged.current = false;
    pointer.current = { id, x, y, lastX: x, lastY: y };
    event.currentTarget.setPointerCapture(id);
  }

  function moveGlobe(event: PointerEvent<HTMLButtonElement>) {
    const active = pointer.current;
    if (active?.id !== event.pointerId) return;
    const x = event.clientX - active.x;
    const y = event.clientY - active.y;
    if (!dragged.current && Math.hypot(x, y) < 5) return;
    dragged.current = true;
    const deltaX = event.clientX - active.lastX;
    const deltaY = event.clientY - active.lastY;
    active.lastX = event.clientX;
    active.lastY = event.clientY;
    setMotion({
      x: clamp(x * .65, 40),
      y: clamp(y * .45, 19),
      drift: clamp(-deltaX * 1.3 - x * .18, 26),
      lift: Math.min(24, Math.hypot(deltaX, deltaY) * 1.25),
    });
  }

  function finishDrag(event: PointerEvent<HTMLButtonElement>) {
    if (pointer.current?.id !== event.pointerId) return;
    pointer.current = null;
    setMotion(null);
    if (dragged.current) setShakes((count) => count + 1);
  }

  return (
    <button
      className="snow-globe"
      type="button"
      onPointerDown={startDrag}
      onPointerMove={moveGlobe}
      onPointerUp={finishDrag}
      onPointerCancel={finishDrag}
      onLostPointerCapture={finishDrag}
      onClick={(event) => {
        if (event.detail === 0 || !dragged.current) setShakes((count) => count + 1);
      }}
    >
      <span
        key={shakes}
        className={`snow-globe-scene${motion ? " snow-globe-scene--dragging" : shakes > 0 ? " snow-globe-scene--shaken" : ""}`}
        data-arrangement={shakes % 2}
        style={motion ? {
          "--globe-x": `${motion.x}px`,
          "--globe-y": `${motion.y}px`,
          "--globe-tilt": `${motion.x * .38}deg`,
          "--snow-drift": `${motion.drift}px`,
          "--snow-lift": `${-motion.lift}px`,
        } as CSSProperties : undefined}
        aria-hidden="true"
      >
        <span className="snow-globe-glass">
          <span className="snow-globe-tree snow-globe-tree--left" />
          <span className="snow-globe-tree snow-globe-tree--right" />
          <span className="snow-globe-snowbank" />
          <span className="snow-globe-tree snow-globe-tree--center" />
          <span className="snow-globe-star" />
          {flakes.map(([left, top, drift], index) => (
            <span
              key={left}
              className="snow-globe-flake"
              style={{
                "--flake-x": `${left}%`,
                "--flake-y": `${top}%`,
                "--flake-drift": `${drift}px`,
                "--flake-reaction": .5 + (index % 4) * .18,
                "--flake-delay": `${(index % 4) * 75}ms`,
              } as CSSProperties}
            />
          ))}
        </span>
        <span className="snow-globe-base" />
      </span>
      <span className="snow-globe-label">Drag to shake the snow globe</span>
    </button>
  );
}
