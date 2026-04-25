import type { Metadata } from "next";
import Nav from "../components/site/Nav";
import Footer from "../components/site/Footer";

export const metadata: Metadata = {
  title: "Writing | Elena Wang",
  description:
    "Writing on AI product building, go-to-market strategy, product marketing, and lessons learned along the way.",
  alternates: {
    canonical: "https://elenahw.com/writing",
  },
  openGraph: {
    title: "Writing | Elena Wang",
    description:
      "Writing on AI product building, go-to-market strategy, product marketing, and lessons learned along the way.",
    url: "https://elenahw.com/writing",
  },
  twitter: {
    card: "summary_large_image",
    title: "Writing | Elena Wang",
    description:
      "Writing on AI product building, go-to-market strategy, product marketing, and lessons learned along the way.",
    images: ["/og.png"],
  },
};

const articles = [
  {
    title: "When a Ski Trip Injury Led Me to Build Two Products in Eight Weeks",
    date: "March 19, 2026",
    type: "Essay",
    excerpt:
      "I don't usually share personal stories. But if you've been thinking about starting something and keep putting it off, this might be the push you need.",
    slug: "build-two-products-in-eight-weeks",
  },
];

export default function WritingIndex() {
  return (
    <div style={{ minHeight: "100vh", background: "var(--paper)" }}>
      <Nav />

      <main>
        <div style={{ maxWidth: 1320, margin: "0 auto" }}>
          {/* Page header */}
          <div
            className="section-pad"
            style={{
              padding: "64px 56px 48px",
              borderBottom: "1px solid var(--rule)",
            }}
          >
            <a
              href="/"
              className="link-soft"
              style={{ fontSize: 13, fontWeight: 500 }}
            >
              ← Home
            </a>
            <h1
              style={{
                fontSize: "clamp(32px, 4vw, 48px)",
                fontWeight: 500,
                letterSpacing: "-0.025em",
                lineHeight: 1.1,
                color: "var(--ink)",
                marginTop: 24,
                marginBottom: 12,
              }}
            >
              Writing
            </h1>
            <p style={{ fontSize: 15, color: "var(--ink-soft)", lineHeight: 1.6, maxWidth: 560 }}>
              Thoughts on AI product building, go-to-market strategy, and lessons learned along the way.
            </p>
          </div>

          {/* Article list */}
          <div
            className="section-pad"
            style={{ padding: "48px 56px 96px", display: "grid", gap: 16 }}
          >
            {articles.map((article) => (
              <a
                key={article.slug}
                href={`/writing/${article.slug}`}
                className="writing-card"
                style={{ maxWidth: "none" }}
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
                <h2
                  style={{
                    fontSize: 22,
                    fontWeight: 500,
                    letterSpacing: "-0.015em",
                    lineHeight: 1.3,
                    color: "var(--ink)",
                    marginBottom: 10,
                  }}
                >
                  {article.title}
                </h2>

                {/* Excerpt */}
                <p
                  style={{
                    fontSize: 14,
                    color: "var(--ink-soft)",
                    lineHeight: 1.65,
                    marginBottom: 16,
                  }}
                >
                  {article.excerpt}
                </p>

                <span
                  style={{ fontSize: 13, fontWeight: 500, color: "var(--accent)" }}
                >
                  Read more →
                </span>
              </a>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
