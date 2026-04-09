import { memo } from "react";
import Link from "next/link";
import { cn } from "@/components/ui/cn";

type ButtonLinkProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
};

export const ButtonLink = memo(function ButtonLink({
  href,
  children,
  variant = "primary",
}: ButtonLinkProps) {
  return (
    <Link
      href={href}
      className={cn(
        "inline-flex items-center justify-center rounded-full border px-5 py-3 text-sm font-semibold transition-all duration-200 hover:-translate-y-0.5",
        variant === "primary"
          ? "border-accent bg-accent text-white shadow-[0_10px_20px_rgba(139,0,0,0.14)] hover:bg-[#6f0000] hover:shadow-[0_14px_26px_rgba(139,0,0,0.18)]"
          : "border-line bg-white text-ink hover:border-accent hover:text-accent hover:shadow-[0_12px_24px_rgba(28,25,23,0.06)]",
      )}
    >
      {children}
    </Link>
  );
});
