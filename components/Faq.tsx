'use client';
import { AnimatePresence, motion } from 'motion/react';
import { useState } from 'react';
import { Plus } from 'lucide-react';

export default function Faq({ items }: { items: { q: string; a: string }[] }) {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="faq">
      {items.map((it, i) => (
        <div key={i} className={`faq__item ${open === i ? 'is-open' : ''}`}>
          <button aria-expanded={open === i} onClick={() => setOpen(open === i ? null : i)}>
            {it.q}<Plus size={20} />
          </button>
          <AnimatePresence initial={false}>
            {open === i && (
              <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.25 }}>
                <p>{it.a}</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}
