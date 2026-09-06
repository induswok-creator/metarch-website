import React from 'react';

/**
 * Infinite marquee. Renders the items twice and slides the track -50%;
 * pauses on hover. `render(item, index)` returns the JSX for one item.
 */
export default function Marquee({ items, speed = 32, className = '', render }) {
  return (
    <div
      className={`marquee overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] ${className}`}
    >
      <div className="marquee-track" style={{ '--speed': `${speed}s` }}>
        {[0, 1].map((copy) => (
          <div key={copy} className="flex shrink-0 items-center" aria-hidden={copy === 1}>
            {items.map((it, i) => (
              <React.Fragment key={i}>{render(it, i)}</React.Fragment>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
