import Link from "next/link";
import Image from "next/image";
import type { Metadata } from 'next';
import dynamic from 'next/dynamic';
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { SmoothScroll } from "@/components/SmoothScroll";
import { Analytics } from "@vercel/analytics/react";

// Lazy load components to improve performance
const MailchimpForm = dynamic(
  () => import('@/components/MailchimpForm').then((mod) => mod.MailchimpForm),
  { ssr: false }
);
const WhatsAppButton = dynamic(
  () => import('@/components/WhatsAppButton').then((mod) => mod.WhatsAppButton),
  { ssr: false }
);
// Define metadata for the homepage using generateMetadata
export const generateMetadata = (): Metadata => {
  return {
    title: 'AI Super Private Limited | No.1 WhatsApp Chatbot in Singapore',
    description: 'Boost your business with AI Super\'s WhatsApp Chatbot—24/7 customer support, automated responses, and affordable pricing starting at $19/month.',
    keywords: ['WhatsApp Chatbot', 'AI Customer Support', 'Singapore AI', 'AI Super', 'Business Automation'],
    openGraph: {
      title: 'AI Super Private Limited | No.1 WhatsApp Chatbot in Singapore',
      description: 'Boost your business with AI Super\'s WhatsApp Chatbot—24/7 customer support, automated responses, and affordable pricing starting at $19/month.',
      url: 'https://asi.sg',
      siteName: 'AI Super Private Limited',
      images: [
        {
          url: '/logo8.jpg',
          width: 120,
          height: 120,
          alt: 'AI Super Private Limited Logo',
        },
      ],
      locale: 'en_SG',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'AI Super Private Limited | No.1 WhatsApp Chatbot in Singapore',
      description: 'Boost your business with AI Super\'s WhatsApp Chatbot—24/7 customer support, automated responses, and affordable pricing starting at $19/month.',
      images: ['/logo8.jpg'],
    },
  };
};

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <WhatsAppButton />
      <SmoothScroll />

      {/* Header */}
      <header className="px-4 lg:px-6 h-14 flex items-center justify-center">
        <div className="container flex items-center justify-between">
          <Link className="flex items-center justify-center" href="/">
            <Image
              src="/logo8.jpg"
              alt="AI Super Private Limited Logo"
              width={120}
              height={120}
              className="h-16 w-16"
            />
          </Link>
          <nav className="flex gap-4 sm:gap-6">
            <Link className="text-sm font-medium hover:underline underline-offset-4" href="#features">
              Features
            </Link>
            <Link className="text-sm font-medium hover:underline underline-offset-4" href="#pricing">
              Pricing
            </Link>
            <Link className="text-sm font-medium hover:underline underline-offset-4" href="/video">
              Demo
            </Link>
            <Link className="text-sm font-medium hover:underline underline-offset-4" href="#contact">
              Contact
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="w-full section-spacing">
        <div className="container-padding">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl/none">
                The No.1 AI Chatbot in Singapore
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-300 md:text-xl">
                AI-empowered WhatsApp Chatbot for Closing Sales
              </p>
            </div>
            <div className="space-x-4">
              <Button className="btn-primary" asChild>
                <Link href="#try-it-now">Try It Now</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* New Product Section */}
      <section id="new-product" className="w-full section-spacing bg-gray-800">
        <div className="container-padding">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              New WhatsApp Chatbot
            </h2>
            <p className="mx-auto max-w-[700px] text-gray-300 md:text-xl">
              <strong>NEW WhatsApp Chatbot</strong> for only <strong>$19/Month</strong>! Promo till End March‼️
            </p>
            <ul className="list-disc text-gray-300 text-left mx-auto max-w-[700px]">
              <li>Unlimited SKU items</li>
              <li>24/7 Chatbot response</li>
              <li>Support all WhatsApp accounts</li>
            </ul>
            <p className="mx-auto max-w-[700px] text-gray-300 md:text-xl">
              𝗦𝗶𝗻𝗴𝗮𝗽𝗼𝗿𝗲'𝘀 <strong>First AI WhatsApp Company</strong>
            </p>
            <p className="mx-auto max-w-[700px] text-gray-300 md:text-xl">
              At ASI, we empower thousands of businesses in Singapore by providing a convenient, industry-level & affordable solution to effectively convert customers.
            </p>
            <ul className="list-disc text-gray-300 text-left mx-auto max-w-[700px]">
              <li>✅ 𝗨𝗻𝗯𝗲𝗮𝘁𝗮𝗯𝗹𝗲 𝗣𝗿𝗶𝗰𝗲𝘀 𝗶𝗻 𝗠𝗮𝗿𝗸𝗲𝘁</li>
              <li>✅ <strong>24/7 Customer care</strong></li>
              <li>✅ <strong>Customized Solution</strong></li>
              <li>✅ <strong>Unlimited Capacity</strong></li>
            </ul>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="w-full section-spacing bg-gray-900">
        <div className="container-padding">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">
            Why Choose Our WhatsApp Chatbot?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="card-bg">
              <CardHeader>
                <CardTitle>Free Installation</CardTitle>
                <CardDescription className="text-gray-300">
                  Get started with zero setup costs—our team handles everything for you.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="card-bg">
              <CardHeader>
                <CardTitle>Regular Software Updates</CardTitle>
                <CardDescription className="text-gray-300">
                  Stay ahead with automatic updates to keep your chatbot running smoothly.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="card-bg">
              <CardHeader>
                <CardTitle>24/7 Customer Support</CardTitle>
                <CardDescription className="text-gray-300">
                  Our team is always here to assist you, day or night.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="w-full section-spacing bg-gray-700">
        <div className="container-padding">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">
            Trusted by Leading Brands
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="card-bg">
              <CardHeader>
                <CardTitle>PropNex</CardTitle>
                <CardDescription className="text-gray-300">
                  "The WhatsApp Chatbot from AI Super has transformed our customer engagement, saving us time and boosting sales."
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="card-bg">
              <CardHeader>
                <CardTitle>OrangeTee</CardTitle>
                <CardDescription className="text-gray-300">
                  "A cost-effective solution with excellent support—highly recommend!"
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="card-bg">
              <CardHeader>
                <CardTitle>Huttons</CardTitle>
                <CardDescription className="text-gray-300">
                  "The 24/7 chatbot response has been a game-changer for our business."
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="w-full section-spacing bg-gray-800">
        <div className="container-padding">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">
            Pricing Plans
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="card-bg">
              <CardHeader>
                <CardTitle>Monthly</CardTitle>
                <CardDescription>
                  <span className="text-2xl font-bold">$19</span>/month
                  <p className="text-red-400 line-through">$69/month</p>
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="w-full btn-primary">
                  Get Started
                </Button>
              </CardContent>
            </Card>
            <Card className="card-bg">
              <CardHeader>
                <CardTitle>3 Months</CardTitle>
                <CardDescription>
                  <span className="text-2xl font-bold">$49</span>/3 months
                  <p className="text-red-400 line-through">$199/3 months</p>
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="w-full btn-primary">
                  Get Started
                </Button>
              </CardContent>
            </Card>
            <Card className="card-bg">
              <CardHeader>
                <CardTitle>12 Months</CardTitle>
                <CardDescription>
                  <span className="text-2xl font-bold">$189</span>/12 months
                  <p className="text-red-400 line-through">$699/12 months</p>
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="w-full btn-primary">
                  Get Started
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section id="video-embed" className="w-full section-spacing bg-gray-700">
        <div className="container-padding flex justify-center">
          <iframe
            width="560"
            height="315"
            src="https://www.instagram.com/reel/DHOj_V9TX2f/embed"
            title="AI Super WhatsApp Chatbot Demo Video"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>
      </section>

      {/* Try It Now Section */}
      <section id="try-it-now" className="w-full section-spacing bg-gray-800">
        <div className="container-padding">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Schedule a Demo
            </h2>
            <p className="mx-auto max-w-[700px] text-gray-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Experience the future of communication with AI Super's WhatsApp Chatbot!
            </p>
            <MailchimpForm />
            <p className="text-sm text-gray-400">
              We'll only use your email or phone number to contact you about our services.
            </p>
          </div>
        </div>
      </section>

      {/* Referral Program Section */}
      <section id="referral" className="w-full section-spacing bg-gray-800">
        <div className="container-padding text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">
            Refer a Friend
          </h2>
          <p className="mx-auto max-w-[700px] text-gray-300 md:text-xl mb-6">
            Invite a friend to try our WhatsApp Chatbot and get 5% off your next purchase—both of you!
          </p>
          <Button className="btn-primary">
            Share Now
          </Button>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="w-full section-spacing bg-gray-900">
        <div className="container-padding text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">
            Get in Touch
          </h2>
          <p className="mx-auto max-w-[700px] text-gray-300 md:text-xl mb-6">
            Have questions? Contact us today to learn more about our WhatsApp Chatbot solutions.
          </p>
          <div className="flex justify-center gap-4">
            <Button asChild className="btn-primary">
              <a href="mailto:hello@asi.sg">Email Us</a>
            </Button>
            <Button asChild className="btn-primary">
              <a href="tel:+6588379368">Call Us: +65 8837 9368</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center justify-center px-4 md:px-6 border-t border-gray-700">
        <div className="container flex flex-col items-center justify-between">
          <div className="flex flex-col sm:flex-row items-center justify-between w-full mb-4">
            <p className="text-xs text-gray-400">
              © 2025 AI Super Private Limited. All rights reserved.
            </p>
            <nav className="flex gap-4 sm:gap-6 mt-2 sm:mt-0">
              <Link className="text-xs hover:underline underline-offset-4 text-gray-400" href="#">
                Terms of Service
              </Link>
              <Link className="text-xs hover:underline underline-offset-4 text-gray-400" href="#">
                Privacy
              </Link>
              <Link
                className="text-xs hover:underline underline-offset-4 text-gray-400"
                href="https://www.instagram.com/aisupersg/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="instagram.png"
                  alt="Instagram Icon"
                  width={20}
                  height={20}
                  className="inline-block mr-1"
                />
                Instagram
              </Link>
            </nav>
          </div>
          <div className="text-center text-xs text-gray-400 space-y-1">
            <p>AI SUPER PRIVATE LIMITED</p>
            <p>Registration No: 202508712N</p>
            <p>540 SIMS AVENUE, #03-05, SIMS AVENUE CENTRE, SINGAPORE 387603</p>
            <p>Phone: +65 8837 9368</p>
          </div>
        </div>
      </footer>
      <Analytics />
    </div>
  );
}