'use client';
import { motion, useReducedMotion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import { asset } from './A';

/** Cover image that drifts slightly slower than the page as it scrolls past. */
export default function Parallax({ src, alt = '', className, strength = 40, eager = false }: { src: string; alt?: string; className?: string; strength?: number; eager?: boolean }) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], [-strength, strength]);
  return (
    <div ref={ref} className={`parallax ${className ?? ''}`}>
      <motion.img
        src={asset(src)}
        alt={alt}
        loading={eager ? 'eager' : 'lazy'}
        decoding="async"
        style={{ top: -strength, height: `calc(100% + ${strength * 2}px)`, ...(reduce ? {} : { y }) }}
      />
    </div>
  );
}
