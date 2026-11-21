'use client';
import { AnimatePresence, motion } from 'motion/react';
import { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { testimonials } from '@/lib/data';

export default function Testimonials() {
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);
  const n = testimonials.length;
  useEffect(() => {
    if (paused) return;
    const t = setInterval(() => setI((x) => (x + 1) % n), 6500);
    return () => clearInterval(t);
  }, [paused, n]);
  const t = testimonials[i];
  return (
    <div className="testi" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
      <Quote className="testi__mark" size={48} aria-hidden />
      <div className="testi__stage" aria-live="polite">
        <AnimatePresence mode="wait">
          <motion.figure
            key={i}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -30 }}
            transition={{ duration: 0.4 }}
          >
            <blockquote>“{t.quote}”</blockquote>
            <figcaption>
              <span className="avatar">{t.name.split(' ').map((p) => p[0]).join('')}</span>
              <span><strong>{t.name}</strong><small>{t.role}</small></span>
            </figcaption>
          </motion.figure>
        </AnimatePresence>
      </div>
      <div className="testi__controls">
        <button aria-label="Previous testimonial" onClick={() => setI((i - 1 + n) % n)}><ChevronLeft /></button>
        <div className="testi__dots">
          {testimonials.map((_, k) => (
            <button key={k} aria-label={`Show testimonial ${k + 1}`} className={k === i ? 'is-active' : ''} onClick={() => setI(k)} />
          ))}
        </div>
        <button aria-label="Next testimonial" onClick={() => setI((i + 1) % n)}><ChevronRight /></button>
      </div>
    </div>
  );
}
