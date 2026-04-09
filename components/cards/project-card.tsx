import { memo } from "react";
import { ButtonLink } from "@/components/ui/button-link";

type ProjectCardProps = {
  title: string;
  subtitle: string;
  meta: string;
  role: string;
  bullets: string[];
  problem: string;
  approach: string;
  solution: string;
  outcome: string;
};

export const ProjectCard = memo(function ProjectCard({
  title,
  subtitle,
  meta,
  role,
  bullets,
  problem,
  approach,
  solution,
  outcome,
}: ProjectCardProps) {
  return (
    <article className="surface-card surface-card-hover overflow-hidden p-5 sm:p-7">
      <div className="flex flex-col gap-5 border-b border-line pb-6 lg:flex-row lg:items-start lg:justify-between">
        <div>
          <p className="eyebrow">{meta}</p>
          <h3 className="mt-3 text-[2rem] leading-none text-ink sm:text-[2.35rem]">{title}</h3>
          <p className="mt-2 text-base leading-7 text-muted">{subtitle}</p>
        </div>

        <div className="surface-muted px-4 py-3 text-sm text-muted">
          <span className="font-semibold text-ink">Role:</span> {role}
        </div>
      </div>

      <div className="grid gap-6 pt-6 xl:grid-cols-[0.88fr_1.12fr]">
        <div className="space-y-5">
          <div className="surface-muted p-4">
            <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-muted">Project Summary</p>
            <p className="mt-3 text-base leading-7 text-ink">
              Backend-led implementation focused on reliability, integration quality, and maintainable API design.
            </p>
          </div>

          <div>
            <h4 className="text-lg text-ink">Highlights</h4>
            <ul className="mt-3 space-y-3 text-sm leading-6 text-muted">
              {bullets.map((bullet) => (
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
          <ContentBlock label="Outcome" content={outcome} />
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

function ContentBlock({ label, content }: { label: string; content: string }) {
  return (
    <div className="surface-muted p-4 transition-colors duration-200 hover:bg-white">
      <p className="eyebrow">{label}</p>
      <p className="mt-3 text-sm leading-7 text-muted">{content}</p>
    </div>
  );
}
