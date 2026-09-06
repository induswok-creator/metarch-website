import { useEffect, useRef } from 'react';

/** Soft amber glow that trails the cursor (desktop / fine pointers only). */
export default function CursorGlow() {
  const ref = useRef(null);

  useEffect(() => {
    if (!window.matchMedia('(pointer: fine)').matches) return;
    const el = ref.current;
    if (!el) return;
    let raf = 0;
    let tx = -600;
    let ty = -600;
    let x = tx;
    let y = ty;
    const onMove = (e) => {
      tx = e.clientX;
      ty = e.clientY;
    };
    const tick = () => {
      x += (tx - x) * 0.1;
      y += (ty - y) * 0.1;
      el.style.transform = `translate3d(${(x - 320).toFixed(1)}px, ${(y - 320).toFixed(1)}px, 0)`;
      raf = requestAnimationFrame(tick);
    };
    window.addEventListener('mousemove', onMove, { passive: true });
    raf = requestAnimationFrame(tick);
    return () => {
      window.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-[60] hidden h-[640px] w-[640px] rounded-full opacity-70 lg:block"
      style={{
        background:
          'radial-gradient(circle, rgba(249,115,22,0.07) 0%, rgba(249,115,22,0.03) 40%, transparent 70%)',
        transform: 'translate3d(-600px, -600px, 0)',
      }}
    />
  );
}
