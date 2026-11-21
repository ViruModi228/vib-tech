import Link from '@/components/A';
export default function NotFound() {
  return (
    <section className="section center" style={{ minHeight: '50vh' }}>
      <div className="container">
        <h1 style={{ fontSize: '4rem' }}>404</h1>
        <p>We couldn’t find that page. The signal may have dropped.</p>
        <Link href="/" className="btn btn--primary">Back to home</Link>
      </div>
    </section>
  );
}
