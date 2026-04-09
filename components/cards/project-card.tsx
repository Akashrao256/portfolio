import { memo } from "react";
import { ButtonLink } from "@/components/ui/button-link";

type ProjectCardProps = {
  title: string;
  type: string;
  role: string;
  highlights: string[];
  problem: string;
  approach: string;
  solution: string;
  outcome: string;
};

export const ProjectCard = memo(function ProjectCard({
  title,
  type,
  role,
  highlights,
  problem,
  approach,
  solution,
  outcome,
}: ProjectCardProps) {
  return (
    <article className="surface-card surface-card-hover overflow-hidden p-5 sm:p-7">
      <div className="flex flex-col gap-5 border-b border-line pb-6 lg:flex-row lg:items-start lg:justify-between">
        <div>
          <p className="eyebrow">Project Case Study</p>
          <h3 className="mt-3 text-[2rem] leading-none text-ink sm:text-[2.35rem]">{title}</h3>
        </div>
        <div className="surface-muted px-4 py-3">
          <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-muted">Outcome Focus</p>
          <p className="mt-2 max-w-[20rem] text-sm leading-6 text-ink">{outcome}</p>
        </div>
      </div>

      <div className="grid gap-6 pt-6 xl:grid-cols-[0.88fr_1.12fr]">
        <div className="space-y-5">
          <div className="grid gap-4 sm:grid-cols-2">
            <ContentBlock label="Type" content={type} tone="strong" />
            <ContentBlock label="Role" content={role} tone="strong" />
          </div>

          <div>
            <h4 className="text-lg text-ink">Implementation Highlights</h4>
            <ul className="mt-3 space-y-3 text-sm leading-6 text-muted">
              {highlights.map((bullet) => (
                <li key={bullet} className="surface-muted px-4 py-3">
                  {bullet}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <ContentBlock label="Problem" content={problem} />
          <ContentBlock label="Approach" content={approach} />
          <ContentBlock label="Solution" content={solution} />
          <ContentBlock label="Impact" content={outcome} tone="strong" />
        </div>
      </div>

      <div className="mt-6 flex flex-wrap gap-3">
        <ButtonLink href="#" variant="primary">
          GitHub
        </ButtonLink>
        <ButtonLink href="#" variant="secondary">
          Live Demo
        </ButtonLink>
      </div>
    </article>
  );
});

function ContentBlock({
  label,
  content,
  tone = "default",
}: {
  label: string;
  content: string;
  tone?: "default" | "strong";
}) {
  return (
    <div
      className={`surface-muted p-4 transition-colors duration-200 hover:bg-white ${
        tone === "strong" ? "bg-white" : ""
      }`}
    >
      <p className="eyebrow">{label}</p>
      <p className={`mt-3 leading-7 ${tone === "strong" ? "text-base text-ink" : "text-sm text-muted"}`}>
        {content}
      </p>
    </div>
  );
}
