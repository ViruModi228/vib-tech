import Link from '@/components/A';
import { ArrowRight, Phone } from 'lucide-react';
import { company } from '@/lib/data';
import Reveal from './Reveal';
import Parallax from './Parallax';

export default function CtaBand() {
  return (
    <section className="section section--tight">
      <div className="container">
        <Reveal className="cta-band">
          <Parallax src="/images/tower-clouds.jpg" className="cta-band__bg" strength={30} />
          <div className="cta-band__copy">
            <h2>Ready to build a network you don’t have to think about?</h2>
            <p>Book a free site survey or send us your plans. We’ll come back with a clear, fixed-price proposal within two business days.</p>
          </div>
          <div className="cta-band__actions">
            <Link href="/contact/?topic=quote#enquiry" className="btn btn--light">Request a quote <ArrowRight size={18} /></Link>
            <a href={company.phoneHref} className="btn btn--outline-light"><Phone size={16} /> {company.phone}</a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
