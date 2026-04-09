"use client";

import { useEffect, useMemo, useState } from "react";
import type { SectionItem } from "@/lib/sections";
import { SectionHeader } from "@/components/layout/section-header";
import { SidebarNav } from "@/components/layout/sidebar-nav";

type PortfolioShellProps = {
  sections: SectionItem[];
};

export function PortfolioShell({ sections }: PortfolioShellProps) {
  const [activeSection, setActiveSection] = useState(sections[0]?.id ?? "");

  const activeTitle =
    sections.find((section) => section.id === activeSection)?.title ?? sections[0]?.title ?? "";

  const renderedSections = useMemo(
    () =>
      sections.map(({ id, title, shortLabel, Component }) => (
        <section
          id={id}
          key={id}
          className="scroll-mt-32 rounded-[28px] border border-line bg-[#fbfaf7] p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.9)] transition-colors duration-200 sm:p-8 lg:min-h-[calc(100vh-12rem)] lg:p-10"
          aria-labelledby={`${id}-title`}
        >
          <div className="mb-8 flex items-start justify-between gap-4 border-b border-line pb-5">
            <div>
              <p className="eyebrow">Section {shortLabel}</p>
              <h2 id={`${id}-title`} className="mt-3 text-3xl leading-none text-ink sm:text-[2.6rem]">
                {title}
              </h2>
            </div>
          </div>

          <Component />
        </section>
      )),
    [sections],
  );

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries
          .filter((entry) => entry.isIntersecting)
          .sort((left, right) => right.intersectionRatio - left.intersectionRatio);

        if (visibleEntries[0]?.target.id) {
          setActiveSection(visibleEntries[0].target.id);
        }
      },
      {
        rootMargin: "-20% 0px -55% 0px",
        threshold: [0.2, 0.35, 0.5, 0.7],
      },
    );

    const sectionElements = sections
      .map((section) => document.getElementById(section.id))
      .filter((element): element is HTMLElement => Boolean(element));

    sectionElements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, [sections]);

  return (
    <div className="min-h-screen px-4 py-4 sm:px-6 sm:py-6 lg:px-8 lg:py-8">
      <div className="mx-auto flex min-h-[calc(100vh-2rem)] max-w-[1600px] flex-col overflow-hidden rounded-shell border border-[#d7d1c5] bg-panel shadow-[0_24px_80px_rgba(28,25,23,0.08)] lg:min-h-[calc(100vh-4rem)] lg:flex-row">
        <SidebarNav activeSection={activeSection} sections={sections} />

        <div className="min-w-0 flex-1 border-line lg:border-l">
          <SectionHeader title={activeTitle} />

          <main className="space-y-6 p-4 sm:p-6 lg:space-y-8 lg:p-8">{renderedSections}</main>
        </div>
      </div>
    </div>
  );
}
