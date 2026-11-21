'use client';
import { animate, useInView } from 'motion/react';
import { useEffect, useRef, useState } from 'react';
import { stats } from '@/lib/data';

function Counter({ to, decimals = 0, suffix }: { to: number; decimals?: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const [v, setV] = useState(0);
  useEffect(() => {
    if (!inView) return;
    const c = animate(0, to, { duration: 1.8, ease: 'easeOut', onUpdate: setV });
    return () => c.stop();
  }, [inView, to]);
  return (
    <span ref={ref}>
      {v.toLocaleString('en-AU', { minimumFractionDigits: decimals, maximumFractionDigits: decimals })}
      <em>{suffix}</em>
    </span>
  );
}

export default function Stats() {
  return (
    <div className="stats">
      {stats.map((s) => (
        <div className="stat" key={s.label}>
          <strong><Counter to={s.value} decimals={s.decimals} suffix={s.suffix} /></strong>
          <span>{s.label}</span>
        </div>
      ))}
    </div>
  );
}
