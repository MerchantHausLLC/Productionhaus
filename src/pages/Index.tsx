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
      {/* Halloween Floating Bats */}
      <div className="fixed top-20 left-0 w-full h-full pointer-events-none z-10 overflow-hidden">
        <div className="bat-animation absolute top-10 text-6xl" style={{ animationDelay: '0s' }}>🦇</div>
        <div className="bat-animation absolute top-32 text-5xl" style={{ animationDelay: '3s', animationDuration: '12s' }}>🦇</div>
        <div className="bat-animation absolute top-64 text-4xl" style={{ animationDelay: '6s', animationDuration: '10s' }}>🦇</div>
      </div>
      
      {/* Halloween Corner Decorations */}
      <div className="fixed top-4 left-4 text-8xl halloween-decoration pointer-events-none z-10 opacity-70">🎃</div>
      <div className="fixed top-4 right-4 text-8xl halloween-decoration pointer-events-none z-10 opacity-70" style={{ animationDelay: '1s' }}>🎃</div>
      
      <Header />
      <main className="relative z-1">
        <Hero />
        
        {/* Halloween Banner */}
        <div className="bg-gradient-to-r from-orange-600 via-purple-700 to-orange-600 py-4 text-center">
          <p className="text-white text-2xl font-bold tracking-wide animate-pulse">
            👻 SPOOKY SEASON SPECIAL 👻
          </p>
        </div>
        
        <LogoBanner />
        <ValueStats />
        
        {/* Overlapping Shield Logo with Halloween Glow */}
        <div className="relative -mt-32 mb-16 z-20 pointer-events-none">
          <div className="flex justify-center">
            <div className="relative animate-fade-in">
              <div className="absolute inset-0 bg-gradient-radial from-orange-500/30 to-purple-600/20 blur-3xl scale-150" />
              <img 
                src={shieldLogo} 
                alt="MerchantHaus Shield" 
                className="h-48 w-48 md:h-64 md:w-64 object-contain drop-shadow-2xl relative z-10 animate-scale-in spooky-glow"
              />
              {/* Floating Pumpkins around Shield */}
              <div className="absolute -left-16 top-8 text-6xl pumpkin-pulse">🎃</div>
              <div className="absolute -right-16 top-8 text-6xl pumpkin-pulse" style={{ animationDelay: '1s' }}>🎃</div>
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
