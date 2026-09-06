import { useInView, useReducedMotion } from '../hooks/useFx.js';

const HIDDEN = {
  up: 'translate3d(0, 64px, 0) rotateX(16deg)',
  left: 'translate3d(-64px, 0, 0) rotateY(-12deg)',
  right: 'translate3d(64px, 0, 0) rotateY(12deg)',
  zoom: 'scale(0.88)',
};

/**
 * Scroll-triggered 3D reveal wrapper.
 * Elements rotate/translate into place (with perspective from the parent grid)
 * the first time they enter the viewport.
 */
export default function Reveal({
  as: Tag = 'div',
  from = 'up',
  delay = 0,
  className = '',
  style,
  children,
  ...rest
}) {
  const [ref, inView] = useInView();
  const reduced = useReducedMotion();
  const show = inView || reduced;
  const origin = from === 'left' ? 'left center' : from === 'right' ? 'right center' : 'center bottom';

  return (
    <Tag
      ref={ref}
      className={className}
      style={{
        ...style,
        opacity: show ? 1 : 0,
        transform: show ? 'none' : HIDDEN[from] || HIDDEN.up,
        transformOrigin: origin,
        transition: reduced
          ? 'none'
          : `opacity 1s cubic-bezier(0.22,1,0.36,1) ${delay}ms, transform 1s cubic-bezier(0.22,1,0.36,1) ${delay}ms`,
        willChange: 'opacity, transform',
      }}
      {...rest}
    >
      {children}
    </Tag>
  );
}
