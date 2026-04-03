import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Writing",
  description:
    "Essays and thinking on AI product strategy, GTM, and building in public — from Elena Wang.",
  alternates: {
    canonical: "https://elenahw.com/writing",
  },
  openGraph: {
    title: "Writing | Elena Wang",
    description:
      "Essays and thinking on AI product strategy, GTM, and building in public.",
    url: "https://elenahw.com/writing",
  },
};

const articles = [
  {
    title: "When a Ski Trip Injury Led Me to Build Two Products in Eight Weeks",
    date: "March 19, 2026",
    excerpt:
      "I don't usually share personal stories. But if you've been thinking about starting something and keep putting it off, this might be the push you need.",
    slug: "build-two-products-in-eight-weeks",
  },
];

export default function Writing() {
  return (
    <>
      {/* Sticky top nav */}
      <nav className="sticky top-0 z-10 bg-white/95 backdrop-blur-sm border-b border-neutral-100">
        <div className="mx-auto max-w-3xl px-6 py-3 flex items-center justify-between">
          <a href="/" className="text-sm font-medium text-neutral-900">
            Elena Wang
          </a>
          <div className="flex flex-wrap gap-4 text-sm text-neutral-500">
            <a href="/#about" className="hover:text-neutral-900 transition-colors">About</a>
            <a href="/#product" className="hover:text-neutral-900 transition-colors">Product</a>
            <a href="/#strategy" className="hover:text-neutral-900 transition-colors">Strategy</a>
            <a href="/writing" className="text-neutral-900 font-medium">Writing</a>
            <a href="/#contact" className="hover:text-neutral-900 transition-colors">Contact</a>
          </div>
        </div>
      </nav>

      <main className="min-h-screen bg-white text-neutral-900 antialiased">
        <div className="mx-auto max-w-3xl px-6 py-16">

          <h1 className="text-3xl font-semibold tracking-tight">Writing</h1>
          <p className="mt-3 text-sm text-neutral-600">
            Writing on AI product building, go-to-market strategy, product marketing, and lessons learned along the way.
          </p>

          <hr className="my-10 border-neutral-200" />

          <div className="space-y-10">
            {articles.map((article) => (
              <article key={article.title} className="border-l-2 border-neutral-200 pl-5">
                <p className="text-xs text-neutral-400">{article.date}</p>
                <h2 className="mt-1 text-base font-semibold text-neutral-900">
                  <a
                    href={`/writing/${article.slug}`}
                    className="hover:underline underline-offset-4"
                  >
                    {article.title}
                  </a>
                </h2>
                <p className="mt-2 text-sm leading-6 text-neutral-600">
                  {article.excerpt}
                </p>
                <a
                  href={`/writing/${article.slug}`}
                  className="mt-3 inline-block text-sm text-blue-600 hover:underline underline-offset-4"
                >
                  Read more →
                </a>
              </article>
            ))}
          </div>

          <footer className="mt-16 flex flex-wrap items-center justify-between gap-4 border-t border-neutral-200 pt-8 text-sm text-neutral-600">
            <p>© {new Date().getFullYear()} Elena Wang</p>
            <div className="flex gap-4">
              <a
                className="text-neutral-600 hover:text-neutral-900"
                href="https://github.com/elena-h-w"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
              <a
                className="text-neutral-600 hover:text-neutral-900"
                href="https://www.linkedin.com/in/elenawang/"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
              <a
                className="text-neutral-600 hover:text-neutral-900"
                href="mailto:elenawong1031@gmail.com"
              >
                Email
              </a>
            </div>
          </footer>
        </div>
      </main>
    </>
  );
}
