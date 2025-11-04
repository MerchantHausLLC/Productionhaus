import type { LucideIcon } from "lucide-react";
import {
  BarChart2,
  CreditCard,
  Globe,
  Lock,
  Repeat,
  ShieldAlert,
  ShieldCheck,
  ShoppingCart,
  Smartphone,
  Shuffle,
} from "lucide-react";

export type Solution = {
  icon: LucideIcon;
  title: string;
  description: string;
  fullDescription: string;
  borderColor: string;
  buttonColor: string;
  bannerImage?: string;
};

export const solutions: Solution[] = [
  {
    icon: CreditCard,
    title: "Payment Processing",
    description: "Accept all major credit cards, debit cards, and digital wallets with competitive rates and instant settlements.",
    fullDescription:
      "Our comprehensive payment processing solution enables businesses to accept all major credit cards, debit cards, and digital wallets seamlessly. With competitive transaction rates, instant settlements, and advanced reconciliation tools, you can streamline your payment operations and improve cash flow. Our platform supports EMV chip cards, contactless payments, and mobile wallets like Apple Pay and Google Pay. Get real-time reporting, automated invoicing, and dedicated merchant support available 24/7.",
    borderColor: "border-crimson",
    buttonColor: "bg-crimson hover:bg-crimson/90",
    bannerImage: "/card-banners/card1.webp",
  },
  {
    icon: ShieldAlert,
    title: "Advanced Fraud Detection",
    description: "Protect your business and your customers with our multi-layered fraud prevention system.",
    fullDescription:
      "Stay protected with our multi-layered fraud prevention system featuring AI-powered transaction monitoring, real-time risk assessment, and advanced encryption protocols. Our system automatically flags suspicious activities, uses machine learning to detect patterns, and provides customizable security rules. Features include 3D Secure authentication, tokenization, PCI DSS Level 1 compliance, and chargeback management tools. Reduce fraud losses while maintaining a smooth customer experience with intelligent risk scoring.",
    borderColor: "border-green-600",
    buttonColor: "bg-green-600 hover:bg-green-600/90",
    bannerImage: "/card-banners/card2.webp",
  },
  {
    icon: Smartphone,
    title: "Mobile Solutions",
    description: "Process payments anywhere with our mobile-ready technology and POS systems for on-the-go businesses.",
    fullDescription:
      "Transform any smartphone or tablet into a powerful point-of-sale system with our mobile payment solutions. Perfect for businesses on the go, our mobile POS accepts payments anywhere with reliable offline mode capabilities. Features include inventory management, customer relationship tools, digital receipts, tip management, and split payment options. Compatible with Bluetooth card readers and supports both iOS and Android devices. Ideal for food trucks, pop-up shops, delivery services, and field service providers.",
    borderColor: "border-orange-400",
    buttonColor: "bg-orange-400 hover:bg-orange-400/90",
    bannerImage: "/card-banners/card4.webp",
  },
  {
    icon: Globe,
    title: "Global Payments",
    description: "Expand internationally with multi-currency support and local payment methods in over 200 countries.",
    fullDescription:
      "Expand your business globally with our international payment infrastructure supporting 135+ currencies and local payment methods across 200+ countries. Accept popular regional payment methods including Alipay, WeChat Pay, iDEAL, and SEPA transfers. Features include automatic currency conversion, dynamic currency conversion at checkout, multi-currency settlements, and local acquiring to reduce cross-border fees. Our platform handles complex tax calculations, compliance requirements, and provides localized checkout experiences to maximize conversion rates in every market.",
    borderColor: "border-emerald-600",
    buttonColor: "bg-emerald-600 hover:bg-emerald-600/90",
    bannerImage: "/card-banners/card5.webp",
  },
  {
    icon: Lock,
    title: "Network Tokenization",
    description: "Enhance payment security and approval rates with network tokenization.",
    fullDescription:
      "Enhance payment security and approval rates with network tokenization. By replacing sensitive card data with unique, encrypted tokens, you minimize the risk of breaches and keep recurring payments running smoothly—even when cards are updated or replaced. Features include up to 3% increase in transaction approvals, reduces PCI compliance burdens, automatic card updater to prevent failed recurring payments, and vault-stored tokens for maximum safety.",
    borderColor: "border-indigo-600",
    buttonColor: "bg-indigo-600 hover:bg-indigo-600/90",
    bannerImage: "/card-banners/card6.webp",
  },
  {
    icon: ShoppingCart,
    title: "Ecommerce Solutions",
    description: "Launch and grow your online presence with robust ecommerce tools.",
    fullDescription:
      "Launch and grow your online presence with robust ecommerce tools that keep you agile and secure. From payment gateways to customizable checkouts, we give you everything you need to sell, scale, and connect with customers—without the technical pain. Features include pre-built integrations with top shopping carts, customizable checkout pages for any brand, secure PCI-compliant transactions, and advanced ecommerce tools that help stores grow 35% faster.",
    borderColor: "border-purple-600",
    buttonColor: "bg-purple-600 hover:bg-purple-600/90",
    bannerImage: "/card-banners/card7.webp",
  },
  {
    icon: BarChart2,
    title: "Data & Analytics",
    description: "Unlock powerful insights from your transaction data with real-time analytics.",
    fullDescription:
      "Unlock powerful insights from your transaction data. Our analytics dashboard turns complex numbers into actionable trends, letting you track sales, customer behaviors, and campaign results in real time—no spreadsheets, no guesswork. Features include live dashboards with instant sales and refund metrics, custom reporting by product, channel, or region, customer segmentation and loyalty analytics. Merchants with analytics tools make decisions 2x faster.",
    borderColor: "border-blue-600",
    buttonColor: "bg-blue-600 hover:bg-blue-600/90",
    bannerImage: "/card-banners/card10.webp",
  },
  {
    icon: Repeat,
    title: "Subscription Billing",
    description: "Automate your billing and grow your subscription base with smart recurring revenue tools.",
    fullDescription:
      "Automate your billing and grow your subscription base with tools that handle the complexity for you. Create, manage, and optimize plans—while smart dunning and card updating keep your revenue steady. Features include flexible trial, renewal, and proration options, automated failed payment recovery, card updater and retry logic to reduce churn. 46% of consumers pay for at least one subscription service, making this a crucial revenue stream.",
    borderColor: "border-amber-500",
    buttonColor: "bg-amber-500 hover:bg-amber-500/90",
    bannerImage: "/card-banners/card1.webp",
  },
  {
    icon: ShieldCheck,
    title: "Chargeback Management",
    description: "Win more disputes and keep more revenue with automated chargeback management.",
    fullDescription:
      "Don't let disputes eat into your bottom line. Our automated system tracks, compiles, and submits evidence on your behalf, making it easier to contest chargebacks and reclaim lost revenue. Features include real-time chargeback alerts, 20% higher reversal rates with rapid response, integrated evidence templates for major card brands, and analytics to spot and stop patterns before they repeat.",
    borderColor: "border-indigo-700",
    buttonColor: "bg-indigo-700 hover:bg-indigo-700/90",
    bannerImage: "/card-banners/card2.webp",
  },
  {
    icon: Shuffle,
    title: "Payment Orchestration",
    description: "Smart routing for better approvals, lower costs, and optimized payment paths.",
    fullDescription:
      "Connect to multiple payment processors and dynamically route every transaction for the best outcome—lower fees, higher approval rates, fewer declines. Control your entire payment stack without extra IT overhead. Features include lower transaction costs by up to 20%, built-in failover for always-on acceptance, unified reporting across all channels and providers, and automatic optimization of every payment path.",
    borderColor: "border-teal-600",
    buttonColor: "bg-teal-600 hover:bg-teal-600/90",
    bannerImage: "/card-banners/card4.webp",
  },
];
