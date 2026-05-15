const skills = [
  "JavaScript",
  "React & Next.js",
  "Python",
  "AI Agent Security",
  "Product Strategy",
  "Web Development",
];

export default function AboutPage() {
  return (
    <main className="mx-auto flex w-full max-w-5xl flex-1 flex-col gap-10 px-6 py-14 sm:px-8 lg:px-10">
      <section className="rounded-[2rem] border border-stone-200/80 bg-white/85 p-8 shadow-[0_16px_45px_rgba(47,42,36,0.08)] sm:p-10">
        <p className="text-sm font-semibold uppercase tracking-[0.28em] text-stone-500">
          About Me
        </p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight text-stone-900">
          Learning full-stack development with a founder&apos;s eye for product.
        </h1>
        <div className="mt-6 space-y-5 text-base leading-8 text-stone-600">
          <p>
            I am Zize Wan, founder of ONETOK LLC and a student at California
            Science and Technology University. My background includes marketing
            and business management at companies such as Tencent, and I am now
            investing that experience into technical execution.
          </p>
          <p>
            I care most about building useful systems: AI products that feel
            safe and trustworthy, independent game ideas with strong identity,
            and digital tools that move quickly from concept to launch.
          </p>
        </div>
      </section>

      <section className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="rounded-[1.75rem] border border-stone-200 bg-[#f7f3ec] p-7 shadow-[0_12px_35px_rgba(47,42,36,0.07)]">
          <h2 className="text-2xl font-semibold text-stone-900">How I Work</h2>
          <p className="mt-4 text-sm leading-7 text-stone-600">
            I enjoy pairing strategic thinking with hands-on experimentation.
            This course is helping me turn ideas into working interfaces and
            reusable components, one layer at a time.
          </p>
        </div>

        <div className="rounded-[1.75rem] border border-stone-200 bg-white/85 p-7 shadow-[0_12px_35px_rgba(47,42,36,0.07)]">
          <h2 className="text-2xl font-semibold text-stone-900">
            Skills & Interests
          </h2>
          <ul className="mt-5 grid gap-3 sm:grid-cols-2">
            {skills.map((skill) => (
              <li
                key={skill}
                className="rounded-2xl border border-stone-200 bg-stone-50 px-4 py-3 text-sm font-medium text-stone-700"
              >
                {skill}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}
