import { memo } from "react";
import { ButtonLink } from "@/components/ui/button-link";
import { ExpandableContent } from "@/components/ui/expandable-content";

type ProjectCardProps = {
  title: string;
  summary: string;
  type: string;
  role: string;
  stack: string[];
  highlights: string[];
  problem: string;
  approach: string;
  solution: string;
  outcome: string;
};

export const ProjectCard = memo(function ProjectCard({
  title,
  summary,
  type,
  role,
  stack,
  highlights,
  problem,
  approach,
  solution,
  outcome,
}: ProjectCardProps) {
  return (
    <article className="surface-card surface-card-hover overflow-hidden p-5 sm:p-7">
      <ExpandableContent
        collapsedLabel="View Details"
        expandedLabel="Hide Details"
        detailsClassName="pt-6"
        preview={
          <div className="space-y-5 border-b border-line pb-6">
            <div>
              <p className="eyebrow">Project Case Study</p>
              <h3 className="mt-3 text-[2rem] leading-none text-ink sm:text-[2.35rem]">{title}</h3>
              <p className="mt-3 max-w-3xl text-base leading-7 text-muted">{summary}</p>
            </div>

            <div className="flex flex-wrap gap-3">
              {stack.map((item) => (
                <span key={item} className="chip">
                  {item}
                </span>
              ))}
            </div>
          </div>
        }
      >
        <div className="grid gap-6 xl:grid-cols-[0.88fr_1.12fr]">
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
            <ContentBlock label="Outcome" content={outcome} tone="strong" />
          </div>
        </div>
      </ExpandableContent>

      <div className="mt-4 flex flex-wrap gap-3">
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
