// app/contact/page.tsx

export default function ContactPage() {
  return (
    <div className="home">
      <section className="section">
        <div className="section-header">
          <h2>Contact Rommco</h2>
          <p className="lead">
            Whether you&apos;re exploring automation, AI-assisted workflows, or
            you&apos;re curious about our hardware and Labs projects, we&apos;d
            love to hear from you.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="grid grid-2">
          {/* Contact info */}
          <div className="card">
            <h3>Reach out directly</h3>
            <p>
              You can contact Rommco by email with a short note about who you
              are, your team, and what you&apos;re interested in exploring.
            </p>
            <p style={{ marginTop: "0.75rem", fontSize: "0.95rem" }}>
              <strong>Email:</strong>{" "}
              <a href="mailto:srschoonmaker@gmail.com" className="product-link">
                srschoonmaker@gmail.com
              </a>
            </p>
            <p
              style={{
                marginTop: "0.5rem",
                fontSize: "0.9rem",
                color: "#6b7280",
              }}
            >
              Please include any relevant context (industry, team size, current
              tools, timeline) so we can provide a thoughtful response.
            </p>
          </div>

          {/* Contact form – static, opens email client */}
          <div className="card">
            <h3>Send a message</h3>
            <p
              style={{
                fontSize: "0.9rem",
                color: "#6b7280",
                marginBottom: "0.9rem",
              }}
            >
              This form will open your email client with the details filled in.
              You can edit the message before sending.
            </p>
            <form
              className="contact-form"
              action="mailto:sschoonmaker@rommco.com"
              method="post"
              encType="text/plain"
            >
              <div className="form-field">
                <label htmlFor="name">Name</label>
                <input id="name" name="Name" placeholder="Your name" />
              </div>
              <div className="form-field">
                <label htmlFor="email">Email</label>
                <input
                  id="email"
                  name="Email"
                  placeholder="you@example.com"
                  type="email"
                />
              </div>
              <div className="form-field">
                <label htmlFor="company">
                  Company / Organization (optional)
                </label>
                <input
                  id="company"
                  name="Company"
                  placeholder="Company or team name"
                />
              </div>
              <div className="form-field">
                <label htmlFor="message">How can we help?</label>
                <textarea
                  id="message"
                  name="Message"
                  rows={4}
                  placeholder="Tell us briefly about your use case or questions."
                />
              </div>
              <button type="submit" className="btn btn-primary">
                Open email draft
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
