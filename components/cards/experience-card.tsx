import { memo } from "react";

type ExperienceCardProps = {
  company: string;
  role: string;
  period: string;
  points: string[];
};

export const ExperienceCard = memo(function ExperienceCard({
  company,
  role,
  period,
  points,
}: ExperienceCardProps) {
  return (
    <article className="surface-card surface-card-hover p-5 sm:p-6">
      <div className="flex flex-col gap-3 border-b border-line pb-5 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <h3 className="text-2xl leading-none text-ink">{company}</h3>
          <p className="mt-2 text-base font-medium text-muted">{role}</p>
        </div>
        <p className="eyebrow">{period}</p>
      </div>

      <ul className="mt-5 space-y-3 text-sm leading-7 text-muted">
        {points.map((point) => (
          <li key={point} className="surface-muted px-4 py-3">
            {point}
          </li>
        ))}
      </ul>
    </article>
  );
});
