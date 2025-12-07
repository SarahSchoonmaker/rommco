export default function HomePage() {
  return (
    <div>
      <section className="hero">
        <div>
          <h1 className="hero-title">
            AI Underwriting &{" "}
            <span className="hero-highlight">RegTech Automation</span> for
            Broker-Dealers
          </h1>
          <p className="hero-subtitle">
            Rommco helps broker-dealers, RIAs, and compliance teams automate
            underwriting, surface risk, and stay ahead of regulatory
            change—without adding headcount.
          </p>
          <div className="hero-ctas">
            <a href="/pricing" className="btn-primary">
              Subscribe – $350/month
            </a>
            <a href="/products" className="btn-outline">
              View Products
            </a>
          </div>
          <p style={{ fontSize: "0.85rem", color: "#9ca3af" }}>
            Built for small and mid-sized firms that need institutional-grade
            automation on a realistic budget.
          </p>
        </div>
        <div className="hero-card">
          <div className="hero-metric">
            <span>35–60%</span> less time spent on manual underwriting
            workflows.
          </div>
          <div className="hero-metric">
            <span>Real-time</span> alerts for exceptions, missing docs, and
            policy drift.
          </div>
          <p style={{ fontSize: "0.9rem", color: "#cbd5f5" }}>
            Rommco originated as a manufacturing company. Today, we keep the
            same practical, operations-first mindset— applying AI and automation
            to reduce friction and remove repetitive work from your day.
          </p>
        </div>
      </section>

      <section className="section">
        <h2 className="section-title">What Rommco Delivers</h2>
        <p className="section-subtitle">
          Our tools plug into your existing workflows—no rip-and-replace. We
          focus on clear outputs your compliance, supervision, and operations
          teams can actually use.
        </p>
        <div className="grid-3">
          <div className="card">
            <div className="card-title">AI Underwriting Automation</div>
            <p className="card-body">
              Normalize borrower and deal data, flag edge cases, and generate
              underwriting summaries tailored to your firm&apos;s rules and risk
              appetite.
            </p>
          </div>
          <div className="card">
            <div className="card-title">RegTech Compliance Monitor</div>
            <p className="card-body">
              Turn dense policies and regulations into automated checks. Catch
              exceptions earlier and show your work when regulators or auditors
              ask.
            </p>
          </div>
          <div className="card">
            <div className="card-title">Future: Automation Hardware</div>
            <p className="card-body">
              Rommco is also incubating practical automation products (like
              commercial auto-mute for ads) focused on removing everyday
              friction from work and life.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
