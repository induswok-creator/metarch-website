import { useRef } from 'react';
import { useReducedMotion } from '../hooks/useFx.js';

/**
 * 3D tilt card: the surface rotates toward the cursor (rotateX/rotateY)
 * with a soft light glare that follows the pointer.
 */
export default function TiltCard({ children, className = '', max = 9, glare = true }) {
  const ref = useRef(null);
  const reduced = useReducedMotion();

  const onMove = (e) => {
    const el = ref.current;
    if (!el || reduced) return;
    const r = el.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width;
    const py = (e.clientY - r.top) / r.height;
    el.style.setProperty('--rx', `${((0.5 - py) * max).toFixed(2)}deg`);
    el.style.setProperty('--ry', `${((px - 0.5) * max).toFixed(2)}deg`);
    el.style.setProperty('--gx', `${(px * 100).toFixed(1)}%`);
    el.style.setProperty('--gy', `${(py * 100).toFixed(1)}%`);
  };

  const onLeave = () => {
    const el = ref.current;
    if (!el) return;
    el.style.setProperty('--rx', '0deg');
    el.style.setProperty('--ry', '0deg');
  };

  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className={`tilt ${className}`}
      style={{ transform: 'perspective(1100px) rotateX(var(--rx, 0deg)) rotateY(var(--ry, 0deg))' }}
    >
      {children}
      {glare && <div className="tilt-glare" aria-hidden="true" />}
    </div>
  );
}
