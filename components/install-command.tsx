"use client";

import { Check, Copy, Terminal } from "lucide-react";
import { useState } from "react";

const INSTALL_COMMAND =
  "curl -fsSL https://raw.githubusercontent.com/krishmula/aether/main/installaether.sh | bash";

export function InstallCommand() {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(INSTALL_COMMAND);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      // Clipboard may be unavailable (http, sandboxed); fall back silently.
    }
  }

  return (
    <div className="w-full">
      <div className="ring-accent-strong relative flex w-full items-center gap-3 overflow-hidden rounded-2xl bg-surface px-4 py-3.5 text-left sm:px-5 sm:py-4">
        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-accent-soft text-accent">
          <Terminal className="h-4.5 w-4.5" aria-hidden />
        </span>

        <div className="flex-1 overflow-x-auto">
          <code className="block whitespace-nowrap font-mono text-[13px] leading-6 text-muted-strong sm:text-sm">
            <span className="text-accent">$</span>{" "}
            <span className="text-foreground">{INSTALL_COMMAND}</span>
            <span className="cursor-blink ml-0.5 inline-block h-4 w-[7px] translate-y-0.5 bg-accent align-middle" />
          </code>
        </div>

        <button
          type="button"
          onClick={handleCopy}
          aria-label={copied ? "Copied" : "Copy install command"}
          className="group relative flex h-9 shrink-0 items-center gap-1.5 rounded-xl border border-border-strong bg-background-elevated px-3 text-xs font-medium text-muted-strong transition hover:border-accent/60 hover:bg-surface-strong hover:text-foreground"
        >
          {copied ? (
            <>
              <Check className="h-3.5 w-3.5 text-success" aria-hidden />
              <span className="text-success">Copied</span>
            </>
          ) : (
            <>
              <Copy className="h-3.5 w-3.5" aria-hidden />
              <span>Copy</span>
            </>
          )}
        </button>
      </div>

      <p className="mt-3 text-center text-xs text-muted sm:text-left">
        Requires Git, Docker with Compose, <code className="font-mono">make</code>,{" "}
        <code className="font-mono">curl</code>, and{" "}
        <code className="font-mono">python3</code>. macOS, Linux, or WSL2.
      </p>
    </div>
  );
}
