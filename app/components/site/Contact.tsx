import { contact } from "../../../lib/content";
import SectionHead from "./SectionHead";

export default function Contact() {
  return (
    <section>
      <div style={{ maxWidth: 1320, margin: "0 auto" }}>
        <SectionHead
          id="contact"
          num="05"
          kicker="Contact"
          title="Let's connect"
        />
        <div
          className="contact-grid section-pad"
          style={{
            padding: "0 56px 96px",
            display: "grid",
            gridTemplateColumns: "1.2fr 1fr",
            gap: 56,
            alignItems: "start",
            maxWidth: 1100,
          }}
        >
          {/* Left: copy */}
          <div>
            <p
              style={{
                fontSize: 20,
                lineHeight: 1.5,
                letterSpacing: "-0.01em",
                color: "var(--ink)",
                marginBottom: 16,
              }}
            >
              {contact.line1}
            </p>
            <p style={{ fontSize: 15, lineHeight: 1.7, color: "var(--ink-soft)" }}>
              {contact.line2}
            </p>
          </div>

          {/* Right: CTA buttons */}
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            <a
              href="mailto:elenawong1031@gmail.com"
              className="cta-primary"
            >
              <span>Email me</span>
              <span>→</span>
            </a>

            <a
              href="https://www.linkedin.com/in/elenawang/"
              target="_blank"
              rel="noreferrer"
              className="cta-primary"
            >
              <span>Message me on LinkedIn</span>
              <span>→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
