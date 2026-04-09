import { memo } from "react";

type SkillCardProps = {
  title: string;
  items: string[];
};

export const SkillCard = memo(function SkillCard({ title, items }: SkillCardProps) {
  return (
    <article className="surface-card surface-card-hover p-5 sm:p-6">
      <p className="eyebrow">{title}</p>
      <div className="mt-5 flex flex-wrap gap-3">
        {items.map((item) => (
          <span key={item} className="chip">
            {item}
          </span>
        ))}
      </div>
    </article>
  );
});
