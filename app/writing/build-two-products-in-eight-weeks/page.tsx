import type { Metadata } from "next";
import Nav from "../../components/site/Nav";
import Footer from "../../components/site/Footer";

export const metadata: Metadata = {
  title: "When a Ski Trip Injury Led Me to Build Two Products in Eight Weeks | Elena Wang",
  description:
    "I don't usually share personal stories. But if you've been thinking about starting something and keep putting it off, this might be the push you need.",
  alternates: {
    canonical: "https://elenahw.com/writing/build-two-products-in-eight-weeks",
  },
  openGraph: {
    title: "When a Ski Trip Injury Led Me to Build Two Products in Eight Weeks",
    description:
      "I don't usually share personal stories. But if you've been thinking about starting something and keep putting it off, this might be the push you need.",
    url: "https://elenahw.com/writing/build-two-products-in-eight-weeks",
    type: "article",
    publishedTime: "2026-03-19",
    images: ["/og.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "When a Ski Trip Injury Led Me to Build Two Products in Eight Weeks",
    description:
      "I don't usually share personal stories. But if you've been thinking about starting something and keep putting it off, this might be the push you need.",
    images: ["/og.png"],
  },
};

export default function Article() {
  return (
    <div style={{ minHeight: "100vh", background: "var(--paper)" }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline:
              "When a Ski Trip Injury Led Me to Build Two Products in Eight Weeks",
            description:
              "I don't usually share personal stories. But if you've been thinking about starting something and keep putting it off, this might be the push you need.",
            url: "https://elenahw.com/writing/build-two-products-in-eight-weeks",
            datePublished: "2026-03-19",
            dateModified: "2026-03-19",
            author: {
              "@type": "Person",
              name: "Elena Wang",
              url: "https://elenahw.com",
            },
            publisher: {
              "@type": "Person",
              name: "Elena Wang",
              url: "https://elenahw.com",
            },
            image: "https://elenahw.com/og.png",
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": "https://elenahw.com/writing/build-two-products-in-eight-weeks",
            },
          }),
        }}
      />
      <Nav />

      <main>
        <div style={{ maxWidth: 1320, margin: "0 auto" }}>
          {/* Article header */}
          <div
            className="section-pad"
            style={{
              padding: "64px 56px 48px",
              borderBottom: "1px solid var(--rule)",
              maxWidth: 820,
              margin: "0 auto",
            }}
          >
            <a
              href="/writing"
              className="link-soft"
              style={{ fontSize: 13, fontWeight: 500 }}
            >
              ← Writing
            </a>

            {/* Meta row */}
            <div
              style={{
                display: "flex",
                gap: 20,
                alignItems: "center",
                marginTop: 28,
                marginBottom: 20,
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
                March 19, 2026
              </span>
              <span style={{ color: "var(--rule-2)" }}>·</span>
              <span
                className="mono"
                style={{
                  fontSize: 11,
                  color: "var(--ink-faint)",
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                }}
              >
                Essay
              </span>
            </div>

            <h1
              style={{
                fontSize: "clamp(28px, 4vw, 44px)",
                fontWeight: 500,
                letterSpacing: "-0.025em",
                lineHeight: 1.15,
                color: "var(--ink)",
              }}
            >
              When a Ski Trip Injury Led Me to Build Two Products in Eight Weeks
            </h1>
          </div>

          {/* Article body */}
          <div
            className="section-pad"
            style={{
              padding: "48px 56px 96px",
              maxWidth: 820,
              margin: "0 auto",
            }}
          >
            <div style={{ display: "grid", gap: 24 }}>
              <p style={{ fontSize: 16, lineHeight: 1.75, color: "var(--ink-soft)" }}>
                I don&apos;t usually share personal stories. But if you&apos;ve been thinking about
                starting something and keep putting it off, this might be the push you need.
              </p>

              <p style={{ fontSize: 16, lineHeight: 1.75, color: "var(--ink-soft)" }}>
                Eight weeks ago, I went on a ski trip to Aspen Snowmass. What was supposed
                to be a simple vacation ended with an accident and a compression fracture
                in my lumbar spine.
              </p>

              <p style={{ fontSize: 16, lineHeight: 1.75, color: "var(--ink-soft)" }}>
                I was very active before the injury. Suddenly the things I had planned for
                the winter — skiing, running, everything I&apos;d looked forward to — were off
                the table. Evenings and weekends that used to fill themselves were empty.
              </p>

              <p style={{ fontSize: 16, lineHeight: 1.75, color: "var(--ink-soft)" }}>
                So I decided to use the time intentionally.
              </p>

              <p style={{ fontSize: 16, lineHeight: 1.75, color: "var(--ink-soft)" }}>
                I&apos;m a marketer by day with no engineering background and no experience
                building websites or mobile apps. But I&apos;d been curious about AI-assisted
                building for a while. I wanted to see what I was capable of creating on
                my own, outside of my full-time job.
              </p>

              <p style={{ fontSize: 16, lineHeight: 1.75, color: "var(--ink-soft)" }}>
                I started with a web app and built it from concept to production in under
                10 days, using tools like ChatGPT and Claude to help modify code and
                integrate APIs.
              </p>

              <p style={{ fontSize: 16, lineHeight: 1.75, color: "var(--ink-soft)" }}>
                Then I kept going and built{" "}
                <a
                  href="https://waylena.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="link-accent"
                  style={{ fontWeight: 500 }}
                >
                  Waylena
                </a>{" "}
                — a networking tracker app for professionals who want to be more
                intentional about their careers. The problem isn&apos;t that professionals
                don&apos;t network. It&apos;s that there&apos;s no simple, dedicated place to capture
                what happens in those conversations and follow up before the moment
                passes. I believe the problem is real, so I decided to build the solution
                myself.
              </p>

              <p style={{ fontSize: 16, lineHeight: 1.75, color: "var(--ink-soft)" }}>
                Something I didn&apos;t expect from this process: building has made me a
                sharper marketer. Wearing many hats changes how you think about strategy,
                prioritization, and what actually matters to users.
              </p>

              <p style={{ fontSize: 16, lineHeight: 1.75, color: "var(--ink-soft)" }}>
                What started as a difficult stretch turned into something I&apos;m genuinely
                proud of — two products and a new identity.
              </p>

              <p style={{ fontSize: 16, lineHeight: 1.75, color: "var(--ink-soft)" }}>
                Eight weeks ago I would have said I&apos;m a marketer. Today I describe myself
                as a marketer and an AI product builder.
              </p>

              <p style={{ fontSize: 16, lineHeight: 1.75, color: "var(--ink-soft)" }}>
                Sometimes the hardest moments open doors you didn&apos;t plan for. The only
                way to see where they lead is to start building.
              </p>
            </div>

            {/* Back link */}
            <div style={{ marginTop: 64, paddingTop: 32, borderTop: "1px solid var(--rule)" }}>
              <a
                href="/writing"
                className="link-soft"
                style={{ fontSize: 13, fontWeight: 500 }}
              >
                ← Back to Writing
              </a>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
