import Link from 'next/link';

export default function LivePage() {
  return (
    <main>
      <h1>Live System</h1>
      <p>The ThinkRN system is active.</p>
      <p>This page is the permanent public live route.</p>
      <section className="card">
        <h2>Status</h2>
        <p>Public live route is online and stable.</p>
      </section>
      <div className="stack" style={{ marginTop: '1rem' }}>
        <Link className="btn" href="/apply">Join Cohort / Waitlist</Link>
        <Link className="btn secondary" href="/links">Back to Links</Link>
      </div>
    </main>
  );
}
