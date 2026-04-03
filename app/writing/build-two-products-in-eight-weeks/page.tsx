import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "When a Ski Trip Injury Led Me to Build Two Products in Eight Weeks",
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
  },
};

export default function Article() {
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

          <a href="/writing" className="text-sm text-neutral-500 hover:text-neutral-900 transition-colors">
            ← Writing
          </a>

          <h1 className="mt-6 text-3xl font-semibold tracking-tight sm:text-4xl">
            When a Ski Trip Injury Led Me to Build Two Products in Eight Weeks
          </h1>
          <p className="mt-3 text-sm text-neutral-400">March 19, 2026</p>

          <hr className="my-10 border-neutral-200" />

          <div className="space-y-5 text-sm leading-7 text-neutral-700">
            <p>
              I don't usually share personal stories. But if you've been thinking about
              starting something and keep putting it off, this might be the push you need.
            </p>

            <p>
              Eight weeks ago, I went on a ski trip to Aspen Snowmass. What was supposed
              to be a simple vacation ended with an accident and a compression fracture
              in my lumbar spine.
            </p>

            <p>
              I was very active before the injury. Suddenly the things I had planned for
              the winter — skiing, running, everything I'd looked forward to — were off
              the table. Evenings and weekends that used to fill themselves were empty.
            </p>

            <p>So I decided to use the time intentionally.</p>

            <p>
              I'm a marketer by day with no engineering background and no experience
              building websites or mobile apps. But I'd been curious about AI-assisted
              building for a while. I wanted to see what I was capable of creating on
              my own, outside of my full-time job.
            </p>

            <p>
              I started with a web app and built it from concept to production in under
              10 days, using tools like ChatGPT and Claude to help modify code and
              integrate APIs.
            </p>

            <p>
              Then I kept going and built{" "}
              <a
                href="https://waylena.com/"
                target="_blank"
                rel="noreferrer"
                className="text-blue-600 hover:underline underline-offset-4"
              >
                Waylena
              </a>{" "}
              — a networking tracker app for professionals who want to be more
              intentional about their careers. The problem isn't that professionals
              don't network. It's that there's no simple, dedicated place to capture
              what happens in those conversations and follow up before the moment
              passes. I believe the problem is real, so I decided to build the solution
              myself.
            </p>

            <p>
              Something I didn't expect from this process: building has made me a
              sharper marketer. Wearing many hats changes how you think about strategy,
              prioritization, and what actually matters to users.
            </p>

            <p>
              What started as a difficult stretch turned into something I'm genuinely
              proud of — two products and a new identity.
            </p>

            <p>
              Eight weeks ago I would have said I'm a marketer. Today I describe myself
              as a marketer and an AI product builder.
            </p>

            <p>
              Sometimes the hardest moments open doors you didn't plan for. The only
              way to see where they lead is to start building.
            </p>
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
