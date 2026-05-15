import Link from "next/link";

const focusAreas = [
  "ONETOK.AI",
  "Family Content Control App",
  "Indie game development",
];

export default function HomePage() {
  return (
    <main className="mx-auto flex w-full max-w-6xl flex-1 flex-col gap-16 px-6 py-14 sm:px-8 lg:px-10">
      <section className="grid gap-8 rounded-[2rem] border border-stone-200/80 bg-[linear-gradient(135deg,rgba(31,77,63,0.98),rgba(61,122,99,0.9))] px-8 py-10 text-stone-50 shadow-[0_24px_80px_rgba(31,77,63,0.22)] md:grid-cols-[1.35fr_0.85fr] md:px-10 md:py-12">
        <div className="space-y-6">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-stone-200">
            Week 2 React Portfolio
          </p>
          <div className="space-y-4">
            <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-balance sm:text-5xl">
              Zize Wan builds ambitious products at the intersection of AI,
              security, and games.
            </h1>
            <p className="max-w-2xl text-base leading-8 text-stone-100/90 sm:text-lg">
              I am the founder of ONETOK LLC, a full-stack student at CSTU, and
              a builder who cares about turning emerging technology into
              practical products with a strong point of view.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/projects"
              className="rounded-full bg-stone-50 px-5 py-3 text-sm font-semibold text-stone-900 transition hover:-translate-y-0.5 hover:bg-stone-200"
            >
              View My Work
            </Link>
            <Link
              href="/about"
              className="rounded-full border border-stone-200/70 px-5 py-3 text-sm font-semibold text-stone-50 transition hover:-translate-y-0.5 hover:bg-stone-50/10"
            >
              About Me
            </Link>
          </div>
        </div>

        <div className="rounded-[1.5rem] border border-stone-100/15 bg-stone-50/10 p-6 backdrop-blur-sm">
          <p className="text-sm uppercase tracking-[0.28em] text-stone-200/80">
            Current Focus
          </p>
          <ul className="mt-5 space-y-3">
            {focusAreas.map((area) => (
              <li
                key={area}
                className="rounded-2xl border border-stone-100/12 bg-stone-50/10 px-4 py-3 text-sm text-stone-100"
              >
                {area}
              </li>
            ))}
          </ul>
          <div className="mt-6 rounded-2xl bg-stone-950/20 px-4 py-4">
            <p className="text-sm text-stone-100/85">
              Based in the SF Bay Area and exploring how AI-native workflows can
              speed up product execution without sacrificing quality.
            </p>
          </div>
        </div>
      </section>

      <section className="grid gap-6 md:grid-cols-3">
        <article className="rounded-[1.75rem] border border-stone-200 bg-white/90 p-6 shadow-[0_12px_30px_rgba(47,42,36,0.08)]">
          <h2 className="text-xl font-semibold text-stone-900">Builder Mindset</h2>
          <p className="mt-3 text-sm leading-7 text-stone-600">
            From marketing leadership to technical learning, I enjoy moving from
            idea to execution and shipping visible progress.
          </p>
        </article>
        <article className="rounded-[1.75rem] border border-stone-200 bg-[#fff8ef] p-6 shadow-[0_12px_30px_rgba(47,42,36,0.08)]">
          <h2 className="text-xl font-semibold text-stone-900">Security Curiosity</h2>
          <p className="mt-3 text-sm leading-7 text-stone-600">
            My current technical curiosity centers on AI agent security and how
            autonomous systems can fail safely in production.
          </p>
        </article>
        <article className="rounded-[1.75rem] border border-stone-200 bg-[#f4f7f1] p-6 shadow-[0_12px_30px_rgba(47,42,36,0.08)]">
          <h2 className="text-xl font-semibold text-stone-900">Creative Direction</h2>
          <p className="mt-3 text-sm leading-7 text-stone-600">
            I am also interested in wasteland looter-shooter game concepts and
            the storytelling potential of short-form platforms like TikTok.
          </p>
        </article>
      </section>
    </main>
  );
}
