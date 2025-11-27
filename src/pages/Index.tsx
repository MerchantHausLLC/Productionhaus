import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import LogoBanner from "@/components/LogoBanner";
import { ValueStats } from "@/components/ValueStats";
import { Solutions } from "@/components/Solutions";
import { Contact } from "@/components/Contact";
import Footer from "@/components/Footer";
import { CookieConsent } from "@/components/CookieConsent";
import ClientResources from "@/components/ClientResources";
import VampBlogBanner from "@/components/VampBlogBanner";
import { useParallax } from "@/hooks/use-parallax";
import { Reveal } from "@/components/Reveal";
/* ===== THANKSGIVING DECORATION IMPORT - START ===== */
import { ThanksgivingDecorations } from "@/components/ThanksgivingDecorations";
/* ===== THANKSGIVING DECORATION IMPORT - END ===== */

const Index = () => {
  const softGradientRef = useParallax<HTMLDivElement>({ speed: 0.04 });
  const crimsonGlowRef = useParallax<HTMLDivElement>({ speed: 0.08 });
  const tealGlowRef = useParallax<HTMLDivElement>({ speed: 0.12 });

  return (
    <div className="relative min-h-screen overflow-hidden bg-background">
      {/* ===== THANKSGIVING DECORATIONS COMPONENT - START ===== */}
      <ThanksgivingDecorations />
      {/* ===== THANKSGIVING DECORATIONS COMPONENT - END ===== */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        {/* ORIGINAL GRADIENT (for revert): bg-gradient-to-b from-[hsl(var(--light-bg))] via-[hsla(var(--cyber-teal),0.08)] to-[hsl(var(--background))] */}
        <div
          ref={softGradientRef}
          className="h-full w-full bg-gradient-to-b from-[hsl(30,50%,95%)] via-[hsla(35,80%,50%,0.08)] to-[hsl(var(--background))]"
        />
        {/* ORIGINAL GRADIENT (for revert): bg-[radial-gradient(circle_at_15%_20%,hsla(var(--crimson),0.14)_0%,transparent_55%)] */}
        <div
          ref={crimsonGlowRef}
          className="thanksgiving-autumn-glow absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,hsla(30,100%,50%,0.15)_0%,transparent_55%)]"
        />
        {/* ORIGINAL GRADIENT (for revert): bg-[radial-gradient(circle_at_80%_70%,hsla(var(--cyber-teal),0.12)_0%,transparent_50%)] */}
        <div
          ref={tealGlowRef}
          className="thanksgiving-harvest-glow absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,hsla(45,100%,50%,0.12)_0%,transparent_50%)]"
        />
      </div>
      <Header />
      <main className="relative z-1">
        <Hero />
        <Reveal direction="up">
          <LogoBanner />
        </Reveal>
        <Reveal direction="right" delay={100}>
          <ValueStats />
        </Reveal>
        <Reveal direction="left" delay={150}>
          <Solutions />
        </Reveal>
        <Reveal direction="up" delay={200}>
          <VampBlogBanner />
        </Reveal>
        <Reveal direction="right" delay={250}>
          <ClientResources />
        </Reveal>
        <Reveal direction="up" delay={300}>
          <Contact />
        </Reveal>
      </main>
      <Footer />
      <CookieConsent />
    </div>
  );
};

export default Index;
