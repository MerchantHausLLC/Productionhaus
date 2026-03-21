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
import { Reveal } from "@/components/Reveal";
import { PricingSection } from "@/components/PricingSection";
import { PageSEO } from "@/components/PageSEO";

const Index = () => {
  return (
    <div className="relative min-h-screen bg-background">
      <PageSEO
        title="Plug In, Play and Process"
        description="Empowering merchants and ISOs through tailored retail solutions for payment processing. Accept cards, ACH, and secure pay links online, in-store, or on the go."
        path="/"
      />
      <Header />
      <main className="relative z-1">
        <Hero />
        <Reveal direction="up">
          <LogoBanner />
        </Reveal>
        <Reveal direction="up" delay={100}>
          <ValueStats />
        </Reveal>
        <Reveal direction="up" delay={100}>
          <Solutions />
        </Reveal>
        <Reveal direction="up" delay={100}>
          <VampBlogBanner />
        </Reveal>
        <Reveal direction="up" delay={100}>
          <PricingSection />
        </Reveal>
        <Reveal direction="up" delay={100}>
          <ClientResources />
        </Reveal>
        <Reveal direction="up" delay={100}>
          <Contact />
        </Reveal>
      </main>
      <Footer />
      <CookieConsent />
    </div>
  );
};

export default Index;
