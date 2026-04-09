import { ButtonLink } from "@/components/ui/button-link";
import { heroActions, person } from "@/lib/content";

export function HeroSection() {
  return (
    <div className="grid gap-6 lg:grid-cols-[1.14fr_0.86fr]">
      <div className="surface-card p-6 sm:p-8 lg:p-10">
        <p className="eyebrow">{person.role}</p>
        <h3 className="mt-5 text-5xl leading-[0.94] text-ink sm:text-6xl lg:text-[4.75rem]">
          {person.name}
        </h3>
        <p className="mt-6 max-w-2xl text-2xl leading-9 text-[#2f2a25]">{person.headline}</p>
        <p className="mt-5 max-w-2xl text-base leading-8 text-muted">{person.tagline}</p>

        <div className="mt-8 flex flex-wrap gap-3">
          {heroActions.map((action) => (
            <ButtonLink key={action.label} href={action.href} variant={action.variant}>
              {action.label}
            </ButtonLink>
          ))}
        </div>
      </div>

      <div className="grid gap-4">
        <div className="surface-card surface-card-hover p-5 sm:p-6">
          <p className="eyebrow">Focus</p>
          <p className="mt-3 text-2xl leading-9 text-ink">
            Backend systems, authentication, API design, and practical AI-assisted engineering workflows.
          </p>
        </div>
        <div className="surface-card surface-card-hover p-5 sm:p-6">
          <div className="flex items-center justify-between gap-4">
            <p className="eyebrow">Stack</p>
            <span className="rounded-full border border-line bg-canvas px-3 py-1 text-[11px] font-medium uppercase tracking-[0.18em] text-muted">
              Core Tools
            </span>
          </div>
          <div className="mt-5 flex flex-wrap gap-3">
            {["Node.js", "Express", "MongoDB", "Java", "Spring Boot", "MySQL"].map((item) => (
              <span key={item} className="chip">
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
