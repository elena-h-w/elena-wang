import { socials, year } from "../../../lib/content";

export default function Footer() {
  return (
    <footer
      className="section-pad"
      style={{
        borderTop: "1px solid var(--rule)",
        padding: "28px 56px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        maxWidth: 1320,
        margin: "0 auto",
        flexWrap: "wrap",
        gap: 16,
      }}
    >
      <span className="mono" style={{ fontSize: 12, color: "var(--ink-faint)" }}>
        © {year} Elena Wang. All rights reserved.
      </span>
      <div style={{ display: "flex", gap: 20 }}>
        {socials.map((s) => (
          <a
            key={s.label}
            href={s.href}
            target={s.href.startsWith("mailto") ? undefined : "_blank"}
            rel={s.href.startsWith("mailto") ? undefined : "noreferrer"}
            className="link-soft"
            style={{ fontSize: 12 }}
          >
            {s.label}
          </a>
        ))}
      </div>
    </footer>
  );
}
