import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import LogoBanner from "@/components/LogoBanner";
import { ValueStats } from "@/components/ValueStats";
import { Solutions } from "@/components/Solutions";
import { Contact } from "@/components/Contact";
import Footer from "@/components/Footer";
import shieldLogo from "@/assets/shield.webp";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <LogoBanner />
        <ValueStats />
        
        {/* Overlapping Shield Logo */}
        <div className="relative -mt-32 mb-16 z-20 pointer-events-none">
          <div className="flex justify-center">
            <div className="relative animate-fade-in">
              <div className="absolute inset-0 bg-gradient-radial from-crimson/20 to-transparent blur-3xl scale-150" />
              <img 
                src={shieldLogo} 
                alt="MerchantHaus Shield" 
                className="h-48 w-48 md:h-64 md:w-64 object-contain drop-shadow-2xl relative z-10 animate-scale-in"
                style={{ filter: 'drop-shadow(0 20px 40px rgba(139, 0, 0, 0.3))' }}
              />
            </div>
          </div>
        </div>
        
        <Solutions />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
