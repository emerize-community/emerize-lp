import type { Project } from "../../lib/data/projects";

export default function ProjectCard({ title, description, category }: Project) {
  return (
    <article className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition hover:shadow-md sm:p-10">
      <span className="text-xs font-semibold tracking-wider text-emerald-600">
        {category}
      </span>
      <h3 className="mt-4 text-xl font-semibold tracking-tight text-slate-900">{title}</h3>
      <p className="mt-4 flex-1 text-[15px] leading-relaxed text-slate-600">{description}</p>
    </article>
  );
}
