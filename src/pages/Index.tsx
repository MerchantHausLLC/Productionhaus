import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import LogoBanner from "@/components/LogoBanner";
import { ValueStats } from "@/components/ValueStats";
import { Solutions } from "@/components/Solutions";
import { Contact } from "@/components/Contact";
import Footer from "@/components/Footer";
import { CookieConsent } from "@/components/CookieConsent";

const Index = () => {
  return (
    <div className="relative min-h-screen overflow-hidden bg-background">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="h-full w-full bg-gradient-to-b from-[hsl(var(--light-bg))] via-[hsla(var(--cyber-teal),0.08)] to-[hsl(var(--background))]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,hsla(var(--crimson),0.14)_0%,transparent_55%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,hsla(var(--cyber-teal),0.12)_0%,transparent_50%)]" />
      </div>
      <Header />
      <main className="relative z-1">
        <Hero />
        <LogoBanner />
        <ValueStats />
        <Solutions />
        <Contact />
      </main>
      <Footer />
      <CookieConsent />
    </div>
  );
};

export default Index;
