import { Header } from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { ContactDialog } from "@/components/ContactDialog";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import ServicesShowcase from "@/components/ServicesShowcase";
import { TypewriterReveal } from "@/components/TypewriterReveal";
import { PageSEO } from "@/components/PageSEO";
import {
  Smartphone,
  Globe2,
  ShieldCheck,
  Zap,
  Building2,
  ArrowRight,
  Phone,
  Mail,
  Clock,
  Award,
  FileText,
  ChevronRight,
} from "lucide-react";

const Services = () => {
  const [isContactOpen, setIsContactOpen] = useState(false);

  const trustBadges = [
    { icon: ShieldCheck, text: "PCI DSS Level 1" },
    { icon: Zap, text: "Next-Day Funding" },
    { icon: Award, text: "Award-Winning Support" },
    { icon: Clock, text: "24/7 Availability" },
  ];

  const useCases = [
    {
      icon: Building2,
      title: "Retail & In-Store",
      description: "Power your in-person operations with fast, reliable POS terminals, Tap-to-Pay, and seamless inventory sync.",
      gradient: "from-blue-500/10 to-indigo-500/10",
      iconBg: "bg-blue-500/15",
      iconColor: "text-blue-600 dark:text-blue-400",
    },
    {
      icon: Globe2,
      title: "E-commerce",
      description: "Securely accept payments online with our hosted payment pages or simple integrations for any website.",
      gradient: "from-emerald-500/10 to-teal-500/10",
      iconBg: "bg-emerald-500/15",
      iconColor: "text-emerald-600 dark:text-emerald-400",
    },
    {
      icon: Smartphone,
      title: "Mobile & On-the-Go",
      description: "Take payments anywhere with our mobile app and card readers. Built for field services, events, and multi-location operations.",
      gradient: "from-amber-500/10 to-orange-500/10",
      iconBg: "bg-amber-500/15",
      iconColor: "text-amber-600 dark:text-amber-400",
    },
    {
      icon: FileText,
      title: "Invoicing & Subscriptions",
      description: "Automate your billing with recurring payments and secure email invoices. Get paid faster, with less effort.",
      gradient: "from-violet-500/10 to-purple-500/10",
      iconBg: "bg-violet-500/15",
      iconColor: "text-violet-600 dark:text-violet-400",
    },
  ];

  const steps = [
    {
      number: 1,
      title: "Apply & Approve",
      description: "Submit your application online. Our underwriting team reviews and approves within 24-48 hours.",
    },
    {
      number: 2,
      title: "Integrate & Configure",
      description: "Access your sandbox environment, API documentation, and SDKs. Configure your payment flows with expert support.",
    },
    {
      number: 3,
      title: "Launch & Grow",
      description: "Go live with confidence. Real-time monitoring, 24/7 support, and optimization tools help you scale seamlessly.",
    },
  ];

  const faqs = [
    {
      question: "What does MerchantHaus do?",
      answer: "We provide everything your organization needs to accept credit cards and other payments. This includes POS terminals for in-person transactions, online checkout for websites, mobile apps for field payments, and secure invoicing — all in one unified, secure platform.",
    },
    {
      question: "How fast is onboarding?",
      answer: "Most applications are approved within 24-48 hours. Once approved, you can start accepting payments immediately.",
    },
    {
      question: "What are the rates?",
      answer: "We offer transparent pricing tailored to your organization. No hidden fees or complex statements. Contact us for a custom quote, and we'll show you how our rates compare.",
    },
    {
      question: "What if I need support?",
      answer: "Our U.S.-based support team is available 24/7/365 via phone, email, and chat. When you call, you get a real person who can help you right away.",
    },
    {
      question: "Is this PCI compliant?",
      answer: "Yes. Our platform is PCI DSS Level 1 compliant, the highest security standard in the industry. We use tokenization and end-to-end encryption to ensure your and your customers' data is always secure.",
    },
    {
      question: "Do I need to switch bank accounts?",
      answer: "No. We deposit funds directly into your existing business checking account. Most clients receive their funding the next business day.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <PageSEO
        title="Services"
        description="Accept payments anywhere — in-person, online, or in the field. Mobile payments, POS devices, fraud detection, and global payment processing for mid-market and enterprise organizations."
        path="/services"
      />
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden h-[600px]">
          <div className="absolute inset-0">
            <img
              src="/blog-images/cardslide.webp"
              alt="The Future of Digital Commerce"
              className="w-full h-full object-cover brightness-[1.1] dark:brightness-[0.85] transition-[filter] duration-500"
            />
            <div className="absolute inset-0 bg-white/8 mix-blend-screen dark:bg-black/40 dark:mix-blend-multiply pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-r from-background/70 via-background/55 to-background/40 dark:from-background/65 dark:via-background/50 dark:to-background/40" />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
            <div className="max-w-3xl space-y-6">
              <TypewriterReveal
                as="h1"
                text="Accept Payments Anywhere"
                className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-ubuntu font-bold text-foreground leading-tight tracking-tight"
                speed={28}
              />
              <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground leading-relaxed text-balance">
                In-store, online, or in the field. Get everything you need to accept payments, protect revenue, and scale your operations.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4 pt-2">
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
                  <a href="/#contact">Get Started</a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Trust Badges Strip */}
        <section className="py-6 bg-muted/50 border-y border-border/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-4">
              {trustBadges.map((badge, idx) => {
                const Icon = badge.icon;
                return (
                  <div key={idx} className="flex items-center gap-2 text-muted-foreground">
                    <Icon className="w-5 h-5 text-primary" />
                    <span className="text-sm font-medium">{badge.text}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <h2 className="text-4xl font-ubuntu font-bold text-foreground mb-4">
                All the Ways They Want to Pay
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Stop losing revenue to outdated systems, excessive fees, and poor support. MerchantHaus is built for organizations that need payments to simply work.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {useCases.map((useCase, idx) => {
                const Icon = useCase.icon;
                return (
                  <Card
                    key={idx}
                    className={`group relative overflow-hidden border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 bg-gradient-to-br ${useCase.gradient}`}
                  >
                    <CardHeader className="pb-2">
                      <div
                        className={`w-14 h-14 rounded-xl ${useCase.iconBg} flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110`}
                      >
                        <Icon className={`w-7 h-7 ${useCase.iconColor}`} />
                      </div>
                      <CardTitle className="text-xl">{useCase.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground leading-relaxed">{useCase.description}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Services Showcase */}
        <ServicesShowcase />

        {/* How It Works - Stepper */}
        <section className="py-20 bg-muted/30">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-ubuntu font-bold text-foreground mb-4">
                How It Works
              </h2>
              <p className="text-xl text-muted-foreground">
                From onboarding to your first transaction—we make it simple.
              </p>
            </div>

            {/* Desktop Stepper */}
            <div className="hidden md:block">
              <div className="relative">
                {/* Connector Line */}
                <div className="absolute top-8 left-0 right-0 h-0.5 bg-border" />
                <div className="absolute top-8 left-0 w-1/2 h-0.5 bg-gradient-to-r from-crimson to-crimson/50" />

                <div className="grid grid-cols-3 gap-8 relative">
                  {steps.map((step, idx) => (
                    <div key={idx} className="flex flex-col items-center text-center">
                      {/* Step Number */}
                      <div className="relative z-10 w-16 h-16 rounded-full bg-crimson text-white flex items-center justify-center text-2xl font-bold shadow-lg mb-6">
                        {step.number}
                        {idx < steps.length - 1 && (
                          <ChevronRight className="absolute -right-10 w-6 h-6 text-muted-foreground" />
                        )}
                      </div>
                      <h3 className="text-xl font-ubuntu font-bold mb-3">{step.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Mobile Stepper */}
            <div className="md:hidden space-y-0">
              {steps.map((step, idx) => (
                <div key={idx} className="flex gap-4">
                  {/* Vertical Line + Number */}
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 rounded-full bg-crimson text-white flex items-center justify-center text-xl font-bold shadow-lg flex-shrink-0">
                      {step.number}
                    </div>
                    {idx < steps.length - 1 && (
                      <div className="w-0.5 flex-1 bg-gradient-to-b from-crimson to-border my-2" />
                    )}
                  </div>
                  {/* Content */}
                  <div className="pb-8">
                    <h3 className="text-xl font-ubuntu font-bold mb-2">{step.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section - Accordion */}
        <section className="py-20 bg-background">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-ubuntu font-bold text-foreground mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-xl text-muted-foreground">
                Everything you need to know about MerchantHaus payment solutions.
              </p>
            </div>

            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, idx) => (
                <AccordionItem
                  key={idx}
                  value={`faq-${idx}`}
                  className="border-2 rounded-xl px-6 data-[state=open]:border-primary/50 hover:border-primary/30 transition-colors bg-card"
                >
                  <AccordionTrigger className="text-left text-lg font-semibold py-5 hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-20 bg-gradient-to-br from-crimson via-crimson/95 to-crimson/90">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
            <h2 className="text-4xl md:text-5xl font-ubuntu font-bold mb-6">
              Ready to Transform Your Payments?
            </h2>
            <p className="text-xl mb-8 text-white/90 leading-relaxed">
              Modular, compliant, and proven. Join the organizations and partners who trust MerchantHaus to power their payment operations.
            </p>

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
                className="border-2 border-white text-white bg-transparent hover:bg-white/15 hover:text-white font-bold px-8 py-6 text-lg rounded-lg transition-all"
                asChild
              >
                <a href="https://ops-terminal.merchant.haus/contact">
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
