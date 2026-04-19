import { InstallCommand } from "./install-command";
import { SectionEyebrow } from "./features";

export function CtaBand() {
  return (
    <section className="relative mx-auto max-w-4xl px-6 pb-24 sm:pb-32">
      <div className="ring-accent-strong relative overflow-hidden rounded-3xl bg-surface px-6 py-14 sm:px-12 sm:py-20">
        <div
          aria-hidden
          className="absolute inset-0 -z-10 opacity-50"
          style={{
            background:
              "radial-gradient(60% 60% at 50% 0%, rgba(167,139,250,0.22) 0%, transparent 70%)",
          }}
        />

        <div className="flex flex-col items-center text-center">
          <SectionEyebrow>One command</SectionEyebrow>
          <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl md:text-5xl">
            Boot the whole system locally,
            <br className="hidden sm:block" /> then kill a broker for fun.
          </h2>
          <p className="mt-4 max-w-lg text-pretty text-muted">
            The installer clones the repo, builds the Docker images, and seeds
            a live topology of 3 brokers, 2 publishers, 3 subscribers.
          </p>

          <div className="mt-10 w-full max-w-2xl">
            <InstallCommand />
          </div>
        </div>
      </div>
    </section>
  );
}
