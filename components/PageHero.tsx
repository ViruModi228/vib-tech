import Link, { asset } from '@/components/A';
import Reveal from './Reveal';

export default function PageHero({ eyebrow, title, text, crumb, image }: { eyebrow: string; title: string; text: string; crumb: string; image: string }) {
  return (
    <section className="page-hero">
      <div className="hero__media" aria-hidden>
        <img src={asset(image)} alt="" className="hero__bg" fetchPriority="high" />
      </div>
      <div className="hero__shade" aria-hidden />
      <div className="container page-hero__inner">
        <Reveal><nav className="crumbs" aria-label="Breadcrumb"><Link href="/">Home</Link><span>/</span><span>{crumb}</span></nav></Reveal>
        <Reveal delay={0.06}><span className="eyebrow eyebrow--light">{eyebrow}</span></Reveal>
        <Reveal delay={0.12}><h1>{title}</h1></Reveal>
        <Reveal delay={0.18}><p>{text}</p></Reveal>
      </div>
    </section>
  );
}
