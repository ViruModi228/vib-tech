import type { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import Reveal from '@/components/Reveal';
import Icon from '@/components/Icon';
import CtaBand from '@/components/CtaBand';
import Stats from '@/components/Stats';
import Parallax from '@/components/Parallax';
import { reasons, team, values } from '@/lib/data';

export const metadata: Metadata = { title: 'About us' };

const timeline = [
  { year: '2016', text: 'VIB Tech Pty Ltd founded in South Australia to deliver telecommunications construction and cabling.' },
  { year: '2018', text: 'Grew into fibre and copper network construction, including work on the nbn™ rollout.' },
  { year: '2020', text: 'Added network planning and design, taking projects from first survey to final as-builts.' },
  { year: '2023', text: 'Expanded testing, commissioning and fault restoration crews for carriers and businesses.' },
  { year: '2026', text: 'More than 10,000 projects delivered for clients across Australia.' },
];

export default function AboutPage() {
  return (
    <>
      <PageHero crumb="About" eyebrow="About VIB Tech" image="/images/team-datacentre.jpg" title="Engineers who believe great networks should be invisible"
        text="VIB Tech Pty Ltd is an Australian-owned telecommunications company. We design, build and look after the infrastructure that keeps people connected." />
      <section className="section">
        <div className="container split">
          <Reveal className="split__copy">
            <span className="eyebrow">Our story</span>
            <h2>Built on doing the job properly</h2>
            <p>VIB Tech started with a simple idea: the cabling, wireless and voice systems behind an organisation should just work, and the people who install them should stand behind their work.</p>
            <p>Today our team of engineers, certified technicians and project managers delivers everything from single-office fit-outs to multi-site campus networks, while keeping the same hands-on, accountable approach we started with.</p>
          </Reveal>
          <Reveal delay={0.1} className="about-media">
            <Parallax src="/images/cabling-red.jpg" className="about-media__img" />
            <ol className="timeline">
              {timeline.map((t) => <li key={t.year}><strong>{t.year}</strong><span>{t.text}</span></li>)}
            </ol>
          </Reveal>
        </div>
      </section>
      <section className="section section--dark section--photo section--tight">
        <Parallax src="/images/server-racks.jpg" className="section__bg" strength={50} />
        <div className="container"><Stats /></div>
      </section>
      <section className="section">
        <div className="container">
          <Reveal className="section-head"><span className="eyebrow">Our values</span><h2>What you can expect from us</h2></Reveal>
          <div className="cards cards--3">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 0.06}>
                <div className="card card--value"><span className="value-num">0{i + 1}</span><h3>{v.title}</h3><p>{v.text}</p></div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <section className="section section--alt">
        <div className="container">
          <Reveal className="section-head"><span className="eyebrow">Leadership</span><h2>The people behind your network</h2></Reveal>
          <div className="cards cards--2">
            {team.map((m, i) => (
              <Reveal key={m.name} delay={i * 0.06}>
                <div className="card card--team"><span className="team-avatar">{m.initials}</span><h3>{m.name}</h3><p>{m.role}</p></div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <Reveal className="section-head"><span className="eyebrow">Accreditations</span><h2>Licensed, certified and insured</h2></Reveal>
          <div className="cards cards--4">
            {reasons.map((r, i) => (
              <Reveal key={r.title} delay={i * 0.06}><div className="card card--industry">
                <span className="card__icon card__icon--soft"><Icon name={r.icon} size={22} /></span>
                <div><h3>{r.title}</h3><p>{r.text}</p></div>
              </div></Reveal>
            ))}
          </div>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
