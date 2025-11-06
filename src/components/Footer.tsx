import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { MerchantApplicationDialog } from "./MerchantApplicationDialog";

const Footer = () => {
  const [isApplicationOpen, setIsApplicationOpen] = useState(false);

  return (
    <footer className="relative z-20 bg-neutral-dark border-t-2 border-cyber-teal">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Logo + Contact - Wider column */}
          <div className="space-y-6 md:col-span-2">
            <div className="flex items-center gap-3 mb-2">
              <Image src="/assets/shield.webp" alt="MerchantHaus Shield" width={48} height={48} className="h-12 w-12" />
              <h3 className="font-ubuntu font-semibold text-2xl text-white">
                MerchantHaus
              </h3>
            </div>
            <p className="font-montserrat text-base text-silver-grey/90 max-w-md leading-relaxed">
              Empowering merchants and ISOs through tailored retail solutions for payment processing.
            </p>
            <div className="space-y-3 font-montserrat text-base text-silver-grey">
              <div>
                <span className="text-white font-semibold">Phone:</span>{" "}
                <a href="tel:+15056006042" className="text-cyber-teal hover:underline">
                  1-505-600-6042
                </a>
              </div>
              <div>
                <span className="text-white font-semibold">Email:</span>{" "}
                <button
                  onClick={() => setIsApplicationOpen(true)}
                  className="text-cyber-teal hover:underline text-left"
                >
                  support@merchanthaus.io
                </button>
              </div>
              <div className="text-silver-grey/80 text-sm">
                1209 Mountain Road Pl NE Ste N<br />
                Albuquerque, NM 87110 US
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-ubuntu font-semibold text-lg text-white mb-6">Quick Links</h4>
            <ul className="space-y-3 font-montserrat text-base">
              <li>
                <Link href="/about" className="text-silver-grey hover:text-cyber-teal transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-silver-grey hover:text-cyber-teal transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-silver-grey hover:text-cyber-teal transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/apply" className="text-silver-grey hover:text-cyber-teal transition-colors">
                  Apply Now
                </Link>
              </li>
              <li>
                <a href="https://retailmanager.merchant.haus" className="text-silver-grey hover:text-cyber-teal transition-colors">
                  Client Login
                </a>
              </li>
            </ul>
          </div>

          {/* Resources & Social */}
          <div>
            <h4 className="font-ubuntu font-semibold text-lg text-white mb-6">Resources</h4>
            <ul className="space-y-3 font-montserrat text-base mb-8">
              <li>
                <Link href="/terms" className="text-silver-grey hover:text-cyber-teal transition-colors">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-silver-grey hover:text-cyber-teal transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/security" className="text-silver-grey hover:text-cyber-teal transition-colors">
                  Security & Compliance
                </Link>
              </li>
              <li>
                <Link href="/developer-guides" className="text-silver-grey hover:text-cyber-teal transition-colors">
                  Developer Guides
                </Link>
              </li>
            </ul>

            <h4 className="font-ubuntu font-semibold text-lg text-white mb-6">Follow Us</h4>
            <ul className="space-y-3 font-montserrat text-base">
              <li>
                <a href="#" className="text-silver-grey hover:text-cyber-teal transition-colors">
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Trust Seals Section */}
        <div className="py-8 border-t border-white/10">
          <h4 className="font-ubuntu font-semibold text-lg text-white text-center mb-6">
            Trusted & Secure Payment Processing
          </h4>
          <div className="flex flex-wrap justify-center items-center gap-8">
            <div className="flex flex-col items-center group">
              <Image
                src="/trust-seals/pci-dss.png"
                alt="PCI DSS Level 1 Compliant"
                width={80}
                height={80}
                className="h-20 w-20 object-contain transition-transform group-hover:scale-110"
              />
              <span className="text-xs text-silver-grey mt-2">PCI DSS Compliant</span>
            </div>
            <div className="flex flex-col items-center group">
              <Image
                src="/trust-seals/ssl-secure.png"
                alt="SSL Secure 256-bit Encryption"
                width={80}
                height={80}
                className="h-20 w-20 object-contain transition-transform group-hover:scale-110"
              />
              <span className="text-xs text-silver-grey mt-2">256-bit SSL</span>
            </div>
            <div className="flex flex-col items-center group">
              <Image
                src="/trust-seals/bank-security.png"
                alt="Bank-Level Security"
                width={80}
                height={80}
                className="h-20 w-20 object-contain transition-transform group-hover:scale-110"
              />
              <span className="text-xs text-silver-grey mt-2">Bank-Level Security</span>
            </div>
            <div className="flex flex-col items-center group">
              <Image
                src="/trust-seals/247-support.png"
                alt="24/7 Customer Support"
                width={80}
                height={80}
                className="h-20 w-20 object-contain transition-transform group-hover:scale-110"
              />
              <span className="text-xs text-silver-grey mt-2">24/7 Support</span>
            </div>
            <div className="flex flex-col items-center group">
              <Image
                src="/logos/visa.webp"
                alt="Visa"
                width={120}
                height={48}
                className="h-12 w-auto object-contain grayscale opacity-70 transition-all group-hover:grayscale-0 group-hover:opacity-100"
              />
            </div>
            <div className="flex flex-col items-center group">
              <Image
                src="/logos/mastercard.webp"
                alt="Mastercard"
                width={120}
                height={48}
                className="h-12 w-auto object-contain grayscale opacity-70 transition-all group-hover:grayscale-0 group-hover:opacity-100"
              />
            </div>
          </div>
        </div>

        {/* Bottom Line */}
        <div className="pt-8 border-t border-white/10 text-center font-montserrat text-sm text-silver-grey">
          <p>
            © MerchantHaus {new Date().getFullYear()}. All rights reserved. |{" "}
            <Link href="/privacy" className="hover:text-cyber-teal transition-colors">
              Privacy Policy
            </Link>{" "}|{" "}
            <Link href="/terms" className="hover:text-cyber-teal transition-colors">
              Terms and Conditions
            </Link>
          </p>
        </div>
      </div>

      <MerchantApplicationDialog open={isApplicationOpen} onOpenChange={setIsApplicationOpen} />
    </footer>
  );
};

export default Footer;
