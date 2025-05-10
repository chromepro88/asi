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
          <div className="flex flex-col items-center space-y-3 text-center">
            <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl text-gray-900">
              The No.1 AI Chatbot in the World
            </h1>
            <p className="max-w-[600px] text-gray-600 text-lg md:text-xl">
              AI-empowered WhatsApp Chatbot for Closing Sales
            </p>
            <Button className="btn-primary bg-blue-600 hover:bg-blue-700 text-white" asChild>
              <Link href="https://buy.stripe.com/aEUbMqfTV5Xa4zmcMP" target="_blank" rel="noopener noreferrer">
                Try It Now
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="w-full py-8 md:py-16 lg:py-20 bg-gray-50">
        <div className="container px-4 md:px-6 lg:px-8 max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl text-center mb-6 text-gray-900">
            Why Choose Our WhatsApp Chatbot?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <Card className="bg-white shadow-md border border-gray-200">
              <CardHeader>
                <CardTitle className="text-blue-600">WhatsApp Blasting</CardTitle>
                <CardDescription className="text-gray-600">
                  Send bulk messages to your customers instantly, ensuring effective communication at scale.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="bg-white shadow-md border border-gray-200">
              <CardHeader>
                <CardTitle className="text-blue-600">WhatsApp Chatbot</CardTitle>
                <CardDescription className="text-gray-600">
                  Automate customer interactions with AI-powered responses, available 24/7.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="bg-white shadow-md border border-gray-200">
              <CardHeader>
                <CardTitle className="text-blue-600">CRM Integration</CardTitle>
                <CardDescription className="text-gray-600">
                  Seamlessly manage customer relationships with integrated CRM tools.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="bg-white shadow-md border border-gray-200">
              <CardHeader>
                <CardTitle className="text-blue-600">WhatsApp Follow Up</CardTitle>
                <CardDescription className="text-gray-600">
                  Automate follow-up messages to engage leads and close sales effectively.
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
                <p className="text-sm text-gray-500 mt-2">Victor, Dade</p>
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
                <p className="text-sm text-gray-500 mt-2">James Lee, REALSTAR PREMIER GROUP PRIVATE LIMITED</p>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="w-full py-8 md:py-16 lg:py-20 bg-gray-50">
        <div className="container px-4 md:px-6 lg:px-8 max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl text-center mb-8 text-gray-900">
            Pricing Plans
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="bg-white shadow-md border border-gray-200 transition-shadow hover:shadow-lg">
              <CardHeader className="text-center">
                <CardTitle className="text-lg font-semibold text-gray-900">Monthly</CardTitle>
                <CardDescription className="flex flex-col items-center">
                  <span className="text-2xl font-bold text-gray-900">$39</span>
                  <span className="text-sm text-gray-500">/month</span>
                  <p className="text-red-500 line-through mt-2">$99</p>
                  <p className="text-green-500">Save $60!</p>
                </CardDescription>
              </CardHeader>
              <CardContent className="flex justify-center">
                <Button className="w-full btn-primary bg-blue-600 hover:bg-blue-700 text-white" asChild>
                  <Link href="https://buy.stripe.com/aEUbMqfTV5Xa4zmcMP" target="_blank" rel="noopener noreferrer">
                    Get Started
                  </Link>
                </Button>
              </CardContent>
            </Card>
            <Card className="bg-white shadow-md border border-gray-200 transition-shadow hover:shadow-lg">
              <CardHeader className="text-center">
                <CardTitle className="text-lg font-semibold text-gray-900">3 Months</CardTitle>
                <CardDescription className="flex flex-col items-center">
                  <span className="text-2xl font-bold text-gray-900">$99</span>
                  <span className="text-sm text-gray-500">/3 months</span>
                  <p className="text-red-500 line-through mt-2">$199</p>
                  <p className="text-green-500">Save $100!</p>
                </CardDescription>
              </CardHeader>
              <CardContent className="flex justify-center">
                <Button className="w-full btn-primary bg-blue-600 hover:bg-blue-700 text-white" asChild>
                  <Link href="https://buy.stripe.com/fZeeYCdLNdpCe9W7sw" target="_blank" rel="noopener noreferrer">
                    Get Started
                  </Link>
                </Button>
              </CardContent>
            </Card>
            <Card className="bg-white shadow-md border border-gray-200 transition-shadow hover:shadow-lg relative border-2 border-blue-500">
              <div className="absolute top-0 right-0 bg-blue-600 text-white text-xs font-semibold px-2 py-1 rounded-bl">
                Best Value
              </div>
              <CardHeader className="text-center">
                <CardTitle className="text-lg font-semibold text-gray-900">12 Months</CardTitle>
                <CardDescription className="flex flex-col items-center">
                  <span className="text-2xl font-bold text-gray-900">$349</span>
                  <span className="text-sm text-gray-500">/12 months</span>
                  <p className="text-red-500 line-through mt-2">$699</p>
                  <p className="text-green-500">Save $350!</p>
                </CardDescription>
              </CardHeader>
              <CardContent className="flex justify-center">
                <Button className="w-full btn-primary bg-blue-600 hover:bg-blue-700 text-white" asChild>
                  <Link href="https://buy.stripe.com/6oE7wagXZ71e1nafZ3" target="_blank" rel="noopener noreferrer">
                    Get Started
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
          <p className="text-center text-gray-600 mt-8 text-sm">
            All plans include: Free Installation, Voice Message Recognition, Multilingual Support, and Google Calendar Integration.
          </p>
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
      <section id="contact" className="w-full py-8 md:py-16 lg:py-20 bg-gray-50">
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