import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { useState, useRef, useEffect } from "react";
import { ContactDialog } from "@/components/ContactDialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import ServicesShowcase from "@/components/ServicesShowcase";
import { TypewriterReveal } from "@/components/TypewriterReveal";
import {
  Smartphone,
  ShieldAlert,
  Globe2,
  Lock,
  ShoppingCart,
  BarChart2,
  Repeat,
  ShieldCheck,
  Shuffle,
  CreditCard,
  Zap,
  Users,
  Building2,
  CheckCircle2,
  ArrowRight,
  Phone,
  Mail,
  Clock,
  Award,
  TrendingUp,
  Server,
  Code,
  Layers,
  FileText, // Added for new use case
} from "lucide-react";

const Services = () => {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [visibleCards, setVisibleCards] = useState<Set<number>>(new Set());
  const observerRef = useRef<IntersectionObserver | null>(null);
  const cardRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index') || '0');
            setVisibleCards((prev) => new Set([...prev, index]));
          }
        });
      },
      { threshold: 0.1 }
    );

    return () => observerRef.current?.disconnect();
  }, []);

  useEffect(() => {
    cardRef.current.forEach((card) => {
      if (card && observerRef.current) {
        observerRef.current.observe(card);
      }
    });
  }, []);

  // NEW: Merchant-facing trust badges
  const trustBadges = [
    { icon: ShieldCheck, text: "PCI DSS Level 1", subtext: "Bank-Grade Security" },
    { icon: Zap, text: "Next-Day Funding", subtext: "Get Your Money Fast" },
    { icon: Award, text: "Award-Winning", subtext: "U.S.-Based Support" },
    { icon: Clock, text: "24/7 Support", subtext: "Here When You Need Us" },
  ];

  // REMOVED: Partner-facing features constant

  // NEW: Merchant-facing use cases
  const useCases = [
    {
      icon: Building2,
      title: "Retail & In-Store",
      description: "Power your storefront with fast, reliable POS terminals, Tap-to-Pay, and seamless inventory sync."
    },
    {
      icon: Globe2,
      title: "E-commerce",
      description: "Securely accept payments online with our hosted payment pages or simple integrations for any website."
    },
    {
      icon: Smartphone,
      title: "Mobile & On-the-Go",
      description: "Take payments anywhere with our mobile app and pocket-sized card readers. Perfect for services, markets, and events."
    },
    {
      icon: FileText,
      title: "Invoicing & Subscriptions",
      description: "Automate your billing with recurring payments and secure email invoices. Get paid faster, with less effort."
    }
  ];

  // NEW: Merchant-facing FAQs
  const faqs = [
    {
      question: "What does MerchantHaus do?",
      answer: "We provide everything your business needs to accept credit cards and other payments. This includes POS terminals for stores, online checkout for websites, mobile apps for on-the-go payments, and secure invoicing, all in one simple, secure platform."
    },
    {
      question: "How fast is onboarding?",
      answer: "Most merchant applications are approved within 24-48 hours. Once approved, you can start accepting payments immediately."
    },
    {
      question: "What are the rates?",
      answer: "We offer simple, transparent pricing tailored to your business. We believe in no hidden fees or confusing statements. Contact us for a free quote, and we'll show you how much you can save."
    },
    {
      question: "What if I need support?",
      answer: "Our U.S.-based support team is available 24/7/365 via phone, email, and chat. When you call, you get a real person who can help you right away."
    },
    {
      question: "Is this PCI compliant?",
      answer: "Yes. Our platform is PCI DSS Level 1 compliant, the highest security standard in the industry. We use tokenization and end-to-end encryption to ensure your and your customers' data is always secure."
    },
    {
      question: "Do I need to switch bank accounts?",
      answer: "No. We deposit your funds directly into your existing business checking account. Most merchants receive their funding the next business day."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section with Background Image */}
        <section className="relative overflow-hidden h-[600px]">
          <div className="absolute inset-0">
            <div className="relative h-full w-full">
              <Image
                src="/blog-images/cardslide.webp"
                alt="The Future of Digital Commerce"
                fill
                priority
                className="object-cover brightness-[1.2] dark:brightness-[0.8] transition-[filter] duration-500"
              />
            </div>
            <div className="absolute inset-0 bg-white/15 mix-blend-screen dark:bg-black/50 dark:mix-blend-multiply pointer-events-none"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/85 to-background/70 dark:from-background/80 dark:via-background/65 dark:to-background/55"></div>
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
            <div className="max-w-3xl space-y-6">
              <TypewriterReveal
                as="h1"
                text="Accept Payments Anywhere"
                className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-ubuntu font-bold text-foreground leading-tight tracking-tight"
                speed={28}
              />
              {/* UPDATED: Merchant-facing sub-headline */}
              <TypewriterReveal
                as="p"
                text="In-store, online, or on-the-go. Get everything you need to accept payments, protect revenue, and grow your business."
                className="text-lg md:text-xl lg:text-2xl text-muted-foreground leading-relaxed text-balance"
                delay={200}
                speed={24}
              />

              {/* Trust Badges - UPDATED */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {trustBadges.map((badge, idx) => {
                  const Icon = badge.icon;
                  return (
                    <div
                      key={idx}
                      className="flex items-center gap-2 bg-background/70 dark:bg-background/60 backdrop-blur-md rounded-lg p-3 border border-border/60"
                    >
                      <Icon className="w-6 h-6 text-primary flex-shrink-0" />
                      <div className="min-w-0">
                        <div className="text-sm font-bold text-foreground truncate">{badge.text}</div>
                        <div className="text-xs text-muted-foreground truncate">{badge.subtext}</div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4 pt-4">
                <Button
                  size="lg"
                  className="bg-crimson hover:bg-crimson/90 text-white font-bold px-8 py-6 text-lg rounded-lg shadow-lg hover:shadow-xl transition-all"
                  onClick={() => setIsContactOpen(true)}
                >
                  Book a Demo
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-foreground text-foreground hover:bg-foreground hover:text-background font-bold px-8 py-6 text-lg rounded-lg transition-all"
                  asChild
                >
                  <Link href="/apply">Get Started</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* REPLACED: Use Cases Section is now Merchant-Facing */}
        <section className="py-16 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <TypewriterReveal
                as="h2"
                text="All the ways that they want to Pay"
                className="text-4xl font-ubuntu font-bold text-foreground mb-4"
                speed={26}
              />
              <TypewriterReveal
                as="p"
                text="Stop losing sales to clunky checkouts, high fees, and poor support. We built MerchantHaus for business owners who need payments to just *work*."
                className="text-xl text-muted-foreground max-w-3xl mx-auto"
                delay={150}
                speed={22}
              />
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {useCases.map((useCase, idx) => {
                const Icon = useCase.icon;
                return (
                  <Card key={idx} className="border-2 hover:border-primary transition-all hover:shadow-lg">
                    <CardHeader>
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      <CardTitle className="text-xl">{useCase.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{useCase.description}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* REMOVED: Partner-facing Features Deep Dive - Tabs section */}
        
        {/* This is the "cards" section the user referred to */}
        <ServicesShowcase />

        {/* How It Works */}
        <section className="py-20 bg-muted/30">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <TypewriterReveal
                as="h2"
                text="How It Works"
                className="text-4xl font-ubuntu font-bold text-foreground mb-4"
                speed={26}
              />
              <TypewriterReveal
                as="p"
                text="From onboarding to your first transaction—we make it simple."
                className="text-xl text-muted-foreground"
                delay={150}
                speed={22}
              />
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="relative">
                <div className="bg-card rounded-2xl p-8 border-2 border-border h-full">
                  <div className="w-12 h-12 rounded-full bg-crimson text-white flex items-center justify-center text-2xl font-bold mb-6">
                    1
                  </div>
                  <TypewriterReveal
                    as="h3"
                    text="Apply & Approve"
                    className="text-2xl font-ubuntu font-bold mb-4"
                    speed={24}
                  />
                  <TypewriterReveal
                    as="p"
                    text="Submit your application online. Our underwriting team reviews and approves within 24-48 hours. Dedicated launch manager assigned for partner integrations."
                    className="text-muted-foreground leading-relaxed"
                    delay={120}
                    speed={20}
                  />
                </div>
              </div>

              <div className="relative">
                <div className="bg-card rounded-2xl p-8 border-2 border-border h-full">
                  <div className="w-12 h-12 rounded-full bg-crimson text-white flex items-center justify-center text-2xl font-bold mb-6">
                    2
                  </div>
                  <TypewriterReveal
                    as="h3"
                    text="Integrate & Configure"
                    className="text-2xl font-ubuntu font-bold mb-4"
                    speed={24}
                  />
                  <TypewriterReveal
                    as="p"
                    text="Access your sandbox environment, API documentation, and SDKs. Configure your payment flows, branding, and processor connections with expert support."
                    className="text-muted-foreground leading-relaxed"
                    delay={120}
                    speed={20}
                  />
                </div>
              </div>

              <div className="relative">
                <div className="bg-card rounded-2xl p-8 border-2 border-border h-full">
                  <div className="w-12 h-12 rounded-full bg-crimson text-white flex items-center justify-center text-2xl font-bold mb-6">
                    3
                  </div>
                  <TypewriterReveal
                    as="h3"
                    text="Launch & Grow"
                    className="text-2xl font-ubuntu font-bold mb-4"
                    speed={24}
                  />
                  <TypewriterReveal
                    as="p"
                    text="Go live with confidence. Real-time monitoring, 24/7 support, and continuous optimization tools help you scale seamlessly as your business grows."
                    className="text-muted-foreground leading-relaxed"
                    delay={120}
                    speed={20}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* UPDATED: FAQ Section is now merchant-facing */}
        <section className="py-20 bg-background">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <TypewriterReveal
                as="h2"
                text="Frequently Asked Questions"
                className="text-4xl font-ubuntu font-bold text-foreground mb-4"
                speed={26}
              />
              <TypewriterReveal
                as="p"
                text="Everything you need to know about MerchantHaus payment solutions."
                className="text-xl text-muted-foreground"
                delay={150}
                speed={22}
              />
            </div>

            <div className="space-y-6">
              {faqs.map((faq, idx) => (
                <Card key={idx} className="border-2 hover:border-primary transition-all">
                  <CardHeader>
                    <CardTitle className="text-xl flex items-start gap-3">
                      <span className="text-primary font-bold">{idx + 1}.</span>
                      {faq.question}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed pl-7">
                      {faq.answer}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-20 bg-gradient-to-br from-crimson via-crimson/95 to-crimson/90">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
            <TypewriterReveal
              as="h2"
              text="Ready to Transform Your Payments?"
              className="text-4xl md:text-5xl font-ubuntu font-bold mb-6"
              speed={26}
            />
            <TypewriterReveal
              as="p"
              text="Partner-centric, modular, compliant, and proven. Join the merchants and partners who trust MerchantHaus to power their payment operations."
              className="text-xl mb-8 text-white/90 leading-relaxed"
              delay={150}
              speed={22}
            />
            
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <Button 
                size="lg"
                className="bg-white text-crimson hover:bg-white/90 font-bold px-8 py-6 text-lg rounded-lg shadow-lg hover:shadow-xl transition-all"
                onClick={() => setIsContactOpen(true)}
              >
                <Phone className="mr-2 w-5 h-5" />
                Schedule a Call
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-crimson font-bold px-8 py-6 text-lg rounded-lg transition-all"
                asChild
              >
                <Link href="/apply" className="inline-flex items-center">
                  <Mail className="mr-2 w-5 h-5" />
                  Apply Now
                </Link>
              </Button>
            </div>

            <div className="flex flex-wrap justify-center gap-8 text-white/90">
              <div className="flex items-center gap-2">
                <Phone className="w-5 h-5" />
                <a href="tel:+15056006042" className="hover:text-white transition-colors">
                  1-505-600-6042
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-5 h-5" />
                <button onClick={() => setIsContactOpen(true)} className="hover:text-white transition-colors">
                  support@merchanthaus.io
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <ContactDialog open={isContactOpen} onOpenChange={setIsContactOpen} />
      <Footer />
    </div>
  );
};

export default Services;
