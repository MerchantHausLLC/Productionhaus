import { Header } from "@/components/Header";
import Footer from "@/components/Footer";
import { useState } from "react";
import { Link } from "react-router-dom";
import { PageSEO } from "@/components/PageSEO";

// ─── Data ────────────────────────────────────────────────────────────────────

const trustBadges = [
  { label: 'PCI DSS Level 1' },
  { label: 'Next-Day Funding' },
  { label: 'Award-Winning Support' },
  { label: '24/7 Availability' },
]

const channels = [
  {
    label: 'Retail & In-Store',
    body: 'Fast, reliable POS terminals, Tap-to-Pay, and seamless inventory sync for your physical locations.',
  },
  {
    label: 'E-commerce',
    body: 'Hosted payment pages and simple integrations for any website — launch in hours, not weeks.',
  },
  {
    label: 'Mobile & On-the-Go',
    body: 'Take payments anywhere with our mobile app and card readers. Built for field services, events, and multi-location operations.',
  },
  {
    label: 'Invoicing & Subscriptions',
    body: 'Automate billing with recurring payments and secure email invoices. Get paid faster, with less effort.',
  },
]

const serviceGroups = [
  {
    theme: 'Accept',
    label: 'Accept payments, everywhere.',
    services: [
      {
        name: 'Mobile Payments',
        tag: 'Accept Payments Anywhere',
        badge: 'Now featuring Tap to Pay',
        body: 'Enable seamless, secure payment experiences across every touchpoint — whether in the field, at the counter, or through remote channels. Digital wallets, QR codes, and in-app transactions built for maximum operational flexibility.',
        bullets: [
          'Over 60% of digital transactions now originate from mobile devices',
          'Apple Pay, Google Pay, Samsung Pay, and more',
          'PCI-compliant for maximum data security',
          'Real-time receipts and loyalty integration',
        ],
      },
      {
        name: 'Modern POS Devices',
        tag: 'In-Person Payments, Modernized',
        badge: null,
        body: 'Upgrade your in-person experience with fast, reliable, future-ready Point-of-Sale hardware. Chip, tap, swipe, and mobile — on devices that integrate directly with your operations. Or use Tap to Pay to turn any smartphone into a contactless terminal.',
        bullets: [
          '92% of customers expect contactless options at the point of sale',
          'Tap to Pay: accept cards, phones, and wearables — no reader needed',
          'Built-in receipt printing and wireless options',
          'EMV and PCI-certified, integrated tipping and feedback prompts',
        ],
      },
      {
        name: 'Global Payments',
        tag: 'Business Without Borders',
        badge: null,
        body: 'Expand your reach and accept payments from anywhere on the planet. Process in 135+ currencies, handle local methods, and manage international settlements — all from a single dashboard. Scale across markets without the typical cross-border complexity.',
        bullets: [
          'Serve customers in over 200 countries',
          'Dynamic currency conversion built-in',
          'Automated compliance for every region',
          'Local payment methods boost conversion rates up to 25%',
        ],
      },
      {
        name: 'Ecommerce Solutions',
        tag: 'Your Digital Channel, Optimized',
        badge: null,
        body: 'Launch and scale your online payment acceptance with enterprise-grade ecommerce tools. From payment gateways to customizable checkout experiences, we provide the infrastructure you need to sell, scale, and maintain compliance — without engineering overhead.',
        bullets: [
          'Pre-built integrations with leading commerce platforms',
          'Customizable checkout pages for any brand',
          'Secure, PCI-compliant transactions',
          'Organizations with advanced ecommerce tools see 35% faster growth',
        ],
      },
    ],
  },
  {
    theme: 'Protect',
    label: 'Protect revenue at every layer.',
    services: [
      {
        name: 'Advanced Fraud Detection',
        tag: 'Built-In Vigilance, Zero Guesswork',
        badge: null,
        body: 'Protect your organization and your customers with our multi-layered fraud prevention system. Machine learning and real-time analysis proactively identify and block suspicious activity — so threats never reach your bottom line.',
        bullets: [
          '70% of fraud attempts are blocked automatically',
          'Includes 3D Secure, custom rules, and velocity checks',
          'Alerts and auto-responses keep your team ahead of threats',
          'Chargeback rates drop significantly with AI-driven monitoring',
        ],
      },
      {
        name: 'Network Tokenization',
        tag: 'Security That Stays with Every Card',
        badge: null,
        body: 'Enhance payment security and approval rates with network tokenization. Replace sensitive card data with unique, encrypted tokens — minimizing breach risk and keeping recurring payments running smoothly, even when cards are updated or replaced.',
        bullets: [
          'Up to 3% increase in transaction approvals',
          'Reduces PCI compliance burdens across your stack',
          'Automatic card updater — no more failed recurring payments',
          'Vault-stored tokens for maximum safety',
        ],
      },
      {
        name: 'Chargeback Management',
        tag: 'Win More Disputes, Protect More Revenue',
        badge: null,
        body: "Don't let disputes erode your margins. Our automated system tracks, compiles, and submits evidence on your behalf — making it easier to contest chargebacks and reclaim lost revenue before it impacts your bottom line.",
        bullets: [
          'Real-time chargeback alerts',
          '20% higher reversal rates with rapid response',
          'Integrated evidence templates for major card brands',
          'Analytics to spot and stop dispute patterns before they repeat',
        ],
      },
    ],
  },
  {
    theme: 'Scale',
    label: 'Scale operations without the overhead.',
    services: [
      {
        name: 'Subscription Billing',
        tag: 'Effortless Recurring Revenue',
        badge: null,
        body: 'Automate your billing and grow your subscription base with tools that handle the complexity for you. Create, manage, and optimize plans — while smart dunning and card updating keep your revenue steady.',
        bullets: [
          '46% of consumers pay for at least one subscription service',
          'Flexible trial, renewal, and proration options',
          'Automated failed payment recovery',
          'Reduce churn with card updater and retry logic',
        ],
      },
      {
        name: 'Data & Analytics',
        tag: 'Insight-Driven Payment Operations',
        badge: null,
        body: 'Unlock powerful insights from your transaction data. Our analytics dashboard transforms complex data into actionable trends — letting you track volume, authorization rates, and performance metrics in real time, without spreadsheets.',
        bullets: [
          'Real-time transaction dashboards and reporting',
          'Authorization rate monitoring and optimization flags',
          'Custom date ranges, filters, and export capabilities',
          'Spot decline patterns before they compound into lost revenue',
        ],
      },
      {
        name: 'Payment Orchestration',
        tag: 'Smart Routing. Higher Approvals. Lower Cost.',
        badge: null,
        body: 'Connect to multiple payment processors and dynamically route every transaction for the best outcome — lower fees, higher approval rates, fewer declines. Control your entire payment stack without added engineering overhead.',
        bullets: [
          'Dynamic routing based on cost, approval rate, and latency',
          'Failover logic keeps transactions processing during outages',
          'A/B testing for processor performance',
          'Unified reporting across all connected processors',
        ],
      },
    ],
  },
]

