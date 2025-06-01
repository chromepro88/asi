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


// Lazy load components
const WhatsAppButton = dynamic(() => import("@/components/WhatsAppButton").then((mod) => mod.WhatsAppButton), { ssr: false });

export const generateMetadata = (): Metadata => ({
  title: "AI Super Private Limited | No.1 WhatsApp Chatbot in the World",
  description: "Boost your business with AI Super's WhatsApp Chatbot—24/7 support, automated responses, starting at $29/month.",
  keywords: ["WhatsApp Chatbot", "AI Customer Support", "World AI", "AI Super", "Business Automation"],
  openGraph: {
    title: "AI Super Private Limited | No.1 WhatsApp Chatbot in the World",
    description: "Boost your business with AI Super's WhatsApp Chatbot—24/7 support, automated responses, starting at $29/month.",
    url: "https://asi.sg",
    siteName: "AI Super Private Limited",
    images: [{ url: "logo2.png", width: 120, height: 120, alt: "AI Super Private Limited Logo" }],
    locale: "en_SG",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Super Private Limited | No.1 WhatsApp Chatbot in the World",
    description: "Boost your business with AI Super's WhatsApp Chatbot—24/7 support, automated responses, starting at $29/month.",
    images: ["logo2.png"],
  },
});

const Home: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-white to-gray-100 text-gray-900">
      <WhatsAppButton />
      <SmoothScroll />

      {/* Header */}
      <header className="px-4 lg:px-6 h-12 flex items-center justify-center bg-white shadow-sm">
        <div className="container flex items-center justify-between max-w-6xl mx-auto">
          <Link href="/" className="flex items-center">
            <Image src="logo_final5.png" alt="AI Super Logo" width={48} height={48} className="h-12 w-12" />
          </Link>
          <nav className="flex gap-3 sm:gap-5">
            <Link href="#features" className="text-sm font-medium hover:underline underline-offset-4 text-blue-600">
              Features
            </Link>
            <Link href="#pricing" className="text-sm font-medium hover:underline underline-offset-4 text-blue-600">
              Pricing
            </Link>
            <Link href="/video" className="text-sm font-medium hover:underline underline-offset-4 text-blue-600">
              Demo
            </Link>
            <Link href="#contact" className="text-sm font-medium hover:underline underline-offset-4 text-blue-600">
              Contact
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="w-full py-12 md:py-20 lg:py-28 xl:py-36 bg-white">
        <div className="container px-4 md:px-6 lg:px-8 max-w-6xl mx-auto">
          <div className="flex flex-col items-center space-y-6 text-center">
            {/* Trust Badge */}
            <div className="flex items-center gap-2 bg-blue-50 px-4 py-2 rounded-full border border-blue-200">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-sm text-blue-700 font-medium">Trusted by 500+ businesses worldwide</span>
            </div>
            
            <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl text-gray-900">
              The No.1 AI Chatbot in the World
            </h1>
            <p className="max-w-[700px] text-gray-600 text-lg md:text-xl leading-relaxed">
              Transform your WhatsApp into a powerful sales machine. Our AI chatbot automatically responds to customers 24/7, 
              nurtures leads, and <span className="font-semibold text-blue-600">increases sales by up to 40%</span> - all while you sleep.
            </p>
            
            {/* Key Benefits */}
            <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-green-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs">✓</span>
                </div>
                <span>5-minute setup</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-green-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs">✓</span>
                </div>
                <span>24/7 automation</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-green-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs">✓</span>
                </div>
                <span>No coding required</span>
              </div>
            </div>
            
            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 w-full max-w-md">
              <Button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 text-lg font-semibold" asChild>
                <Link href="https://aisupersg.com/signup" target="_blank" rel="noopener noreferrer">
                  Get Started Now
                </Link>
              </Button>
              <Button variant="outline" className="flex-1 border-blue-600 text-blue-600 hover:bg-blue-50 py-3 px-6 text-lg font-semibold" asChild>
                <Link href="#video-embed">
                  Watch Demo
                </Link>
              </Button>
            </div>
            
            {/* Social Proof Numbers */}
            <div className="grid grid-cols-3 gap-8 mt-8 pt-8 border-t border-gray-200 w-full max-w-lg">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">10K+</div>
                <div className="text-sm text-gray-500">Messages Automated Daily</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">500+</div>
                <div className="text-sm text-gray-500">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">40%</div>
                <div className="text-sm text-gray-500">Average Sales Increase</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="w-full py-8 md:py-16 lg:py-20 bg-gray-50">
        <div className="container px-4 md:px-6 lg:px-8 max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl text-center mb-6 text-gray-900">
            Transform Your Business with AI Automation
          </h2>
          <p className="text-center text-gray-600 text-lg mb-12 max-w-3xl mx-auto">
            Stop losing customers to slow responses. Our AI chatbot works 24/7 to capture leads, answer questions, and close sales automatically.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="bg-white shadow-md border border-gray-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl">📢</span>
                </div>
                <CardTitle className="text-blue-600">Reach Thousands Instantly</CardTitle>
                <CardDescription className="text-gray-600">
                  Send personalized bulk messages to your entire customer base in seconds. 
                  <span className="font-semibold text-green-600"> Increase engagement by 300%</span> with targeted messaging.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="bg-white shadow-md border border-gray-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl">🤖</span>
                </div>
                <CardTitle className="text-blue-600">Never Miss a Lead Again</CardTitle>
                <CardDescription className="text-gray-600">
                  AI responds to customers instantly, 24/7. Capture leads while you sleep and 
                  <span className="font-semibold text-green-600"> convert 40% more prospects</span> into paying customers.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="bg-white shadow-md border border-gray-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl">📊</span>
                </div>
                <CardTitle className="text-blue-600">Manage Customers Effortlessly</CardTitle>
                <CardDescription className="text-gray-600">
                  Automatically organize contacts and track conversations. 
                  <span className="font-semibold text-green-600"> Save 10+ hours per week</span> on customer management.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="bg-white shadow-md border border-gray-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl">🔄</span>
                </div>
                <CardTitle className="text-blue-600">Automatic Follow-ups</CardTitle>
                <CardDescription className="text-gray-600">
                  Smart AI nurtures leads with perfectly timed follow-ups. 
                  <span className="font-semibold text-green-600"> Close 60% more deals</span> without lifting a finger.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="bg-white shadow-md border border-gray-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl">⚡</span>
                </div>
                <CardTitle className="text-blue-600">Setup in Minutes, Not Days</CardTitle>
                <CardDescription className="text-gray-600">
                  Connect your WhatsApp and go live instantly. No technical skills needed. 
                  <span className="font-semibold text-green-600"> Start earning in 5 minutes.</span>
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="bg-white shadow-md border border-gray-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl">🗣️</span>
                </div>
                <CardTitle className="text-blue-600">Voice & Multilingual Support</CardTitle>
                <CardDescription className="text-gray-600">
                  Understands voice messages and speaks multiple languages. 
                  <span className="font-semibold text-green-600"> Serve global customers</span> effortlessly.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      <section id="testimonials" className="w-full py-8 md:py-16 lg:py-20 bg-blue-50">
        <div className="container px-4 md:px-6 lg:px-8 max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl text-center mb-8 text-gray-900">
            Trusted by Leading Brands
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="bg-white shadow-md border border-gray-200 transition-shadow hover:shadow-lg">
              <CardHeader className="text-center">
                <div className="flex justify-center mb-4">
                  <Image
                    src="/PropNex.png"
                    alt="PropNex Logo"
                    width={64}
                    height={64}
                    className="rounded-full"
                  />
                </div>
                <CardDescription className="text-gray-600 text-base italic">
                  “Transformed our engagement and <strong>boosted sales</strong>.”
                </CardDescription>
                <p className="text-sm text-gray-500 mt-2">Patrick Ho, PropNex</p>
              </CardHeader>
            </Card>
            <Card className="bg-white shadow-md border border-gray-200 transition-shadow hover:shadow-lg">
              <CardHeader className="text-center">
                <div className="flex justify-center mb-4">
                  <Image
                    src="/dade.png"
                    alt="Dade Logo"
                    width={64}
                    height={64}
                    className="rounded-full"
                  />
                </div>
                <CardDescription className="text-gray-600 text-base italic">
                  “Good!”
                </CardDescription>
                <p className="text-sm text-gray-500 mt-2">Victor, Dade.sg</p>
              </CardHeader>
            </Card>
            <Card className="bg-white shadow-md border border-gray-200 transition-shadow hover:shadow-lg">
              <CardHeader className="text-center">
                <div className="flex justify-center mb-4">
                  <Image
                    src="/realstar.png"
                    alt="Realstar Premier Group Logo"
                    width={64}
                    height={64}
                    className="rounded-full"
                  />
                </div>
                <CardDescription className="text-gray-600 text-base italic">
                  “Wow, it worked like Magic with the voice command to input appointment. This helps a lot. Like a PA!”
                </CardDescription>
                <p className="text-sm text-gray-500 mt-2">James Lee, Realstar Premier Group Private Limited</p>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="w-full py-8 md:py-16 lg:py-20 bg-gray-50">
        <div className="container px-4 md:px-6 lg:px-8 max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl mb-4 text-gray-900">
              Choose Your Success Plan
            </h2>
            <p className="text-gray-600 text-lg mb-4">
              Join 500+ businesses already automating their WhatsApp sales
            </p>
            {/* Urgency Element */}
            <div className="bg-red-50 border border-red-200 rounded-lg p-4 max-w-2xl mx-auto mb-8">
              <p className="text-red-600 font-semibold">⚡ Limited Time: Save up to 50% - Offer ends soon!</p>
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
                  <Link href="https://buy.stripe.com/aEUbMqfTV5Xa4zmcMP" target="_blank" rel="noopener noreferrer">
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
                  <Link href="https://buy.stripe.com/fZeeYCdLNdpCe9W7sw" target="_blank" rel="noopener noreferrer">
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
                  <span className="text-2xl font-bold text-gray-900">$449</span>
                  <p className="text-red-500 line-through mt-2">$699</p>
                  <p className="text-green-500 font-semibold">Save $250!</p>
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
                  <Link href="https://buy.stripe.com/6oE7wagXZ71e1nafZ3" target="_blank" rel="noopener noreferrer">
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
      <section id="video-embed" className="w-full py-8 md:py-16 lg:py-20 bg-blue-50">
        <div className="container px-4 md:px-6 lg:px-8 max-w-6xl mx-auto flex flex-col items-center justify-center gap-6">
          <div className="w-full flex flex-col items-center justify-center gap-6 md:flex-row md:gap-6">
            <div className="w-full md:w-1/3 flex justify-center">
              <iframe
                width="315"
                height="560"
                src="https://www.youtube.com/embed/mU-sAJOYk4U"
                title="AI Super WhatsApp Chatbot Calendar Integration Demo - YouTube Short"
                frameBorder={0}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                loading="lazy"
              />
            </div>
            <div className="w-full md:w-1/3 flex justify-center">
              <iframe
                width="315"
                height="560"
                src="https://www.youtube.com/embed/eyRn4bsszTE"
                title="AI Super WhatsApp Chatbot Voice Message and Multilingual Support Demo - YouTube Short"
                frameBorder={0}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                loading="lazy"
              />
            </div>
            <div className="w-full md:w-1/3 flex justify-center">
              <iframe
                width="315"
                height="560"
                src="https://www.youtube.com/embed/O2Pi231Sjs0"
                title="AI Super WhatsApp Chatbot Demo - YouTube Short"
                frameBorder={0}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Referral Program Section */}
      <section id="referral" className="w-full py-8 md:py-16 lg:py-20 bg-gray-50">
        <div className="container px-4 md:px-6 lg:px-8 max-w-6xl mx-auto text-center">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl mb-3 text-gray-900">Refer a Friend</h2>
          <p className="max-w-[600px] text-gray-600 text-lg md:text-xl mb-4 text-center mx-auto">
            Invite a friend and get 5% off your next purchase!
          </p>
          <ShareButton />
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="w-full py-8 md:py-16 lg:py-20 bg-white">
        <div className="container px-4 md:px-6 lg:px-8 max-w-6xl mx-auto text-center">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl mb-3 text-gray-900">Get in Touch</h2>
          <p className="max-w-[600px] text-gray-600 text-lg md:text-xl mb-4 text-center mx-auto">
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
      <section id="faq" className="w-full py-8 md:py-16 lg:py-20 bg-gray-50">
        <div className="container px-4 md:px-6 lg:px-8 max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl text-center mb-12 text-gray-900">
            Frequently Asked Questions
          </h2>
          <div className="grid gap-6">
            <Card className="p-6 bg-white shadow-lg border border-gray-200">
              <h3 className="text-lg font-bold text-gray-900 mb-4">How quickly can I set up the WhatsApp chatbot?</h3>
              <p className="text-gray-700 text-base leading-relaxed">
                Setup takes just 5 minutes! Simply connect your WhatsApp number, customize your responses, and you're live. 
                No technical skills or coding required - we handle everything for you.
              </p>
            </Card>
            
            <Card className="p-6 bg-white shadow-lg border border-gray-200">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Will I still receive calls on my WhatsApp number?</h3>
              <p className="text-gray-700 text-base leading-relaxed">
                Absolutely! Your phone number remains fully functional for calls and personal messages. 
                The AI only handles business messages automatically while preserving all your normal WhatsApp functionality.
              </p>
            </Card>
            
            <Card className="p-6 bg-white shadow-lg border border-gray-200">
              <h3 className="text-lg font-bold text-gray-900 mb-4">What languages does the chatbot support?</h3>
              <p className="text-gray-700 text-base leading-relaxed">
                Our AI chatbot supports multiple languages including English, Mandarin, Malay, Tamil, and many others. 
                It can even understand and respond to voice messages in different languages automatically.
              </p>
            </Card>
            
            <Card className="p-6 bg-white shadow-lg border border-gray-200">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Is my customer data secure?</h3>
              <p className="text-gray-700 text-base leading-relaxed">
                Yes, we take security seriously. We don't store your chat conversations - all messages are processed in real-time 
                and not saved on our servers. Your customer data is encrypted during processing and we're fully compliant with 
                privacy regulations. We never share your customer information with third parties.
              </p>
            </Card>
            
            <Card className="p-6 bg-white shadow-lg border border-gray-200">
              <h3 className="text-lg font-bold text-gray-900 mb-4">What if I need to cancel my subscription?</h3>
              <p className="text-gray-700 text-base leading-relaxed">
                You can cancel anytime with no questions asked.
              </p>
            </Card>
            
            <Card className="p-6 bg-white shadow-lg border border-gray-200">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Can the AI handle complex customer inquiries?</h3>
              <p className="text-gray-700 text-base leading-relaxed">
                Our AI is trained to handle 90% of common customer questions automatically. For complex issues, 
                it can be programmed to connect customers to a human agent with full conversation context, so you never miss important details.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="w-full py-12 md:py-20 bg-blue-600">
        <div className="container px-4 md:px-6 lg:px-8 max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl mb-6 text-white">
            Ready to Transform Your Business?
          </h2>
          <p className="text-blue-100 text-lg md:text-xl mb-8 max-w-2xl mx-auto">
            Join 500+ successful businesses using AI to automate their WhatsApp sales. 
            Get started today and see results in just 5 minutes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-md mx-auto">
            <Button className="flex-1 bg-white text-blue-600 hover:bg-gray-100 py-3 px-8 text-lg font-semibold" asChild>
              <Link href="https://aisupersg.com/signup" target="_blank" rel="noopener noreferrer">
                Get Started Now
              </Link>
            </Button>
            <Button variant="outline" className="flex-1 border-white text-white hover:bg-white hover:text-blue-600 py-3 px-8 text-lg font-semibold" asChild>
              <Link href="#contact">
                Talk to Sales
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="flex flex-col gap-2 sm:flex-row py-4 w-full shrink-0 items-center justify-center px-4 md:px-6 border-t border-gray-700">
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