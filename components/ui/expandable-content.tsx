"use client";

import type { ReactNode } from "react";
import { useId, useState } from "react";

type ExpandableContentProps = {
  preview: ReactNode;
  children: ReactNode;
  collapsedLabel: string;
  expandedLabel: string;
  detailsClassName?: string;
  buttonClassName?: string;
};

export function ExpandableContent({
  preview,
  children,
  collapsedLabel,
  expandedLabel,
  detailsClassName = "",
  buttonClassName = "",
}: ExpandableContentProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const detailsId = useId();

  return (
    <div>
      {preview}

      {isExpanded ? (
        <div id={detailsId} className={detailsClassName}>
          {children}
        </div>
      ) : null}

      <button
        type="button"
        aria-expanded={isExpanded}
        aria-controls={detailsId}
        onClick={() => setIsExpanded((current) => !current)}
        className={`mt-6 inline-flex items-center rounded-full border border-line bg-canvas px-4 py-2 text-sm font-semibold text-ink transition-colors duration-200 hover:border-accent hover:text-accent ${buttonClassName}`}
      >
        {isExpanded ? expandedLabel : collapsedLabel}
      </button>
    </div>
  );
}
