import { writings } from "../../../lib/content";
import SectionHead from "./SectionHead";

export default function Writing() {
  const featured = writings.slice(0, 3);

  return (
    <section>
      <div style={{ maxWidth: 1320, margin: "0 auto" }}>
        <SectionHead
          id="writing"
          num="04"
          kicker="Writing"
          title="My articles & stories"
          right={
            <a
              href="/writing"
              className="link-accent"
              style={{ fontSize: 13, fontWeight: 500 }}
            >
              View all →
            </a>
          }
        />
        <div className="section-pad" style={{ padding: "0 56px 64px", display: "grid", gap: 16 }}>
          {featured.map((article) => (
            <a
              key={article.slug}
              href={`/writing/${article.slug}`}
              className="writing-card"
            >
              {/* Top row: date + type */}
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginBottom: 16,
                }}
              >
                <span
                  className="mono"
                  style={{
                    fontSize: 11,
                    color: "var(--ink-faint)",
                    letterSpacing: "0.14em",
                    textTransform: "uppercase",
                  }}
                >
                  {article.date}
                </span>
                <span
                  className="mono"
                  style={{
                    fontSize: 11,
                    color: "var(--ink-faint)",
                    letterSpacing: "0.14em",
                    textTransform: "uppercase",
                  }}
                >
                  {article.type}
                </span>
              </div>

              {/* Title */}
              <h3
                style={{
                  fontSize: 20,
                  fontWeight: 500,
                  letterSpacing: "-0.015em",
                  lineHeight: 1.3,
                  color: "var(--ink)",
                  marginBottom: 10,
                }}
              >
                {article.title}
              </h3>

              {/* Dek */}
              <p
                style={{
                  fontSize: 14,
                  color: "var(--ink-soft)",
                  lineHeight: 1.65,
                  marginBottom: 16,
                }}
              >
                {article.dek}
              </p>

              {/* CTA */}
              <span
                style={{
                  fontSize: 13,
                  fontWeight: 500,
                  color: "var(--accent)",
                }}
              >
                Read more →
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
