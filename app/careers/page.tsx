import type { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import Reveal from '@/components/Reveal';
import Icon from '@/components/Icon';
import JobCard from '@/components/JobCard';
import CtaBand from '@/components/CtaBand';
import { jobs, perks } from '@/lib/data';

export const metadata: Metadata = { title: 'Careers' };

export default function CareersPage() {
  return (
    <>
      <PageHero crumb="Careers" eyebrow="Careers at VIB Tech" image="/images/field-technician.jpg"
        title="Build the networks Australia runs on"
        text="We’re growing our field, planning and technical teams. Join engineers who take pride in doing the job properly." />
      <section className="section section--tight">
        <div className="container cards cards--4">
          {perks.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.06}>
              <div className="card card--perk">
                <span className="card__icon card__icon--soft"><Icon name={p.icon} size={22} /></span>
                <h3>{p.title}</h3><p>{p.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
      <section className="section section--alt" id="roles">
        <div className="container">
          <Reveal className="section-head">
            <span className="eyebrow">Open roles</span>
            <h2>Current opportunities</h2>
            <p>Interested in a role? Send us an enquiry and our team will be in touch about next steps.</p>
          </Reveal>
          <div className="jobs">
            {jobs.map((j, i) => (
              <Reveal key={j.slug} delay={i * 0.08}><JobCard job={j} /></Reveal>
            ))}
          </div>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
