"use client";

import { useState } from "react";
import { ProjectCard } from "@/components/ProjectCard";

const projects = [
  {
    id: 1,
    title: "ClawGuard",
    description:
      "A concept for monitoring AI agents, surfacing risky behavior, and making security signals easier to understand.",
    tags: ["AI", "Security", "JavaScript"],
  },
  {
    id: 2,
    title: "ONETOK Creator Tools",
    description:
      "An aspirational toolkit for short-form creators who need content workflows, audience insights, and faster execution.",
    tags: ["Product", "React", "CSS"],
  },
  {
    id: 3,
    title: "Wasteland Shooter Prototype",
    description:
      "A game design exploration focused on loot loops, survival tension, and strong visual world-building.",
    tags: ["Game Dev", "Design", "Python"],
  },
  {
    id: 4,
    title: "Portfolio Rebuild",
    description:
      "A multi-page Next.js portfolio that upgrades a static personal page into a reusable React project structure.",
    tags: ["React", "Next.js", "JavaScript"],
  },
];

const allTags = ["All", ...new Set(projects.flatMap((project) => project.tags))];

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((project) => project.tags.includes(activeFilter));

  return (
    <main className="mx-auto flex w-full max-w-6xl flex-1 flex-col gap-10 px-6 py-14 sm:px-8 lg:px-10">
      <section className="rounded-[2rem] border border-stone-200/80 bg-white/85 p-8 shadow-[0_16px_45px_rgba(47,42,36,0.08)] sm:p-10">
        <p className="text-sm font-semibold uppercase tracking-[0.28em] text-stone-500">
          Projects
        </p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight text-stone-900">
          Work that reflects what I want to build next.
        </h1>
        <p className="mt-5 max-w-3xl text-base leading-8 text-stone-600">
          This page uses React state to filter projects by tag. Because the
          filter changes in the browser after the page loads, it needs a client
          component and starts with the &quot;use client&quot; directive.
        </p>
      </section>

      <section className="rounded-[1.75rem] border border-stone-200 bg-[#f8f5ef] p-6 shadow-[0_12px_35px_rgba(47,42,36,0.07)]">
        <div className="flex flex-wrap gap-3">
          {allTags.map((tag) => {
            const isActive = activeFilter === tag;
            return (
              <button
                key={tag}
                type="button"
                onClick={() => setActiveFilter(tag)}
                className={`rounded-full border px-4 py-2 text-sm font-semibold transition ${
                  isActive
                    ? "border-stone-900 bg-stone-900 text-stone-50"
                    : "border-stone-300 bg-white text-stone-700 hover:border-stone-900 hover:text-stone-950"
                }`}
              >
                {tag}
              </button>
            );
          })}
        </div>
      </section>

      <section className="grid gap-6 md:grid-cols-2">
        {filteredProjects.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            tags={project.tags}
          />
        ))}
      </section>
    </main>
  );
}
