import Link from "next/link";
import { Github } from "lucide-react";

const REPO_URL = "https://github.com/krishmula/aether";

export function Nav() {
  return (
    <header className="pointer-events-none fixed inset-x-0 top-4 z-50 flex justify-center px-4">
      <nav
        aria-label="Primary"
        className="pointer-events-auto flex w-full max-w-3xl items-center justify-between gap-2 rounded-full border border-border-strong bg-background/70 px-2 py-2 backdrop-blur-xl backdrop-saturate-150 sm:px-3"
      >
        <Link
          href="/"
          className="flex items-center gap-2 rounded-full px-3 py-1.5 text-sm font-semibold tracking-tight text-foreground hover:text-foreground/90"
        >
          <LogoMark />
          <span>Aether</span>
          <span
            aria-hidden
            className="pulse-dot ml-1 h-1.5 w-1.5 rounded-full bg-success"
          />
        </Link>

        <div className="hidden items-center gap-0.5 text-sm text-muted-strong sm:flex">
          <NavLink
            href={`${REPO_URL}#architecture`}
            external
            label="Architecture"
          />
          <NavLink
            href={`${REPO_URL}#quick-start`}
            external
            label="Docs"
          />
          <NavLink href="#writeups" label="Writeups" />
        </div>

        <Link
          href={REPO_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-1.5 rounded-full bg-foreground px-3.5 py-1.5 text-sm font-medium text-background transition hover:bg-foreground/90"
        >
          <Github className="h-3.5 w-3.5" aria-hidden />
          <span>GitHub</span>
        </Link>
      </nav>
    </header>
  );
}

function NavLink({
  href,
  label,
  external,
}: {
  href: string;
  label: string;
  external?: boolean;
}) {
  return (
    <Link
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className="rounded-full px-3 py-1.5 transition hover:bg-surface hover:text-foreground"
    >
      {label}
    </Link>
  );
}

function LogoMark() {
  // A simple, clean mark: three nodes connected by gossip edges.
  // Scales and stays crisp at small sizes.
  return (
    <svg
      aria-hidden
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="text-accent"
    >
      <path
        d="M12 4 L20 18 L4 18 Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
        opacity="0.45"
      />
      <circle cx="12" cy="4" r="2.2" fill="currentColor" />
      <circle cx="20" cy="18" r="2.2" fill="currentColor" />
      <circle cx="4" cy="18" r="2.2" fill="currentColor" />
    </svg>
  );
}
