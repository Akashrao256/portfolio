import { CertificationCard } from "@/components/cards/certification-card";
import { certifications } from "@/lib/content";

export function CertificationsSection() {
  return (
    <div className="grid gap-5 lg:grid-cols-3">
      {certifications.map((item) => (
        <CertificationCard key={item.title} {...item} />
      ))}
    </div>
  );
}
