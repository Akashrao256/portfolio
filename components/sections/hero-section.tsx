import { ButtonLink } from "@/components/ui/button-link";
import { heroActions, person } from "@/lib/content";

export function HeroSection() {
  return (
    <div className="grid gap-6 lg:grid-cols-[1.14fr_0.86fr]">
      {/* LEFT SIDE */}
      <div className="surface-card p-6 sm:p-8 lg:p-10">
        <div className="space-y-7">
          {/* NAME (PRIMARY) */}
          <h1 className="max-w-4xl text-[3.4rem] leading-[0.95] text-ink sm:text-[4.5rem] lg:text-[5.5rem] font-serif">
            {person.name}
          </h1>

          {/* ROLE (SECONDARY, REFINED) */}
          <h2 className="max-w-3xl text-[1.6rem] leading-[1.3] text-ink sm:text-[1.9rem] lg:text-[2.1rem] font-semibold">
            {person.role}
          </h2>

          {/* MAIN VALUE (CLEAR BUT NOT COMPETING) */}
          <p className="max-w-3xl text-[1.2rem] leading-[1.65] text-muted sm:text-[1.35rem] lg:text-[1.5rem]">
            {person.headline}
          </p>

          {/* TECH TAGS */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
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

          {/* CTA BUTTONS */}
          <div className="flex flex-wrap gap-3 pt-4">
            {heroActions.map((action) => (
              <ButtonLink
                key={action.label}
                href={action.href}
                variant={action.variant}
              >
                {action.label}
              </ButtonLink>
            ))}
          </div>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="grid gap-4">
        {/* PRIMARY FOCUS */}
        <div className="surface-muted p-5 sm:p-6">
          <p className="eyebrow">Primary Focus</p>
          <p className="mt-3 text-sm leading-6 text-ink sm:text-base sm:leading-7">
            Backend-focused engineering with the ability to build complete,
            production-ready full-stack applications when required.
          </p>
        </div>

        {/* STACK */}
        <div className="surface-muted p-5 sm:p-6">
          <div className="flex items-center justify-between gap-4">
            <p className="eyebrow">Engineering Stack</p>
            <span className="rounded-full border border-line bg-canvas px-3 py-1 text-[11px] font-medium uppercase tracking-[0.18em] text-muted">
              Full-Stack Ready
            </span>
          </div>

          <div className="mt-5 flex flex-wrap gap-3">
            {[
              "Node.js",
              "Express",
              "MongoDB",
              "Java",
              "Spring Boot",
              "MySQL",
            ].map((item) => (
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
