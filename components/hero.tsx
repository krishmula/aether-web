import Link from "next/link";
import { ArrowUpRight, Github, PlayCircle } from "lucide-react";
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

          <Link
            href={DEMO_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-11 items-center justify-center gap-2 rounded-full px-5 text-sm font-medium text-muted-strong transition hover:text-foreground"
          >
            <PlayCircle className="h-4 w-4" aria-hidden />
            Watch 90s demo
          </Link>
        </div>
      </div>

      <ReadmeShowcase />
    </section>
  );
}

function ReadmeShowcase() {
  return (
    <div className="mx-auto mt-24 flex max-w-5xl flex-col items-center gap-4 px-6">
      <div className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-3 py-1 text-xs text-muted">
        <span className="h-1.5 w-1.5 rounded-full bg-accent" />
        Live topology — 3 brokers, 2 publishers, 3 subscribers
      </div>

      <div className="ring-accent-strong w-full rounded-2xl bg-surface p-1.5 sm:p-2">
        <div className="relative aspect-[16/9] w-full overflow-hidden rounded-xl bg-background-elevated">
          <SystemDiagram />
        </div>
      </div>

      <div className="grid w-full grid-cols-1 gap-3 sm:grid-cols-3">
        <Stat label="Lines of code" value="~3k" />
        <Stat label="Recovery paths" value="2" />
        <Stat label="Dependencies on Kafka" value="0" />
      </div>
    </div>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="ring-accent rounded-xl bg-surface/60 p-4">
      <div className="font-mono text-2xl font-semibold tracking-tight text-foreground">
        {value}
      </div>
      <div className="mt-1 text-xs uppercase tracking-wider text-muted">
        {label}
      </div>
    </div>
  );
}

function SystemDiagram() {
  // A decorative schematic of the broker mesh — nodes, gossip edges,
  // and a subtle pulsing highlight on one broker to hint at failover.
  return (
    <svg
      viewBox="0 0 800 450"
      className="h-full w-full"
      role="img"
      aria-label="Aether broker mesh with publishers and subscribers"
    >
      <defs>
        <radialGradient id="glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#a78bfa" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#a78bfa" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="edge" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#a78bfa" stopOpacity="0.1" />
          <stop offset="50%" stopColor="#a78bfa" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#a78bfa" stopOpacity="0.1" />
        </linearGradient>
        <pattern
          id="dots"
          width="22"
          height="22"
          patternUnits="userSpaceOnUse"
        >
          <circle cx="1" cy="1" r="1" fill="rgba(255,255,255,0.06)" />
        </pattern>
      </defs>

      <rect width="800" height="450" fill="url(#dots)" />
      <circle cx="400" cy="225" r="220" fill="url(#glow)" />

      {/* Broker mesh */}
      <g stroke="rgba(167,139,250,0.35)" strokeWidth="1.4" strokeDasharray="3 4">
        <line x1="280" y1="225" x2="520" y2="225" />
        <line x1="280" y1="225" x2="400" y2="110" />
        <line x1="520" y1="225" x2="400" y2="110" />
      </g>

      {/* Publisher → broker edges */}
      <g stroke="url(#edge)" strokeWidth="1.6">
        <line x1="100" y1="130" x2="280" y2="225" />
        <line x1="100" y1="320" x2="280" y2="225" />
      </g>

      {/* Broker → subscriber edges */}
      <g stroke="url(#edge)" strokeWidth="1.6">
        <line x1="520" y1="225" x2="700" y2="120" />
        <line x1="520" y1="225" x2="700" y2="225" />
        <line x1="400" y1="110" x2="700" y2="120" />
        <line x1="280" y1="225" x2="700" y2="330" />
      </g>

      {/* Publishers */}
      <NodeBox x={60} y={110} label="pub-0" tone="muted" />
      <NodeBox x={60} y={300} label="pub-1" tone="muted" />

      {/* Brokers */}
      <BrokerNode cx={280} cy={225} label="broker-0" />
      <BrokerNode cx={400} cy={110} label="broker-1" accent />
      <BrokerNode cx={520} cy={225} label="broker-2" />

      {/* Subscribers */}
      <NodeBox x={660} y={100} label="sub-0" tone="muted" />
      <NodeBox x={660} y={205} label="sub-1" tone="muted" />
      <NodeBox x={660} y={310} label="sub-2" tone="muted" />
    </svg>
  );
}

function BrokerNode({
  cx,
  cy,
  label,
  accent,
}: {
  cx: number;
  cy: number;
  label: string;
  accent?: boolean;
}) {
  return (
    <g>
      <circle
        cx={cx}
        cy={cy}
        r={accent ? 28 : 24}
        fill={accent ? "rgba(167,139,250,0.2)" : "rgba(255,255,255,0.04)"}
        stroke={accent ? "#a78bfa" : "rgba(255,255,255,0.2)"}
        strokeWidth="1.4"
      />
      <circle cx={cx} cy={cy} r="5" fill={accent ? "#a78bfa" : "#d4d4d8"} />
      <text
        x={cx}
        y={cy + 48}
        textAnchor="middle"
        fill="#a1a1aa"
        fontFamily="ui-monospace, SFMono-Regular, monospace"
        fontSize="11"
      >
        {label}
      </text>
    </g>
  );
}

function NodeBox({
  x,
  y,
  label,
  tone,
}: {
  x: number;
  y: number;
  label: string;
  tone: "muted" | "accent";
}) {
  const stroke = tone === "accent" ? "#a78bfa" : "rgba(255,255,255,0.18)";
  return (
    <g>
      <rect
        x={x}
        y={y}
        width="80"
        height="40"
        rx="10"
        fill="rgba(255,255,255,0.03)"
        stroke={stroke}
        strokeWidth="1.2"
      />
      <text
        x={x + 40}
        y={y + 25}
        textAnchor="middle"
        fill="#d4d4d8"
        fontFamily="ui-monospace, SFMono-Regular, monospace"
        fontSize="11"
      >
        {label}
      </text>
    </g>
  );
}
