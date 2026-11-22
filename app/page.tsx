import Link, { asset } from '@/components/A';
import { ArrowRight, Check, Phone, ShieldCheck } from 'lucide-react';
import Reveal from '@/components/Reveal';
import Icon from '@/components/Icon';
import Stats from '@/components/Stats';
import Testimonials from '@/components/Testimonials';
import CtaBand from '@/components/CtaBand';
import ContactForm from '@/components/ContactForm';
import Parallax from '@/components/Parallax';
import Marquee from '@/components/Marquee';
import { accreditations, company, industries, process, reasons, services } from '@/lib/data';

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="hero__media" aria-hidden>
          <img src={asset('/images/hero-tower.jpg')} alt="" className="hero__bg" fetchPriority="high" />
        </div>
        <div className="hero__shade" aria-hidden />
        <div className="hero__grid" aria-hidden />
        <div className="container hero__inner">
          <div className="hero__copy">
            <Reveal><span className="eyebrow eyebrow--pill"><span className="pulse-dot" /> Australian telco service provider</span></Reveal>
            <Reveal delay={0.08}><h1>Networks engineered to <span className="grad">keep Australia connected</span></h1></Reveal>
            <Reveal delay={0.16}><p className="lead">From planning and approvals to fibre construction, testing and fault restoration, VIB Tech designs, builds and maintains the networks your organisation runs on.</p></Reveal>
            <Reveal delay={0.24} className="hero__actions">
              <Link href="/contact/?topic=quote#enquiry" className="btn btn--primary btn--lg">Request a quote <ArrowRight size={18} /></Link>
              <Link href="/services/" className="btn btn--outline-light btn--lg">Explore our services</Link>
            </Reveal>
            <Reveal delay={0.32}>
              <ul className="hero__ticks">
                {['Free site surveys', 'Fixed-price proposals', 'Nationwide coverage'].map((a) => <li key={a}><Check size={16} /> {a}</li>)}
              </ul>
            </Reveal>
          </div>
        </div>
        <div className="container hero__stats"><Reveal delay={0.4}><Stats /></Reveal></div>
      </section>

      <section className="trust">
        <div className="container trust__inner">
          <img src={asset('/brand/nbn-band.png')} alt="Proudly supporting nbn™. Delivering smart connectivity across Australia" className="trust__nbn" width={578} height={68} />
          <ul className="trust__list">
            {accreditations.map((a) => <li key={a}><ShieldCheck size={18} /> {a}</li>)}
          </ul>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Reveal className="section-head">
            <span className="eyebrow">What we do</span>
            <h2>End-to-end telecommunications, under one roof</h2>
            <p>Whether you’re fitting out a new office or connecting a campus of thousands, our engineers deliver infrastructure that’s fast, secure and built to last.</p>
          </Reveal>
          <div className="cards cards--4">
            {services.map((s, i) => (
              <Reveal key={s.slug} delay={(i % 4) * 0.07}>
                <Link href={`/services/#${s.slug}`} className="svc-card">
                  <span className="svc-card__media">
                    <img src={asset(s.image)} alt="" loading="lazy" decoding="async" />
                  </span>
                  <span className="svc-card__icon"><Icon name={s.icon} size={22} /></span>
                  <span className="svc-card__body">
                    <h3>{s.title}</h3>
                    <p>{s.short}</p>
                    <span className="card__more">Learn more <ArrowRight size={16} /></span>
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--alt">
        <div className="container split">
          <Reveal className="split__media">
            <div className="photo-stack">
              <Parallax src="/images/engineers-comms-room.jpg" className="photo-stack__main" />
              <div className="photo-stack__badge"><strong>10+</strong><span>years building Australian networks</span></div>
              <div className="photo-stack__card">
                {['Design approved', 'Cabling certified', 'Handover pack issued'].map((t) => (
                  <span key={t}><Check size={14} /> {t}</span>
                ))}
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.1} className="split__copy">
            <span className="eyebrow">Why VIB Tech</span>
            <h2>A partner that owns the outcome, not just the invoice</h2>
            <p>We’re engineers first. That means honest advice, tidy work and documentation you can actually use, delivered by people who pick up the phone.</p>
            <div className="reasons">
              {reasons.map((r) => (
                <div className="reason" key={r.title}>
                  <span className="reason__icon"><Icon name={r.icon} size={22} /></span>
                  <div><h4>{r.title}</h4><p>{r.text}</p></div>
                </div>
              ))}
            </div>
            <Link href="/about/" className="btn btn--dark">More about us <ArrowRight size={18} /></Link>
          </Reveal>
        </div>
      </section>

      <section className="section section--dark section--photo">
        <Parallax src="/images/fibre-light.jpg" className="section__bg" strength={60} />
        <div className="container">
          <Reveal className="section-head section-head--light">
            <span className="eyebrow eyebrow--light">How we work</span>
            <h2>A clear process from first call to final handover</h2>
          </Reveal>
          <ol className="process">
            {process.map((p, i) => (
              <Reveal key={p.step} delay={i * 0.1}>
                <li className="process__step">
                  <span className="process__num">{p.step}</span>
                  <h3>{p.title}</h3>
                  <p>{p.text}</p>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Reveal className="section-head">
            <span className="eyebrow">Industries</span>
            <h2>Trusted where connectivity is critical</h2>
            <p>Every sector has its own standards, risks and rhythms. Our teams know them and plan around them.</p>
          </Reveal>
          <div className="cards cards--3">
            {industries.map((ind, i) => (
              <Reveal key={ind.title} delay={(i % 3) * 0.07}>
                <div className="card card--industry">
                  <span className="card__icon"><Icon name={ind.icon} size={24} /></span>
                  <div><h3>{ind.title}</h3><p>{ind.text}</p></div>
                </div>
              </Reveal>
            ))}
          </div>
          <div className="center"><Link href="/industries/" className="btn btn--ghost">View all industries <ArrowRight size={18} /></Link></div>
        </div>
      </section>

      <section className="section section--alt section--flush-bottom">
        <div className="container split split--testi">
          <Reveal className="split__copy">
            <span className="eyebrow">Client stories</span>
            <h2>Don’t just take our word for it</h2>
            <p>Schools, hospitals, councils and businesses across the country rely on VIB Tech to keep their people connected.</p>
          </Reveal>
          <Reveal delay={0.1}><Testimonials /></Reveal>
        </div>
        <div className="tech-strip">
          <p className="tech-strip__label">Technologies we design, build and support</p>
          <Marquee />
        </div>
      </section>

      <section className="section" id="enquiry">
        <div className="container split split--form">
          <Reveal className="split__copy">
            <span className="eyebrow">Talk to an engineer</span>
            <h2>Have a project in mind?</h2>
            <p>Tell us what you’re working on and we’ll get back to you within one business day. Prefer to talk? Our team is on the phone now.</p>
            <a className="big-phone" href={company.phoneHref}><Phone size={22} /> {company.phone}</a>
            <ul className="ticklist">
              <li><Check size={18} /> Free, no-obligation site survey</li>
              <li><Check size={18} /> Fixed-price proposal within 48 hours</li>
              <li><Check size={18} /> Local project manager from day one</li>
            </ul>
          </Reveal>
          <Reveal delay={0.1}><ContactForm /></Reveal>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
