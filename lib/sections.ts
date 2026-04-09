import type { ComponentType } from "react";
import { AboutSection } from "@/components/sections/about-section";
import { AiWorkflowSection } from "@/components/sections/ai-workflow-section";
import { CertificationsSection } from "@/components/sections/certifications-section";
import { ContactSection } from "@/components/sections/contact-section";
import { CurrentlyBuildingSection } from "@/components/sections/currently-building-section";
import { EngineeringPrinciplesSection } from "@/components/sections/engineering-principles-section";
import { ExperienceSection } from "@/components/sections/experience-section";
import { HeroSection } from "@/components/sections/hero-section";
import { ProjectsSection } from "@/components/sections/projects-section";
import { SkillsSection } from "@/components/sections/skills-section";

export type SectionItem = {
  id: string;
  title: string;
  shortLabel: string;
  Component: ComponentType;
};

export const sectionItems: SectionItem[] = [
  { id: "hero", title: "Hero", shortLabel: "01", Component: HeroSection },
  { id: "projects", title: "Projects", shortLabel: "02", Component: ProjectsSection },
  { id: "skills", title: "Skills", shortLabel: "03", Component: SkillsSection },
  { id: "engineering-principles", title: "Engineering Approach", shortLabel: "04", Component: EngineeringPrinciplesSection },
  { id: "experience", title: "Experience", shortLabel: "05", Component: ExperienceSection },
  { id: "certifications", title: "Certifications", shortLabel: "06", Component: CertificationsSection },
  { id: "ai-workflow", title: "AI Workflow", shortLabel: "07", Component: AiWorkflowSection },
  { id: "about", title: "About", shortLabel: "08", Component: AboutSection },
  { id: "currently-building", title: "Currently Building", shortLabel: "09", Component: CurrentlyBuildingSection },
  { id: "contact", title: "Contact", shortLabel: "10", Component: ContactSection },
];
