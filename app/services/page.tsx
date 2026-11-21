import type { Metadata } from 'next';
import Link from '@/components/A';
import { ArrowRight, Check } from 'lucide-react';
import PageHero from '@/components/PageHero';
import Reveal from '@/components/Reveal';
import Icon from '@/components/Icon';
import CtaBand from '@/components/CtaBand';
import Parallax from '@/components/Parallax';
import { services } from '@/lib/data';

export const metadata: Metadata = { title: 'Services' };

export default function ServicesPage() {
  return (
    <>
      <PageHero crumb="Services" eyebrow="Our services" image="/images/fibre-rack.jpg"
        title="Everything your network needs, delivered by one team"
        text="Planning, cabling, fibre, wireless, connectivity, testing and fault restoration. Pick one service or let us take care of the lot." />
      <section className="section">
        <div className="container">
          <nav className="svc-jump" aria-label="Jump to a service">
            {services.map((s) => <a key={s.slug} href={`#${s.slug}`}><Icon name={s.icon} size={16} /> {s.title}</a>)}
          </nav>
          <div className="svc-list">
            {services.map((s, i) => (
              <article key={s.slug} id={s.slug} className={`svc-row ${i % 2 ? 'svc-row--flip' : ''}`}>
                <Reveal className="svc-row__art">
                  <Parallax src={s.image} className="svc-row__img" strength={24} />
                  <span className="svc-row__num">{String(i + 1).padStart(2, '0')}</span>
                  <span className="svc-row__icon"><Icon name={s.icon} size={26} /></span>
                </Reveal>
                <Reveal delay={0.1} className="svc-row__copy">
                  <h2>{s.title}</h2>
                  <p>{s.short}</p>
                  <ul className="ticklist ticklist--2">
                    {s.points.map((p) => <li key={p}><Check size={18} /> {p}</li>)}
                  </ul>
                  <Link href={`/contact/?topic=${s.slug}#enquiry`} className="btn btn--primary">Enquire about this service <ArrowRight size={18} /></Link>
                </Reveal>
              </article>
            ))}
          </div>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
