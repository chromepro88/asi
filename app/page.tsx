import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { SmoothScroll } from "@/components/SmoothScroll";
import { Analytics } from "@vercel/analytics/react";
import { Instagram, Facebook } from "lucide-react";

// Lazy load components
const WhatsAppButton = dynamic(() => import("@/components/WhatsAppButton").then((mod) => mod.WhatsAppButton), { ssr: false });

export const generateMetadata = (): Metadata => ({
  title: "AI Super Private Limited | No.1 WhatsApp Chatbot in Singapore",
  description: "Boost your business with AI Super's WhatsApp Chatbot—24/7 support, automated responses, starting at $19/month.",
  keywords: ["WhatsApp Chatbot", "AI Customer Support", "Singapore AI", "AI Super", "Business Automation"],
  openGraph: {
    title: "AI Super Private Limited | No.1 WhatsApp Chatbot in Singapore",
    description: "Boost your business with AI Super's WhatsApp Chatbot—24/7 support, automated responses, starting at $19/month.",
    url: "https://asi.sg",
    siteName: "AI Super Private Limited",
    images: [{ url: "logo_final5.png", width: 120, height: 120, alt: "AI Super Private Limited Logo" }],
    locale: "en_SG",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Super Private Limited | No.1 WhatsApp Chatbot in Singapore",
    description: "Boost your business with AI Super's WhatsApp Chatbot—24/7 support, automated responses, starting at $19/month.",
    images: ["logo_final5.png"],
  },
});

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <WhatsAppButton />
      <SmoothScroll />

      {/* Header */}
      <header className="px-4 lg:px-6 h-12 flex items-center justify-center">
        <div className="container flex items-center justify-between max-w-6xl mx-auto">
          <Link href="/" className="flex items-center">
            <Image src="logo_final5.png" alt="AI Super Logo" width={48} height={48} className="h-12 w-12" />
          </Link>
          <nav className="flex gap-3 sm:gap-5">
            <Link href="#features" className="text-sm font-medium hover:underline underline-offset-4">Features</Link>
            <Link href="#pricing" className="text-sm font-medium hover:underline underline-offset-4">Pricing</Link>
            <Link href="/video" className="text-sm font-medium hover:underline underline-offset-4">Demo</Link>
            <Link href="#contact" className="text-sm font-medium hover:underline underline-offset-4">Contact</Link>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="w-full py-12 md:py-20 lg:py-28 xl:py-36">
        <div className="container px-4 md:px-6 lg:px-8 max-w-6xl mx-auto">
          <div className="flex flex-col items-center space-y-3 text-center">
            <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
              The No.1 AI Chatbot in Singapore
            </h1>
            <p className="max-w-[600px] text-gray-200 text-lg md:text-xl">
              AI-empowered WhatsApp Chatbot for Closing Sales
            </p>
            <Button className="btn-primary" asChild>
              <Link href="#try-it-now">Try It Now</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="w-full py-8 md:py-16 lg:py-20 bg-gray-900">
        <div className="container px-4 md:px-6 lg:px-8 max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl text-center mb-6">
            Why Choose Our WhatsApp Chatbot?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card className="card-bg">
              <CardHeader>
                <CardTitle>Free Installation</CardTitle>
                <CardDescription className="text-gray-200">
                  Zero setup costs—our team handles it all.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="card-bg">
              <CardHeader>
                <CardTitle>Regular Updates</CardTitle>
                <CardDescription className="text-gray-200">
                  Automatic updates keep your chatbot smooth.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="card-bg">
              <CardHeader>
                <CardTitle>Supports WhatsApp Calls & Messages</CardTitle>
                <CardDescription className="text-gray-200">
                  Seamlessly handle calls and messages anytime.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="w-full py-8 md:py-16 lg:py-20 bg-gray-700">
        <div className="container px-4 md:px-6 lg:px-8 max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl text-center mb-6">
            Trusted by Leading Brands
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card className="card-bg">
              <CardHeader>
                <div className="flex items-center space-x-2">
                  <span className="text-lg font-bold text-gray-200">PropNex</span>
                  <Image src="/PropNex.png" alt="PropNex Logo" width={64} height={64} className="rounded-full" />
                </div>
                <CardDescription className="text-gray-200">
                  "Transformed our engagement and boosted sales."
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="card-bg">
              <CardHeader>
                <div className="flex items-center space-x-2">
                  <span className="text-lg font-bold text-gray-200">OrangeTee</span>
                  <Image src="/OrangeTee.jpeg" alt="OrangeTee Logo" width={64} height={64} className="rounded-full" />
                </div>
                <CardDescription className="text-gray-200">
                  "Cost-effective with excellent support!"
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="card-bg">
              <CardHeader>
                <div className="flex items-center space-x-2">
                  <span className="text-lg font-bold text-gray-200">Huttons</span>
                  <Image src="/Huttons.png" alt="Huttons Logo" width={64} height={64} className="rounded-full" />
                </div>
                <CardDescription className="text-gray-200">
                  "24/7 response—a game-changer."
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="w-full py-8 md:py-16 lg:py-20 bg-gray-800">
        <div className="container px-4 md:px-6 lg:px-8 max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl text-center mb-6">
            Pricing Plans
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card className="card-bg">
              <CardHeader>
                <CardTitle>Monthly</CardTitle>
                <CardDescription>
                  <span className="text-xl font-bold">$19</span>/month
                  <p className="text-red-400 line-through">$69</p>
                  <p className="text-green-400">Save $50!</p>
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="w-full btn-primary" asChild>
                  <Link href="#try-it-now">Get Started</Link>
                </Button>
              </CardContent>
            </Card>
            <Card className="card-bg">
              <CardHeader>
                <CardTitle>3 Months</CardTitle>
                <CardDescription>
                  <span className="text-xl font-bold">$49</span>/3 months
                  <p className="text-red-400 line-through">$199</p>
                  <p className="text-green-400">Save $150!</p>
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="w-full btn-primary" asChild>
                  <Link href="#try-it-now">Get Started</Link>
                </Button>
              </CardContent>
            </Card>
            <Card className="card-bg">
              <CardHeader>
                <CardTitle>12 Months</CardTitle>
                <CardDescription>
                  <span className="text-xl font-bold">$189</span>/12 months
                  <p className="text-red-400 line-through">$699</p>
                  <p className="text-green-400">Save $510!</p>
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="w-full btn-primary" asChild>
                  <Link href="#try-it-now">Get Started</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section id="video-embed" className="w-full py-8 md:py-16 lg:py-20 bg-gray-700">
        <div className="container px-4 md:px-6 lg:px-8 max-w-6xl mx-auto flex justify-center">
          <iframe
            width="315"
            height="560"
            src="https://www.youtube.com/embed/WQvXVIEp6o8"
            title="AI Super WhatsApp Chatbot Demo - YouTube Short"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            loading="lazy"
          />
        </div>
      </section>

      {/* Referral Program Section */}
      <section id="referral" className="w-full py-8 md:py-16 lg:py-20 bg-gray-800">
        <div className="container px-4 md:px-6 lg:px-8 max-w-6xl mx-auto text-center">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl mb-3">Refer a Friend</h2>
          <p className="max-w-[600px] text-gray-200 text-lg md:text-xl mb-4 text-center mx-auto">
            Invite a friend and get 5% off your next purchase—both of you!
          </p>
          <Button className="btn-primary">Share Now</Button>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="w-full py-8 md:py-16 lg:py-20 bg-gray-900">
        <div className="container px-4 md:px-6 lg:px-8 max-w-6xl mx-auto text-center">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl mb-3">Get in Touch</h2>
          <p className="max-w-[600px] text-gray-200 text-lg md:text-xl mb-4 text-center mx-auto">
            Questions? Contact us to learn more about our solutions.
          </p>
          <div className="flex justify-center gap-3">
            <Button asChild className="btn-primary">
              <a href="mailto:hello@asi.sg">Email Us</a>
            </Button>
            <Button asChild className="btn-primary">
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
              <Link href="#" className="text-xs hover:underline underline-offset-4 text-gray-400">Terms</Link>
              <Link href="#" className="text-xs hover:underline underline-offset-4 text-gray-400">Privacy</Link>
              <Link href="https://www.instagram.com/aisupersg/" target="_blank" rel="noopener noreferrer" className="text-xs hover:underline underline-offset-4 text-gray-400">
                <Instagram className="inline-block mr-1 h-4 w-4" /> Instagram
              </Link>
              <Link href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-xs hover:underline underline-offset-4 text-gray-400">
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
    </div>
  );
}