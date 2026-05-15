type ProjectCardProps = {
  title: string;
  description: string;
  tags: string[];
};

export function ProjectCard({
  title,
  description,
  tags,
}: ProjectCardProps) {
  return (
    <article className="rounded-[1.75rem] border border-stone-200 bg-white/90 p-6 shadow-[0_16px_35px_rgba(47,42,36,0.08)] transition hover:-translate-y-1 hover:shadow-[0_22px_45px_rgba(47,42,36,0.12)]">
      <h2 className="text-2xl font-semibold text-stone-900">{title}</h2>
      <p className="mt-4 text-sm leading-7 text-stone-600">{description}</p>
      <ul className="mt-5 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <li
            key={tag}
            className="rounded-full bg-stone-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-stone-600"
          >
            {tag}
          </li>
        ))}
      </ul>
    </article>
  );
}
