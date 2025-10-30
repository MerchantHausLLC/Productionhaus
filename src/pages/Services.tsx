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

  const trustBadges = [
    { icon: ShieldCheck, text: "PCI DSS Level 1", subtext: "Platform Compliant" },
    { icon: Globe2, text: "200+ Processors", subtext: "Technology Connected" },
    { icon: Award, text: "25+ Years", subtext: "Collective Techpertise" },
    { icon: Clock, text: "24/7 Support", subtext: "Platform Assurance" },
  ];

  const features = [
    {
      icon: Smartphone,
      title: "Omnichannel Payments",
      subtitle: "Accept Everywhere, Any Device",
      description: "Accept payments in-store, online, in-app, and unattended. MerchantHaus connects to 200+ processors and supports all payment methods—EMV, contactless, ACH, wallets, text-to-pay, Tap to Pay on iPhone/Android, and more. One platform, every channel.",
      benefits: [
        "Support for retail, mobile, and e-commerce—switch channels as your business evolves",
        "API, SDK, and white-label portals for seamless integration into your existing software",
        "PCI DSS Level 1 compliance and advanced fraud prevention built in",
        "Real-time reporting, device management, and merchant-level controls"
      ],
      color: "from-crimson to-red-600"
    },
    {
      icon: ShieldAlert,
      title: "Fraud & Risk Management",
      subtitle: "AI-Powered Protection",
      description: "Stay protected with our multi-layered fraud prevention system featuring AI-powered transaction monitoring, real-time risk assessment, and advanced encryption protocols. Count, MonitorX, AI rules, 3D Secure, and comprehensive chargeback management.",
      benefits: [
        "AI risk scoring with customizable fraud rules and velocity checks",
        "3D Secure authentication and network tokenization for maximum security",
        "Real-time chargeback alerts with automated evidence compilation",
        "End-to-end encryption and PCI DSS compliance reducing your risk burden"
      ],
      color: "from-green-600 to-emerald-700"
    },
    {
      icon: BarChart2,
      title: "Merchant Portal & Analytics",
      subtitle: "Complete Control & Visibility",
      description: "Not just a portal—a comprehensive management system. Real-time transaction reports, recurring/subscription billing, device management, all branded for your partners. Export data, track KPIs, and make data-driven decisions.",
      benefits: [
        "White-labeled portals fully customizable with your brand",
        "Live dashboards with instant sales, refunds, and settlement metrics",
        "Custom reporting by product, channel, region, or merchant",
        "Customer segmentation and loyalty analytics for retention"
      ],
      color: "from-blue-600 to-cyan-500"
    },
    {
      icon: Code,
      title: "White-Label & Integration",
      subtitle: "Your Brand, Our Technology",
      description: "Deep customization for ISVs and partners. RESTful API, ready-made SDKs for iOS/Android, white-label portals, and dedicated launch support. Integrate your way with comprehensive documentation and sandbox environments.",
      benefits: [
        "Full white-label capability—logos, colors, domains, and branded communications",
        "RESTful API with SDKs for major platforms and languages",
        "Sandbox environment with live training and technical support",
        "Dedicated launch manager for every partner implementation"
      ],
      color: "from-indigo-600 to-purple-700"
    },
    {
      icon: Server,
      title: "Device & Terminal Management",
      subtitle: "Remote Control at Scale",
      description: "Manage all devices and terminals from one centralized portal. Assign, update firmware, troubleshoot, and support hardware remotely. Compatible with major terminal providers and emerging mobile payment solutions.",
      benefits: [
        "Centralized device provisioning and assignment",
        "Remote firmware updates and troubleshooting",
        "Real-time device status monitoring and alerts",
        "Support for EMV, contactless, PIN pads, and mobile readers"
      ],
      color: "from-slate-600 to-slate-800"
    },
    {
      icon: Layers,
      title: "Payment Orchestration",
      subtitle: "Smart Routing, Better Results",
      description: "Connect to multiple payment processors and dynamically route every transaction for optimal outcomes—lower fees, higher approval rates, fewer declines. Built-in failover ensures always-on acceptance.",
      benefits: [
        "Lower transaction costs by up to 20% with intelligent routing",
        "Automatic failover to backup processors for 99.99% uptime",
        "Unified reporting across all channels and processors",
        "Optimize approval rates with machine learning algorithms"
      ],
      color: "from-teal-600 to-cyan-800"
    }
  ];

  const useCases = [
    {
      icon: Building2,
      title: "For ISVs & SaaS Platforms",
      description: "Embed payments directly into your software with white-label solutions, revenue share models, and comprehensive API support."
    },
    {
      icon: Users,
      title: "For ISOs & Resellers",
      description: "Grow your merchant portfolio with competitive rates, residual programs, and tools that make onboarding fast and compliant."
    },
    {
      icon: ShoppingCart,
      title: "For Merchants",
      description: "Accept payments anywhere with transparent pricing, next-day funding, and support that's always available when you need it."
    },
    {
      icon: TrendingUp,
      title: "For Referral Partners",
      description: "Earn revenue by referring businesses to MerchantHaus. Simple signup, fast approvals, and generous commission structure."
    }
  ];

  const faqs = [
    {
      question: "What processors are supported?",
      answer: "MerchantHaus connects to 200+ processors globally, including all major acquirers and regional processors. We support multiple processor connections simultaneously for optimal routing."
    },
    {
      question: "How fast is onboarding?",
      answer: "For merchants: 24-48 hours for approval and setup. For partners (ISVs/ISOs): Dedicated launch manager guides you through API integration, typically completed within 2-4 weeks depending on complexity."
    },
    {
      question: "Can I keep my branding?",
      answer: "Absolutely. Our white-label solution allows complete customization—your logo, colors, domain, and branded communications. Your customers see only your brand."
    },
    {
      question: "What if I need support?",
      answer: "24/7 technical and merchant support via phone, email, and chat. Partner-specific support includes dedicated account managers, live training, and API troubleshooting."
    },
    {
      question: "How do partners get paid?",
      answer: "Partners earn revenue through flexible models: revenue share, referral fees, or wholesale pricing. Monthly payouts with transparent reporting. Contact us for specific rate cards."
    },
    {
      question: "Is this PCI compliant?",
      answer: "Yes. MerchantHaus maintains PCI DSS Level 1 compliance, the highest security standard. Our platform reduces your PCI scope with tokenization and hosted payment forms."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section with Background Image */}
        <section className="relative overflow-hidden h-[600px]">
          <div className="absolute inset-0">
            <img
              src="/blog-images/cardslide.webp"
              alt="The Future of Digital Commerce"
              className="w-full h-full object-cover brightness-[1.2] dark:brightness-[0.8] transition-[filter] duration-500"
            />
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
              <TypewriterReveal
                as="p"
                text="In-store, online, mobile, and unattended. Modular, omnichannel, white-label payment solutions built for partners."
                className="text-lg md:text-xl lg:text-2xl text-muted-foreground leading-relaxed text-balance"
                delay={200}
                speed={24}
              />

              {/* Trust Badges */}
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
                  <a href="/apply">Get Started</a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-16 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <TypewriterReveal
                as="h2"
                text="Built For Every Business Model"
                className="text-4xl font-ubuntu font-bold text-foreground mb-4"
                speed={26}
              />
              <TypewriterReveal
                as="p"
                text="Whether you're an ISV, ISO, merchant, or referral partner—we have the right solution for you."
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

        {/* Features Deep Dive - Tabs */}
        <section className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <TypewriterReveal
                as="h2"
                text="Comprehensive Payment Platform"
                className="text-4xl md:text-5xl font-ubuntu font-bold text-foreground mb-4"
                speed={26}
              />
              <TypewriterReveal
                as="p"
                text="Every feature you need to process, manage, and optimize payments—built into one powerful platform."
                className="text-xl text-muted-foreground max-w-3xl mx-auto"
                delay={150}
                speed={22}
              />
            </div>

            <Tabs defaultValue="0" className="w-full">
              <TabsList className="grid w-full grid-cols-2 md:grid-cols-3 lg:grid-cols-6 mb-8 h-auto gap-2">
                {features.map((feature, idx) => {
                  const Icon = feature.icon;
                  return (
                    <TabsTrigger 
                      key={idx} 
                      value={idx.toString()}
                      className="flex flex-col items-center gap-2 p-4 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                    >
                      <Icon className="w-5 h-5" />
                      <span className="text-xs font-semibold text-center leading-tight">{feature.title.split(' ')[0]}</span>
                    </TabsTrigger>
                  );
                })}
              </TabsList>

              {features.map((feature, idx) => {
                const Icon = feature.icon;
                return (
                  <TabsContent key={idx} value={idx.toString()} className="mt-0">
                    <Card className="border-2">
                      <CardHeader>
                        <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-4 shadow-lg`}>
                          <Icon className="w-8 h-8 text-white" />
                        </div>
                        <CardTitle className="text-3xl font-ubuntu">{feature.title}</CardTitle>
                        <CardDescription className="text-lg font-semibold text-primary italic">
                          {feature.subtitle}
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-6">
                        <p className="text-lg text-muted-foreground leading-relaxed text-justify">
                          {feature.description}
                        </p>
                        <ul className="space-y-3">
                          {feature.benefits.map((benefit, i) => (
                            <li key={i} className="flex items-start gap-3">
                              <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                              <span className="text-muted-foreground">{benefit}</span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  </TabsContent>
                );
              })}
            </Tabs>
          </div>
        </section>

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

        {/* FAQ Section */}
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
                <a href="/apply">
                  <Mail className="mr-2 w-5 h-5" />
                  Apply Now
                </a>
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
