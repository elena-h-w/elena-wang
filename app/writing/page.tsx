import type { Metadata } from "next";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Writing",
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
    excerpt:
      "I don't usually share personal stories. But if you've been thinking about starting something and keep putting it off, this might be the push you need.",
    slug: "build-two-products-in-eight-weeks",
  },
];

export default function Writing() {
  return (
    <>
      <Nav activePage="writing" />

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

          <Footer />
        </div>
      </main>
    </>
  );
}
