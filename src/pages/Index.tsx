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
    <div className="min-h-screen bg-background relative overflow-hidden">
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
