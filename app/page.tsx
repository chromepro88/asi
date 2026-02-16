import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { SmoothScroll } from "@/components/SmoothScroll";
import { Analytics } from "@vercel/analytics/react";
import { Instagram, Facebook } from "lucide-react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import DynamicLogo from "@/components/DynamicLogo";


// Lazy load components
const WhatsAppButton = dynamic(() => import("@/components/WhatsAppButton").then((mod) => mod.WhatsAppButton), { ssr: false });
const PhoneAnimation = dynamic(() => import("@/components/PhoneAnimation").then((mod) => mod.default), {
  ssr: true,
  loading: () => (
    <div className="relative flex flex-col items-center justify-center min-h-[500px] py-8">
      <div className="w-72 h-[36rem] border-8 border-gray-300 rounded-3xl bg-gray-100 animate-pulse"></div>
    </div>
  )
});

export const generateMetadata = (): Metadata => ({
  title: "WhatsApp AI Chatbot Singapore | #1 AI Chatbot Agency | AI Super",
  description: "Singapore's #1 WhatsApp AI chatbot agency. 500+ businesses trust AI Super to automate customer service 24/7, capture leads & boost sales by 40%. Voice + multilingual. From $49/mo. Free 30-day trial — setup in 5 min!",
  keywords: ["whatsapp ai chatbot singapore", "ai chatbot singapore", "singapore whatsapp chatbot", "whatsapp chatbot singapore", "chatbot agency singapore", "ai chatbot agency singapore", "chatbot and virtual assistant services singapore", "ai chatbots and virtual assistants singapore", "whatsapp ai chatbot", "whatsapp automation singapore", "chatbot singapore", "business automation", "lead generation", "customer support automation", "WhatsApp AI", "real estate chatbot"],
  alternates: {
    canonical: "https://asi.sg",
  },
  openGraph: {
    title: "WhatsApp AI Chatbot Singapore | #1 AI Chatbot Agency | AI Super",
    description: "Singapore's #1 WhatsApp AI chatbot agency. 500+ businesses automate customer service 24/7, capture leads & boost sales 40%. Free 30-day trial!",
    url: "https://asi.sg",
    siteName: "AI Super Private Limited",
    images: [{ url: "/api/og", width: 1200, height: 630, alt: "AI Super - Singapore WhatsApp Chatbot for Business Automation" }],
    locale: "en_SG",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "WhatsApp AI Chatbot Singapore | #1 AI Chatbot Agency",
    description: "Singapore's #1 WhatsApp AI chatbot agency. 500+ businesses automate customer service 24/7 & boost sales 40%. Free 30-day trial!",
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
      "A WhatsApp AI chatbot is an intelligent virtual assistant that automatically handles customer conversations on WhatsApp. Unlike basic auto-replies, AI Super&apos;s chatbot uses advanced AI to understand context, respond naturally in 50+ languages, transcribe voice messages, and book appointments — 24/7 with no human intervention needed. It integrates with the official WhatsApp Business API approved for Singapore businesses.",
  },
  {
    question: "How quickly can I set up the AI chatbot?",
    answer:
      "Just 5 minutes! Connect your WhatsApp, customize responses, and go live. No coding required. We provide a simple step-by-step guide and free setup assistance to get you started immediately.",
  },
  {
    question: "Why choose AI Super over other chatbot agencies in Singapore?",
    answer:
      "AI Super is Singapore&apos;s leading AI chatbot agency, purpose-built for local businesses. Unlike competitors, we offer true AI-powered conversations (not rule-based), voice message recognition, multilingual support for Singapore&apos;s diverse market, Google Calendar integration, and built-in CRM — all from $49/month. We&apos;re a registered Singapore company with 500+ local clients and dedicated support.",
  },
  {
    question: "What&apos;s the difference between a chatbot and a virtual assistant?",
    answer:
      "Traditional chatbots follow fixed scripts and can only handle pre-programmed questions. AI Super acts as a full virtual assistant — it understands natural language, remembers conversation context, handles voice messages, schedules appointments, captures leads in CRM, and switches languages automatically. It&apos;s chatbot and virtual assistant services combined in one platform.",
  },
  {
    question: "Will I still receive calls?",
    answer:
      "Absolutely! Your phone works normally. The AI chatbot only handles WhatsApp business messages automatically. You can choose to intervene at any time and take over the conversation seamlessly.",
  },
  {
    question: "What languages does the AI chatbot support?",
    answer:
      "We support English, Mandarin, Malay, Tamil, and 50+ other languages — perfect for Singapore&apos;s multilingual market. Our AI automatically detects the language of the incoming message and responds in the same language. It even understands and transcribes voice messages!",
  },
  {
    question: "Is my data secure with your AI chatbot?",
    answer:
      "Yes! We prioritize your data security. We don&apos;t store your personal conversations. Everything is encrypted and processed in real-time only to generate responses. AI Super is fully compliant with Singapore&apos;s PDPA (Personal Data Protection Act).",
  },
  {
    question: "How much does a WhatsApp AI chatbot cost in Singapore?",
    answer:
      "AI Super starts at $49/month (annual plan) or $69/month — with unlimited AI responses, voice recognition, multilingual support, CRM, and Google Calendar integration included. There are no hidden fees, no per-message charges, and no setup costs. We also offer a 30-day free trial with no credit card required.",
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
              "text": "AI Super is Singapore's leading AI chatbot agency with true AI-powered conversations (not rule-based), voice message recognition, multilingual support, Google Calendar integration, and built-in CRM — all from $49/month. We're a registered Singapore company with 500+ local clients."
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
              "text": "AI Super starts at $49/month (annual plan) or $69/month with unlimited AI responses, voice recognition, multilingual support, CRM, and Google Calendar integration included. No hidden fees, no per-message charges, and a 30-day free trial with no credit card required."
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
      <header className="px-4 lg:px-6 h-12 flex items-center justify-center bg-white shadow-sm" role="banner">
        <div className="container flex items-center justify-between max-w-6xl mx-auto">
          <Link href="/" className="flex items-center">
            <DynamicLogo width={48} height={48} className="h-12 w-12" />
          </Link>
          <div className="flex items-center gap-4">
            <nav className="flex gap-3 sm:gap-5 relative z-50" role="navigation" aria-label="Main navigation">
              <Link href="/blog" className="text-sm font-medium hover:underline underline-offset-4 text-blue-600">
                Blog
              </Link>
              <Link href="#pricing" className="text-sm font-medium hover:underline underline-offset-4 text-blue-600">
                Pricing
              </Link>
            </nav>
            <Button asChild size="sm" className="bg-blue-600 hover:bg-blue-700 text-white relative z-50 transition-transform hover:scale-105">
              <Link href="/signup">
                Start Free
              </Link>
            </Button>
          </div>
        </div>
      </header>

      {/* Phone Animation Section */}
      <section className="w-full py-12 md:py-16 bg-gray-50">
        <div className="container px-4 md:px-6 lg:px-8 max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              See Our WhatsApp AI Chatbot in Action
            </h2>
            <p className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto">
              Watch how our AI chatbot in Singapore handles real customer conversations — in English, Mandarin, Malay, and more
            </p>
          </div>
          <PhoneAnimation />
        </div>
      </section>

      {/* Hero Section */}
      <main id="main-content" role="main">
      <section className="w-full py-20 md:py-32 lg:py-40 bg-white" aria-labelledby="hero-heading">
        <div className="container px-4 md:px-6 lg:px-8 max-w-5xl mx-auto">
          <div className="flex flex-col items-center space-y-10 text-center">
            {/* Trust Badge */}
            <div className="flex items-center gap-2 bg-blue-50 px-6 py-3 rounded-full border border-blue-200">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-sm text-blue-700 font-medium">Trusted by 500+ Singapore businesses</span>
            </div>
            
            <h1 id="hero-heading" className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl text-gray-900 leading-tight">
              #1 WhatsApp AI Chatbot<br/>Agency in Singapore
            </h1>
            
            <p className="max-w-[600px] text-gray-600 text-xl md:text-2xl lg:text-3xl leading-relaxed">
              Singapore&apos;s top-rated <strong>AI chatbot agency</strong>. Our <strong>WhatsApp AI chatbot</strong> automates customer service 24/7, captures leads, and <span className="font-semibold text-blue-600">increases sales by 40%</span>. Your AI-powered virtual assistant — setup in 5 minutes, no coding required.
            </p>
            
            {/* CTA */}
            <div className="pt-4">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white py-4 px-10 text-xl md:text-2xl font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105" asChild>
                <Link href="/signup">
                  Start Free Today
                </Link>
              </Button>
              <p className="text-gray-500 text-lg mt-4">
                Get 30-Day Free Trial • No credit card required
              </p>
            </div>
            
            {/* Key Benefits */}
            <div className="flex flex-wrap justify-center gap-8 text-lg text-gray-600 pt-6">
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm font-bold">✓</span>
                </div>
                <span>5-minute setup</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm font-bold">✓</span>
                </div>
                <span>24/7 automation</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm font-bold">✓</span>
                </div>
                <span>No coding required</span>
              </div>
            </div>
            
            {/* Social Proof Numbers */}
            <div className="grid grid-cols-3 gap-12 pt-16 mt-16 border-t border-gray-200 w-full max-w-2xl">
              <div className="text-center">
                <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-blue-600">10K+</div>
                <div className="text-gray-500 mt-2">Messages Daily</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-blue-600">500+</div>
                <div className="text-gray-500 mt-2">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-blue-600">40%</div>
                <div className="text-gray-500 mt-2">Sales Increase</div>
              </div>
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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10 md:mt-12 max-w-4xl mx-auto">
            {TESTIMONIALS.map((testimonial) => (
              <div key={testimonial.src} className="bg-white rounded-lg shadow-md overflow-hidden max-w-xs mx-auto">
                <Image
                  src={testimonial.src}
                  alt={testimonial.alt}
                  width={828}
                  height={1792}
                  className="w-full h-auto max-h-[500px] md:max-h-96 object-contain"
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

      {/* Pricing Section */}
      <section id="pricing" className="w-full py-20 md:py-28 bg-white" aria-labelledby="pricing-heading">
        <div className="container px-4 md:px-6 lg:px-8 max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 id="pricing-heading" className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-4 text-gray-900">
              Simple, Transparent Pricing
            </h2>
            <p className="text-gray-600 text-xl md:text-2xl max-w-2xl mx-auto">
              Everything you need to automate your WhatsApp
            </p>
          </div>

          <div className="max-w-lg mx-auto">
            <Tabs defaultValue="monthly" className="w-full">
              {/* Pricing Toggle */}
              <div className="flex justify-center mb-8">
                <TabsList className="grid w-full max-w-md grid-cols-2 bg-gray-100 p-1 border-0">
                  <TabsTrigger value="monthly" className="text-base font-semibold rounded-md data-[state=active]:bg-white data-[state=active]:text-blue-600 data-[state=active]:shadow-sm">
                    Monthly
                  </TabsTrigger>
                  <TabsTrigger value="yearly" className="text-base font-semibold rounded-md data-[state=active]:bg-white data-[state=active]:text-blue-600 data-[state=active]:shadow-sm">
                    Yearly <span className="ml-1 text-xs text-green-600 font-bold">SAVE 29%</span>
                  </TabsTrigger>
                </TabsList>
              </div>

              {/* Monthly Pricing */}
              <TabsContent value="monthly" className="mt-0">
                <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-200 hover:shadow-2xl transition-shadow duration-300">
                  {/* Price Header */}
                  <div className="bg-white text-gray-900 text-center py-10 px-6 border-b border-gray-100">
                    <div className="inline-block bg-blue-100 text-blue-700 px-4 py-1 rounded-full text-sm font-bold mb-6">
                      30% OFF Launch Offer
                    </div>
                    <div className="flex items-center justify-center gap-3 mb-2">
                      <span className="text-6xl font-bold tracking-tight">$69</span>
                      <span className="text-2xl text-gray-400 line-through font-medium">$99</span>
                    </div>
                    <p className="text-gray-500 text-lg font-medium">per month</p>
                  </div>

                  {/* Features List */}
                  <div className="p-8 md:p-10 bg-gray-50/50">
                    <div className="space-y-5 mb-10">
                      {PRICING_FEATURES.map((feature) => (
                        <div key={feature} className="flex items-start gap-4">
                          <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center shrink-0 mt-0.5">
                            <span className="text-green-600 text-sm font-bold">✓</span>
                          </div>
                          <span className="text-gray-700 text-lg">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <Button className="w-full bg-gray-900 hover:bg-gray-800 text-white py-7 text-xl font-bold rounded-xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-0.5" asChild>
                      <Link href="https://aisupersg.com/signup" target="_blank" rel="noopener noreferrer">
                        Get Started Now
                      </Link>
                    </Button>

                    <p className="text-center text-gray-500 text-sm mt-6 font-medium">
                      30-day free trial • No credit card required
                    </p>
                  </div>
                </div>
              </TabsContent>

              {/* Yearly Pricing */}
              <TabsContent value="yearly" className="mt-0">
                <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border-2 border-blue-600 relative transform hover:-translate-y-1 transition-all duration-300">
                  <div className="absolute top-0 inset-x-0 h-2 bg-blue-600"></div>
                  {/* Price Header */}
                  <div className="bg-white text-gray-900 text-center py-10 px-6 border-b border-gray-100">
                    <div className="inline-block bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-bold mb-6 shadow-md">
                      Best Value - Save $240/year
                    </div>
                    <div className="flex items-center justify-center gap-3 mb-2">
                      <span className="text-6xl font-bold tracking-tight text-blue-600">$49</span>
                      <span className="text-2xl text-gray-400 line-through font-medium">$69</span>
                    </div>
                    <p className="text-gray-500 text-lg font-medium">per month, billed annually</p>
                    <p className="text-green-600 text-sm mt-2 font-bold">($588/year instead of $828)</p>
                  </div>

                  {/* Features List */}
                  <div className="p-8 md:p-10 bg-blue-50/30">
                    <div className="space-y-5 mb-10">
                      {PRICING_FEATURES.map((feature) => (
                        <div key={feature} className="flex items-start gap-4">
                          <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center shrink-0 mt-0.5">
                            <span className="text-blue-600 text-sm font-bold">✓</span>
                          </div>
                          <span className="text-gray-700 text-lg font-medium">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-7 text-xl font-bold rounded-xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-0.5" asChild>
                      <Link href="https://aisupersg.com/signup" target="_blank" rel="noopener noreferrer">
                        Get Started Now
                      </Link>
                    </Button>

                    <p className="text-center text-gray-500 text-sm mt-6 font-medium">
                      30-day free trial • No credit card required
                    </p>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>

          <div className="flex justify-center items-center gap-6 text-sm text-gray-500 mt-8">
            <span className="flex items-center gap-2">
              <span className="text-green-500">🔒</span>
              SSL Secured
            </span>
            <span className="flex items-center gap-2">
              <span className="text-green-500">💳</span>
              Secure Payment
            </span>
          </div>
        </div>
      </section>
      </main>

      {/* Footer */}
      <footer className="flex flex-col gap-2 sm:flex-row py-4 w-full shrink-0 items-center justify-center px-4 md:px-6 border-t border-gray-700" role="contentinfo">
        <div className="container flex flex-col items-center justify-between max-w-6xl mx-auto">
          <div className="flex flex-col sm:flex-row items-center justify-between w-full mb-2">
            <p className="text-xs text-gray-400">© 2026 AI Super Private Limited. All rights reserved.</p>
            <nav className="flex gap-3 sm:gap-5 mt-2 sm:mt-0">
              <Link href="/blog" className="text-xs hover:underline underline-offset-4 text-gray-400">
                Blog
              </Link>
              <Link href="/terms-of-service" className="text-xs hover:underline underline-offset-4 text-gray-400">
                Terms
              </Link>
              <Link href="/privacy" className="text-xs hover:underline underline-offset-4 text-gray-400">
                Privacy
              </Link>
              <Link
                href="https://www.instagram.com/aisupersg/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs hover:underline underline-offset-4 text-gray-400"
              >
                <Instagram className="inline-block mr-1 h-4 w-4" /> Instagram
              </Link>
              <Link
                href="https://www.facebook.com/people/AI-Super-SG/61573691083537/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs hover:underline underline-offset-4 text-gray-400"
              >
                <Facebook className="inline-block mr-1 h-4 w-4" /> Facebook
              </Link>
            </nav>
          </div>
          <div className="text-center text-xs text-gray-400 space-y-0.5">
            <p>AI SUPER PRIVATE LIMITED</p>
            <p>Reg. No: 202508712N</p>
            <p>540 Sims Avenue, #03-05, Sims Avenue Centre, Singapore 387603</p>
            <p>Phone: +65 8837 9368</p>
          </div>
        </div>
      </footer>
      <Analytics />
      <SpeedInsights />
    </div>
  );
};

export default Home;
