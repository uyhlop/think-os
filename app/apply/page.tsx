export default function ApplyPage() {
  return (
    <main>
      <h1>Join the ThinkRN Cohort</h1>
      <p>Enter your information to join the next cohort, waitlist, or early user group.</p>
      <form className="card stack" onSubmit={(e) => e.preventDefault()}>
        <div>
          <label htmlFor="name">Name</label>
          <input id="name" name="name" autoComplete="name" />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input id="email" name="email" type="email" autoComplete="email" />
        </div>
        <div>
          <label htmlFor="program">School or Program</label>
          <input id="program" name="program" />
        </div>
        <div>
          <label htmlFor="notes">Notes</label>
          <textarea id="notes" name="notes" rows={4} />
        </div>
        {/* TODO: Wire this form to a real backend endpoint when enrollment pipeline is ready. */}
        <button className="btn" type="submit">Submit Interest (Coming Soon)</button>
      </form>
    </main>
  );
}
