import { memo } from "react";

type SectionHeaderProps = {
  title: string;
};

export const SectionHeader = memo(function SectionHeader({
  title,
}: SectionHeaderProps) {
  return (
    <header className="sticky top-[73px] z-10 border-b border-line bg-panel/92 backdrop-blur lg:top-0">
      <div className="flex items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
        <div className="hidden items-center gap-3 rounded-full border border-line bg-canvas px-4 py-2 sm:flex">
          <span className="h-2 w-2 rounded-full bg-accent" />
          <span className="text-[11px] font-medium uppercase tracking-[0.24em] text-muted">
            Portfolio Shell
          </span>
        </div>
      </div>
    </header>
  );
});
