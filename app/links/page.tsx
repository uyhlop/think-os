import Link from 'next/link';

const supportHref = process.env.NEXT_PUBLIC_PATREON_URL || '#';

export default function LinksPage() {
  return (
    <main>
      <h1>ThinkRN</h1>
      <p>Structured nursing exam execution, live build, founder updates.</p>
      <div className="stack">
        <Link className="btn" href="/live">Open Live System</Link>
        <Link className="btn" href="/apply">Join Cohort / Waitlist</Link>
        <Link className="btn" href="/updates">Project Updates</Link>
        <Link className="btn" href="/contact">Contact</Link>
        <a className="btn secondary" href={supportHref} target={supportHref === '#' ? undefined : '_blank'} rel="noreferrer">
          Support / Patreon
        </a>
      </div>
    </main>
  );
}
