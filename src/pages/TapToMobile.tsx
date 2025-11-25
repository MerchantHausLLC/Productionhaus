import { Header } from "@/components/Header";
import Footer from "@/components/Footer";
import { useEffect } from "react";

const TapToMobile = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Header />
      <div className="bg-neutral-light text-neutral-dark p-4 sm:p-8">
        <style>{`
          body { font-family: 'Inter', sans-serif; line-height: 1.7; }
          .post-container { max-width: 800px; }
          .section-heading { border-left: 5px solid #DC143C; padding-left: 1rem; transition: all 0.3s ease-in-out; }
          .callout { border-left: 4px solid #00CEDB; background-color: #edfcfd; padding: 1rem 1.5rem; border-radius: 8px; }
          .callout-warm { border-left: 4px solid #DC143C; background-color: #fff5f5; padding: 1rem 1.5rem; border-radius: 8px; }

          @keyframes reveal-title { 0% { max-height: 0; opacity: 0; } 100% { max-height: 100vh; opacity: 1; } }
          #main-title { max-height: 0; opacity: 0; overflow: hidden; animation: reveal-title 1.5s ease-out 0.5s forwards; }

          @keyframes pulse-tagline { 0% { transform: scale(1); opacity: 0.85; } 50% { transform: scale(1.01); opacity: 1; } 100% { transform: scale(1); opacity: 0.85; } }
          .tagline-pulse { animation: pulse-tagline 5s ease-in-out infinite; }

          .masked-image-container { position: relative; width: 100%; overflow: hidden; margin-bottom: 2.5rem; border-radius: 12px; background: linear-gradient(135deg, #0A2A43 0%, #0F5E82 100%); }
          .masked-image-container.shape-1 { height: 360px; clip-path: polygon(0 0, 100% 0, 100% 82%, 0 98%); }
          .masked-image-container.shape-2 { height: 380px; clip-path: polygon(0 0, 100% 0, 100% 78%, 52% 96%, 0% 82%); }
          .masked-image-container.shape-3 { height: 320px; clip-path: polygon(0 0, 100% 0, 100% 86%, 0% 100%); }
          .masked-image-container img { width: 100%; height: 100%; object-fit: cover; opacity: 0.9; mix-blend-mode: lighten; }
          .masked-image-overlay-text { position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); color: white; text-align: center; font-size: 2rem; font-weight: bold;
            text-shadow: 2px 2px 12px rgba(0,0,0,0.8); max-width: 92%; }
          @media (min-width: 640px) { .masked-image-overlay-text { font-size: 2.6rem; } }
        `}</style>

        <div className="post-container mx-auto">
          <h2 id="main-title" className="text-3xl sm:text-4xl font-bold text-neutral-dark mb-6 pt-8">
            Tap-to-Mobile Is the New POS: How to Get Paid With Just a Phone in 2025
          </h2>

          <p className="text-lg mb-8 italic text-neutral-dark/80 border-b pb-4">
            In 2025, the fastest-growing POS terminal isn’t a terminal at all — it’s a smartphone. Tap‑to‑Mobile (also called Tap‑to‑Phone or softPOS) turns any NFC phone into a secure payment acceptance device, letting merchants take contactless cards and wallets with zero extra hardware.
          </p>

          <div className="masked-image-container shape-1">
            <img src="/blog-images/TAP1.webp" alt="Tap-to-mobile header" />
            <div className="masked-image-overlay-text">Get Paid With Just a Phone</div>
          </div>

          <div className="mb-10">
            <h3 className="text-2xl font-bold mb-4 mt-6 section-heading text-crimson">1) Smartphones are eating the POS terminal</h3>
            <p className="mb-4">
              The old POS stack was hardware‑first: a countertop terminal plus a payments app. Tap‑to‑Mobile flips that on its head. The phone becomes the terminal, while software becomes the POS.
            </p>
            <p className="mb-4">
              That change is showing up everywhere — pop‑ups, food trucks, service pros, and even in permanent retail as a “third lane” for line‑busting. NMI’s 2025 outlook calls Tap‑to‑Mobile one of the biggest accelerants of contactless growth, driven by lower barriers to acceptance and faster time‑to‑revenue.
            </p>
          </div>

          <div className="masked-image-container shape-2">
            <img src="/blog-images/TAP2.webp" alt="Merchant taking a tap-to-phone payment" />
            <div className="masked-image-overlay-text">Software POS wins when payments travel</div>
          </div>

          <div className="mb-10">
            <h3 className="text-2xl font-bold mb-4 mt-10 section-heading text-crimson">2) Why merchants care (a lot)</h3>
            <ul className="list-disc ml-6 space-y-4 text-neutral-dark/90">
              <li><strong>Lower upfront cost:</strong> no terminals to buy, ship, or replace. Perfect for startups, seasonal sellers, and franchise rollouts.</li>
              <li><strong>Faster rollouts:</strong> onboard once, download an app, and start taking taps in hours instead of weeks.</li>
              <li><strong>Pop‑up & field‑sales friendly:</strong> if your business moves, your POS should too.</li>
              <li><strong>Software updates beat hardware refreshes:</strong> new features and compliance updates arrive over the air, not via swapping devices.</li>
            </ul>

            <div className="callout mt-6">
              <p className="font-semibold mb-2">Merchant reality check:</p>
              <p>
                Most customers already assume they can tap. If you can’t accept a tap when they’re ready to pay, you’re not “missing a feature” — you’re leaking revenue.
              </p>
            </div>
          </div>

          <div className="masked-image-container shape-3">
            <img src="/blog-images/TAP3.webp" alt="Contactless payments growth" />
            <div className="masked-image-overlay-text">Contactless is the default</div>
          </div>

          <div className="mb-10">
            <h3 className="text-2xl font-bold mb-4 mt-10 section-heading text-crimson">3) Where Tap‑to‑Mobile fits best (and where it doesn’t)</h3>

            <h4 className="text-xl font-bold mt-2 mb-2">Best‑fit use cases</h4>
            <ul className="list-disc ml-6 space-y-3">
              <li><strong>Quick‑service & small retail:</strong> line busting, curbside, or backup lanes.</li>
              <li><strong>Events & venues:</strong> booths, runners, merch tables, festivals.</li>
              <li><strong>Service pros:</strong> plumbers, electricians, home care, delivery‑plus‑pay models.</li>
              <li><strong>Micro‑merchants:</strong> side hustles, weekend markets, and first‑time sellers.</li>
            </ul>

            <h4 className="text-xl font-bold mt-6 mb-2">Not‑great fits (yet)</h4>
            <ul className="list-disc ml-6 space-y-3">
              <li><strong>Ultra high‑volume multi‑lane retail:</strong> dedicated hardware still wins on speed + peripherals.</li>
              <li><strong>Complex hospitality:</strong> you’ll likely run hybrid (software POS + some fixed endpoints).</li>
              <li><strong>Rugged environments:</strong> wet/industrial sites need extra device protection + battery discipline.</li>
            </ul>
          </div>

          <div className="mb-10">
            <h3 className="text-2xl font-bold mb-4 mt-10 section-heading text-crimson">4) Checklist: choosing a Tap‑to‑Mobile provider in 2025</h3>

            <div className="callout-warm">
              <ol className="list-decimal ml-5 space-y-3">
                <li><strong>Device & OS support:</strong> iOS/Android coverage, minimum models, NFC reliability.</li>
                <li><strong>Acceptance breadth:</strong> EMV contactless, Apple Pay/Google Pay, regional wallets.</li>
                <li><strong>Security & certification:</strong> PCI CPoC/softPOS certification, encryption, runtime protection.</li>
                <li><strong>Pricing clarity:</strong> clean per‑transaction rates, no hidden enablement fees.</li>
                <li><strong>Onboarding speed:</strong> automated KYC, smart fallbacks for edge cases.</li>
                <li><strong>POS compatibility:</strong> standalone use and/or API/SDK for embedding.</li>
                <li><strong>Offline behavior:</strong> safe queuing, reliable reconnection handling.</li>
                <li><strong>Support model:</strong> 24/7 coverage, SLAs, clear ownership for device issues.</li>
              </ol>
            </div>

            <p className="mt-6">
              If a provider can’t confidently answer these points, they’re not ready for your merchants — or your brand.
            </p>
          </div>

          <div className="mb-10">
            <h3 className="text-2xl font-bold mb-4 mt-10 section-heading text-crimson">The takeaway</h3>
            <p className="mb-4">
              Tap‑to‑Mobile is moving from “nice‑to‑have” to default acceptance. For many merchants, it’s the simplest path to contactless payments with the lowest cost to start and scale.
            </p>
            <p className="mb-4 font-medium">
              The smart play isn’t ripping out terminals overnight — it’s adding Tap‑to‑Mobile where it expands revenue fastest: events, quick‑service peaks, and field sales.
            </p>
            <div className="callout">
              <p className="font-semibold">Want help mapping fit?</p>
              <p className="mt-1">
                Drop your merchant type (quick‑service, events, multi‑site retail, service pros, etc.) and we’ll sketch a rollout plan that makes Tap‑to‑Mobile pay for itself.
              </p>
            </div>
          </div>

          <footer className="mt-16 pt-8 border-t border-silver-grey/50">
            <p className="text-sm text-silver-grey">
              Posted by the MerchantHaus Payments Team | <time dateTime="2025-11-24">November 24, 2025</time>
            </p>
          </footer>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default TapToMobile;
