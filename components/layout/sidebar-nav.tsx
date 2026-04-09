import { memo } from "react";
import Link from "next/link";
import type { SectionItem } from "@/lib/sections";
import { cn } from "@/components/ui/cn";

type SidebarNavProps = {
  sections: SectionItem[];
  activeSection: string;
};

export const SidebarNav = memo(function SidebarNav({ sections, activeSection }: SidebarNavProps) {
  return (
    <aside className="sticky top-0 z-20 border-b border-line bg-panel/95 backdrop-blur lg:h-[calc(100vh-4rem)] lg:w-[296px] lg:flex-shrink-0 lg:border-b-0">
      <div className="flex h-full flex-col px-4 py-4 sm:px-6 sm:py-6 lg:px-7 lg:py-8">
        <div className="mb-8 hidden lg:block">
          <p className="eyebrow">Developer OS</p>
          <h1 className="mt-3 text-[2.6rem] leading-none text-ink">Workspace</h1>
          <p className="mt-3 max-w-[18rem] text-sm leading-6 text-muted">
            A modular portfolio shell designed like a focused operating environment.
          </p>
        </div>

        <div className="mb-6 hidden rounded-[22px] border border-line bg-canvas p-4 lg:block">
          <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-muted">Navigation</p>
          <p className="mt-2 text-sm leading-6 text-muted">
            Follow the system view to explore projects, experience, workflow, and contact details.
          </p>
        </div>

        <nav aria-label="Section navigation" className="min-w-0">
          <ul className="flex gap-2 overflow-x-auto pb-2 lg:flex-col lg:gap-3 lg:overflow-visible lg:pb-0">
            {sections.map((section) => {
              const isActive = section.id === activeSection;

              return (
                <li key={section.id} className="min-w-fit lg:min-w-0">
                  <Link
                    href={`#${section.id}`}
                    aria-current={isActive ? "true" : undefined}
                    className={cn(
                      "group flex items-center gap-3 rounded-[20px] border px-4 py-3.5 text-sm transition-all duration-200",
                      isActive
                        ? "border-accent bg-accent text-white shadow-[0_8px_24px_rgba(139,0,0,0.16)]"
                        : "border-transparent bg-canvas text-ink hover:-translate-y-0.5 hover:border-line hover:bg-white hover:shadow-[0_10px_24px_rgba(28,25,23,0.05)]",
                    )}
                  >
                    <span
                      className={cn(
                        "text-[11px] font-semibold uppercase tracking-[0.24em]",
                        isActive ? "text-white/80" : "text-muted",
                      )}
                    >
                      {section.shortLabel}
                    </span>
                    <span className="whitespace-nowrap font-medium">{section.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </aside>
  );
});
