'use client';
import { AnimatePresence, motion } from 'motion/react';
import { useState } from 'react';
import { ArrowRight, ChevronDown, Clock, MapPin } from 'lucide-react';
import Icon from './Icon';
import Link from './A';
import type { Job } from '@/lib/data';

export default function JobCard({ job }: { job: Job }) {
  const [open, setOpen] = useState(false);
  return (
    <article className={`job ${open ? 'is-open' : ''}`} id={job.slug}>
      <div className="job__head">
        <span className="card__icon"><Icon name={job.icon} size={26} /></span>
        <div className="job__title">
          <h3>{job.title}</h3>
          <p className="job__meta"><span><Clock size={14} /> {job.type}</span><span><MapPin size={14} /> {job.location}</span></p>
        </div>
      </div>
      <p className="job__summary">{job.summary}</p>
      <div className="job__mix" aria-label="Time split across duties">
        {job.duties.map((d, i) => (
          <span key={d.area} style={{ flexGrow: d.pct }} className={`mix-${i}`} title={`${d.area}: ${d.pct}%`} />
        ))}
      </div>
      <div className="job__actions">
        <button className="btn btn--ghost btn--sm" aria-expanded={open} onClick={() => setOpen(!open)}>
          {open ? 'Hide duties' : 'View key duties'} <ChevronDown size={16} className="job__chev" />
        </button>
        <Link href={`/contact/?topic=careers&role=${job.slug}#enquiry`} className="btn btn--primary btn--sm">Enquire about this role <ArrowRight size={16} /></Link>
      </div>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div className="job__body" initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }}>
            <ol className="duties">
              {job.duties.map((d, i) => (
                <li key={d.area}>
                  <div className="duties__head">
                    <strong>{d.area}</strong>
                    <span className={`pct mix-${i}`}>~{d.pct}%</span>
                  </div>
                  <div className="duties__bar"><span className={`mix-${i}`} style={{ width: `${d.pct * 2.5}%` }} /></div>
                  <ul>{d.items.map((it) => <li key={it}>{it}</li>)}</ul>
                </li>
              ))}
            </ol>
          </motion.div>
        )}
      </AnimatePresence>
    </article>
  );
}
