import { technologies } from '@/lib/data';

export default function Marquee() {
  return (
    <div className="marquee" aria-label="Technologies we work with">
      <div className="marquee__track">
        {[...technologies, ...technologies].map((t, i) => (
          <span key={i} className="marquee__item" aria-hidden={i >= technologies.length}>{t}</span>
        ))}
      </div>
    </div>
  );
}
