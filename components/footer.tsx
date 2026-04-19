import Link from "next/link";
import { Github } from "lucide-react";

const REPO_URL = "https://github.com/krishmula/aether";

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-8 px-6 py-12 sm:flex-row sm:items-center">
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2 text-sm font-semibold text-foreground">
            <LogoMark />
            Aether
          </div>
          <p className="max-w-sm text-sm text-muted">
            A distributed pub-sub broker with Chandy-Lamport snapshot recovery.
            Built from TCP sockets up.
          </p>
        </div>

        <div className="flex flex-col gap-3 text-sm text-muted-strong sm:flex-row sm:items-center sm:gap-6">
          <Link
            href={`${REPO_URL}#architecture`}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground"
          >
            Architecture
          </Link>
          <Link
            href={`${REPO_URL}#quick-start`}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground"
          >
            Docs
          </Link>
          <Link
            href="#writeups"
            className="hover:text-foreground"
          >
            Writeups
          </Link>
          <Link
            href={REPO_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-full border border-border-strong bg-surface px-3 py-1.5 text-xs text-foreground hover:border-accent/60"
          >
            <Github className="h-3.5 w-3.5" aria-hidden />
            krishmula/aether
          </Link>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5 text-xs text-muted">
          <span>© {new Date().getFullYear()} Aether. MIT-licensed.</span>
          <span className="font-mono">v0.1 · demo</span>
        </div>
      </div>
    </footer>
  );
}

function LogoMark() {
  return (
    <svg
      aria-hidden
      width="16"
      height="16"
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
