import { ButtonLink } from "@/components/ui/button-link";
import { contactLinks } from "@/lib/content";

export function ContactSection() {
  return (
    <div className="grid gap-6 lg:grid-cols-[1fr_1fr]">
      <div className="surface-card p-6 sm:p-8">
        <p className="eyebrow">Contact</p>
        <h3 className="mt-4 text-3xl leading-tight text-ink">Let&apos;s build thoughtful backend systems.</h3>
        <p className="mt-4 max-w-xl text-base leading-8 text-muted">
          I&apos;m interested in backend engineering opportunities, practical product work, and systems
          that value clean design and dependable execution.
        </p>
      </div>

      <div className="grid gap-4">
        {contactLinks.map((item) => (
          <div
            key={item.label}
            className="surface-card surface-card-hover flex flex-col gap-4 p-5 sm:flex-row sm:items-center sm:justify-between"
          >
            <div>
              <p className="eyebrow">{item.label}</p>
              <p className="mt-2 break-all text-base leading-7 text-ink">{item.value}</p>
            </div>
            <ButtonLink href={item.href} variant="secondary">
              Open
            </ButtonLink>
          </div>
        ))}
      </div>
    </div>
  );
}
