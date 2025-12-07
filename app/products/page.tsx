// app/products/page.tsx

export default function ProductsPage() {
  return (
    <div className="home">
      <section className="section">
        <div className="section-header">
          <h2>Products</h2>
          <p className="lead">
            Rommco builds a portfolio of software and hardware products focused
            on one thing: eliminating friction from how people work and live.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="grid grid-2 products-grid">
          {/* RegTech Automation Suite */}
          <article className="card product-card">
            <div className="product-tag">RegTech &amp; Workflow Automation</div>
            <h3>RegTech Automation Suite</h3>
            <p>
              A family of tools that help teams automate checks, surface
              exceptions, and track policy drift. Instead of manually combing
              through documents and logs, your reviewers see the riskiest or
              most important items first.
            </p>
            <ul className="product-list">
              <li>Detect missing documentation and inconsistencies</li>
              <li>Track adherence to internal policies over time</li>
              <li>Generate audit-ready summaries and exportable reports</li>
            </ul>
            <div className="product-meta">
              <span>
                Good fit for: Compliance, operations, and review teams.
              </span>
              <a href="/pricing" className="product-link">
                View subscription pricing →
              </a>
            </div>
          </article>

          {/* AI Underwriter */}
          <article className="card product-card">
            <div className="product-tag">Decision Support</div>
            <h3>AI Underwriter</h3>
            <p>
              An underwriting decision-support layer that normalizes data, flags
              edge cases, and produces structured summaries to support human
              judgment. Designed as a practical assistant, not a black-box
              decision maker.
            </p>
            <ul className="product-list">
              <li>
                Ingests borrower, deal, or case data from existing systems
              </li>
              <li>Highlights missing information and unusual patterns</li>
              <li>Creates clear, repeatable summaries for human review</li>
            </ul>
            <div className="product-meta">
              <span>
                Good fit for: Lending, risk, credit, and review teams.
              </span>
              <a href="/contact" className="product-link">
                Talk about your use case →
              </a>
            </div>
          </article>

          {/* Auto-Mute Device */}
          <article className="card product-card">
            <div className="product-tag">Consumer &amp; Space Experience</div>
            <h3>Auto-Mute for Commercials &amp; Ads</h3>
            <p>
              A hardware device that detects commercial and ad segments and
              automatically lowers or mutes the volume. Built for people who
              want a calmer environment without changing how they watch TV.
            </p>
            <ul className="product-list">
              <li>Designed to sit quietly alongside your existing setup</li>
              <li>Focuses on loudness and patterns, not content spying</li>
              <li>Configurable behavior for different environments</li>
            </ul>
            <div className="product-meta">
              <span>
                Good fit for: Homes, waiting rooms, senior living, and
                hospitality.
              </span>
              <a href="/pricing" className="product-link">
                Learn about device pricing →
              </a>
            </div>
          </article>

          {/* Pipeline / Labs */}
          <article className="card product-card">
            <div className="product-tag">Rommco Labs</div>
            <h3>In Development</h3>
            <p>
              Rommco Labs explores new ideas across data automation, AI-assisted
              workflows, consumer devices, and quality-of-life tools. Not every
              experiment becomes a product—but each one makes the next solution
              more refined.
            </p>
            <ul className="product-list">
              <li>Prototypes for internal tools and external platforms</li>
              <li>Experiments with signal detection and pattern matching</li>
              <li>Concepts for future consumer and enterprise products</li>
            </ul>
            <div className="product-meta">
              <span>Interested in piloting something early?</span>
              <a href="/contact" className="product-link">
                Join an early access list →
              </a>
            </div>
          </article>
        </div>
      </section>
    </div>
  );
}
