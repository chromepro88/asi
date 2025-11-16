import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { SmoothScroll } from "@/components/SmoothScroll";
import { Analytics } from "@vercel/analytics/react";
import { Instagram, Facebook } from "lucide-react";
import ShareButton from "@/components/ShareButton";
import { SpeedInsights } from "@vercel/speed-insights/next";
import DynamicLogo from "@/components/DynamicLogo";
import PhoneAnimation from "@/components/PhoneAnimation";


// Lazy load components
const WhatsAppButton = dynamic(() => import("@/components/WhatsAppButton").then((mod) => mod.WhatsAppButton), { ssr: false });

export const generateMetadata = (): Metadata => ({
  title: "WhatsApp AI Chatbot Singapore | Automate Sales 24/7 | AI Super",
  description: "Singapore's #1 WhatsApp AI chatbot. Automate customer service, capture leads & increase sales by 40%. Setup in 5 minutes. Start at $49/month. Try free demo!",
  keywords: ["WhatsApp chatbot Singapore", "AI customer service", "WhatsApp automation", "AI chatbot Singapore", "business automation", "lead generation", "customer support automation", "WhatsApp AI", "chatbot Singapore", "real estate chatbot"],
  openGraph: {
    title: "WhatsApp AI Chatbot Singapore | Automate Sales 24/7 | AI Super",
    description: "Singapore's #1 WhatsApp AI chatbot. Automate customer service, capture leads & increase sales by 40%. Setup in 5 minutes. Try free demo!",
    url: "https://asi.sg",
    siteName: "AI Super Private Limited",
    images: [{ url: "/logo_black.png", width: 1200, height: 630, alt: "AI Super WhatsApp Chatbot Singapore" }],
    locale: "en_SG",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "WhatsApp AI Chatbot Singapore | Automate Sales 24/7",
    description: "Singapore's #1 WhatsApp AI chatbot. Automate customer service, capture leads & increase sales by 40%. Try free demo!",
    images: ["/logo_black.png"],
  },
});

