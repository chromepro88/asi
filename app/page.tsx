import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { SmoothScroll } from "@/components/SmoothScroll";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import DynamicLogo from "@/components/DynamicLogo";
import { HomePricingSection } from "@/components/HomePricingSection";
import { SiteFooter } from "@/components/SiteFooter";
import { TrackedButtonLink } from "@/components/TrackedButtonLink";


// Lazy load components
const WhatsAppButton = dynamic(() => import("@/components/WhatsAppButton").then((mod) => mod.WhatsAppButton), { ssr: false });
const PhoneAnimation = dynamic(() => import("@/components/PhoneAnimation").then((mod) => mod.default), {
  ssr: false,
  loading: () => (
    <div className="relative flex flex-col items-center justify-center min-h-[500px] py-8">
      <div className="w-72 h-[36rem] border-8 border-gray-300 rounded-3xl bg-gray-100 animate-pulse"></div>
    </div>
  )
});

export const generateMetadata = (): Metadata => ({
  title: "WhatsApp AI Chatbot Singapore | #1 AI Chatbot Agency | AI Super",
  description: "Singapore's #1 WhatsApp AI chatbot agency. 500+ businesses trust AI Super to automate customer service 24/7, capture leads & boost sales by 40%. Voice + multilingual. From $69/mo. Setup in 5 min!",
  keywords: ["whatsapp ai chatbot singapore", "ai chatbot singapore", "singapore whatsapp chatbot", "whatsapp chatbot singapore", "chatbot agency singapore", "ai chatbot agency singapore", "chatbot and virtual assistant services singapore", "ai chatbots and virtual assistants singapore", "whatsapp ai chatbot", "whatsapp automation singapore", "chatbot singapore", "business automation", "lead generation", "customer support automation", "WhatsApp AI", "real estate chatbot"],
  alternates: {
    canonical: "https://asi.sg",
  },
  openGraph: {
    title: "WhatsApp AI Chatbot Singapore | #1 AI Chatbot Agency | AI Super",
    description: "Singapore's #1 WhatsApp AI chatbot agency. 500+ businesses automate customer service 24/7, capture leads & boost sales 40%.",
    url: "https://asi.sg",
    siteName: "AI Super Private Limited",
    images: [{ url: "/api/og", width: 1200, height: 630, alt: "AI Super - Singapore WhatsApp Chatbot for Business Automation" }],
    locale: "en_SG",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "WhatsApp AI Chatbot Singapore | #1 AI Chatbot Agency",
    description: "Singapore's #1 WhatsApp AI chatbot agency. 500+ businesses automate customer service 24/7 & boost sales 40%.",
    images: ["/api/og"],
  },
});

const PARTNER_LOGOS = [
  { src: "/PropNex.png", alt: "PropNex logo", width: 120, height: 48 },
  { src: "/Huttons.png", alt: "Huttons logo", width: 120, height: 48 },
  { src: "/OrangeTee.jpeg", alt: "OrangeTee logo", width: 140, height: 48 },
  { src: "/realstar.png", alt: "Realstar Premier Group logo", width: 140, height: 48 },
  { src: "/Soon%20Travel.png", alt: "Soon Travel logo", width: 140, height: 48 },
  { src: "/Mortgage%20Titan.jpg", alt: "Mortgage Titan logo", width: 160, height: 48 },
  { src: "/FX%20Tech.png", alt: "FX Tech logo", width: 140, height: 48 },
  { src: "/Harmony%20Funeral%20Care.png", alt: "Harmony Funeral Care logo", width: 180, height: 48 },
  { src: "/Hotel%20Grand%20Central.jpg", alt: "Hotel Grand Central logo", width: 512, height: 128 },
  { src: "/Rugged-box.com.jpg", alt: "Rugged-box.com logo", width: 160, height: 48 },
  { src: "/SgVenusFlyTrap.png", alt: "SgVenusFlyTrap logo", width: 160, height: 48 },
] as const;

const TESTIMONIALS = [
  { src: "/darren.png", alt: "Customer testimonial from Darren - SgVenusFlyTrap" },
  { src: "/james.png", alt: "Customer testimonial from James - Realstar Premier Group" },
  { src: "/hakeem.png", alt: "Customer testimonial from Hakeem - Mortgage Titan" },
] as const;

