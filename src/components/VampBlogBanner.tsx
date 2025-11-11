import { ArrowRight } from "lucide-react";

export default function VampBlogBanner() {
  return (
    <section className="py-8 px-6">
      <a
        href="/vamp"
        className="block max-w-7xl mx-auto group relative overflow-hidden rounded-2xl transition-all duration-300 hover:scale-[1.01]"
        style={{
          background: "linear-gradient(135deg, hsl(var(--crimson)) 0%, #8B0000 100%)",
          boxShadow: "0 10px 40px rgba(220, 20, 60, 0.3)"
        }}
      >
        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between p-8 md:p-12 gap-6">
          <div className="flex-1 text-white">
            <div className="inline-block px-4 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm font-semibold mb-4">
              Latest Article
            </div>
            <h3 className="text-3xl md:text-4xl font-bold mb-3">
              Visa's VAMP: A New Era for Fraud and Dispute Management
            </h3>
            <p className="text-white/90 text-lg leading-relaxed max-w-2xl">
              Discover how Visa's new Acquirer Monitoring Program is reshaping fraud prevention 
              and dispute management across the payment ecosystem. Learn what it means for your business.
            </p>
          </div>
          
          <div className="flex-shrink-0">
            <div className="flex items-center gap-3 px-8 py-4 bg-white text-crimson rounded-full font-bold text-lg group-hover:gap-5 transition-all duration-300 shadow-lg">
              Read Article
              <ArrowRight className="w-6 h-6" />
            </div>
          </div>
        </div>
        
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
      </a>
    </section>
  );
}