const steps = [
  {
    number: '01',
    label: 'Apply & Approve',
    body: 'Submit your application online. Our underwriting team reviews and approves within 24–48 hours.',
  },
  {
    number: '02',
    label: 'Integrate & Configure',
    body: 'Access your sandbox environment, API documentation, and SDKs. Configure your payment flows with expert support.',
  },
  {
    number: '03',
    label: 'Launch & Grow',
    body: 'Go live with confidence. Real-time monitoring, 24/7 support, and optimization tools help you scale seamlessly.',
  },
]

const faqs = [
  {
    q: 'What does MerchantHaus do?',
    a: 'MerchantHaus is a full-service payment processing company. We help mid-market and enterprise organizations accept, manage, and optimize payments across every channel — in-store, online, mobile, and globally. Powered by NMI infrastructure.',
  },
  {
    q: 'How quickly can I get started?',
    a: 'Most merchants are approved and processing within 24–48 hours of submitting an application. Our team handles the configuration and can have you fully integrated in days, not weeks.',
  },
  {
    q: 'Are there long-term contracts or lock-in terms?',
    a: 'No. All MerchantHaus plans are month-to-month. There are no early termination fees and no lock-in contracts. We keep merchants by delivering value, not by trapping them.',
  },
  {
    q: 'What payment methods do you support?',
    a: 'We support all major credit and debit cards, ACH/eCheck, digital wallets (Apple Pay, Google Pay, Samsung Pay), contactless, QR codes, and 135+ currencies for international transactions.',
  },
  {
    q: 'Is MerchantHaus PCI-compliant?',
    a: 'Yes. MerchantHaus operates at PCI DSS Level 1 — the highest level of payment security certification. Network tokenization and end-to-end encryption are standard across all plans.',
  },
]

