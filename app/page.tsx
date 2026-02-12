export default function Home() {
  return (
    <main className="min-h-screen bg-white text-neutral-900">
      <div className="mx-auto max-w-3xl px-6 py-16">
        {/* Top row */}
        <div className="flex items-center justify-between">
          <p className="text-sm font-medium text-neutral-700">Elena Wang</p>
        </div>

        {/* Hero */}
        <div className="mt-12">
          <p className="text-sm text-neutral-600">
            Marketing Director · Product Marketing &amp; GTM
          </p>

          <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
            I build AI-powered tools and translate them into growth.
          </h1>

          <p className="mt-6 text-base leading-7 text-neutral-700">
            Marketing leader with hands-on experience prototyping AI products
            using AI-assisted workflows (&quot;vibe coding&quot;), Claude API,
            GitHub, and Vercel. I focus on structured systems, product iteration,
            and inference economics.
          </p>

          <div className="mt-6 flex flex-wrap gap-4 text-sm">
            <a
              className="text-blue-600 hover:underline underline-offset-4"
              href="https://github.com/elena-h-w/"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
            <a
              className="text-blue-600 hover:underline underline-offset-4"
              href="https://www.linkedin.com/in/elenawang/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
            <a
              className="text-blue-600 hover:underline underline-offset-4"
              href="mailto:elenawong1031@gmail.com"
            >
              Email
            </a>
          </div>
        </div>

        <hr className="my-12 border-neutral-200" />

        {/* Selected Work */}
        <section>
          <h2 className="text-sm font-semibold tracking-wide text-neutral-900">
            Featured Project
          </h2>

          <div className="mt-6 rounded-xl border border-neutral-200 p-6">
            <h3 className="text-lg font-semibold">Impact Logger</h3>
            <p className="mt-1 text-sm text-neutral-600">
              AI-powered narrative system for structured impact tracking
            </p>

            <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-6 text-neutral-700">
              <li>
                Explored how structured logs can be transformed into
                performance-ready narratives
              </li>
              <li>
                Built V1 using Lovable and AI-assisted prototyping
                (&quot;vibe coding&quot;)
              </li>
              <li>
                Transitioned to Claude API integration for improved output
                control
              </li>
              <li>Deployed via GitHub and Vercel</li>
              <li>
                Key insight: single-pass LLM prompts fail without multi-step
                abstraction
              </li>
              <li>
                Constraint discovered: inference cost makes naive LLM usage
                unsustainable at scale
              </li>
            </ul>

            <p className="mt-4 text-sm text-neutral-700">
              This project deepened my thinking around AI product architecture,
              cost tradeoffs, and stateful system design.
            </p>

            <div className="mt-4 flex flex-wrap gap-2">
              {["Lovable", "Claude API", "GitHub", "Vercel"].map((t) => (
                <span
                  key={t}
                  className="rounded-full bg-neutral-100 px-3 py-1 text-xs text-neutral-700"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </section>

        <hr className="my-12 border-neutral-200" />

        {/* How I Think */}
        <section>
          <h2 className="text-sm font-semibold tracking-wide text-neutral-900">
            How I Think About AI Products
          </h2>

          <ul className="mt-6 list-disc space-y-2 pl-5 text-sm leading-6 text-neutral-700">
            <li>AI features fail without structured input systems.</li>
            <li>Inference cost is a product constraint, not an afterthought.</li>
            <li>Stateful systems outperform one-shot prompts.</li>
            <li>AI is most powerful when embedded in real workflows.</li>
            <li>Product mechanics and distribution evolve together.</li>
          </ul>
        </section>

        <hr className="my-12 border-neutral-200" />

        {/* Currently Exploring */}
        <section>
          <h2 className="text-sm font-semibold tracking-wide text-neutral-900">
            Currently Exploring
          </h2>

          <ul className="mt-6 list-disc space-y-2 pl-5 text-sm leading-6 text-neutral-700">
            <li>Probabilistic decision systems</li>
            <li>Bias calibration tooling</li>
            <li>AI-assisted structured workflows</li>
          </ul>
        </section>

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
  );
}