const FEATURES = [
  {
    icon: "💬",
    title: "Unlimited AI Responses",
    description:
      "Handle thousands of customer conversations simultaneously. No limits on messages - your AI works around the clock without getting tired.",
  },
  {
    icon: "🎤",
    title: "Voice Message Recognition",
    description:
      "Customers prefer voice? No problem. Our AI automatically transcribes and responds to voice messages in real-time.",
  },
  {
    icon: "🌍",
    title: "Multilingual Support",
    description:
      "Speak your customers' language. Supports English, Mandarin, Malay, Tamil, and 50+ languages with automatic detection.",
  },
  {
    icon: "📅",
    title: "Google Calendar Integration",
    description:
      "Let AI schedule appointments directly. Syncs with your Google Calendar to avoid double bookings and send automatic reminders.",
  },
  {
    icon: "📊",
    title: "Built-in CRM",
    description:
      "Track every lead automatically. Capture customer details, conversation history, and follow-ups in one organized dashboard.",
  },
  {
    icon: "⚡",
    title: "5-Minute Setup",
    description:
      "Start automating today. Free installation and setup with expert support. No technical skills or coding required.",
  },
] as const;

const PRICING_FEATURES = [
  "Unlimited AI responses",
  "Voice message recognition",
  "Multilingual support (50+ languages)",
  "Google Calendar integration",
  "Built-in CRM",
  "Free setup & installation",
  "24/7 email & chat support",
] as const;

const FAQ_ITEMS = [
  {
    question: "What is a WhatsApp AI chatbot and how does it work in Singapore?",
    answer:
      "A WhatsApp AI chatbot is an intelligent virtual assistant that automatically handles customer conversations on WhatsApp. Unlike basic auto-replies, AI Super's chatbot uses advanced AI to understand context, respond naturally in 50+ languages, transcribe voice messages, and book appointments — 24/7 with no human intervention needed. It integrates with the official WhatsApp Business API approved for Singapore businesses.",
  },
  {
    question: "How quickly can I set up the AI chatbot?",
    answer:
      "Just 5 minutes! Connect your WhatsApp, customize responses, and go live. No coding required. We provide a simple step-by-step guide and free setup assistance to get you started immediately.",
  },
  {
    question: "Why choose AI Super over other chatbot agencies in Singapore?",
    answer:
      "AI Super is Singapore's leading AI chatbot agency, purpose-built for local businesses. Unlike competitors, we offer true AI-powered conversations (not rule-based), voice message recognition, multilingual support for Singapore's diverse market, Google Calendar integration, and built-in CRM — all from $69/month. We're a registered Singapore company with 500+ local clients and dedicated support.",
  },
  {
    question: "What's the difference between a chatbot and a virtual assistant?",
    answer:
      "Traditional chatbots follow fixed scripts and can only handle pre-programmed questions. AI Super acts as a full virtual assistant — it understands natural language, remembers conversation context, handles voice messages, schedules appointments, captures leads in CRM, and switches languages automatically. It's chatbot and virtual assistant services combined in one platform.",
  },
  {
    question: "Will I still receive calls?",
    answer:
      "Absolutely! Your phone works normally. The AI chatbot only handles WhatsApp business messages automatically. You can choose to intervene at any time and take over the conversation seamlessly.",
  },
  {
    question: "What languages does the AI chatbot support?",
    answer:
      "We support English, Mandarin, Malay, Tamil, and 50+ other languages — perfect for Singapore's multilingual market. Our AI automatically detects the language of the incoming message and responds in the same language. It even understands and transcribes voice messages!",
  },
  {
    question: "Is my data secure with your AI chatbot?",
    answer:
      "Yes! We prioritize your data security. We don't store your personal conversations. Everything is encrypted and processed in real-time only to generate responses. AI Super is fully compliant with Singapore's PDPA (Personal Data Protection Act).",
  },
  {
    question: "How much does a WhatsApp AI chatbot cost in Singapore?",
    answer:
      "AI Super starts at $69/month (annual plan) or $99/month — with unlimited AI responses, voice recognition, multilingual support, CRM, and Google Calendar integration included. There are no hidden fees, no per-message charges, and no setup costs. You can get started right away.",
  },
] as const;

