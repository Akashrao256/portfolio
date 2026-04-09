import { SkillCard } from "@/components/cards/skill-card";
import { skillGroups } from "@/lib/content";

export function SkillsSection() {
  return (
    <div className="space-y-6">
      <div className="surface-muted p-5 sm:p-6">
        <p className="eyebrow">Technical Focus</p>
        <p className="mt-3 max-w-3xl text-base leading-8 text-ink">
          Backend engineering is the center of the stack: API contracts, authentication, service logic,
          and database-backed application design across JavaScript and Java ecosystems.
        </p>
      </div>
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
    </div>
  );
}
