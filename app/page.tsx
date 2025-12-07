// app/page.tsx

export default function HomePage() {
  return (
    <div className="home">
      {/* Hero */}
      <section className="hero hero--enhanced">
        <div className="hero-main">
          <div className="eyebrow">
            Rommco · Intelligent Systems &amp; Automation
          </div>
          <h1>
            Engineering practical technology that makes complex work feel
            simple.
          </h1>
          <p>
            Rommco builds intelligent systems and automation tools for
            businesses and consumers. Rooted in decades of engineering, we
            design practical technology that reduces friction, streamlines
            workflows, and enhances everyday life.
          </p>

          <div className="pill-row">
            <span className="pill">Data automation</span>
            <span className="pill">Workflow intelligence</span>
            <span className="pill">Consumer devices</span>
          </div>

          <div className="hero-actions">
            <a href="/products" className="btn btn-primary">
              Explore products
            </a>
            <a href="/about" className="btn btn-secondary">
              Learn about Rommco
            </a>
          </div>

          {/* <p className="hero-note">
            From regulated industries to everyday households, we build
            technology that slots into real life instead of fighting against it.
          </p> */}
        </div>

        <div className="hero-side">
          <div className="hero-card hero-card--gradient">
            <h3>Efficient & Reliable Operations</h3>
            <p>
              Rommco started as a manufacturing company. That background still
              shapes how we work: build tools that are reliable, understandable,
              and actually used.
            </p>
          </div>
          <div className="hero-card">
            <h3>Across industries</h3>
            <p>
              Our work spans data automation, compliance tooling, workflow
              intelligence, and consumer hardware that quietly removes everyday
              friction.
            </p>
          </div>
          <div className="hero-card">
            <h3>Human-centered outcomes</h3>
            <p>
              We measure success in fewer clicks, fewer manual steps, and less
              cognitive load—so teams can focus on decisions, not busywork.
            </p>
          </div>
        </div>
      </section>

      {/* Where Rommco helps */}
      <section className="section section--split">
        <div className="section-header">
          <h2>Where Rommco fits in.</h2>
          <p className="lead">
            Rommco products sit alongside your existing tools and make them feel
            faster, cleaner, and easier to live with.
          </p>
        </div>
        <div className="kpi-row">
          <div className="kpi-card">
            <div className="kpi-label">For teams</div>
            <h3>Less manual work</h3>
            <p>
              Reduce repetitive tasks across underwriting, review, QA, and
              compliance—without asking teams to learn another massive platform.
            </p>
          </div>
          <div className="kpi-card">
            <div className="kpi-label">For operations</div>
            <h3>Cleaner workflows</h3>
            <p>
              Use automation to surface what matters: missing data, edge cases,
              potential issues, and next steps that are actually actionable.
            </p>
          </div>
          <div className="kpi-card">
            <div className="kpi-label">For consumers</div>
            <h3>Less everyday friction</h3>
            <p>
              Hardware and devices like auto-mute for commercials are designed
              to quietly improve everyday experiences without adding complexity.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
