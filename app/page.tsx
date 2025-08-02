import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
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
      "price": "49",
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
          <div className="text-center mb-8">
            <h3 className="text-lg font-semibold text-gray-700 mb-2">Trusted by Singapore's Top Real Estate Agencies</h3>
            <p className="text-gray-600">Helping agents close more deals with AI automation</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 items-center mb-8">
            <div className="flex flex-col items-center p-4 bg-white rounded-xl shadow-sm">
              <Image src="/PropNex.png" alt="PropNex real estate agency logo" width={80} height={32} className="mb-1" loading="lazy" />
              <span className="text-xs text-gray-500">Leading Agency</span>
            </div>
            <div className="flex flex-col items-center p-4 bg-white rounded-xl shadow-sm">
              <Image src="/Huttons.png" alt="Huttons real estate agency logo" width={80} height={32} className="mb-1" loading="lazy" />
              <span className="text-xs text-gray-500">Premium Properties</span>
            </div>
            <div className="flex flex-col items-center p-4 bg-white rounded-xl shadow-sm">
              <Image src="/OrangeTee.jpeg" alt="OrangeTee real estate agency logo" width={80} height={32} className="mb-1" loading="lazy" />
              <span className="text-xs text-gray-500">Established 1995</span>
            </div>
            <div className="flex flex-col items-center p-4 bg-white rounded-xl shadow-sm">
              <Image src="/realstar.png" alt="Realstar Premier Group real estate agency logo" width={80} height={32} className="mb-1" loading="lazy" />
              <span className="text-xs text-gray-500">Premier Group</span>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card className="bg-white shadow-md border border-gray-200">
              <CardHeader className="text-center py-4">
                <div className="flex justify-center mb-3">
                  <Image src="/dade.png" alt="Dade.sg company logo" width={48} height={48} className="rounded-full" loading="lazy" />
                </div>
                <CardDescription className="text-gray-600 text-sm italic">"Good!"</CardDescription>
                <p className="text-xs text-gray-500 mt-1">Victor, Dade.sg</p>
              </CardHeader>
            </Card>
            <Card className="bg-white shadow-md border border-gray-200">
              <CardHeader className="text-center py-4">
                <div className="flex justify-center mb-3">
                  <Image src="/realstar.png" alt="Realstar Premier Group company logo" width={48} height={48} className="rounded-full" loading="lazy" />
                </div>
                <CardDescription className="text-gray-600 text-sm italic">"Wow, it worked like Magic with the voice command to input appointment. This helps a lot. Like a PA!"</CardDescription>
                <p className="text-xs text-gray-500 mt-1">James Lee, Realstar Premier Group Private Limited</p>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>
      </main>

      {/* Pricing Section */}
      <section id="pricing" className="w-full py-20 md:py-28 bg-white" aria-labelledby="pricing-heading">
        <div className="container px-4 md:px-6 lg:px-8 max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 id="pricing-heading" className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl mb-6 text-gray-900">
              Choose Your Plan
            </h2>
            <p className="text-gray-600 text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
              Join 500+ businesses automating their WhatsApp sales
            </p>
            {/* Urgency Element */}
            <div className="bg-gradient-to-r from-red-50 to-orange-50 border border-red-200 rounded-xl p-6 max-w-lg mx-auto">
              <p className="text-red-600 font-bold text-lg">⚡ Limited Time: Save up to 50%</p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="bg-white shadow-md border border-gray-200 transition-shadow hover:shadow-lg">
              <CardHeader className="text-center">
                <CardTitle className="text-lg font-semibold text-gray-900">Monthly</CardTitle>
                <CardDescription className="flex flex-col items-center">
                  <span className="text-2xl font-bold text-gray-900">$49</span>
                  <p className="text-red-500 line-through mt-2">$99</p>
                  <p className="text-green-500 font-semibold">Save $50!</p>
                  <p className="text-xs text-gray-500 mt-2">Pay monthly</p>
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="text-sm text-gray-600 space-y-2 mb-6">
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    Unlimited AI responses
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    WhatsApp integration
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    Voice message recognition
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    Multilingual support
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    Google Calendar integration
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    CRM features
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    Free installation & setup
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    Email & chat support
                  </li>
                </ul>
                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white" asChild>
                  <Link href="https://buy.stripe.com/aEUbMqfTV5Xa4zmcMP" target="_blank" rel="noopener noreferrer" aria-label="Start monthly plan for $49">
                    Start Now
                  </Link>
                </Button>
              </CardContent>
            </Card>
            
            <Card className="bg-white shadow-md border border-gray-200 transition-shadow hover:shadow-lg">
              <CardHeader className="text-center">
                <CardTitle className="text-lg font-semibold text-gray-900">3 Months</CardTitle>
                <CardDescription className="flex flex-col items-center">
                  <span className="text-2xl font-bold text-gray-900">$129</span>
                  <p className="text-red-500 line-through mt-2">$199</p>
                  <p className="text-green-500 font-semibold">Save $70!</p>
                  <p className="text-xs text-gray-500 mt-2">Most popular choice</p>
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="text-sm text-gray-600 space-y-2 mb-6">
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    Unlimited AI responses
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    WhatsApp integration
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    Voice message recognition
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    Multilingual support
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    Google Calendar integration
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    CRM features
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    Free installation & setup
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    Email & chat support
                  </li>
                </ul>
                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white" asChild>
                  <Link href="https://buy.stripe.com/fZeeYCdLNdpCe9W7sw" target="_blank" rel="noopener noreferrer" aria-label="Start 3-month plan for $129">
                    Start Now
                  </Link>
                </Button>
              </CardContent>
            </Card>
            
            <Card className="bg-white shadow-md border-2 border-blue-500 transition-shadow hover:shadow-lg relative">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <span className="bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
                  BEST VALUE
                </span>
              </div>
              <CardHeader className="text-center">
                <CardTitle className="text-lg font-semibold text-gray-900">12 Months</CardTitle>
                <CardDescription className="flex flex-col items-center">
                  <span className="text-2xl font-bold text-gray-900">$349</span>
                  <p className="text-red-500 line-through mt-2">$699</p>
                  <p className="text-green-500 font-semibold">Save $350!</p>
                  <p className="text-xs text-gray-500 mt-2">Maximum savings</p>
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="text-sm text-gray-600 space-y-2 mb-6">
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    Unlimited AI responses
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    WhatsApp integration
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    Voice message recognition
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    Multilingual support
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    Google Calendar integration
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    CRM features
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    Free installation & setup
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    Email & chat support
                  </li>
                </ul>
                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white" asChild>
                  <Link href="https://buy.stripe.com/6oE7wagXZ71e1nafZ3" target="_blank" rel="noopener noreferrer" aria-label="Start 12-month plan for $349 - Best Value">
                    Start Now
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
          
          <div className="text-center mt-8">
            <p className="text-gray-600 text-sm mb-4">
              All plans include: Free Installation, Voice Message Recognition, Multilingual Support, and Google Calendar Integration.
            </p>
            <div className="flex justify-center items-center gap-4 text-sm text-gray-500">
              <span className="flex items-center">
                <span className="text-green-500 mr-1">🔒</span>
                SSL Secured
              </span>
              <span className="flex items-center">
                <span className="text-green-500 mr-1">💳</span>
                Secure Payment
              </span>
            </div>
          </div>
        </div>
      </section>

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

      {/* Final CTA Section */}
      <section className="w-full py-8 md:py-12 bg-blue-600">
        <div className="container px-4 md:px-6 lg:px-8 max-w-3xl mx-auto text-center">          <h2 className="text-xl font-bold tracking-tight sm:text-2xl md:text-3xl mb-4 text-white">
            Ready to Transform Your Business?
          </h2>
          <p className="text-blue-100 text-base md:text-lg mb-6 max-w-xl mx-auto">
            Join 500+ successful businesses using AI to automate their WhatsApp sales. 
            Get started today and see results in just 5 minutes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-md mx-auto">
            <Button className="flex-1 bg-white text-blue-600 hover:bg-gray-100 py-2 px-6 text-base md:text-lg font-semibold" asChild>
              <Link href="/signup">
                Start Free
              </Link>
            </Button>
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