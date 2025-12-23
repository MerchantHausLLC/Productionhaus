import React, { useEffect } from "react";
import { Header } from "@/components/Header";
import Footer from "@/components/Footer";

const App: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#FDFDFD] text-neutral-800 selection:bg-[#00CEDB]/20">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Ubuntu:wght@500;700&family=Montserrat:wght@700&display=swap');

        body { 
          font-family: 'Inter', sans-serif; 
          line-height: 1.8; 
          -webkit-font-smoothing: antialiased;
        }

        .post-container { 
          max-width: 740px; 
          margin: 0 auto;
        }

        h2 {
          font-family: 'Ubuntu', sans-serif;
          font-size: 2.5rem;
          font-weight: 700;
          color: #0A2A43;
          margin-top: 4.5rem;
          margin-bottom: 1.5rem;
          line-height: 1.1;
          letter-spacing: -0.02em;
        }

        h3 {
          font-family: 'Ubuntu', sans-serif;
          font-size: 1.65rem;
          font-weight: 600;
          color: #0F5E82;
          margin-top: 3rem;
          margin-bottom: 1rem;
          line-height: 1.2;
        }

        p {
          margin-bottom: 2rem;
          font-size: 1.15rem;
          color: #374151;
        }

        .section-heading {
          border-left: 6px solid #DC143C;
          padding-left: 1.5rem;
          margin-left: -1.5rem;
        }

        /* Drop Cap for the Introduction */
        .drop-cap::first-letter {
          font-family: 'Ubuntu', sans-serif;
          font-weight: 700;
          float: left;
          font-size: 4.8rem;
          line-height: 0.85;
          padding-right: 0.8rem;
          padding-top: 0.4rem;
          color: #DC143C;
        }

        .callout-box {
          border-radius: 12px;
          padding: 2.5rem;
          margin: 4rem 0;
          border-left: 6px solid;
          box-shadow: 0 10px 25px -15px rgba(0,0,0,0.05);
        }

        .callout-teal {
          background-color: #F0FDFA;
          border-color: #00CEDB;
        }

        .callout-crimson {
          background-color: #FFF5F5;
          border-color: #DC143C;
        }

        .article-list {
          margin: 2.5rem 0;
        }

        .article-list li {
          margin-bottom: 1.25rem;
          padding-left: 2rem;
          position: relative;
          font-size: 1.125rem;
          list-style: none;
        }

        .article-list li::before {
          content: "";
          position: absolute;
          left: 0;
          top: 0.7rem;
          width: 12px;
          height: 3px;
          background-color: #DC143C;
        }

        sup a {
          text-decoration: none;
          color: #DC143C;
          font-weight: 700;
          margin-left: 1px;
        }

        /* Hero Text Shadow to maintain readability without an overlay */
        .hero-text-shadow {
          text-shadow: 0 4px 12px rgba(0,0,0,0.5);
        }

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-up { animation: fadeUp 0.8s ease-out forwards; }
      `}</style>

      <Header />

      {/* Hero Header: NO OVERLAY as requested. Using standard background reference. */}
      <header className="relative w-full h-[65vh] flex items-end pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/blog-images/prediction.webp"
            alt="Professional woman working at her laptop with AI and payment icons"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full animate-fade-up hero-text-shadow">
          <div className="inline-block px-4 py-1.5 bg-[#DC143C] text-white font-ubuntu text-xs font-bold tracking-[0.2em] uppercase mb-8 shadow-xl">
            Market Analysis 2026
          </div>
          <h1 className="font-ubuntu font-bold text-5xl sm:text-7xl lg:text-8xl text-white leading-tight mb-8">
            Beyond The <span className="text-[#00CEDB] italic">Hype</span>
          </h1>
          <p className="font-medium text-xl md:text-2xl text-white max-w-2xl leading-relaxed">
            Why 2026 will reset our expectations for AI and accelerate the adoption of SaaS-embedded payments.
          </p>
        </div>
      </header>

      {/* Article Content */}
      <main className="px-6 py-24 bg-white">
        <article className="post-container">
          <section className="mb-16">
            <h2 className="section-heading">Introduction</h2>
            <p className="drop-cap">
              Artificial intelligence (AI) has dominated headlines for the last few years. Generative models like
              ChatGPT captured the public imagination and triggered a gold rush of venture funding. At the same
              time, software‑as‑a‑service (SaaS) providers have quietly been transforming the way merchants accept
              payments, turning a once‑complex process into a few clicks. What happens when the hype cycle slows
              and the real business value comes into focus?
            </p>
            <p>
              This article looks ahead to 2026 and argues that the coming year will be a tipping point: AI
              expectations will correct toward reality, while SaaS‑driven payment solutions will become the
              default choice for merchants.
            </p>
          </section>

          <section className="mb-16">
            <h2 className="section-heading">AI Hype Is Cooling</h2>
            <h3>1. Exponential Expectations vs. Linear Progress</h3>
            <p>
              The last three years saw extraordinary hype around generative AI. Billions of dollars flowed into
              large language models (LLMs) with the promise of imminent disruption. Yet recent research shows
              that returns on these investments have been minimal.<sup><a href="#fn1" id="ref1">[1]</a></sup>
            </p>

            <div className="callout-box callout-crimson">
              <h4 className="font-ubuntu font-bold text-[#DC143C] mb-3 uppercase text-xs tracking-widest">Key Performance Insight</h4>
              <p className="text-lg text-neutral-800 font-medium mb-0">
                Fewer than one third of decision-makers can tie AI investments to actual revenue growth, leading 
                to a deferral of 25% of planned spending into late 2027.
              </p>
            </div>

            <h3>2. The Inevitability of Hallucination</h3>
            <p>
              Large language models are powerful prediction engines, but they are not omniscient. Studies show
              that hallucination—confidently generating incorrect information—is mathematically inevitable.
              probabilistic models cannot eliminate hallucinations.<sup><a href="#fn3" id="ref3">[3]</a></sup> 
              In practical terms, this means LLMs should not be trusted with critical decisions without human 
              oversight—particularly in regulated industries like payments.
            </p>
          </section>

          <section className="mb-16">
            <h2 className="section-heading">SaaS Payments: The New Standard</h2>
            <p>
              While AI fever cools, the rise of embedded payments and humanless merchant onboarding is accelerating. 
              SaaS platforms are becoming the primary gateway for commerce.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-10">
              <div className="p-8 bg-neutral-50 rounded-xl border border-neutral-100">
                <div className="text-3xl font-bold text-[#00CEDB] mb-2">50%+</div>
                <p className="text-sm text-neutral-600 font-medium mb-0 leading-snug">
                  Of merchants now obtain payment services via software vendors rather than traditional banks.
                </p>
              </div>
              <div className="p-8 bg-neutral-50 rounded-xl border border-neutral-100">
                <div className="text-3xl font-bold text-[#DC143C] mb-2">$6.5T</div>
                <p className="text-sm text-neutral-600 font-medium mb-0 leading-snug">
                  Projected value of the embedded payments market by the end of 2025.
                </p>
              </div>
            </div>

            <ul className="article-list">
              <li>
                <strong>Instant Onboarding:</strong> Leading platforms can now onboard merchants in under five minutes, 
                eliminating days of manual underwriting.<sup><a href="#fn7" id="ref7">[7]</a></sup>
              </li>
              <li>
                <strong>Vertical Integration:</strong> Adoption of embedded payments has reached 65% in specific sectors like 
                Food & Beverage and Professional Services.
              </li>
            </ul>

            <div className="callout-box callout-teal">
              <h4 className="font-ubuntu font-bold text-cyan-700 mb-3 uppercase text-xs tracking-widest">Market Shift</h4>
              <p className="text-lg text-neutral-800 font-medium mb-0">
                Merchants no longer view payments as a commodity; they want integrated solutions that 
                streamline operations and provide unified data insights.
              </p>
            </div>
          </section>

          <section className="mb-20">
            <h2 className="section-heading">Conclusion</h2>
            <p>
              2026 is poised to be a year of <strong>reset and refocus</strong>. The AI conversation will shift 
              from breathless hype to sober assessment. Meanwhile, SaaS payments will become the invisible 
              standard of global commerce, offering merchants a frictionless way to get paid.
            </p>
            <p className="text-lg font-medium text-neutral-900 border-l-4 border-[#00CEDB] pl-6 py-2 italic">
              Merchanthaus.io stands at this intersection, building technology that is pragmatic about AI 
              but relentless about the promise of seamless commerce.
            </p>
          </section>

          {/* Footnotes Section */}
          <footer className="mt-20 pt-12 border-t border-neutral-100">
            <h5 className="font-ubuntu font-bold text-xs uppercase tracking-widest text-neutral-400 mb-8">Citations & Research</h5>
            <div id="footnotes" className="text-sm text-neutral-500 space-y-4 leading-relaxed">
              <p id="fn1"><span className="text-neutral-300 font-bold mr-3">1.</span> Forrester: AI Priorities and Recalibrating for 2026 Growth.</p>
              <p id="fn3"><span className="text-neutral-300 font-bold mr-3">3.</span> ScienceAlert: The Mathematical Inevitability of LLM Hallucinations.</p>
              <p id="fn7"><span className="text-neutral-300 font-bold mr-3">7.</span> Dotfile: Comparing Traditional vs. Humanless Onboarding Times.</p>
            </div>
          </footer>
        </article>
      </main>

      <Footer />
    </div>
  );
};

export default App;
