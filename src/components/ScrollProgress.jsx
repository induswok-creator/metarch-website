import { useEffect, useRef } from 'react';

export default function ScrollProgress() {
  const ref = useRef(null);

  useEffect(() => {
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const h = document.documentElement;
        const max = h.scrollHeight - h.clientHeight;
        const p = max > 0 ? h.scrollTop / max : 0;
        if (ref.current) ref.current.style.transform = `scaleX(${p})`;
      });
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div
      ref={ref}
      className="fixed inset-x-0 top-0 z-[80] h-[3px] origin-left bg-gradient-to-r from-heat-400 via-heat-600 to-red-500"
      style={{ transform: 'scaleX(0)' }}
      aria-hidden="true"
    />
  );
}
