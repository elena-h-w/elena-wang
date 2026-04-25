import type { ReactNode } from "react";

type SectionHeadProps = {
  id: string;
  num: string;
  kicker: string;
  title: string;
  right?: ReactNode;
};

export default function SectionHead({ id, num, kicker, title, right }: SectionHeadProps) {
  return (
    <div
      id={id}
      className="scroll-mt-6 section-pad"
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "flex-end",
        padding: "80px 56px 32px",
        borderTop: "1px solid var(--rule)",
      }}
    >
      <div>
        <div
          className="mono"
          style={{
            fontSize: 11,
            color: "var(--ink-faint)",
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            marginBottom: 14,
            paddingTop: 32,
          }}
        >
          § {num}{" "}
          <span style={{ color: "var(--rule-2)" }}>·</span>{" "}
          {kicker}
        </div>
        <h2
          style={{
            fontSize: 36,
            fontWeight: 500,
            letterSpacing: "-0.02em",
            lineHeight: 1.1,
            color: "var(--ink)",
          }}
        >
          {title}
        </h2>
      </div>
      {right && <div>{right}</div>}
    </div>
  );
}
