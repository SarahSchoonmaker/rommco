export default function AboutPage() {
  return (
    <div>
      <h1 className="section-title">About Rommco</h1>
      <p className="section-subtitle">
        Rommco started as a manufacturing company decades ago. Today, we&apos;re
        applying the same practical, operations-first mindset to AI, automation,
        and regulatory technology.
      </p>

      <div className="card" style={{ marginTop: "1.5rem" }}>
        <h2 className="card-title">From Parts to Processes</h2>
        <p className="card-body">
          Rommco focuses on tools that remove friction: automating underwriting
          steps, packaging evidence for auditors, and freeing compliance and
          operations teams to focus on judgment—not chasing missing files.
        </p>
        <p className="card-body" style={{ marginTop: "0.75rem" }}>
          Current products are dedicated to broker-dealers, RIAs, lenders, and
          financial firms that want institutional-grade automation without
          enterprise software bloat.
        </p>
      </div>

      {/* <div className="card" style={{ marginTop: "1rem" }}>
        <h2 className="card-title">How We Work</h2>
        <p className="card-body">
          We work with a small number of early partners while we expand our AI
          underwriting and RegTech products. If you&apos;re interested in being
          part of that group, reach out and we&apos;ll schedule a conversation
          before turning on your subscription.
        </p>
        <p className="card-body" style={{ marginTop: "0.75rem" }}>
          For partnership inquiries, email:{" "}
          <a href="mailto:info@rommco.com">info@rommco.com</a>
        </p>
      </div> */}
    </div>
  );
}