const Home = () => {
  // Structured Data for SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "name": "AI Super",
        "url": "https://asi.sg",
        "potentialAction": {
          "@type": "SearchAction",
          "target": "https://asi.sg/?q={search_term_string}",
          "query-input": "required name=search_term_string"
        }
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://asi.sg"
          }
        ]
      },
      {
        "@type": ["LocalBusiness", "SoftwareCompany"],
        "name": "AI Super Private Limited",
        "description": "Singapore's #1 WhatsApp AI chatbot agency. AI-powered chatbot and virtual assistant services for customer service, lead generation, and sales automation.",
        "url": "https://asi.sg",
        "logo": "https://asi.sg/logo_black.png",
        "image": "https://asi.sg/logo_black.png",
        "telephone": "+65-8837-9368",
        "email": "hello@asi.sg",
        "priceRange": "$$",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "540 Sims Avenue, #03-05, Sims Avenue Centre",
          "addressLocality": "Singapore",
          "postalCode": "387603",
          "addressCountry": "SG"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": "1.3145",
          "longitude": "103.8756"
        },
        "sameAs": [
          "https://www.instagram.com/aisupersg/",
          "https://www.facebook.com/people/AI-Super-SG/61573691083537/"
        ],
        "openingHoursSpecification": {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          "opens": "09:00",
          "closes": "18:00"
        },
        "areaServed": {
          "@type": "Country",
          "name": "Singapore"
        }
      },
      {
        "@type": "SoftwareApplication",
        "name": "AI Super WhatsApp AI Chatbot",
        "applicationCategory": "BusinessApplication",
        "operatingSystem": "Web",
        "description": "Singapore's #1 WhatsApp AI chatbot and virtual assistant. Automate customer service, capture leads, and increase sales by 40%. Trusted by 500+ Singapore businesses.",
        "url": "https://asi.sg",
        "publisher": {
          "@type": "Organization",
          "name": "AI Super Private Limited",
          "url": "https://asi.sg",
          "logo": "https://asi.sg/logo_black.png",
          "sameAs": [
            "https://www.instagram.com/aisupersg/",
            "https://www.facebook.com/people/AI-Super-SG/61573691083537/"
          ],
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "540 Sims Avenue, #03-05, Sims Avenue Centre",
            "addressLocality": "Singapore",
            "postalCode": "387603",
            "addressCountry": "SG"
          },
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+65-8837-9368",
            "contactType": "customer service"
          }
        },
        "offers": {
          "@type": "Offer",
          "price": "69",
          "priceCurrency": "USD",
          "availability": "https://schema.org/InStock",
          "description": "Monthly subscription for WhatsApp AI chatbot automation"
        }
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What is a WhatsApp AI chatbot and how does it work in Singapore?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "A WhatsApp AI chatbot is an intelligent virtual assistant that automatically handles customer conversations on WhatsApp. AI Super's chatbot uses advanced AI to understand context, respond naturally in 50+ languages, transcribe voice messages, and book appointments — 24/7 with no human intervention needed."
            }
          },
          {
            "@type": "Question",
            "name": "How quickly can I set up the AI chatbot?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Just 5 minutes! Connect your WhatsApp, customize responses, and go live. No coding required. We provide a simple step-by-step guide and free setup assistance to get you started immediately."
            }
          },
          {
            "@type": "Question",
            "name": "Why choose AI Super over other chatbot agencies in Singapore?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "AI Super is Singapore's leading AI chatbot agency with true AI-powered conversations (not rule-based), voice message recognition, multilingual support, Google Calendar integration, and built-in CRM — all from $69/month. We're a registered Singapore company with 500+ local clients."
            }
          },
          {
            "@type": "Question",
            "name": "What's the difference between a chatbot and a virtual assistant?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Traditional chatbots follow fixed scripts. AI Super acts as a full virtual assistant — it understands natural language, remembers context, handles voice messages, schedules appointments, captures leads in CRM, and switches languages automatically. It's chatbot and virtual assistant services combined in one platform."
            }
          },
          {
            "@type": "Question",
            "name": "What languages does the AI chatbot support?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We support English, Mandarin, Malay, Tamil, and 50+ other languages — perfect for Singapore's multilingual market. Our AI automatically detects the language and responds accordingly. It even understands and transcribes voice messages!"
            }
          },
          {
            "@type": "Question",
            "name": "How much does a WhatsApp AI chatbot cost in Singapore?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "AI Super starts at $69/month (annual plan) or $99/month with unlimited AI responses, voice recognition, multilingual support, CRM, and Google Calendar integration included. No hidden fees, no per-message charges, and you can get started right away."
            }
          },
          {
            "@type": "Question",
            "name": "Is my data secure with your AI chatbot?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes! We don't store personal conversations. Everything is encrypted and processed in real-time. AI Super is fully compliant with Singapore's PDPA (Personal Data Protection Act)."
            }
          }
        ]
      }
    ]
  };

  return (
    <div className="flex flex-col min-h-screen bg-white text-gray-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <WhatsAppButton />
      <SmoothScroll />      {/* Skip to main content for accessibility */}
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white px-4 py-2 rounded-md z-50">
        Skip to main content
      </a>
      
      {/* Header */}
      <header className="flex h-16 items-center justify-center bg-white px-4 shadow-sm lg:px-6" role="banner">
        <div className="container mx-auto flex max-w-7xl items-center justify-between gap-6">
          <Link href="/" className="flex items-center">
            <DynamicLogo width={48} height={48} className="h-12 w-12" />
          </Link>
          <div className="flex flex-1 items-center justify-end gap-5 lg:gap-8">
            <nav className="hidden items-center gap-6 text-sm font-medium text-gray-700 md:flex lg:gap-8" role="navigation" aria-label="Main navigation">
              <Link href="#features" className="inline-flex items-center gap-1 transition-colors hover:text-blue-600">
                Product
                <ChevronDown className="h-4 w-4" />
              </Link>
              <Link href="#video-embed" className="inline-flex items-center gap-1 transition-colors hover:text-blue-600">
                Integrations
                <ChevronDown className="h-4 w-4" />
              </Link>
              <Link href="/blog" className="inline-flex items-center gap-1 transition-colors hover:text-blue-600">
                Resources
                <ChevronDown className="h-4 w-4" />
              </Link>
              <Link href="#pricing" className="transition-colors hover:text-blue-600">
                Pricing
              </Link>
            </nav>
            <div className="flex items-center gap-3">
              <Link href="/signup" className="hidden text-sm font-medium text-gray-700 transition-colors hover:text-blue-600 sm:inline-flex">
                Login
              </Link>
              <TrackedButtonLink
                href="/signup"
                eventName="header_trial_cta_click"
                size="sm"
                className="relative z-50 rounded-xl bg-blue-600 px-5 py-2.5 text-white transition-transform hover:scale-105 hover:bg-blue-700"
              >
                Sign Up
              </TrackedButtonLink>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main id="main-content" role="main">
      <section className="w-full overflow-hidden bg-white py-16 md:py-24 lg:py-28" aria-labelledby="hero-heading">
        <div className="container mx-auto max-w-6xl px-4 md:px-6 lg:px-8">
          <div className="flex flex-col items-center text-center">
            <div className="mb-6 flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-5 py-2.5">
              <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse"></div>
              <span className="text-sm font-medium text-blue-700">Trusted by 500+ Singapore businesses</span>
            </div>

            <h1 id="hero-heading" className="max-w-[10ch] text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl lg:text-7xl leading-[0.95]">
              WhatsApp AI that closes leads
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-relaxed text-gray-600 md:text-xl">
              Automate replies, capture leads, and book faster.
            </p>

            <div className="mt-8 flex w-full flex-col items-center justify-center gap-3 sm:flex-row">
              <TrackedButtonLink
                href="/signup"
                eventName="hero_primary_trial_cta_click"
                className="w-full justify-center bg-blue-600 px-8 py-4 text-lg font-semibold text-white shadow-lg transition-all duration-200 hover:scale-105 hover:bg-blue-700 hover:shadow-xl sm:w-auto"
              >
                Get Started
              </TrackedButtonLink>
              <TrackedButtonLink
                href="#pricing"
                eventName="hero_secondary_pricing_cta_click"
                variant="outline"
                className="w-full justify-center border-blue-200 px-8 py-4 text-lg font-semibold text-blue-700 transition-all duration-200 hover:bg-blue-50 sm:w-auto"
              >
                View Pricing
              </TrackedButtonLink>
            </div>

            <div className="mt-6 flex flex-wrap justify-center gap-x-6 gap-y-3 text-sm text-gray-500">
              <span>5-minute setup</span>
              <span>24/7 replies</span>
              <span>No coding</span>
            </div>

            <div className="relative mt-10 flex min-h-[420px] w-full items-start justify-center md:min-h-[520px] lg:min-h-[640px]">
              <PhoneAnimation className="w-full scale-[0.82] md:scale-95 lg:scale-100" />
            </div>
          </div>
        </div>
      </section>

      {/* Trusted Partners & Testimonials */}
      <section className="w-full py-12 md:py-16 bg-white border-y border-gray-100">
        <div className="container px-4 md:px-6 lg:px-8 max-w-6xl mx-auto">
          <div className="text-center mb-6">
            <h3 className="text-lg font-semibold text-gray-700">Trusted by businesses across industries</h3>
          </div>
          {/* Single horizontal auto-scrolling logo bar */}
          <div className="bg-white rounded-xl shadow-sm p-4 overflow-hidden logo-marquee">
            <div className="flex items-center gap-10 min-w-max logo-track">
              {[...PARTNER_LOGOS, ...PARTNER_LOGOS].map((logo, index) => (
                <div key={`${logo.src}-${index}`} className="shrink-0 opacity-90 hover:opacity-100 transition-opacity">
                  <Image src={logo.src} alt={logo.alt} width={logo.width} height={logo.height} className="h-10 w-auto" loading="lazy" />
                </div>
              ))}
            </div>
          </div>
          {/* Gap before testimonials */}
          <div className="grid grid-cols-1 gap-8 mt-10 md:mt-12 max-w-6xl mx-auto md:grid-cols-3">
            {TESTIMONIALS.map((testimonial) => (
              <div key={testimonial.src} className="bg-white rounded-xl shadow-md overflow-hidden max-w-sm mx-auto">
                <Image
                  src={testimonial.src}
                  alt={testimonial.alt}
                  width={828}
                  height={1792}
                  className="w-full h-auto max-h-[720px] object-contain"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="w-full py-20 md:py-28 bg-white" aria-labelledby="features-heading">
        <div className="container px-4 md:px-6 lg:px-8 max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 id="features-heading" className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl mb-6 text-gray-900">
              Why Businesses Choose Our WhatsApp AI Chatbot in Singapore
            </h2>
            <p className="text-gray-600 text-xl md:text-2xl max-w-2xl mx-auto">
              Everything you need from a chatbot agency — automate WhatsApp conversations, capture leads, and boost sales
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {FEATURES.map((feature) => (
              <div
                key={feature.title}
                className="group bg-white rounded-2xl p-8 shadow-sm border border-gray-200 hover:shadow-xl hover:border-blue-200 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-14 h-14 bg-blue-600 rounded-xl flex items-center justify-center mb-6 shadow-lg shadow-blue-200 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-white text-2xl">{feature.icon}</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">{feature.title}</h3>
                <p className="text-gray-600 text-lg leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white py-4 px-12 text-xl font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105" asChild>
              <Link href="/signup">
                Try All Features Free
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section id="video-embed" className="w-full py-20 md:py-28 bg-gray-50">
        <div className="container px-4 md:px-6 lg:px-8 max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl text-gray-900 mb-6">
              See Our AI Chatbot & Virtual Assistant in Action
            </h2>
            <p className="text-gray-600 text-xl md:text-2xl max-w-2xl mx-auto">
              Watch how our WhatsApp AI chatbot transforms customer conversations for Singapore businesses
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            <div className="flex flex-col items-center group">
              <div className="bg-gray-900 rounded-[2.5rem] shadow-2xl hover:shadow-3xl transition-all duration-500 hover:-translate-y-2 border-[4px] border-gray-900 relative overflow-hidden w-[280px] aspect-[9/19.5]">
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1/3 h-6 bg-black rounded-b-2xl z-20"></div>
                <Image
                  src="/output.gif"
                  alt="Calendar Integration Demo"
                  fill
                  sizes="(max-width: 768px) 280px, 280px"
                  className="object-cover"
                  loading="lazy"
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mt-8 mb-2 group-hover:text-blue-600 transition-colors">Calendar Integration</h3>
              <p className="text-gray-600 text-center">Book appointments automatically</p>
            </div>
            
            <div className="flex flex-col items-center group">
              <div className="bg-gray-900 rounded-[2.5rem] shadow-2xl hover:shadow-3xl transition-all duration-500 hover:-translate-y-2 border-[4px] border-gray-900 relative overflow-hidden w-[280px] aspect-[9/19.5]">
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1/3 h-6 bg-black rounded-b-2xl z-20"></div>
                <Image
                  src="/output2.gif"
                  alt="Voice & Multilingual Demo"
                  fill
                  sizes="(max-width: 768px) 280px, 280px"
                  className="object-cover"
                  loading="lazy"
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mt-8 mb-2 group-hover:text-blue-600 transition-colors">Voice & Multilingual</h3>
              <p className="text-gray-600 text-center">Understands voice in any language</p>
            </div>
            
            <div className="flex flex-col items-center group">
              <div className="bg-gray-900 rounded-[2.5rem] shadow-2xl hover:shadow-3xl transition-all duration-500 hover:-translate-y-2 border-[4px] border-gray-900 relative overflow-hidden w-[280px] aspect-[9/19.5]">
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1/3 h-6 bg-black rounded-b-2xl z-20"></div>
                <Image
                  src="/output3.gif"
                  alt="AI Conversation Demo"
                  fill
                  sizes="(max-width: 768px) 280px, 280px"
                  className="object-cover"
                  loading="lazy"
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mt-8 mb-2 group-hover:text-blue-600 transition-colors">Smart Conversations</h3>
              <p className="text-gray-600 text-center">Natural AI responses 24/7</p>
            </div>
          </div>
          
          <div className="text-center mt-16">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white py-4 px-12 text-xl font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-200" asChild>
              <Link href="/video" target="_blank" rel="noopener noreferrer">
                Watch Full Demo
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="w-full py-8 md:py-16 lg:py-20 bg-white">
        <div className="container px-4 md:px-6 lg:px-8 max-w-6xl mx-auto text-center">          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl lg:text-5xl mb-3 text-gray-900">Talk to Singapore&apos;s #1 AI Chatbot Agency</h2>
          <p className="max-w-[600px] text-gray-600 text-lg md:text-xl lg:text-2xl mb-4 text-center mx-auto">
            Questions about our WhatsApp AI chatbot or virtual assistant services? Contact us today.
          </p>
          <div className="flex justify-center gap-3">
            <Button asChild className="btn-primary bg-blue-600 hover:bg-blue-700 text-white">
              <a href="mailto:hello@asi.sg">Email Us</a>
            </Button>
            <Button asChild className="btn-primary bg-blue-600 hover:bg-blue-700 text-white">
              <a href="tel:+6588379368">Call: +65 8837 9368</a>
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="w-full py-20 md:py-28 bg-gray-50">
        <div className="container px-4 md:px-6 lg:px-8 max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl text-center mb-16 text-gray-900">
            WhatsApp AI Chatbot Singapore — FAQs
          </h2>
          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 md:p-8">
            <Accordion type="single" collapsible className="w-full">
              {FAQ_ITEMS.map((item, index) => (
                <AccordionItem key={item.question} value={`item-${index + 1}`}>
                  <AccordionTrigger className="text-lg md:text-xl font-semibold text-gray-900">{item.question}</AccordionTrigger>
                  <AccordionContent className="text-gray-600 text-lg leading-relaxed">{item.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      <HomePricingSection pricingFeatures={PRICING_FEATURES} />
      </main>

      <SiteFooter />
      <Analytics />
      <SpeedInsights />
    </div>
  );
};

export default Home;
