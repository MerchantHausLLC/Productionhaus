import { Header } from "@/components/Header";
import Footer from "@/components/Footer";
import { useEffect } from "react";
import shieldLogo from "@/assets/shield.webp";

const ThreeDS = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Header />
      <div className="bg-neutral-light text-neutral-dark p-4 sm:p-8">
        <style>{`
          .post-container { max-width: 800px; }
          .section-heading { border-left: 5px solid #DC143C; padding-left: 1rem; transition: all 0.3s ease-in-out; }
          .callout { border-left: 4px solid #00CEDB; background-color: #edfcfd; padding: 1rem 1.5rem; border-radius: 8px; }
          @keyframes fade-up { 0% { opacity: 0; transform: translateY(20px);} 100% { opacity: 1; transform: translateY(0);} }
          @keyframes reveal-title { 0% { max-height: 0; opacity: 0; } 100% { max-height: 100vh; opacity: 1; } }
          #main-title { max-height: 0; opacity: 0; overflow: hidden; animation: reveal-title 1.5s ease-out 0.5s forwards; }
          @keyframes pulse-tagline { 0% { transform: scale(1); opacity: 0.85; } 50% { transform: scale(1.01); opacity: 1; } 100% { transform: scale(1); opacity: 0.85; } }
          .tagline-pulse { animation: pulse-tagline 5s ease-in-out infinite; }
          .masked-image-container { position: relative; width: 100%; overflow: hidden; margin-bottom: 2.5rem; border-radius: 12px; background: linear-gradient(135deg, #3C2F53 0%, #8E6FBC 100%); }
          .masked-image-container.shape-1 { height: 350px; clip-path: polygon(0 0, 100% 0, 100% 80%, 0 95%); }
          .masked-image-container.shape-2 { height: 400px; clip-path: polygon(0 0, 100% 0, 100% 75%, 50% 95%, 0% 80%); }
          .masked-image-container.shape-3 { height: 320px; clip-path: polygon(0 0, 100% 0, 100% 85%, 0% 100%); }
          .masked-image-container img { width: 100%; height: 100%; object-fit: cover; opacity: 0.85; mix-blend-mode: lighten; }
          .masked-image-overlay-text { position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); color: white; text-align: center; font-size: 2rem; font-weight: bold; text-shadow: 2px 2px 12px rgba(0,0,0,0.8); max-width: 90%; }
          @media (min-width: 640px) {
            .masked-image-overlay-text { font-size: 2.5rem; }
          }
        `}</style>

        <div className="post-container mx-auto">
          <header className="mb-12 pt-8 border-b-4 border-crimson flex items-center space-x-4">
            <img src={shieldLogo} alt="MerchantHaus Shield Logo" className="h-10 w-10 sm:h-12 sm:w-12" />
            <div>
              <h1 className="text-4xl sm:text-5xl font-extrabold text-neutral-dark font-ubuntu">
                MerchantHaus <span className="text-crimson">Blog</span>
              </h1>
              <p className="mt-2 mb-2 text-lg text-silver-grey tracking-wider tagline-pulse">plug in, play, process.</p>
            </div>
          </header>

          <h2 id="main-title" className="text-3xl sm:text-4xl font-bold text-neutral-dark mb-6">
            Understanding 3D Secure: Protecting Merchants and Customers
          </h2>

          <p className="text-lg mb-8 italic text-neutral-dark/80 border-b pb-4">
            In an increasingly digital payments world, fraud prevention isn't optional — it's essential. 3D Secure (3DS) offers an added layer of authentication that helps merchants and customers complete online transactions with greater confidence and fewer disputes.
          </p>

          <div className="masked-image-container shape-1">
            <img src="/blog-images/3ds_ai.png" alt="Digital security with AI technology" />
            <div className="masked-image-overlay-text">Authentication That Builds Trust</div>
          </div>

          <div className="mb-10">
            <h3 className="text-2xl font-bold mb-4 mt-6 section-heading text-crimson">What Is 3D Secure?</h3>
            <p className="mb-4">
              3D Secure (Three-Domain Secure) is an authentication protocol designed to protect online card transactions by verifying the cardholder's identity before the payment is approved. Originally introduced as "Verified by Visa" and "Mastercard SecureCode," it has evolved into <strong>3D Secure 2 (3DS2)</strong>, offering faster and more seamless authentication experiences.
            </p>
            <p className="mt-4">
              The "three domains" refer to the merchant/acquirer, the card network, and the issuer — all working together to ensure each online transaction is validated securely and legitimately.
            </p>
          </div>

          <div className="masked-image-container shape-2">
            <img src="/blog-images/3ds_handshake.png" alt="Digital handshake representing secure partnership" />
            <div className="masked-image-overlay-text">Smarter Data Sharing</div>
          </div>

          <div className="mb-10">
            <h3 className="text-2xl font-bold mb-4 mt-10 section-heading text-crimson">Why It Matters to Merchants</h3>
            <ul className="list-disc ml-6 space-y-4 text-neutral-dark/90">
              <li>
                <strong>Reduced Fraud & Chargebacks:</strong> 3DS verifies the cardholder's identity, making it harder for fraudsters to use stolen cards and reducing your exposure to chargebacks.
              </li>
              <li>
                <strong>Liability Shift:</strong> Transactions authenticated under 3DS shift fraud liability from the merchant to the issuer, meaning fewer financial losses.
              </li>
              <li>
                <strong>Improved Trust:</strong> Customers feel safer knowing extra security measures are in place, which can increase conversion and retention rates.
              </li>
              <li>
                <strong>Compliance with SCA:</strong> In markets like the EU, 3D Secure 2 helps merchants comply with PSD2's Strong Customer Authentication (SCA) requirements.
              </li>
            </ul>
          </div>

          <div className="masked-image-container shape-3">
            <img src="/blog-images/3ds_developer.png" alt="Developer working with secure authentication systems" />
            <div className="masked-image-overlay-text">Seamless on Any Device</div>
          </div>

          <div className="mb-10">
            <h3 className="text-2xl font-bold mb-4 mt-10 section-heading text-crimson">How 3D Secure 2 Improves the Experience</h3>
            <p className="mb-4">
              Unlike the older version, 3DS2 introduces a frictionless flow that allows low-risk transactions to be approved instantly, while high-risk transactions trigger step-up authentication (like biometrics or one-time passwords).
            </p>
            <div className="callout">
              <ul className="list-disc ml-5 space-y-3">
                <li>
                  <strong>Frictionless Checkout:</strong> Most transactions authenticate automatically using background data, reducing customer drop-off.
                </li>
                <li>
                  <strong>Data-Rich Risk Analysis:</strong> Issuers receive over 100 data points, allowing smarter risk scoring without interrupting the user flow.
                </li>
                <li>
                  <strong>Mobile & App Support:</strong> Fully integrated authentication flows enhance the experience for mobile and in-app payments.
                </li>
              </ul>
            </div>
          </div>

          <div className="mb-10">
            <h3 className="text-2xl font-bold mb-4 mt-10 section-heading text-crimson">What Merchants Should Do</h3>
            <p>
              To fully leverage 3D Secure, merchants should partner with their acquirer or gateway to enable 3DS2 within their payment flow. Here are some key steps:
            </p>
            <ul className="list-disc ml-6 mt-4 space-y-3">
              <li>Ensure your payment gateway supports 3DS2 and that it's properly configured.</li>
              <li>Educate your teams and customers about what to expect during authentication.</li>
              <li>Monitor conversion rates to fine-tune your checkout experience.</li>
              <li>Combine 3D Secure with other fraud tools like AVS, CVV, and tokenization for layered protection.</li>
            </ul>
          </div>

          <footer className="mt-16 pt-8 border-t border-silver-grey/50">
            <p className="text-sm text-silver-grey">
              Posted by the MerchantHaus Compliance Team | <time dateTime="2025-10-25">October 25, 2025</time>
            </p>
          </footer>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ThreeDS;
