import type { Metadata } from 'next';
import { Building2, Clock, Mail, MapPin, Phone } from 'lucide-react';
import PageHero from '@/components/PageHero';
import Reveal from '@/components/Reveal';
import ContactForm from '@/components/ContactForm';
import Faq from '@/components/Faq';
import { company } from '@/lib/data';

export const metadata: Metadata = { title: 'Contact us' };

const faqs = [
  { q: 'Which areas do you service?', a: 'We’re based in Riverlea Park, north of Adelaide, and travel nationwide for larger projects, including regional and remote sites.' },
  { q: 'How quickly can you respond to a fault?', a: 'Managed support clients get SLA-backed response times from 1 hour for critical faults. For everyone else, we aim to attend within one business day.' },
  { q: 'Do you offer free site surveys?', a: 'Yes. For most projects we’ll visit your site, assess what you have and provide a fixed-price proposal at no cost.' },
  { q: 'Are your technicians licensed?', a: 'All cabling is carried out by ACMA-registered cablers, and our engineers hold current vendor certifications. We’re fully insured.' },
];

const offices = [
  { city: 'Head office', addr: company.address },
];

export default function ContactPage() {
  return (
    <>
      <PageHero crumb="Contact" eyebrow="Contact us" image="/images/cabling-panel.jpg" title="Let’s talk about your network"
        text="Questions, quotes, support or careers. Reach the right person quickly by phone, email or the form below." />
      <section className="section" id="enquiry">
        <div className="container contact-grid">
          <Reveal className="contact-info">
            <a className="info-card" href={company.phoneHref}><Phone /><div><strong>Call us</strong><span>{company.phone}</span></div></a>
            <a className="info-card" href={`mailto:${company.email}`}><Mail /><div><strong>Email</strong><span>{company.email}</span></div></a>
            <div className="info-card"><Clock /><div><strong>Business hours</strong><span>{company.hours}</span><span>24/7 support for managed clients</span></div></div>
            <div className="info-card"><Building2 /><div><strong>{company.legal}</strong><span>ABN {company.abn}</span><span>ACN {company.acn}</span></div></div>
            <div className="offices">
              {offices.map((o) => (
                <div key={o.city} className="office"><MapPin size={18} /><div><strong>{o.city}</strong><span>{o.addr}</span></div></div>
              ))}
            </div>
            <div className="map" aria-label="Map placeholder">
              <svg viewBox="0 0 400 200" aria-hidden>
                <path d="M0 140 Q 80 110 160 130 T 400 100" className="map__road" />
                <path d="M60 0 L 120 200" className="map__road" />
                <path d="M260 0 Q 240 100 300 200" className="map__road" />
              </svg>
              <span className="map__pin"><MapPin size={28} /></span>
              <span className="map__label">Riverlea Park, SA</span>
            </div>
          </Reveal>
          <Reveal delay={0.1}><ContactForm /></Reveal>
        </div>
      </section>
      <section className="section section--alt">
        <div className="container narrow">
          <Reveal className="section-head"><span className="eyebrow">FAQ</span><h2>Common questions</h2></Reveal>
          <Faq items={faqs} />
        </div>
      </section>
    </>
  );
}