const Home: React.FC = () => {
  // Structured Data for SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "AI Super WhatsApp Chatbot",
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "Web",
    "description": "Singapore's #1 WhatsApp AI chatbot for automating customer service, capturing leads, and increasing sales by 40%.",
    "url": "https://asi.sg",
    "publisher": {
      "@type": "Organization",
      "name": "AI Super Private Limited",
      "url": "https://asi.sg",
      "logo": "https://asi.sg/logo_black.png",
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
    },
  };

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-white to-gray-100 text-gray-900">
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
      <section className="w-full py-12 md:py-16 bg-gradient-to-b from-blue-50 to-white">
        <div className="container px-4 md:px-6 lg:px-8 max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              See Your AI Assistant in Action
            </h2>
            <p className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto">
              Watch how our WhatsApp AI handles real customer conversations
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
              <span className="text-sm text-blue-700 font-medium">Trusted by 500+ businesses worldwide</span>
            </div>
            
            <h1 id="hero-heading" className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl text-gray-900 leading-tight">
              Singapore's #1 WhatsApp AI Chatbot<br/>for Business Automation
            </h1>
            
            <p className="max-w-[600px] text-gray-600 text-xl md:text-2xl lg:text-3xl leading-relaxed">
              Transform your WhatsApp into a powerful sales machine. Our <Link href="#features" className="text-blue-600 hover:underline">AI chatbot automation</Link> helps 
              <span className="font-semibold text-blue-600"> increase sales by 40%</span> while you sleep.
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
      <section className="w-full py-12 md:py-16 bg-blue-50">
        <div className="container px-4 md:px-6 lg:px-8 max-w-6xl mx-auto">
          <div className="text-center mb-6">
            <h3 className="text-lg font-semibold text-gray-700">Trusted by businesses across industries</h3>
          </div>
          {/* Single horizontal auto-scrolling logo bar */}
          <div className="bg-white rounded-xl shadow-sm p-4 overflow-hidden logo-marquee">
            <div className="flex items-center gap-10 min-w-max logo-track">
              <div className="shrink-0 opacity-90 hover:opacity-100 transition-opacity">
                <Image src="/PropNex.png" alt="PropNex logo" width={120} height={48} className="h-10 w-auto" loading="lazy" />
              </div>
              <div className="shrink-0 opacity-90 hover:opacity-100 transition-opacity">
                <Image src="/Huttons.png" alt="Huttons logo" width={120} height={48} className="h-10 w-auto" loading="lazy" />
              </div>
              <div className="shrink-0 opacity-90 hover:opacity-100 transition-opacity">
                <Image src="/OrangeTee.jpeg" alt="OrangeTee logo" width={140} height={48} className="h-10 w-auto" loading="lazy" />
              </div>
              <div className="shrink-0 opacity-90 hover:opacity-100 transition-opacity">
                <Image src="/realstar.png" alt="Realstar Premier Group logo" width={140} height={48} className="h-10 w-auto" loading="lazy" />
              </div>
              <div className="shrink-0 opacity-90 hover:opacity-100 transition-opacity">
                <Image src="/Soon%20Travel.png" alt="Soon Travel logo" width={140} height={48} className="h-10 w-auto" loading="lazy" />
              </div>
              <div className="shrink-0 opacity-90 hover:opacity-100 transition-opacity">
                <Image src="/Mortgage%20Titan.jpg" alt="Mortgage Titan logo" width={160} height={48} className="h-10 w-auto" loading="lazy" />
              </div>
              <div className="shrink-0 opacity-90 hover:opacity-100 transition-opacity">
                <Image src="/FX%20Tech.png" alt="FX Tech logo" width={140} height={48} className="h-10 w-auto" loading="lazy" />
              </div>
              <div className="shrink-0 opacity-90 hover:opacity-100 transition-opacity">
                <Image src="/Harmony%20Funeral%20Care.png" alt="Harmony Funeral Care logo" width={180} height={48} className="h-10 w-auto" loading="lazy" />
              </div>
              <div className="shrink-0 opacity-90 hover:opacity-100 transition-opacity">
                <Image src="/Hotel%20Grand%20Central.png" alt="Hotel Grand Central logo" width={270} height={48} className="h-10 w-auto" loading="lazy" />
              </div>
              <div className="shrink-0 opacity-90 hover:opacity-100 transition-opacity">
                <Image src="/Rugged-box.com.jpg" alt="Rugged-box.com logo" width={160} height={48} className="h-10 w-auto" loading="lazy" />
              </div>
              <div className="shrink-0 opacity-90 hover:opacity-100 transition-opacity">
                <Image src="/SgVenusFlyTrap.png" alt="SgVenusFlyTrap logo" width={160} height={48} className="h-10 w-auto" loading="lazy" />
              </div>
              {/* Duplicate set for seamless marquee */}
              <div className="shrink-0 opacity-90 hover:opacity-100 transition-opacity">
                <Image src="/PropNex.png" alt="PropNex logo" width={120} height={48} className="h-10 w-auto" loading="lazy" />
              </div>
              <div className="shrink-0 opacity-90 hover:opacity-100 transition-opacity">
                <Image src="/Huttons.png" alt="Huttons logo" width={120} height={48} className="h-10 w-auto" loading="lazy" />
              </div>
              <div className="shrink-0 opacity-90 hover:opacity-100 transition-opacity">
                <Image src="/OrangeTee.jpeg" alt="OrangeTee logo" width={140} height={48} className="h-10 w-auto" loading="lazy" />
              </div>
              <div className="shrink-0 opacity-90 hover:opacity-100 transition-opacity">
                <Image src="/realstar.png" alt="Realstar Premier Group logo" width={140} height={48} className="h-10 w-auto" loading="lazy" />
              </div>
              <div className="shrink-0 opacity-90 hover:opacity-100 transition-opacity">
                <Image src="/Soon%20Travel.png" alt="Soon Travel logo" width={140} height={48} className="h-10 w-auto" loading="lazy" />
              </div>
              <div className="shrink-0 opacity-90 hover:opacity-100 transition-opacity">
                <Image src="/Mortgage%20Titan.jpg" alt="Mortgage Titan logo" width={160} height={48} className="h-10 w-auto" loading="lazy" />
              </div>
              <div className="shrink-0 opacity-90 hover:opacity-100 transition-opacity">
                <Image src="/FX%20Tech.png" alt="FX Tech logo" width={140} height={48} className="h-10 w-auto" loading="lazy" />
              </div>
              <div className="shrink-0 opacity-90 hover:opacity-100 transition-opacity">
                <Image src="/Harmony%20Funeral%20Care.png" alt="Harmony Funeral Care logo" width={180} height={48} className="h-10 w-auto" loading="lazy" />
              </div>
              <div className="shrink-0 opacity-90 hover:opacity-100 transition-opacity">
                <Image src="/Hotel%20Grand%20Central.png" alt="Hotel Grand Central logo" width={270} height={48} className="h-10 w-auto" loading="lazy" />
              </div>
              <div className="shrink-0 opacity-90 hover:opacity-100 transition-opacity">
                <Image src="/Rugged-box.com.jpg" alt="Rugged-box.com logo" width={160} height={48} className="h-10 w-auto" loading="lazy" />
              </div>
              <div className="shrink-0 opacity-90 hover:opacity-100 transition-opacity">
                <Image src="/SgVenusFlyTrap.png" alt="SgVenusFlyTrap logo" width={160} height={48} className="h-10 w-auto" loading="lazy" />
              </div>
            </div>
          </div>
          {/* Gap before testimonials */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10 md:mt-12 max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-md overflow-hidden max-w-xs mx-auto">
              <Image
                src="/darren.png"
                alt="Customer testimonial from Darren - SgVenusFlyTrap"
                width={828}
                height={1792}
                className="w-full h-auto max-h-96 object-cover object-top"
                loading="lazy"
              />
            </div>
            <div className="bg-white rounded-lg shadow-md overflow-hidden max-w-xs mx-auto">
              <Image
                src="/james.png"
                alt="Customer testimonial from James - Realstar Premier Group"
                width={828}
                height={1792}
                className="w-full h-auto max-h-96 object-cover object-top"
                loading="lazy"
              />
            </div>
            <div className="bg-white rounded-lg shadow-md overflow-hidden max-w-xs mx-auto">
              <Image
                src="/hakeem.png"
                alt="Customer testimonial from Hakeem - Mortgage Titan"
                width={828}
                height={1792}
                className="w-full h-auto max-h-96 object-cover object-top"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="w-full py-20 md:py-28 bg-white" aria-labelledby="features-heading">
        <div className="container px-4 md:px-6 lg:px-8 max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 id="features-heading" className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl mb-6 text-gray-900">
              Powerful Features That Drive Results
            </h2>
            <p className="text-gray-600 text-xl md:text-2xl max-w-2xl mx-auto">
              Everything you need to automate customer conversations and boost sales
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="w-14 h-14 bg-blue-600 rounded-xl flex items-center justify-center mb-6">
                <span className="text-white text-2xl">💬</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Unlimited AI Responses</h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                Handle thousands of customer conversations simultaneously. No limits on messages - your AI works around the clock without getting tired.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-gradient-to-br from-purple-50 to-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="w-14 h-14 bg-purple-600 rounded-xl flex items-center justify-center mb-6">
                <span className="text-white text-2xl">🎤</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Voice Message Recognition</h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                Customers prefer voice? No problem. Our AI automatically transcribes and responds to voice messages in real-time.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-gradient-to-br from-green-50 to-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="w-14 h-14 bg-green-600 rounded-xl flex items-center justify-center mb-6">
                <span className="text-white text-2xl">🌍</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Multilingual Support</h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                Speak your customers' language. Supports English, Mandarin, Malay, Tamil, and 50+ languages with automatic detection.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="bg-gradient-to-br from-orange-50 to-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="w-14 h-14 bg-orange-600 rounded-xl flex items-center justify-center mb-6">
                <span className="text-white text-2xl">📅</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Google Calendar Integration</h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                Let AI schedule appointments directly. Syncs with your Google Calendar to avoid double bookings and send automatic reminders.
              </p>
            </div>

            {/* Feature 5 */}
            <div className="bg-gradient-to-br from-pink-50 to-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="w-14 h-14 bg-pink-600 rounded-xl flex items-center justify-center mb-6">
                <span className="text-white text-2xl">📊</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Built-in CRM</h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                Track every lead automatically. Capture customer details, conversation history, and follow-ups in one organized dashboard.
              </p>
            </div>

            {/* Feature 6 */}
            <div className="bg-gradient-to-br from-indigo-50 to-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="w-14 h-14 bg-indigo-600 rounded-xl flex items-center justify-center mb-6">
                <span className="text-white text-2xl">⚡</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">5-Minute Setup</h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                Start automating today. Free installation and setup with expert support. No technical skills or coding required.
              </p>
            </div>
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
      </main>

      {/* Video Section */}
      <section id="video-embed" className="w-full py-20 md:py-28 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="container px-4 md:px-6 lg:px-8 max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl text-gray-900 mb-6">
              See AI Super in Action
            </h2>
            <p className="text-gray-600 text-xl md:text-2xl max-w-2xl mx-auto">
              Watch how our AI chatbot transforms customer conversations
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            <div className="flex flex-col items-center">
              <div className="bg-white p-4 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <Image
                  src="/output.gif"
                  alt="Calendar Integration Demo"
                  width={280}
                  height={500}
                  className="rounded-xl"
                  loading="lazy"
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mt-6 mb-2">Calendar Integration</h3>
              <p className="text-gray-600 text-center">Book appointments automatically</p>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="bg-white p-4 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <Image
                  src="/output2.gif"
                  alt="Voice & Multilingual Demo"
                  width={280}
                  height={500}
                  className="rounded-xl"
                  loading="lazy"
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mt-6 mb-2">Voice & Multilingual</h3>
              <p className="text-gray-600 text-center">Understands voice in any language</p>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="bg-white p-4 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <Image
                  src="/output3.gif"
                  alt="AI Conversation Demo"
                  width={280}
                  height={500}
                  className="rounded-xl"
                  loading="lazy"
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mt-6 mb-2">Smart Conversations</h3>
              <p className="text-gray-600 text-center">Natural AI responses 24/7</p>
            </div>
          </div>
          
          <div className="text-center mt-16">
            <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-4 px-12 text-xl font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-200" asChild>
              <Link href="/video" target="_blank" rel="noopener noreferrer">
                Watch Full Demo
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="w-full py-8 md:py-16 lg:py-20 bg-white">
        <div className="container px-4 md:px-6 lg:px-8 max-w-6xl mx-auto text-center">          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl lg:text-5xl mb-3 text-gray-900">Get in Touch</h2>
          <p className="max-w-[600px] text-gray-600 text-lg md:text-xl lg:text-2xl mb-4 text-center mx-auto">
            Questions? Contact us to learn more about our solutions.
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
        <div className="container px-4 md:px-6 lg:px-8 max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl text-center mb-16 text-gray-900">
            Common Questions
          </h2>
          <div className="space-y-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">How quickly can I set up?</h3>
              <p className="text-gray-700 text-lg leading-relaxed">
                Just 5 minutes! Connect your WhatsApp, customize responses, and go live. No coding required.
              </p>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Will I still receive calls?</h3>
              <p className="text-gray-700 text-lg leading-relaxed">
                Absolutely! Your phone works normally. AI only handles business messages automatically.
              </p>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">What languages are supported?</h3>
              <p className="text-gray-700 text-lg leading-relaxed">
                English, Mandarin, Malay, Tamil, and 50+ others. Even understands voice messages automatically.
              </p>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Is my data secure?</h3>
              <p className="text-gray-700 text-lg leading-relaxed">
                Yes! We don't store conversations. Everything is encrypted and processed in real-time only.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="w-full py-20 md:py-28 bg-gradient-to-b from-white to-blue-50" aria-labelledby="pricing-heading">
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
                <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-blue-100">
                  {/* Price Header */}
                  <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white text-center py-8 px-6">
                    <div className="inline-block bg-white/20 backdrop-blur-sm px-4 py-1 rounded-full text-sm font-semibold mb-4">
                      30% OFF Launch Offer
                    </div>
                    <div className="flex items-center justify-center gap-4 mb-2">
                      <span className="text-5xl font-bold">$69</span>
                      <span className="text-2xl text-blue-200 line-through">$99</span>
                    </div>
                    <p className="text-blue-100 text-lg">per month</p>
                  </div>

                  {/* Features List */}
                  <div className="p-8">
                    <div className="space-y-4 mb-8">
                      <div className="flex items-start gap-3">
                        <span className="text-green-500 text-xl mt-0.5">✓</span>
                        <span className="text-gray-700">Unlimited AI responses</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <span className="text-green-500 text-xl mt-0.5">✓</span>
                        <span className="text-gray-700">Voice message recognition</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <span className="text-green-500 text-xl mt-0.5">✓</span>
                        <span className="text-gray-700">Multilingual support (50+ languages)</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <span className="text-green-500 text-xl mt-0.5">✓</span>
                        <span className="text-gray-700">Google Calendar integration</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <span className="text-green-500 text-xl mt-0.5">✓</span>
                        <span className="text-gray-700">Built-in CRM</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <span className="text-green-500 text-xl mt-0.5">✓</span>
                        <span className="text-gray-700">Free setup & installation</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <span className="text-green-500 text-xl mt-0.5">✓</span>
                        <span className="text-gray-700">24/7 email & chat support</span>
                      </div>
                    </div>

                    <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-6 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all" asChild>
                      <Link href="https://aisupersg.com/signup" target="_blank" rel="noopener noreferrer">
                        Get Started Now
                      </Link>
                    </Button>

                    <p className="text-center text-gray-500 text-sm mt-4">
                      30-day free trial • No credit card required
                    </p>
                  </div>
                </div>
              </TabsContent>

              {/* Yearly Pricing */}
              <TabsContent value="yearly" className="mt-0">
                <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-blue-100">
                  {/* Price Header */}
                  <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white text-center py-8 px-6">
                    <div className="inline-block bg-white/20 backdrop-blur-sm px-4 py-1 rounded-full text-sm font-semibold mb-4">
                      Best Value - Save $240/year
                    </div>
                    <div className="flex items-center justify-center gap-4 mb-2">
                      <span className="text-5xl font-bold">$49</span>
                      <span className="text-2xl text-blue-200 line-through">$69</span>
                    </div>
                    <p className="text-blue-100 text-lg">per month, billed annually</p>
                    <p className="text-blue-200 text-sm mt-2">($588/year instead of $828)</p>
                  </div>

                  {/* Features List */}
                  <div className="p-8">
                    <div className="space-y-4 mb-8">
                      <div className="flex items-start gap-3">
                        <span className="text-green-500 text-xl mt-0.5">✓</span>
                        <span className="text-gray-700">Unlimited AI responses</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <span className="text-green-500 text-xl mt-0.5">✓</span>
                        <span className="text-gray-700">Voice message recognition</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <span className="text-green-500 text-xl mt-0.5">✓</span>
                        <span className="text-gray-700">Multilingual support (50+ languages)</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <span className="text-green-500 text-xl mt-0.5">✓</span>
                        <span className="text-gray-700">Google Calendar integration</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <span className="text-green-500 text-xl mt-0.5">✓</span>
                        <span className="text-gray-700">Built-in CRM</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <span className="text-green-500 text-xl mt-0.5">✓</span>
                        <span className="text-gray-700">Free setup & installation</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <span className="text-green-500 text-xl mt-0.5">✓</span>
                        <span className="text-gray-700">24/7 email & chat support</span>
                      </div>
                    </div>

                    <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-6 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all" asChild>
                      <Link href="https://aisupersg.com/signup" target="_blank" rel="noopener noreferrer">
                        Get Started Now
                      </Link>
                    </Button>

                    <p className="text-center text-gray-500 text-sm mt-4">
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

      {/* Footer */}
      <footer className="flex flex-col gap-2 sm:flex-row py-4 w-full shrink-0 items-center justify-center px-4 md:px-6 border-t border-gray-700" role="contentinfo">
        <div className="container flex flex-col items-center justify-between max-w-6xl mx-auto">
          <div className="flex flex-col sm:flex-row items-center justify-between w-full mb-2">
            <p className="text-xs text-gray-400">© 2025 AI Super Private Limited. All rights reserved.</p>
            <nav className="flex gap-3 sm:gap-5 mt-2 sm:mt-0">
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