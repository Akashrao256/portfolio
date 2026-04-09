import { ProjectCard } from "@/components/cards/project-card";
import { projects } from "@/lib/content";

export function ProjectsSection() {
  return (
    <div className="space-y-6">
      {projects.map((project) => (
        <ProjectCard key={project.title} {...project} />
      ))}
    </div>
  );
}
