import { ButtonLink } from "@/components/ui/button-link";
import { heroActions, person } from "@/lib/content";

export function HeroSection() {
  return (
    <div className="grid gap-6 lg:grid-cols-[1.14fr_0.86fr]">
      <div className="surface-card p-6 sm:p-8 lg:p-10">
        <p className="eyebrow">{person.name}</p>
        <h3 className="mt-4 max-w-4xl text-[2.75rem] leading-[0.98] text-ink sm:text-[3.5rem] lg:text-[4.6rem]">
          {person.role}
        </h3>
        <p className="mt-6 max-w-3xl text-[1.35rem] leading-8 text-[#2f2a25] sm:text-[1.7rem] sm:leading-[1.45] lg:text-[1.9rem]">
          {person.headline}
        </p>
        <p className="mt-4 max-w-2xl text-sm leading-7 text-muted sm:text-base sm:leading-8">
          {person.tagline}
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-3">
          <span className="rounded-full border border-line bg-canvas px-4 py-2 text-sm font-medium text-ink">
            Node.js + Express
          </span>
          <span className="rounded-full border border-line bg-canvas px-4 py-2 text-sm font-medium text-ink">
            Spring Boot + MySQL
          </span>
          <span className="rounded-full border border-line bg-canvas px-4 py-2 text-sm font-medium text-ink">
            Authentication + API Design
          </span>
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          {heroActions.map((action) => (
            <ButtonLink key={action.label} href={action.href} variant={action.variant}>
              {action.label}
            </ButtonLink>
          ))}
        </div>
      </div>

      <div className="grid gap-4">
        <div className="surface-muted p-5 sm:p-6">
          <p className="eyebrow">Primary Focus</p>
          <p className="mt-3 text-lg leading-8 text-ink sm:text-xl sm:leading-8">
            Backend systems that are secure, maintainable, and ready for real-world product use.
          </p>
        </div>
        <div className="surface-muted p-5 sm:p-6">
          <div className="flex items-center justify-between gap-4">
            <p className="eyebrow">Engineering Stack</p>
            <span className="rounded-full border border-line bg-canvas px-3 py-1 text-[11px] font-medium uppercase tracking-[0.18em] text-muted">
              Backend Core
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
