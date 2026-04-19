import Link from "next/link";
import { ArrowUpRight, Github } from "lucide-react";
import { HeroDemo } from "./hero-demo";
import { InstallCommand } from "./install-command";

const REPO_URL = "https://github.com/krishmula/aether";
const DEMO_URL =
  "https://github.com/user-attachments/assets/636db222-0e92-4669-b4f3-156c45957012";

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden pt-32 pb-24 sm:pt-40 sm:pb-32">
      <div aria-hidden className="hero-aura" />
      <div aria-hidden className="dot-grid absolute inset-0 -z-10 opacity-40" />

      <div className="mx-auto flex max-w-3xl flex-col items-center px-6 text-center">
        <Link
          href={DEMO_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="group mb-8 inline-flex items-center gap-2 rounded-full border border-border-strong bg-surface/70 py-1 pr-3 pl-1 text-xs text-muted-strong backdrop-blur transition hover:border-accent/50 hover:text-foreground"
        >
          <span className="rounded-full bg-accent px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-background">
            New
          </span>
          <span>Watch a broker die and recover in real time</span>
          <ArrowUpRight className="h-3.5 w-3.5 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </Link>

        <h1 className="text-balance text-5xl font-semibold tracking-tight text-foreground sm:text-6xl md:text-7xl">
          Distributed pub-sub,
          <br />
          <span className="bg-gradient-to-r from-accent to-[#c4b5fd] bg-clip-text text-transparent">
            built from TCP up.
          </span>
        </h1>

        <p className="mx-auto mt-6 max-w-xl text-pretty text-lg leading-relaxed text-muted sm:text-xl">
          Aether is a distributed broker mesh with Chandy-Lamport snapshot
          recovery. Kill a broker, watch the orchestrator restore state from a
          peer, and keep the system live — no Kafka, no Redis, no external queue.
        </p>

        <div className="mt-10 w-full max-w-2xl">
          <InstallCommand />
        </div>

        <div className="mt-6 flex flex-col items-center gap-3 sm:flex-row sm:gap-4">
          <Link
            href={REPO_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex h-11 items-center justify-center gap-2 rounded-full border border-border-strong bg-surface px-5 text-sm font-medium text-foreground transition hover:border-accent/60 hover:bg-surface-strong"
          >
            <Github className="h-4 w-4" aria-hidden />
            View source on GitHub
            <ArrowUpRight className="h-3.5 w-3.5 text-muted transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-foreground" />
          </Link>
        </div>
      </div>

      <HeroDemo />
    </section>
  );
}
