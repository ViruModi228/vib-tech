import Link, { asset } from '@/components/A';
import { ArrowRight, Phone, Mail, MapPin, Clock } from 'lucide-react';
import Logo from './Logo';
import { company, services, nav } from '@/lib/data';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div className="footer__brand">
          <Logo light />
          <p>Australian-owned telecommunications and network infrastructure specialists. We design, build and support the networks that keep organisations connected.</p>
          <img src={asset('/brand/nbn-band.png')} alt="Proudly supporting nbn™" className="footer__nbn" width={578} height={68} loading="lazy" />
        </div>
        <div>
          <h4>Services</h4>
          <ul>
            {services.map((s) => (
              <li key={s.slug}><Link href={`/services/#${s.slug}`}>{s.title}</Link></li>
            ))}
          </ul>
        </div>
        <div>
          <h4>Company</h4>
          <ul>
            {nav.slice(1).filter((n) => n.href !== '/services/').map((n) => (
              <li key={n.href}><Link href={n.href}>{n.label}</Link></li>
            ))}
          </ul>
        </div>
        <div>
          <h4>Get in touch</h4>
          <ul className="footer__contact">
            <li><Phone size={16} /><a href={company.phoneHref}>{company.phone}</a></li>
            <li><Mail size={16} /><a href={`mailto:${company.email}`}>{company.email}</a></li>
            <li><MapPin size={16} /><span>{company.address}</span></li>
            <li><Clock size={16} /><span>{company.hours}</span></li>
          </ul>
          <Link href="/contact/#enquiry" className="btn btn--primary btn--sm footer__cta">Send an enquiry <ArrowRight size={16} /></Link>
        </div>
      </div>
      <div className="container footer__bottom">
        <span>© 2016 {company.legal}. ABN {company.abn} · ACN {company.acn}</span>
        <span className="footer__legal">
          <a href="#">Privacy policy</a>
          <a href="#">Terms of use</a>
        </span>
      </div>
    </footer>
  );
}
