import { Header } from "@/components/Header";
import Footer from "@/components/Footer";
import { Shield, Lock, AlertTriangle, Key, FileCheck, Globe, Eye, ShieldCheck } from "lucide-react";

const Security = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-rose-50 via-background to-muted/30 py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-4 mb-6">
              <div className="flex-shrink-0 w-20 h-20 rounded-full bg-crimson/10 flex items-center justify-center">
                <Shield className="w-10 h-10 text-crimson" />
              </div>
              <h1 className="text-4xl md:text-5xl font-ubuntu font-bold text-foreground">
                Security & Compliance at MerchantHaus
              </h1>
            </div>
            <p className="text-xl text-muted-foreground leading-relaxed text-justify">
              At MerchantHaus, security isn't just a feature — it's the foundation of how we process payments. We operate under PCI DSS Level 1, the highest certification recognized globally for service providers. Every transaction, every byte of data, and every merchant relationship is safeguarded by the same standards trusted by the world's largest financial institutions.
            </p>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-16 bg-background">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
            
            {/* PCI DSS Compliance */}
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-crimson/10 flex items-center justify-center">
                  <ShieldCheck className="w-6 h-6 text-crimson" />
                </div>
                <div>
                  <h2 className="text-3xl font-ubuntu font-bold text-foreground mb-4">
                    1. PCI DSS Level 1 Compliance
                  </h2>
                </div>
              </div>
              
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p className="text-justify">
                  <strong className="text-foreground">Highest Level Certification:</strong> MerchantHaus maintains full compliance with the Payment Card Industry Data Security Standard (PCI DSS) Level 1, verified through annual audits by Qualified Security Assessors and quarterly network scans. These assessments confirm that our infrastructure, encryption, and access controls meet the strictest global requirements.
                </p>
                
                <p className="text-justify">
                  <strong className="text-foreground">Encrypted and Never Stored:</strong> Cardholder data is never retained in raw form. Primary Account Numbers and other sensitive information are encrypted or tokenized the instant they're captured. By eliminating the storage of live card data, MerchantHaus drastically reduces breach risk and legal exposure — if it isn't stored, it can't be stolen.
                </p>
                
                <p className="text-justify">
                  <strong className="text-foreground">Secure Processing Environment:</strong> All card transactions pass through PCI-certified systems within a hardened Cardholder Data Environment. Continuous monitoring and vulnerability testing ensure compliance is an ongoing discipline, not a once-a-year audit.
                </p>
              </div>
            </div>

            {/* Network Tokenization */}
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-crimson/10 flex items-center justify-center">
                  <Key className="w-6 h-6 text-crimson" />
                </div>
                <div>
                  <h2 className="text-3xl font-ubuntu font-bold text-foreground mb-4">
                    2. Tokenization & End-to-End Encryption
                  </h2>
                </div>
              </div>
              
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p className="text-justify">
                  <strong className="text-foreground">Network Tokenization:</strong> We replace real card numbers with network-issued tokens from Visa, Mastercard, and other major brands. These tokens are unique to each merchant domain, rendering intercepted data useless to attackers while preserving functionality for recurring and subscription billing.
                </p>
                
                <p className="text-justify">
                  <strong className="text-foreground">End-to-End Encryption (E2EE):</strong> MerchantHaus enforces TLS 1.2+ and TLS 1.3 with modern cipher suites offering Perfect Forward Secrecy, and uses AES-256 encryption for data at rest. Sensitive information remains encrypted from the moment of capture to settlement, fully aligning with PCI and U.S. federal cybersecurity guidelines.
                </p>
              </div>
            </div>

            {/* Fraud Prevention */}
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-crimson/10 flex items-center justify-center">
                  <Eye className="w-6 h-6 text-crimson" />
                </div>
                <div>
                  <h2 className="text-3xl font-ubuntu font-bold text-foreground mb-4">
                    3. AI Fraud Detection & Real-Time Monitoring
                  </h2>
                </div>
              </div>
              
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p className="text-justify">
                  Our adaptive fraud-prevention engine continuously analyzes transaction data to detect anomalies before they impact merchants or cardholders.
                </p>
                
                <div className="bg-muted/50 rounded-lg p-6 my-6">
                  <h3 className="font-ubuntu font-semibold text-foreground mb-4">Key Capabilities:</h3>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-crimson mt-1">•</span>
                      <span><strong>AI / ML Fraud Scoring:</strong> Real-time risk analysis for every transaction.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-crimson mt-1">•</span>
                      <span><strong>Velocity & Volume Controls:</strong> Identifies rapid-fire or high-value spikes.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-crimson mt-1">•</span>
                      <span><strong>Geo-Velocity & IP Analysis:</strong> Flags impossible location changes.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-crimson mt-1">•</span>
                      <span><strong>Device Fingerprinting:</strong> Detects new or compromised devices.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-crimson mt-1">•</span>
                      <span><strong>Chargeback Management:</strong> Instant dispute alerts and direct network integrations for faster resolution.</span>
                    </li>
                  </ul>
                </div>
                
                <p className="text-justify">
                  <strong className="text-foreground">Impact:</strong> Merchants using AI-based fraud detection and tokenization see up to 60% fewer chargebacks and 40% faster dispute resolution.
                </p>
              </div>
            </div>

            {/* 3D Secure */}
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-crimson/10 flex items-center justify-center">
                  <Lock className="w-6 h-6 text-crimson" />
                </div>
                <div>
                  <h2 className="text-3xl font-ubuntu font-bold text-foreground mb-4">
                    4. Strong Customer Authentication (3-D Secure 2.0)
                  </h2>
                </div>
              </div>
              
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p className="text-justify">
                  To protect e-commerce transactions and meet international Strong Customer Authentication (SCA) requirements, MerchantHaus supports 3-D Secure 2.0 (EMV 3DS). The enhanced protocol enables frictionless authentication by sharing richer contextual data with issuers, allowing low-risk transactions to proceed without interrupting the customer experience while maintaining two-factor verification when needed.
                </p>
              </div>
            </div>

            {/* Data Privacy */}
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-crimson/10 flex items-center justify-center">
                  <FileCheck className="w-6 h-6 text-crimson" />
                </div>
                <div>
                  <h2 className="text-3xl font-ubuntu font-bold text-foreground mb-4">
                    5. Data Privacy & Global Compliance
                  </h2>
                </div>
              </div>
              
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p className="text-justify">
                  MerchantHaus upholds privacy rights and complies with major data-protection laws worldwide, including the EU GDPR, California CCPA / CPRA, and South Africa POPIA.
                </p>
                
                <div className="grid md:grid-cols-2 gap-6 my-6">
                  <div className="bg-muted/50 rounded-lg p-6">
                    <h3 className="font-ubuntu font-semibold text-foreground mb-3">Data Minimization</h3>
                    <p className="text-sm">We collect only what is necessary for legitimate business and regulatory needs.</p>
                  </div>
                  <div className="bg-muted/50 rounded-lg p-6">
                    <h3 className="font-ubuntu font-semibold text-foreground mb-3">User Rights</h3>
                    <p className="text-sm">Customers can access, correct, delete, or port personal data through their account or by request.</p>
                  </div>
                  <div className="bg-muted/50 rounded-lg p-6">
                    <h3 className="font-ubuntu font-semibold text-foreground mb-3">Transparency</h3>
                    <p className="text-sm">Our Privacy Policy details what data we collect, why we use it, and who we share it with.</p>
                  </div>
                  <div className="bg-muted/50 rounded-lg p-6">
                    <h3 className="font-ubuntu font-semibold text-foreground mb-3">Data Security</h3>
                    <p className="text-sm">All personal data is encrypted, access-controlled, and regularly audited for compliance.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* U.S. Regulatory Compliance */}
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-crimson/10 flex items-center justify-center">
                  <Globe className="w-6 h-6 text-crimson" />
                </div>
                <div>
                  <h2 className="text-3xl font-ubuntu font-bold text-foreground mb-4">
                    6. U.S. Regulatory & Card-Network Compliance
                  </h2>
                </div>
              </div>
              
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p className="text-justify">
                  MerchantHaus assists businesses in meeting key U.S. regulatory frameworks and card-network standards.
                </p>
                
                <p className="text-justify">
                  <strong className="text-foreground">KYC / AML:</strong> Merchant onboarding includes automated Know Your Customer and Anti-Money-Laundering screening to detect and report suspicious activity.
                </p>
                
                <p className="text-justify">
                  <strong className="text-foreground">Card-Network Rules:</strong> We ensure adherence to Visa and Mastercard operating regulations — including specialized industries such as adult-content and high-risk categories.
                </p>
                
                <p className="text-justify">
                  <strong className="text-foreground">NACHA for ACH:</strong> All ACH payments comply with NACHA operating rules, ensuring secure, traceable electronic debits and credits.
                </p>
                
                <p className="text-justify">
                  <strong className="text-foreground">Chargeback Programs:</strong> Our compliance and dispute-resolution tools help merchants minimize financial exposure and maintain good standing with networks.
                </p>
              </div>
            </div>

            {/* Additional Measures */}
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-crimson/10 flex items-center justify-center">
                  <AlertTriangle className="w-6 h-6 text-crimson" />
                </div>
                <div>
                  <h2 className="text-3xl font-ubuntu font-bold text-foreground mb-4">
                    7. Incident Response & Business Continuity
                  </h2>
                </div>
              </div>
              
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p className="text-justify">
                  MerchantHaus maintains a comprehensive Incident Response Plan designed to detect, contain, and remediate threats quickly. Our teams perform regular simulations and tabletop exercises to ensure readiness.
                </p>
                
                <p className="text-justify">
                  <strong className="text-foreground">Business Continuity & Disaster Recovery:</strong> Redundant infrastructure, automated failover, and geographically distributed data centers keep merchants processing even during unplanned outages. We regularly test backup and recovery protocols to guarantee uptime and resilience.
                </p>
              </div>
            </div>

            {/* Our Commitment */}
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-crimson/10 flex items-center justify-center">
                  <ShieldCheck className="w-6 h-6 text-crimson" />
                </div>
                <div>
                  <h2 className="text-3xl font-ubuntu font-bold text-foreground mb-4">
                    8. Our Commitment to Trust
                  </h2>
                </div>
              </div>
              
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p className="text-justify">
                  Security and compliance are not static achievements — they're daily disciplines. MerchantHaus partners with independent auditors and leading security vendors to verify every control we claim. With us, compliance isn't paperwork; it's peace of mind.
                </p>
              </div>
            </div>

          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-muted/30">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-ubuntu font-bold text-foreground mb-8 text-center">
              Frequently Asked Questions
            </h2>
            
            <div className="space-y-6">
              <div className="bg-background rounded-lg p-6 shadow-sm">
                <h3 className="font-ubuntu font-semibold text-foreground mb-2">
                  What does PCI DSS Level 1 mean for my business?
                </h3>
                <p className="text-muted-foreground text-sm">
                  It means your transactions are processed on an environment meeting the highest global security standard, minimizing your own PCI scope.
                </p>
              </div>
              
              <div className="bg-background rounded-lg p-6 shadow-sm">
                <h3 className="font-ubuntu font-semibold text-foreground mb-2">
                  How does MerchantHaus prevent fraud?
                </h3>
                <p className="text-muted-foreground text-sm">
                  Our AI models monitor behavior, device data, and velocity metrics to block suspicious activity in real time.
                </p>
              </div>
              
              <div className="bg-background rounded-lg p-6 shadow-sm">
                <h3 className="font-ubuntu font-semibold text-foreground mb-2">
                  Do I need my own PCI certification?
                </h3>
                <p className="text-muted-foreground text-sm">
                  When using MerchantHaus hosted fields or payment pages, your compliance scope is limited to a simplified SAQ-A — we handle the heavy lifting.
                </p>
              </div>
              
              <div className="bg-background rounded-lg p-6 shadow-sm">
                <h3 className="font-ubuntu font-semibold text-foreground mb-2">
                  How is personal data protected?
                </h3>
                <p className="text-muted-foreground text-sm">
                  All data is encrypted, access-restricted, and governed by GDPR, CCPA, and other privacy laws.
                </p>
              </div>
              
              <div className="bg-background rounded-lg p-6 shadow-sm">
                <h3 className="font-ubuntu font-semibold text-foreground mb-2">
                  What happens if there's an outage or breach?
                </h3>
                <p className="text-muted-foreground text-sm">
                  Our incident-response and disaster-recovery frameworks ensure rapid containment and continuity with minimal downtime.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-background">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-ubuntu font-bold text-foreground mb-4">
              Questions About Our Security?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Our team is here to discuss how we protect your business and your customers.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a 
                href="tel:15056006042"
                className="inline-flex items-center justify-center rounded-full bg-crimson px-8 py-4 text-base font-semibold text-white shadow-sm transition hover:bg-crimson/90"
              >
                Call 1-505-600-6042
              </a>
              <a 
                href="/apply"
                className="inline-flex items-center justify-center rounded-full border-2 border-crimson px-8 py-4 text-base font-semibold text-crimson transition hover:bg-crimson/10"
              >
                Apply Now
              </a>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Security;
