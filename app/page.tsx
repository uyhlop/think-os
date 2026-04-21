import Link from 'next/link';

export default function HomePage() {
  return (
    <main>
      <h1>ThinkRN</h1>
      <p>Structured nursing exam execution, live build, founder updates.</p>
      <div className="card nav">
        <Link className="btn" href="/links">Go to Bio Hub</Link>
        <Link className="btn secondary" href="/live">Open Live System</Link>
      </div>
    </main>
  );
}
