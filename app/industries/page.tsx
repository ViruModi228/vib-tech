import type { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import Reveal from '@/components/Reveal';
import Icon from '@/components/Icon';
import CtaBand from '@/components/CtaBand';
import Stats from '@/components/Stats';
import Parallax from '@/components/Parallax';
import { industries } from '@/lib/data';

export const metadata: Metadata = { title: 'Industries' };

export default function IndustriesPage() {
  return (
    <>
      <PageHero crumb="Industries" eyebrow="Industries we serve" image="/images/microwave-towers.jpg"
        title="Specialist networks for sectors that can’t afford downtime"
        text="Every industry has its own standards, risks and rhythms. Our teams know them and plan around them." />
      <section className="section">
        <div className="container">
          <div className="cards cards--3">
            {industries.map((ind, i) => (
              <Reveal key={ind.title} delay={(i % 3) * 0.07}>
                <div className="card card--tall">
                  <span className="card__icon"><Icon name={ind.icon} size={26} /></span>
                  <h3>{ind.title}</h3>
                  <p>{ind.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <section className="section section--dark section--photo section--tight">
        <Parallax src="/images/server-racks.jpg" className="section__bg" strength={50} />
        <div className="container"><Stats /></div>
      </section>
      <CtaBand />
    </>
  );
}
