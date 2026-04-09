import { engineeringPrinciples } from "@/lib/content";

export function EngineeringPrinciplesSection() {
  return (
    <div className="grid gap-6 lg:grid-cols-[0.92fr_1.08fr]">
      <div className="surface-card p-6 sm:p-8">
        <p className="eyebrow">Engineering Approach</p>
        <h3 className="mt-4 text-3xl leading-tight text-ink sm:text-[2.35rem]">
          How backend systems get designed, not just coded
        </h3>
        <p className="mt-4 max-w-2xl text-base leading-8 text-muted">
          The focus is on building backend systems with clear interfaces, secure defaults, and service
          logic that remains maintainable as requirements grow.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-3">
        {engineeringPrinciples.map((principle) => (
          <article key={principle.title} className="surface-card surface-card-hover p-5">
            <p className="eyebrow">{principle.title}</p>
            <p className="mt-4 text-sm leading-7 text-muted">{principle.description}</p>
          </article>
        ))}
      </div>
    </div>
  );
}
