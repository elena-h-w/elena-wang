import { heroHeadline, heroSub, role, role2, socials } from "../../../lib/content";

export default function Hero() {
  return (
    <section className="section-pad" style={{ padding: "88px 56px 96px", maxWidth: 1320, margin: "0 auto" }}>
      <div
        className="hero-grid"
        style={{
          display: "grid",
          gridTemplateColumns: "1.1fr 1fr",
          gap: 80,
          alignItems: "start",
        }}
      >
        {/* Left column */}
        <div>
          {/* Eyebrow */}
          <div
            className="mono"
            style={{
              fontSize: 11,
              color: "var(--ink-faint)",
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              marginBottom: 32,
              display: "flex",
              gap: 12,
              alignItems: "center",
            }}
          >
            {role}{" "}
            <span style={{ color: "var(--rule-2)" }}>·</span>{" "}
            {role2}
          </div>

          {/* h1 */}
          <h1
            style={{
              fontSize: "clamp(36px, 3.5vw, 48px)",
              lineHeight: 1.04,
              letterSpacing: "-0.03em",
              fontWeight: 500,
              marginBottom: 40,
              color: "var(--ink)",
            }}
          >
            {heroHeadline}
          </h1>

          {/* Socials */}
          <div style={{ display: "flex", gap: 20, alignItems: "center", flexWrap: "wrap" }}>
            {socials.map((s, i) => (
              <span key={s.label} style={{ display: "flex", gap: 20, alignItems: "center" }}>
                <a
                  href={s.href}
                  target={s.href.startsWith("mailto") ? undefined : "_blank"}
                  rel={s.href.startsWith("mailto") ? undefined : "noreferrer"}
                  className="link-ink"
                  style={{ fontSize: 13, fontWeight: 500 }}
                >
                  {s.label}
                </a>
                {i < socials.length - 1 && (
                  <span style={{ color: "var(--rule-2)", fontSize: 13, userSelect: "none" }}>·</span>
                )}
              </span>
            ))}
          </div>
        </div>

        {/* Right column — summary aside */}
        <aside
          className="hero-aside"
          style={{
            borderLeft: "1px solid var(--rule)",
            paddingLeft: 36,
            marginTop: "clamp(40px, 5vw, 0px)",
          }}
        >
          <div
            className="mono"
            style={{
              fontSize: 11,
              color: "var(--ink-faint)",
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              marginBottom: 14,
            }}
          >
            Summary
          </div>
          <p style={{ fontSize: 16, lineHeight: 1.7, color: "var(--ink-soft)" }}>
            {heroSub}
          </p>
        </aside>
      </div>
    </section>
  );
}
