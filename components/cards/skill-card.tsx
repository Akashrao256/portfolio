import { memo } from "react";

type SkillCardProps = {
  title: string;
  description?: string;
  items: string[];
};

export const SkillCard = memo(function SkillCard({ title, description, items }: SkillCardProps) {
  return (
    <article className="surface-card surface-card-hover p-5 sm:p-6">
      <p className="eyebrow">{title}</p>
      <h3 className="mt-3 text-2xl leading-none text-ink">{title}</h3>
      {description ? <p className="mt-3 text-sm leading-7 text-muted">{description}</p> : null}
      <div className="mt-6 flex flex-wrap gap-3">
        {items.map((item) => (
          <span key={item} className="chip">
            {item}
          </span>
        ))}
      </div>
    </article>
  );
});
