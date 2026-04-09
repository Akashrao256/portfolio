import { ButtonLink } from "@/components/ui/button-link";
import { heroActions, person } from "@/lib/content";

export function HeroSection() {
  return (
    <div className="grid gap-6 lg:grid-cols-[1.14fr_0.86fr]">
      <div className="surface-card p-6 sm:p-8 lg:p-10">
        <p className="eyebrow">J Akash Rao</p>
        <h3 className="mt-4 text-4xl leading-[0.98] text-ink sm:text-5xl lg:text-[4.2rem]">
          {person.role}
        </h3>
        <p className="mt-6 max-w-3xl text-2xl leading-9 text-[#2f2a25] sm:text-[2rem] sm:leading-[1.35]">
          {person.headline}
        </p>
        <p className="mt-4 max-w-2xl text-base leading-8 text-muted sm:text-lg">
          {person.tagline}
        </p>
        <div className="mt-8 h-px w-full bg-line" />
        <h4 className="mt-8 text-5xl leading-[0.94] text-ink sm:text-6xl lg:text-[4.75rem]">
          {person.name}
        </h4>

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
          <p className="eyebrow">Primary Focus</p>
          <p className="mt-3 text-xl leading-8 text-ink sm:text-2xl sm:leading-9">
            Scalable API systems, secure authentication, and backend architecture built for practical use.
          </p>
        </div>
        <div className="surface-card surface-card-hover p-5 sm:p-6">
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
