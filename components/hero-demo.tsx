"use client";

import { ArrowUpRight, Pause, Play, Volume2, VolumeX } from "lucide-react";
import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";

const DEMO_VIDEO = "/demo.mp4";
const DEMO_POSTER = "/demo-poster.jpg";
// The original asset on GitHub — used as the "open ↗" deep link in the chrome
// so visitors can grab a permalink without right-clicking the embedded video.
const DEMO_PAGE =
  "https://github.com/user-attachments/assets/636db222-0e92-4669-b4f3-156c45957012";

export function HeroDemo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [muted, setMuted] = useState(true);
  const [playing, setPlaying] = useState(true);
  const [ready, setReady] = useState(false);

  const toggleSound = useCallback(() => {
    const v = videoRef.current;
    if (!v) return;
    v.muted = !v.muted;
    setMuted(v.muted);
  }, []);

  const togglePlay = useCallback(() => {
    const v = videoRef.current;
    if (!v) return;
    if (v.paused) {
      void v.play();
    } else {
      v.pause();
    }
  }, []);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    const onPlay = () => setPlaying(true);
    const onPause = () => setPlaying(false);
    const onReady = () => setReady(true);
    v.addEventListener("play", onPlay);
    v.addEventListener("pause", onPause);
    v.addEventListener("loadeddata", onReady);
    return () => {
      v.removeEventListener("play", onPlay);
      v.removeEventListener("pause", onPause);
      v.removeEventListener("loadeddata", onReady);
    };
  }, []);

  return (
    <div className="relative mx-auto mt-24 max-w-5xl px-6">
      {/* Status chip above the frame */}
      <div className="mb-5 flex items-center justify-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-3 py-1 text-xs text-muted backdrop-blur">
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-success/70 opacity-75" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-success" />
          </span>
          Live demo — broker failure & Chandy-Lamport recovery
        </div>
      </div>

      {/* Lavender glow behind the frame */}
      <div
        aria-hidden
        className="absolute inset-x-8 top-12 -z-10 h-[70%] rounded-[40px] bg-accent/20 blur-3xl"
      />

      {/* Outer frame */}
      <div className="ring-accent-strong relative overflow-hidden rounded-2xl bg-surface p-1.5 shadow-2xl shadow-accent/10 sm:p-2">
        {/* macOS-style window chrome */}
        <div className="flex items-center justify-between gap-3 border-b border-border/60 px-3 py-2.5">
          <div className="flex items-center gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]/80" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]/80" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]/80" />
          </div>
          <div className="hidden font-mono text-[11px] tracking-tight text-muted sm:block">
            aether://broker-mesh — failover.mp4
          </div>
          <Link
            href={DEMO_PAGE}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 rounded-full border border-border bg-background-elevated/60 px-2.5 py-1 font-mono text-[10px] text-muted-strong transition hover:border-accent/60 hover:text-foreground"
          >
            open
            <ArrowUpRight className="h-3 w-3" aria-hidden />
          </Link>
        </div>

        {/* Video stage */}
        <div
          className="relative aspect-[16/9] w-full overflow-hidden rounded-b-xl bg-background-elevated"
          onClick={togglePlay}
          role="button"
          tabIndex={0}
          aria-label={playing ? "Pause demo" : "Play demo"}
          onKeyDown={(e) => {
            if (e.key === " " || e.key === "Enter") {
              e.preventDefault();
              togglePlay();
            }
          }}
        >
          <video
            ref={videoRef}
            src={DEMO_VIDEO}
            poster={DEMO_POSTER}
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            className={`h-full w-full object-cover transition-opacity duration-500 ${
              ready ? "opacity-100" : "opacity-0"
            }`}
          />

          {/* Poster shown until the first frame is decoded — kills the black flash */}
          {!ready && (
            <div
              aria-hidden
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${DEMO_POSTER})` }}
            />
          )}

          {/* Subtle vignette so chrome blends with the video */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/30"
          />

          {/* Center play overlay (only when paused) */}
          {!playing && ready && (
            <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
              <span className="flex h-16 w-16 items-center justify-center rounded-full border border-border-strong bg-background/70 text-foreground backdrop-blur">
                <Play className="h-6 w-6 translate-x-0.5" aria-hidden />
              </span>
            </div>
          )}

          {/* Bottom-right controls */}
          <div className="absolute right-3 bottom-3 flex items-center gap-2">
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                togglePlay();
              }}
              aria-label={playing ? "Pause" : "Play"}
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border-strong bg-background/70 text-muted-strong backdrop-blur transition hover:border-accent/60 hover:text-foreground"
            >
              {playing ? (
                <Pause className="h-4 w-4" aria-hidden />
              ) : (
                <Play className="h-4 w-4 translate-x-px" aria-hidden />
              )}
            </button>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                toggleSound();
              }}
              aria-label={muted ? "Unmute demo" : "Mute demo"}
              className="inline-flex h-9 items-center gap-1.5 rounded-full border border-border-strong bg-background/70 px-3 text-xs font-medium text-muted-strong backdrop-blur transition hover:border-accent/60 hover:text-foreground"
            >
              {muted ? (
                <>
                  <VolumeX className="h-4 w-4" aria-hidden />
                  <span>Unmute</span>
                </>
              ) : (
                <>
                  <Volume2 className="h-4 w-4" aria-hidden />
                  <span>Mute</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Stats rail */}
      <div className="mt-6 grid w-full grid-cols-1 gap-3 sm:grid-cols-3">
        <Stat label="Failover detected in" value="~15s" />
        <Stat label="Recovery paths" value="2" />
        <Stat label="External queues required" value="0" />
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
