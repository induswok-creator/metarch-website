import { useCountUp, useInView, useReducedMotion } from '../hooks/useFx.js';

export default function CountUp({ value, suffix = '', duration = 1800, className = '' }) {
  const [ref, inView] = useInView({ threshold: 0.4 });
  const reduced = useReducedMotion();
  const n = useCountUp(value, inView && !reduced, duration);
  const shown = reduced ? value : Math.round(n);
  return (
    <span ref={ref} className={className}>
      {shown}
      {suffix}
    </span>
  );
}
