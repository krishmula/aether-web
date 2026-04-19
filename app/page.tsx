import { CtaBand } from "@/components/cta-band";
import { Features } from "@/components/features";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/hero";
import { Nav } from "@/components/nav";
import { Writeups } from "@/components/writeups";

export default function Home() {
  return (
    <>
      <Nav />
      <main className="flex-1">
        <Hero />
        <Features />
        <Writeups />
        <CtaBand />
      </main>
      <Footer />
    </>
  );
}