// ─── Section background helpers ─────────────────────────────────────────────
// Alternates between base (black dark / white light) and alt (midnight blue dark / cool grey light)
const sectionBase = "bg-background text-foreground"
const sectionAlt = "bg-[#F0F4F8] dark:bg-[#0C1017] text-foreground"
const cellBase = "bg-background"
const cellAlt = "bg-[#F0F4F8] dark:bg-[#0C1017]"

// ─── Sub-components ───────────────────────────────────────────────────────────

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false)
  return (
    <div
      className="border-b border-foreground/[0.07] cursor-pointer group"
      onClick={() => setOpen(!open)}
    >
      <div className="flex items-center justify-between py-5 gap-4">
        <p className="text-[0.9rem] font-medium group-hover:text-foreground/80 transition-colors">
          {q}
        </p>
        <span
          className={`shrink-0 text-foreground/30 transition-transform duration-200 text-lg leading-none ${
            open ? 'rotate-45' : ''
          }`}
        >
          +
        </span>
      </div>
      {open && (
        <p className="text-[0.85rem] leading-[1.8] text-foreground/45 font-light pb-5 max-w-2xl">
          {a}
        </p>
      )}
    </div>
  )
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function Services() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <PageSEO
        title="Services"
        description="Accept payments anywhere — in-person, online, or in the field. Mobile payments, POS devices, fraud detection, and global payment processing for mid-market and enterprise organizations."
        path="/services"
      />
      <Header />

      <main
        className="flex-1"
        style={{ fontFamily: "'Sora', sans-serif" }}
      >
        {/* ── Hero ──────────────────────────────────────────── */}
        <section className={`relative px-6 md:px-16 lg:px-24 pt-24 pb-20 border-b border-foreground/[0.07] overflow-hidden ${sectionAlt}`}>
          {/* Background image */}
          <div className="absolute inset-0">
            <img
              src="/blog-images/cardslide.webp"
              alt=""
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-white/80 dark:bg-[#0C1017]/80" />
          </div>

          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-8">
              <span className="block w-6 h-px bg-foreground/20" />
              <span className="text-[11px] tracking-[0.12em] uppercase text-foreground/40 font-light">
                Services
              </span>
            </div>

            <h1
              className="text-[clamp(2.6rem,5.5vw,4.2rem)] leading-[1.06] font-normal max-w-3xl mb-7"
              style={{ fontFamily: "'DM Serif Display', serif" }}
            >
              Accept payments anywhere.{' '}
              <em className="italic text-foreground/35">In-store, online, or in the field.</em>
            </h1>

            <p className="text-[1.05rem] leading-relaxed text-foreground/50 max-w-xl font-light mb-10">
              Everything you need to accept payments, protect revenue, and scale your
              operations — without the complexity your current processor insists is
              unavoidable.
            </p>

            <div className="flex flex-wrap gap-4 mb-14">
              <Link
                to="/demo"
                className="px-7 py-3.5 bg-foreground text-background text-[0.82rem] tracking-[0.08em] uppercase font-semibold hover:bg-foreground/90 transition-colors duration-200 rounded-sm"
              >
                Book a Demo
              </Link>
              <Link
                to="/get-started"
                className="px-7 py-3.5 border border-foreground/20 text-[0.82rem] tracking-[0.08em] uppercase font-medium hover:bg-foreground/[0.04] transition-colors duration-200 rounded-sm text-foreground/70"
              >
                Get Started
              </Link>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-x-8 gap-y-3 pt-8 border-t border-foreground/[0.07]">
              {trustBadges.map((b, i) => (
                <span
                  key={i}
                  className="flex items-center gap-2 text-[0.78rem] text-foreground/40 font-light tracking-wide"
                >
                  <span className="w-1 h-1 rounded-full bg-foreground/20" />
                  {b.label}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* ── All the Ways They Want to Pay ─────────────────── */}
        <section className={`px-6 md:px-16 lg:px-24 py-20 border-b border-foreground/[0.07] ${sectionBase}`}>
          <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-12 md:gap-20">
            <div className="md:pt-2">
              <p
                className="text-[5rem] leading-none font-normal text-foreground/[0.06] select-none mb-3"
                style={{ fontFamily: "'DM Serif Display', serif" }}
              >
                00
              </p>
              <p className="text-[11px] tracking-[0.12em] uppercase text-foreground/30 font-light">
                Payment channels
              </p>
            </div>

            <div>
              <h2
                className="text-[clamp(1.7rem,2.8vw,2.4rem)] leading-[1.2] font-normal mb-4"
                style={{ fontFamily: "'DM Serif Display', serif" }}
              >
                All the ways they want to pay.
              </h2>
              <p className="text-[0.95rem] leading-[1.85] text-foreground/45 font-light mb-10 max-w-lg">
                Stop losing revenue to outdated systems, excessive fees, and poor
                support. MerchantHaus is built for organizations that need payments
                to simply work.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-foreground/[0.07]">
                {channels.map((c, i) => (
                  <div
                    key={i}
                    className={`${cellBase} p-6 hover:bg-foreground/[0.025] transition-colors duration-300`}
                  >
                    <p className="text-[0.88rem] font-medium mb-2">{c.label}</p>
                    <p className="text-[0.8rem] leading-relaxed text-foreground/40 font-light">
                      {c.body}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── Core Services (grouped) ───────────────────────── */}
        {serviceGroups.map((group, gi) => (
          <section
            key={gi}
            className={`px-6 md:px-16 lg:px-24 py-20 border-b border-foreground/[0.07] ${gi % 2 === 0 ? sectionAlt : sectionBase}`}
          >
            <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-12 md:gap-20">
              {/* Label col */}
              <div className="md:pt-2">
                <p
                  className="text-[5rem] leading-none font-normal text-foreground/[0.06] select-none mb-3"
                  style={{ fontFamily: "'DM Serif Display', serif" }}
                >
                  {String(gi + 1).padStart(2, '0')}
                </p>
                <p className="text-[11px] tracking-[0.12em] uppercase text-foreground/30 font-light">
                  {group.theme}
                </p>
              </div>

              {/* Services col */}
              <div>
                <h2
                  className="text-[clamp(1.7rem,2.8vw,2.4rem)] leading-[1.2] font-normal mb-12"
                  style={{ fontFamily: "'DM Serif Display', serif" }}
                >
                  {group.label}
                </h2>

                <div className="space-y-0 border-t border-foreground/[0.07]">
                  {group.services.map((s, si) => (
                    <div
                      key={si}
                      className="py-8 border-b border-foreground/[0.07] grid grid-cols-1 lg:grid-cols-[200px_1fr] gap-6 lg:gap-10 group"
                    >
                      {/* Service name */}
                      <div>
                        <p
                          className="text-[0.95rem] font-normal mb-1 group-hover:text-foreground transition-colors duration-200"
                          style={{ fontFamily: "'DM Serif Display', serif" }}
                        >
                          {s.name}
                        </p>
                        <p className="text-[0.72rem] text-foreground/30 font-light italic">
                          {s.tag}
                        </p>
                        {s.badge && (
                          <span className="inline-block mt-2 px-2.5 py-1 border border-foreground/[0.12] rounded-sm text-[0.68rem] tracking-wide text-foreground/40 uppercase font-light">
                            {s.badge}
                          </span>
                        )}
                      </div>

                      {/* Detail */}
                      <div>
                        <p className="text-[0.88rem] leading-[1.85] text-foreground/50 font-light mb-5">
                          {s.body}
                        </p>
                        <ul className="space-y-2">
                          {s.bullets.map((b, bi) => (
                            <li
                              key={bi}
                              className="flex items-start gap-3 text-[0.78rem] text-foreground/35 font-light"
                            >
                              <span className="mt-2 shrink-0 w-1 h-1 rounded-full bg-foreground/20" />
                              {b}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        ))}

        {/* ── How It Works ──────────────────────────────────── */}
        <section className={`px-6 md:px-16 lg:px-24 py-20 border-b border-foreground/[0.07] ${sectionBase}`}>
          <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-12 md:gap-20">
            <div className="md:pt-2">
              <p
                className="text-[5rem] leading-none font-normal text-foreground/[0.06] select-none mb-3"
                style={{ fontFamily: "'DM Serif Display', serif" }}
              >
                04
              </p>
              <p className="text-[11px] tracking-[0.12em] uppercase text-foreground/30 font-light">
                How it works
              </p>
            </div>

            <div>
              <h2
                className="text-[clamp(1.7rem,2.8vw,2.4rem)] leading-[1.2] font-normal mb-4"
                style={{ fontFamily: "'DM Serif Display', serif" }}
              >
                From onboarding to first transaction — we make it simple.
              </h2>
              <p className="text-[0.95rem] text-foreground/45 font-light mb-12 max-w-md">
                Three steps. No drawn-out implementation cycles, no surprise
                dependencies.
              </p>

              <div className="space-y-0 border-t border-foreground/[0.07]">
                {steps.map((step, i) => (
                  <div
                    key={i}
                    className="grid grid-cols-[64px_1fr] gap-6 py-7 border-b border-foreground/[0.07]"
                  >
                    <p
                      className="text-[2rem] leading-none font-normal text-foreground/[0.12]"
                      style={{ fontFamily: "'DM Serif Display', serif" }}
                    >
                      {step.number}
                    </p>
                    <div>
                      <p className="text-[0.88rem] font-medium mb-1.5">{step.label}</p>
                      <p className="text-[0.82rem] leading-[1.8] text-foreground/40 font-light">
                        {step.body}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── FAQ ───────────────────────────────────────────── */}
        <section className={`px-6 md:px-16 lg:px-24 py-20 border-b border-foreground/[0.07] ${sectionAlt}`}>
          <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-12 md:gap-20">
            <div className="md:pt-2">
              <p
                className="text-[5rem] leading-none font-normal text-foreground/[0.06] select-none mb-3"
                style={{ fontFamily: "'DM Serif Display', serif" }}
              >
                05
              </p>
              <p className="text-[11px] tracking-[0.12em] uppercase text-foreground/30 font-light">
                FAQ
              </p>
            </div>

            <div>
              <h2
                className="text-[clamp(1.7rem,2.8vw,2.4rem)] leading-[1.2] font-normal mb-10"
                style={{ fontFamily: "'DM Serif Display', serif" }}
              >
                Everything you need to know.
              </h2>

              <div className="border-t border-foreground/[0.07]">
                {faqs.map((f, i) => (
                  <FAQItem key={i} q={f.q} a={f.a} />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── CTA ───────────────────────────────────────────── */}
        <section className={`px-6 md:px-16 lg:px-24 py-28 ${sectionBase}`}>
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-[11px] tracking-[0.12em] uppercase text-foreground/30 font-light mb-6">
              Get started
            </p>
            <h2
              className="text-[clamp(2rem,3.5vw,3.2rem)] font-normal leading-[1.12] mb-5"
              style={{ fontFamily: "'DM Serif Display', serif" }}
            >
              Ready to elevate your payment operations?
            </h2>
            <p className="text-[0.95rem] text-foreground/40 font-light leading-relaxed mb-10 max-w-md mx-auto">
              Join the leading organizations that trust MerchantHaus to deliver
              secure, reliable, and scalable payment infrastructure. Let's build
              the future of your payment operations together.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="https://ops-terminal.merchant.haus/merchant-apply"
                className="px-8 py-3.5 bg-foreground text-background text-[0.82rem] tracking-[0.08em] uppercase font-semibold hover:bg-foreground/90 transition-colors duration-200 rounded-sm"
              >
                Apply Now
              </a>
              <a
                href="tel:15056006042"
                className="px-8 py-3.5 border border-foreground/20 text-[0.82rem] tracking-[0.08em] uppercase font-medium hover:bg-foreground/[0.04] transition-colors duration-200 rounded-sm text-foreground/70"
              >
                1-505-600-6042
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
