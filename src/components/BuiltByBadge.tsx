import type { ReactNode } from "react";

// TODO: replace each "#" with Pixel Pursuit Studio's real link once available.
const SOCIAL_LINKS = {
  whatsapp: "#",
  instagram: "#",
  linkedin: "#",
  website: "#",
};

function IconLink({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      title={label}
      className="flex h-8 w-8 items-center justify-center rounded-full text-text-secondary transition-colors hover:bg-bg-subtle hover:text-accent-default"
    >
      {children}
    </a>
  );
}

function WhatsAppIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12.04 2c-5.52 0-10 4.48-10 10 0 1.76.46 3.48 1.34 5L2 22l5.17-1.35A9.96 9.96 0 0 0 12.04 22c5.52 0 10-4.48 10-10s-4.48-10-10-10Zm5.79 14.18c-.24.68-1.38 1.3-1.9 1.33-.5.03-.93.22-3.13-.65-2.65-1.05-4.34-3.74-4.47-3.92-.13-.18-1.07-1.42-1.07-2.7 0-1.29.67-1.92.9-2.18.24-.26.52-.33.7-.33.17 0 .35 0 .5.01.16.01.38-.06.6.46.23.55.78 1.9.85 2.04.07.14.11.3.02.49-.09.19-.14.3-.27.46-.13.16-.28.35-.4.47-.13.13-.27.27-.12.53.15.26.67 1.1 1.44 1.78 1 .88 1.83 1.16 2.1 1.29.26.13.41.11.56-.07.16-.18.66-.77.84-1.03.18-.26.35-.21.6-.12.24.09 1.56.74 1.83.87.26.13.44.19.5.3.07.1.07.6-.17 1.28Z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.75" fill="currentColor" stroke="none" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M6.94 8.5a1.94 1.94 0 1 0 0-3.88 1.94 1.94 0 0 0 0 3.88ZM5.2 10.2h3.48V19H5.2v-8.8ZM10.9 10.2h3.34v1.2h.05c.47-.85 1.6-1.74 3.3-1.74 3.53 0 4.18 2.2 4.18 5.07V19h-3.48v-3.78c0-.9-.02-2.05-1.25-2.05-1.26 0-1.45.95-1.45 1.98V19H10.9v-8.8Z" />
    </svg>
  );
}

function WebsiteIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3c2.5 2.7 2.5 15.3 0 18M12 3c-2.5 2.7-2.5 15.3 0 18" />
    </svg>
  );
}

export function BuiltByBadge() {
  return (
    <div className="fixed bottom-md16 left-md16 z-50 flex items-center gap-sm8 rounded-full border border-border-default bg-bg-primary py-xs4 pl-md16 pr-xs4 shadow">
      <span className="hidden whitespace-nowrap text-sm text-text-secondary sm:inline">
        Built by <span className="font-semibold text-text-primary">Pixel Pursuit Studio</span>
      </span>
      <div className="flex items-center">
        <IconLink href={SOCIAL_LINKS.whatsapp} label="WhatsApp">
          <WhatsAppIcon />
        </IconLink>
        <IconLink href={SOCIAL_LINKS.instagram} label="Instagram">
          <InstagramIcon />
        </IconLink>
        <IconLink href={SOCIAL_LINKS.linkedin} label="LinkedIn">
          <LinkedInIcon />
        </IconLink>
        <IconLink href={SOCIAL_LINKS.website} label="Website">
          <WebsiteIcon />
        </IconLink>
      </div>
    </div>
  );
}
