"use client";

import { PortfolioShell } from "@/components/layout/portfolio-shell";
import { sectionItems } from "@/lib/sections";

export default function Home() {
  return <PortfolioShell sections={sectionItems} />;
}
