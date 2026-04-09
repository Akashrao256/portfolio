import { ExperienceCard } from "@/components/cards/experience-card";
import { experiences } from "@/lib/content";

export function ExperienceSection() {
  return (
    <div className="grid gap-5 lg:grid-cols-2">
      {experiences.map((experience) => (
        <ExperienceCard key={experience.company} {...experience} />
      ))}
    </div>
  );
}
