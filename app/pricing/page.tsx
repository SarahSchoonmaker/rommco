// app/pricing/page.tsx

export default function PricingPage() {
  return (
    <div className="home">
      {/* Intro */}
      <section className="section">
        <h2>Pricing</h2>
        <p className="lead">
          Rommco pricing is designed to be simple and transparent. Our RegTech
          Automation Suite is offered as a subscription, while our Auto-Mute
          device is available as a one-time purchase (with optional pre-order).
        </p>
      </section>

      {/* RegTech Subscription */}
      <section className="section">
        <h2>RegTech Automation Suite – Subscription</h2>
        <p className="lead">
          Choose a plan that fits your team&apos;s size and complexity. All
          tiers include core automation features and access to product updates.
        </p>

        <div className="grid grid-2">
          {/* Starter */}
          <div className="card">
            <h3>Starter</h3>
            <p className="lead">
              <strong>$350 / month</strong>
            </p>
            <p>
              For small teams that want to introduce automation into their
              compliance and operational review workflows without heavy
              implementation.
            </p>
            <ul
              style={{
                marginTop: "0.75rem",
                paddingLeft: "1.1rem",
                fontSize: "0.9rem",
              }}
            >
              <li>Up to 5 internal users</li>
              <li>Core RegTech Automation Suite features</li>
              <li>Standard support via email</li>
            </ul>
            <div style={{ marginTop: "1rem" }}>
              <a href="/contact" className="btn btn-primary">
                Get started
              </a>
            </div>
          </div>

          {/* Growth */}
          <div className="card">
            <h3>Growth</h3>
            <p className="lead">
              <strong>$750 / month</strong>
            </p>
            <p>
              For growing firms that need broader coverage, higher volume, and
              more flexibility in how automation is integrated into their
              workflows.
            </p>
            <ul
              style={{
                marginTop: "0.75rem",
                paddingLeft: "1.1rem",
                fontSize: "0.9rem",
              }}
            >
              <li>Up to 15 internal users</li>
              <li>Expanded automation and reporting</li>
              <li>Priority support and onboarding guidance</li>
            </ul>
            <div style={{ marginTop: "1rem" }}>
              <a href="/contact" className="btn btn-secondary">
                Talk to us
              </a>
            </div>
          </div>

          {/* Enterprise */}
          <div className="card">
            <h3>Enterprise</h3>
            <p className="lead">
              <strong>Custom</strong>
            </p>
            <p>
              For organizations with complex requirements, multiple business
              units, or specific integration needs. We work with you to design
              the right deployment model.
            </p>
            <ul
              style={{
                marginTop: "0.75rem",
                paddingLeft: "1.1rem",
                fontSize: "0.9rem",
              }}
            >
              <li>Unlimited or large user counts</li>
              <li>Custom rules, integrations, and reporting</li>
              <li>Enhanced onboarding and ongoing support</li>
            </ul>
            <div style={{ marginTop: "1rem" }}>
              <a href="/contact" className="btn btn-secondary">
                Request enterprise pricing
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Auto-Mute Device Pricing */}
      <section className="section">
        <h2>Auto-Mute Commercials &amp; Ads – Device Pricing</h2>
        <p className="lead">
          Our Auto-Mute device is a one-time purchase intended to quietly
          improve everyday viewing experiences at home, in offices, and in
          shared spaces.
        </p>

        <div className="grid grid-2">
          <div className="card">
            <h3>Standard Unit</h3>
            <p className="lead">
              <strong>$149 – one-time</strong>
            </p>
            <p>
              A single Auto-Mute hardware unit designed for a typical home setup
              or small office TV. Detects commercial patterns and reduces or
              mutes volume during loud ads.
            </p>
            <p className="footer-subtext">
              Includes: Device, basic firmware, and standard warranty.
            </p>
          </div>

          <div className="card">
            <h3>Pre-Order / Pilot Program</h3>
            <p className="lead">
              <strong>Early-access pricing – TBD</strong>
            </p>
            <p>
              For early adopters interested in testing Auto-Mute in real
              environments (homes, waiting rooms, senior living, hospitality,
              etc.). Ideal if you&apos;d like to provide feedback and influence
              future features.
            </p>
            <p className="footer-subtext">
              If you&apos;re interested in joining the pilot or pre-order list,
              reach out and we&apos;ll follow up with details.
            </p>
            <div style={{ marginTop: "1rem" }}>
              <a href="/contact" className="btn btn-primary">
                Join pre-order list
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Note / fine print-ish */}
      <section className="section">
        <h2>Next Steps</h2>
        <p>
          Pricing shown here is intentionally simple and may evolve as we gather
          feedback and add features. If you&apos;re not sure which option is
          right for you, we&apos;re happy to have a short conversation and
          recommend a fit.
        </p>
        <p style={{ marginTop: "0.5rem" }}>
          Use the <a href="/contact">contact page</a> to tell us about your use
          case, and we&apos;ll respond with suggestions and next steps.
        </p>
      </section>
    </div>
  );
}
