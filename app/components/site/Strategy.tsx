import { strategy } from "../../../lib/content";
import SectionHead from "./SectionHead";

export default function Strategy() {
  const { groups, closing } = strategy;

  return (
    <section>
      <div style={{ maxWidth: 1320, margin: "0 auto" }}>
        <SectionHead
          id="strategy"
          num="03"
          kicker="Strategy"
          title="My product & growth strategy"
        />
        <div className="section-pad" style={{ padding: "0 56px 40px" }}>
          {groups.map((g, gi) => (
            <div
              key={g.title}
              style={{ marginBottom: gi < groups.length - 1 ? 32 : 0 }}
            >
              {/* Group label row */}
              <div
                style={{
                  display: "flex",
                  alignItems: "baseline",
                  justifyContent: "space-between",
                  marginBottom: 14,
                }}
              >
                <div
                  className="mono"
                  style={{
                    fontSize: 11,
                    color: "var(--ink)",
                    letterSpacing: "0.14em",
                    textTransform: "uppercase",
                    fontWeight: 500,
                  }}
                >
                  {g.title}
                </div>
                <span
                  className="mono"
                  style={{
                    fontSize: 10,
                    color: "var(--ink-faint)",
                    letterSpacing: "0.12em",
                  }}
                >
                  {String(gi + 1).padStart(2, "0")} /{" "}
                  {String(groups.length).padStart(2, "0")}
                </span>
              </div>

              {/* 2×2 matrix grid */}
              <div
                className="strategy-2col"
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(2, 1fr)",
                  gap: 1,
                  background: "var(--rule)",
                  border: "1px solid var(--rule)",
                  borderRadius: 8,
                  overflow: "hidden",
                }}
              >
                {g.items.map((it, i) => (
                  <div
                    key={i}
                    style={{
                      background: "#fff",
                      padding: "28px",
                      display: "flex",
                      alignItems: "center",
                      minHeight: 140,
                    }}
                  >
                    <p
                      style={{
                        fontSize: 16,
                        lineHeight: 1.45,
                        letterSpacing: "-0.005em",
                        fontWeight: 500,
                        color: "var(--ink)",
                      }}
                    >
                      {it}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}

          {/* Closing callout */}
          <p
            style={{
              fontSize: 18,
              lineHeight: 1.6,
              color: "var(--ink)",
              marginTop: 40,
              maxWidth: 820,
              padding: "24px 28px",
              background: "#fff",
              border: "1px solid var(--rule)",
              borderLeft: "3px solid var(--accent)",
              borderRadius: 8,
            }}
          >
            {closing}
          </p>
        </div>
      </div>
    </section>
  );
}
