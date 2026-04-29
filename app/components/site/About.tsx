import { about } from "../../../lib/content";
import SectionHead from "./SectionHead";

export default function About() {
  return (
    <section>
      <div style={{ maxWidth: 1320, margin: "0 auto" }}>
        <SectionHead
          id="about"
          num="01"
          kicker="About"
          title="My background & interests"
        />
        <div
          className="section-pad about-grid"
          style={{
            padding: "0 56px 64px",
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: "40px 56px",
            maxWidth: 1100,
          }}
        >
          {about.map((p, i) => (
            <p
              key={i}
              style={{ fontSize: 15, lineHeight: 1.75, color: "var(--ink-soft)" }}
            >
              {p}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
