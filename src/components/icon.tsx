import type { SocialIcon } from "@/types/content";

type IconProps = {
  icon: SocialIcon;
  className?: string;
};

export function Icon({ icon, className = "h-5 w-5" }: IconProps) {
  if (icon === "github") {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
        <path d="M9 19c-4.5 1.4-4.5-2.5-6-3m12 6v-3.5a3 3 0 0 0-.9-2.3c3-.3 6.1-1.5 6.1-6.7A5.2 5.2 0 0 0 18.8 6 4.8 4.8 0 0 0 18.7 2S17.5 1.7 15 3.4a13.2 13.2 0 0 0-6 0C6.5 1.7 5.3 2 5.3 2A4.8 4.8 0 0 0 5.2 6a5.2 5.2 0 0 0-1.4 3.5c0 5.2 3.1 6.4 6.1 6.7A3 3 0 0 0 9 18.5V22" />
      </svg>
    );
  }

  if (icon === "linkedin") {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6Z" />
        <path d="M2 9h4v12H2Z" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    );
  }

  if (icon === "email") {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="m4 7 8 6 8-6" />
      </svg>
    );
  }

  if (icon === "x") {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
        <path d="M4 4 20 20" />
        <path d="M20 4 4 20" />
      </svg>
    );
  }

  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <path d="M18 13v6a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h6" />
      <path d="M15 3h6v6" />
      <path d="M10 14 21 3" />
    </svg>
  );
}

