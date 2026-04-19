import { BookOpen, Clock } from "lucide-react";
import { SectionEyebrow } from "./features";

type Writeup = {
  title: string;
  summary: string;
  readingTime: string;
};

const WRITEUPS: Writeup[] = [
  {
    title: "Chandy-Lamport in 60 seconds",
    summary:
      "A visual walk through consistent global snapshots: why markers work, how Aether injects them, and what a 'consistent cut' actually means on the wire.",
    readingTime: "6 min read",
  },
  {
    title: "Anatomy of a broker failover",
    summary:
      "Play-by-play of Path A and Path B: health polling, snapshot freshness windows, replacement containers, and pull-based subscriber reassignment.",
    readingTime: "10 min read",
  },
  {
    title: "Why Aether doesn't use Kafka",
    summary:
      "A tour of the 3,000-line broker — TCP sockets, gossip fanout, dedup windows — and what you learn by refusing to import a message queue.",
    readingTime: "8 min read",
  },
];

export function Writeups() {
  return (
    <section
      id="writeups"
      className="relative mx-auto max-w-6xl px-6 py-24 sm:py-32"
    >
      <div className="mx-auto mb-14 max-w-2xl text-center">
        <SectionEyebrow>Writeups</SectionEyebrow>
        <h2 className="mt-4 text-balance text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
          Long-form, soon.
        </h2>
        <p className="mt-4 text-pretty text-muted">
          Deep dives into the algorithms Aether is built on. Landing here first
          — subscribe on GitHub to get pinged when they ship.
        </p>
      </div>

      <ul className="grid grid-cols-1 gap-4 md:grid-cols-3">
        {WRITEUPS.map((w) => (
          <li key={w.title}>
            <article
              aria-disabled
              className="ring-accent relative flex h-full flex-col overflow-hidden rounded-2xl bg-surface/60 p-6"
            >
              <div className="absolute right-4 top-4 inline-flex items-center gap-1.5 rounded-full border border-border bg-background-elevated px-2.5 py-1 text-[10px] font-medium uppercase tracking-wider text-muted-strong">
                <Clock className="h-3 w-3" aria-hidden />
                Soon
              </div>

              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent-soft text-accent">
                <BookOpen className="h-5 w-5" aria-hidden />
              </span>

              <h3 className="mt-5 text-lg font-semibold tracking-tight text-foreground">
                {w.title}
              </h3>

              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
                {w.summary}
              </p>

              <div className="mt-6 font-mono text-[11px] uppercase tracking-wider text-muted">
                {w.readingTime}
              </div>
            </article>
          </li>
        ))}
      </ul>
    </section>
  );
}
