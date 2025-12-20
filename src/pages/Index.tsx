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
import { PricingSection } from "@/components/PricingSection";
import ChristmasDecorations from "@/components/ChristmasDecorations";

const Index = () => {
  const softGradientRef = useParallax<HTMLDivElement>({ speed: 0.04 });
  const crimsonGlowRef = useParallax<HTMLDivElement>({ speed: 0.08 });
  const tealGlowRef = useParallax<HTMLDivElement>({ speed: 0.12 });

  return (
    <div className="relative min-h-screen overflow-hidden bg-background">
      {/* Christmas Decorations */}
      <ChristmasDecorations />
      <div className="pointer-events-none absolute inset-0 -z-10">
        {/* Soft gradient background layer */}
        <div
          ref={softGradientRef}
          className="h-full w-full bg-gradient-to-b from-[hsl(var(--light-bg))] via-[hsla(var(--cyber-teal),0.08)] to-[hsl(var(--background))]"
        />
        {/* Crimson accent glow */}
        <div
          ref={crimsonGlowRef}
          className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,hsla(var(--crimson),0.14)_0%,transparent_55%)]"
        />
        {/* Teal accent glow */}
        <div
          ref={tealGlowRef}
          className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,hsla(var(--cyber-teal),0.12)_0%,transparent_50%)]"
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
        <Reveal direction="right" delay={200}>
          <PricingSection />
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
