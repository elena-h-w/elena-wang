import type { Metadata } from "next";
import Nav from "../../components/site/Nav";
import Footer from "../../components/site/Footer";

export const metadata: Metadata = {
  title: "What Building Three Apps Taught Me That I Didn't Expect | Elena Wang",
  description:
    "What building three apps as a non-technical product marketer taught me about AI-assisted development, vibe coding, mobile vs. web, and shipping products from concept to production.",
  alternates: {
    canonical: "https://elenahw.com/writing/what-building-three-apps-taught-me",
  },
  openGraph: {
    title: "What Building Three Apps Taught Me That I Didn't Expect",
    description:
      "Three months ago I had never shipped an app. Today I have two web apps and one mobile app on the App Store and Google Play. Here's what building them actually taught me.",
    url: "https://elenahw.com/writing/what-building-three-apps-taught-me",
    type: "article",
    publishedTime: "2026-04-27",
    images: ["/og.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "What Building Three Apps Taught Me That I Didn't Expect",
    description:
      "Three months ago I had never shipped an app. Today I have two web apps and one mobile app on the App Store and Google Play. Here's what building them actually taught me.",
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
            headline: "What Building Three Apps Taught Me That I Didn't Expect",
            description:
              "Three months ago I had never shipped an app. Today I have two web apps and one mobile app on the App Store and Google Play. Here's what building them actually taught me.",
            url: "https://elenahw.com/writing/what-building-three-apps-taught-me",
            datePublished: "2026-04-27",
            dateModified: "2026-04-27",
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
              "@id": "https://elenahw.com/writing/what-building-three-apps-taught-me",
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
                April 27, 2026
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
                Article
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
              What Building Three Apps Taught Me That I Didn&apos;t Expect
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
                Three months ago I had never shipped an app. Today I have two web apps and
                one mobile app on the App Store and Google Play. Here&apos;s what building
                them actually taught me.
              </p>

              <p style={{ fontSize: 16, lineHeight: 1.75, color: "var(--ink-soft)" }}>
                <strong style={{ color: "var(--ink)", fontWeight: 500 }}>Mobile is harder than web.</strong>{" "}
                I built my first web app from concept to production in under 10 days.
                Building <a href="https://waylena.com" target="_blank" rel="noreferrer" className="link-accent" style={{ fontWeight: 500 }}>Waylena</a> as a mobile app introduced complexity I hadn&apos;t
                anticipated. App Store and Google Play review processes, platform-specific
                behavior, testing across devices and screen sizes. Web is forgiving.
                Mobile is not.
              </p>

              <p style={{ fontSize: 16, lineHeight: 1.75, color: "var(--ink-soft)" }}>
                <strong style={{ color: "var(--ink)", fontWeight: 500 }}>Prototyping is fast. Debugging is not.</strong>{" "}
                You can have something working in hours. One bug can then consume days. I
                used Claude Code as the main tool throughout every build, and it&apos;s
                genuinely remarkable, but it&apos;s not perfect. The most revealing moment
                came after a stubborn bug was finally resolved. I asked Claude Code why it
                hadn&apos;t tried that solution earlier. It hadn&apos;t defaulted to the
                simplest fix. It started with more complex approaches and only landed on
                the obvious solution later. Now I ask for the simplest possible fix first.
                It saves time and tokens.
              </p>

              <p style={{ fontSize: 16, lineHeight: 1.75, color: "var(--ink-soft)" }}>
                <strong style={{ color: "var(--ink)", fontWeight: 500 }}>How did I ship three apps in three months while working full time?</strong> The
                honest answer starts with a <a href="https://elenahw.com/writing/build-two-products-in-eight-weeks" target="_blank" rel="noreferrer" className="link-accent" style={{ fontWeight: 500 }}>ski injury</a> that kept me home and created time
                I wouldn&apos;t otherwise have had. But circumstance doesn&apos;t ship
                products. What actually got them across the finish line was prioritization
                and perseverance. I kept a daily task list ordered by urgency and
                importance. I learned to close the laptop and listen to my body. Some
                nights a Claude Code session ran long and the bug stayed unfixed.
                Eventually I realized that was okay. Fresh eyes the next day often got
                further than another hour past midnight.
              </p>

              <p style={{ fontSize: 16, lineHeight: 1.75, color: "var(--ink-soft)" }}>
                <strong style={{ color: "var(--ink)", fontWeight: 500 }}>I still can&apos;t write code, but that&apos;s no longer the point.</strong> What
                changed is how I work. AI tools made it possible to own the entire process
                from concept to production — product, engineering, design — in a way that
                simply wasn&apos;t possible a year ago.
              </p>

              <p style={{ fontSize: 16, lineHeight: 1.75, color: "var(--ink-soft)" }}>
                The best way to learn is to build something.
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
