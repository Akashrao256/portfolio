import { cn } from "@/components/ui/cn";

type EmptyCardProps = {
  eyebrow: string;
  title: string;
  compact?: boolean;
};

export function EmptyCard({ eyebrow, title, compact = false }: EmptyCardProps) {
  return (
    <div
      className={cn(
        "rounded-[20px] border border-dashed border-line bg-panel p-5 sm:p-6",
        compact ? "min-h-[220px]" : "min-h-[320px]",
      )}
    >
      <p className="text-xs font-semibold uppercase tracking-[0.24em] text-accent">{eyebrow}</p>
      <h3 className="mt-3 text-2xl text-ink">{title}</h3>
      <div className="mt-6 grid gap-3">
        <div className="h-3 w-full rounded-full bg-line/70" />
        <div className="h-3 w-5/6 rounded-full bg-line/60" />
        <div className="h-3 w-4/6 rounded-full bg-line/50" />
      </div>
    </div>
  );
}
