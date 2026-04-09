import { memo } from "react";
import { ButtonLink } from "@/components/ui/button-link";

type CertificationCardProps = {
  title: string;
  href: string;
};

export const CertificationCard = memo(function CertificationCard({
  title,
  href,
}: CertificationCardProps) {
  return (
    <article className="surface-card surface-card-hover p-5 sm:p-6">
      <p className="eyebrow">Certification</p>
      <h3 className="mt-3 text-2xl leading-tight text-ink">{title}</h3>
      <p className="mt-3 text-sm leading-7 text-muted">
        Placeholder entry ready to be replaced with the exact certification title and issuing body.
      </p>
      <div className="mt-5">
        <ButtonLink href={href} variant="secondary">
          View Credential
        </ButtonLink>
      </div>
    </article>
  );
});
