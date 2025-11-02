import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import LogoBanner from "@/components/LogoBanner";
import { ValueStats } from "@/components/ValueStats";
import { Solutions } from "@/components/Solutions";
import { Contact } from "@/components/Contact";
import Footer from "@/components/Footer";
import shieldLogo from "@/assets/shield.webp";
import { CookieConsent } from "@/components/CookieConsent";

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <Header />
      <main className="relative z-1">
        <Hero />
        <LogoBanner />
        <ValueStats />
        
        {/* Overlapping Shield Logo */}
        <div className="relative -mt-32 mb-16 z-20 pointer-events-none">
          <div className="flex justify-center">
            <div className="relative animate-fade-in">
              <div className="absolute inset-0 bg-gradient-radial from-crimson/30 to-cyber-teal/20 blur-3xl scale-150" />
              <img 
                src={shieldLogo} 
                alt="MerchantHaus Shield" 
                className="h-48 w-48 md:h-64 md:w-64 object-contain drop-shadow-2xl relative z-10 animate-scale-in"
              />
            </div>
          </div>
        </div>
        
        <Solutions />
        <Contact />
      </main>
      <Footer />
      <CookieConsent />
    </div>
  );
};

export default Index;
