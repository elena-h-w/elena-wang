export default function Home() {
  return (
    <main className="min-h-screen bg-white text-neutral-900 antialiased">
      <div className="mx-auto max-w-3xl px-6 py-16">
        {/* Top row */}
        <div className="flex items-center justify-between">
          <p className="text-sm font-medium text-neutral-700">Elena Wang</p>
        </div>

        {/* Hero */}
        <div className="mt-12">
          <p className="text-sm text-neutral-600">
            Product Marketing & GTM Leader · AI Product Builder
          </p>

          <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
            I build AI-powered tools and translate them into growth.
          </h1>

          <p className="mt-6 text-base leading-7 text-neutral-700">
          Product marketing & GTM leader building and shipping AI-powered workflows 
          to understand how technical capability translates into adoption, usage, 
          and revenue growth. I focus on structured systems, iteration, and 
          the real-world tradeoffs that shape AI product success.
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

                {/* About */}
<section>
  <h2 className="text-sm font-semibold tracking-wide text-neutral-900">
    About
  </h2>

  <div className="mt-6 space-y-4 text-sm leading-6 text-neutral-700">
  <p>
    I’m Elena Wang, a product marketing and GTM leader focused on driving 
    adoption and revenue growth for technology platforms. I’ve partnered 
    closely with Product and Engineering to shape positioning, rollout 
    strategy, and lifecycle programs that translate customer insight into 
    measurable usage and revenue impact.
  </p>

  <p>
   As AI reshapes how products are built and distributed, I’ve been prototyping 
   AI-powered workflows end-to-end using AI-assisted development (“vibe coding”) 
   and deploying them to production. This hands-on experience taught me what it 
   takes to build usable AI products: structured inputs, iteration loops, and 
   tradeoffs around latency and inference cost.
  </p>

  <p>
   My goal is to help AI companies bridge technical capability with clear positioning, 
   combining hands-on product understanding with distribution strategy that drives 
   sustained adoption and growth.
  </p>

  <p>
   Outside of work, I’m an avid traveler who has visited over 50 countries across 
   all seven continents — an experience that deepens my curiosity about how different 
   cultures approach and solve problems, shaping how I think about marketing and 
   building products for diverse users.
  </p>
</div>
</section>

        <hr className="my-12 border-neutral-200" />

        {/* What I've Built */}
        <section>
          <h2 className="text-sm font-semibold tracking-wide text-neutral-900">
            What I've Built
          </h2>

{/* Waylena Project */}
<div className="mt-8 rounded-xl border border-neutral-200 p-6">
  <h3 className="text-lg font-semibold">Waylena</h3>
  <p className="mt-1 text-sm text-neutral-600">
    Mobile-first networking app for professionals
  </p>
  <div className="mt-3 flex flex-wrap gap-4 text-sm">
    <a
      className="text-blue-600 hover:underline underline-offset-4"
      href="https://www.waylena.com/"
      target="_blank"
      rel="noreferrer"
    >
      Live site
    </a>
  </div>

  <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-6 text-neutral-700">
    <li>
      Built iOS app from scratch using Expo/React Native, Supabase, and Mixpanel
    </li>
    <li>
      Designed conversation-centric UX with multi-select topic tagging, follow-up 
      reminders, and networking insights
    </li>
    <li>Launched beta with external testers and structured feedback survey</li>
    <li>Deployed marketing site with Kit email capture and Google Analytics</li>
    <li>App Store submission in progress; Android to follow</li>
  </ul>
  <p className="mt-4 text-sm text-neutral-700">
        This project pushed me into mobile product development — navigating app 
        build pipelines, native UX conventions, and the end-to-end process of 
        shipping to real users on device.
            </p>

  <div className="mt-4 flex flex-wrap gap-2">
    {["Expo", "React Native", "Supabase", "Mixpanel", "Vercel", "GitHub"].map((t) => (
      <span
        key={t}
        className="rounded-full bg-neutral-100 px-3 py-1 text-xs text-neutral-700"
      >
        {t}
      </span>
    ))}
  </div>
</div>

          <div className="mt-6 rounded-xl border border-neutral-200 p-6">
            <h3 className="text-lg font-semibold">Impact Logger</h3>
            <p className="mt-1 text-sm text-neutral-600">
              AI-powered narrative system for structured impact tracking
            </p>
            <div className="mt-3 flex flex-wrap gap-4 text-sm">
  <a
    className="text-blue-600 hover:underline underline-offset-4"
    href="https://impactlogger.vercel.app/"
    target="_blank"
    rel="noreferrer"
  >
    Live demo
  </a>
  <a
    className="text-blue-600 hover:underline underline-offset-4"
    href="https://github.com/elena-h-w/impactlogger"
    target="_blank"
    rel="noreferrer"
  >
    GitHub repo
  </a>
</div>

            <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-6 text-neutral-700">
              <li>
                Built V1 using Lovable and AI-assisted prototyping 
                (&quot;vibe coding&quot;)
              </li>
              <li>
                Rebuilt from Lovable prototype using React, TypeScript, and 
                Supabase for persistent data and auth
              </li>
              <li>
                Integrated Claude API for improved output control and multi-step 
                narrative generation
              </li>
              <li>Integrated PostHog for usage and engagement analytics to track 
                adoption patterns and inform iteration</li>
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
              {["Claude API", "React", "TypeScript", "Supabase", "PostHog", "Vercel", "GitHub"].map((t) => (
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

       {/* Product & Growth Strategy */}
<section>
  <h2 className="text-sm font-semibold tracking-wide text-neutral-900">
    My Product & Growth Strategy
  </h2>

  <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-8">
    <div>
      <h3 className="text-xs font-bold uppercase tracking-wider text-neutral-500">Mobile & Networking</h3>
      <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-6 text-neutral-700">
        <li>Networking utility is built on the follow-up, not the connection.</li>
        <li>Mobile friction is the enemy of data quality and user habit.</li>
        <li>Beta testing validates the "aha moment," not just the code.</li>
        <li>Successful products focus on retention loops over vanity metrics.</li>
      </ul>
    </div>
    <div>
      <h3 className="text-xs font-bold uppercase tracking-wider text-neutral-500">AI & Systems</h3>
      <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-6 text-neutral-700">
        <li>AI features fail without structured input systems.</li>
        <li>Inference cost is a product constraint, not an afterthought.</li>
        <li>Stateful systems outperform one-shot prompts.</li>
        <li>AI is most powerful when embedded in real workflows.</li>
      </ul>
    </div>
  </div>

  <div>
    <p className="text-sm font-semibold text-neutral-900">
      Ultimately, I believe product mechanics and distribution must evolve 
      together—technical capability only matters if the distribution model 
      is built into the product's DNA.
    </p>
  </div>
</section>

        <hr className="my-12 border-neutral-200" />

        {/* CTA */}
        <section>
          <div className="rounded-xl border border-neutral-200 bg-white p-6">
            <h2 className="text-sm font-semibold tracking-wide text-neutral-900">
              Let’s Connect
            </h2>
            <p className="mt-4 text-sm leading-6 text-neutral-700">
              I’m exploring roles in AI product marketing and product-led growth,
              particularly within AI-native teams.
            </p>
            <p className="mt-3 text-sm leading-6 text-neutral-700">
              If you’re building AI products and value operators who combine product
              thinking, GTM strategy, and hands-on AI experimentation, I’d love to connect.
            </p>

            <div className="mt-5 flex flex-wrap gap-4 text-sm">
              <a
                className="text-blue-600 hover:underline underline-offset-4"
                href="https://www.linkedin.com/in/elenawang/"
                target="_blank"
                rel="noreferrer"
              >
                Message me on LinkedIn
              </a>
              <a
                className="text-blue-600 hover:underline underline-offset-4"
                href="mailto:elenawong1031@gmail.com"
              >
                Email me
              </a>
            </div>
          </div>
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
