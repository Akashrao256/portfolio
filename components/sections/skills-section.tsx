import { SkillCard } from "@/components/cards/skill-card";
import { skillGroups } from "@/lib/content";

export function SkillsSection() {
  return (
    <div className="grid gap-5 xl:grid-cols-[1fr_1fr_0.9fr]">
      {skillGroups.map((group) => (
        <SkillCard
          key={group.title}
          title={group.title}
          description={group.description}
          items={group.items}
        />
      ))}
    </div>
  );
}
