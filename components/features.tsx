import {
  Activity,
  Camera,
  Network,
  ShieldCheck,
  type LucideIcon,
} from "lucide-react";

type Feature = {
  icon: LucideIcon;
  title: string;
  body: string;
  bullets: string[];
};

const FEATURES: Feature[] = [
  {
    icon: Network,
    title: "Gossip mesh",
    body: "Messages propagate through a broker mesh via randomized gossip with configurable fanout and TTL. UUID deduplication prevents loops without a central coordinator.",
    bullets: ["Fanout-aware", "TTL-bounded", "No central queue"],
  },
  {
    icon: Camera,
    title: "Chandy-Lamport snapshots",
    body: "Classic distributed systems, running for real: consistent global state capture every 30 seconds, replicated to k=2 peers so snapshots survive broker failure.",
    bullets: ["Consistent cuts", "k=2 replication", "Replay-free recovery"],
  },
  {
    icon: ShieldCheck,
    title: "Automatic failover",
    body: "When a broker dies, the orchestrator picks a recovery path: restore the broker from a fresh snapshot, or redistribute orphaned subscribers to the least-loaded peer.",
    bullets: ["Path A: replacement", "Path B: redistribution", "Detected in 15s"],
  },
  {
    icon: Activity,
    title: "Observability included",
    body: "Every component exposes /status. OTel Collector → Loki for logs, Prometheus for orchestrator metrics, provisioned Grafana dashboards for system health and failover analysis.",
    bullets: ["Structured JSON logs", "Prometheus metrics", "Grafana preloaded"],
  },
];

export function Features() {
  return (
    <section
      id="features"
      className="relative mx-auto max-w-6xl px-6 py-24 sm:py-32"
    >
      <div className="mx-auto mb-16 max-w-2xl text-center">
        <SectionEyebrow>Features</SectionEyebrow>
        <h2 className="mt-4 text-balance text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
          The real algorithms, wired end-to-end.
        </h2>
        <p className="mt-4 text-pretty text-muted">
          Aether implements the same ideas that power Kafka and NATS — gossip,
          consistent snapshots, pull-based reassignment — on top of the Python
          standard library. No dependencies hiding the interesting parts.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {FEATURES.map((feature) => (
          <FeatureCard key={feature.title} feature={feature} />
        ))}
      </div>
    </section>
  );
}

function FeatureCard({ feature }: { feature: Feature }) {
  const Icon = feature.icon;
  return (
    <article className="ring-accent group relative overflow-hidden rounded-2xl bg-surface p-6 transition hover:bg-surface-strong sm:p-8">
      <div className="flex items-center gap-3">
        <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent-soft text-accent">
          <Icon className="h-5 w-5" aria-hidden />
        </span>
        <h3 className="text-lg font-semibold tracking-tight text-foreground">
          {feature.title}
        </h3>
      </div>

      <p className="mt-4 text-sm leading-relaxed text-muted">{feature.body}</p>

      <ul className="mt-5 flex flex-wrap gap-2">
        {feature.bullets.map((b) => (
          <li
            key={b}
            className="rounded-full border border-border bg-background-elevated px-2.5 py-1 font-mono text-[11px] text-muted-strong"
          >
            {b}
          </li>
        ))}
      </ul>
    </article>
  );
}

export function SectionEyebrow({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-3 py-1 text-xs font-medium uppercase tracking-wider text-muted-strong">
      <span className="h-1.5 w-1.5 rounded-full bg-accent" />
      {children}
    </span>
  );
}
