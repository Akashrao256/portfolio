import { EmptyCard } from "@/components/cards/empty-card";

type SectionPlaceholderProps = {
  eyebrow: string;
};

export function SectionPlaceholder({ eyebrow }: SectionPlaceholderProps) {
  return (
    <div className="grid gap-4 lg:grid-cols-[1.2fr_0.8fr]">
      <EmptyCard eyebrow={eyebrow} title="Content area reserved" />
      <EmptyCard eyebrow="Structure" title="Future module space" compact />
    </div>
  );
}
