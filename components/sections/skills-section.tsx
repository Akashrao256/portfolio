import { SkillCard } from "@/components/cards/skill-card";
import { skillGroups } from "@/lib/content";

export function SkillsSection() {
  return (
    <div className="grid gap-5 lg:grid-cols-3">
      {skillGroups.map((group) => (
        <SkillCard key={group.title} title={group.title} items={group.items} />
      ))}
    </div>
  );
}
