import { projects } from "../../../lib/content";
import SectionHead from "./SectionHead";
import ProjectCard from "./ProjectCard";

export default function Product() {
  return (
    <section>
      <div style={{ maxWidth: 1320, margin: "0 auto" }}>
        <SectionHead
          id="product"
          num="02"
          kicker="Product"
          title="What I've built"
          right={
            <span
              className="mono"
              style={{
                fontSize: 11,
                color: "var(--ink-faint)",
                letterSpacing: "0.14em",
                textTransform: "uppercase",
              }}
            >
              3 shipped{" "}
              <span style={{ color: "var(--rule-2)" }}>·</span>{" "}
              2026
            </span>
          }
        />
        <div
          className="section-pad"
          style={{
            padding: "0 56px 64px",
            display: "flex",
            flexDirection: "column",
            gap: 20,
          }}
        >
          {projects.map((p) => (
            <ProjectCard key={p.name} p={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
