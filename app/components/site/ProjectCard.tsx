import type { Project } from "../../../lib/content";

export default function ProjectCard({ p }: { p: Project }) {
  return (
    <article
      style={{
        background: "#fff",
        border: "1px solid var(--rule)",
        borderRadius: 8,
      }}
    >
      <div
        className="project-card-inner"
        style={{
          display: "grid",
          gridTemplateColumns: "200px 1fr",
        }}
      >
        {/* Sidebar — stack chips */}
        <div
          className="project-sidebar"
          style={{
            padding: "32px 24px",
            borderRight: "1px solid var(--rule)",
            background: "var(--paper-2)",
            display: "flex",
            flexDirection: "column",
            minHeight: 200,
            borderRadius: "8px 0 0 8px",
          }}
        >
          <div
            className="mono"
            style={{
              fontSize: 10,
              color: "var(--ink-faint)",
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              marginBottom: 10,
            }}
          >
            Stack
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 4 }}>
            {p.stack.map((s) => (
              <span
                key={s}
                className="mono"
                style={{
                  fontSize: 10,
                  padding: "2px 7px",
                  background: "#fff",
                  border: "1px solid var(--rule)",
                  borderRadius: 3,
                  color: "var(--ink-soft)",
                }}
              >
                {s}
              </span>
            ))}
          </div>
        </div>

        {/* Body */}
        <div style={{ padding: 32 }}>
          {/* Name + links */}
          <div
            style={{
              display: "flex",
              alignItems: "baseline",
              justifyContent: "space-between",
              marginBottom: 8,
              gap: 24,
              flexWrap: "wrap",
            }}
          >
            <h3
              style={{
                fontSize: 26,
                fontWeight: 500,
                letterSpacing: "-0.02em",
                lineHeight: 1.2,
                color: "var(--ink)",
              }}
            >
              {p.name}
            </h3>
            <div style={{ display: "flex", gap: 14, flexShrink: 0, flexWrap: "wrap" }}>
              {p.links.map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  target="_blank"
                  rel="noreferrer"
                  className="link-accent"
                  style={{ fontSize: 12, fontWeight: 500 }}
                >
                  {l.label} →
                </a>
              ))}
            </div>
          </div>

          {/* Tagline */}
          <p
            style={{
              fontSize: 15,
              color: "var(--ink-soft)",
              marginBottom: 24,
              maxWidth: 640,
              lineHeight: 1.6,
            }}
          >
            {p.tag}
          </p>

          {/* Bullets */}
          <ul style={{ display: "grid", gap: 9, marginBottom: 20 }}>
            {p.bullets.map((b, j) => (
              <li
                key={j}
                style={{
                  display: "grid",
                  gridTemplateColumns: "14px 1fr",
                  gap: 6,
                  fontSize: 14,
                  lineHeight: 1.6,
                  color: "var(--ink)",
                }}
              >
                <span style={{ color: "var(--ink-faint)" }}>—</span>
                <span>{b}</span>
              </li>
            ))}
          </ul>

          {/* Reflection */}
          <p
            style={{
              fontSize: 15,
              color: "var(--ink-faint)",
              lineHeight: 1.6,
              maxWidth: 640,
              paddingTop: 16,
              borderTop: "1px solid var(--rule)",
            }}
          >
            {p.reflection}
          </p>
        </div>
      </div>
    </article>
  );
}
