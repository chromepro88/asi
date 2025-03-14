import Head from 'next/head';
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Phone, MessageSquare, Settings, Download, HeadphonesIcon } from "lucide-react";
import { MailchimpForm } from "@/components/MailchimpForm";
import { SmoothScroll } from "@/components/SmoothScroll";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Analytics } from "@vercel/analytics/react"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <Head>
        <title>AI Landline</title>
        <meta name="description" content="AI Customer Support" />
        <link rel="icon" href="/favicon.ico" />
        {/* Google tag (gtag.js) */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=AW-16922868318"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'AW-16922868318');
            `,
          }}
        />
      </Head>
      <WhatsAppButton />
      <SmoothScroll />

      <header className="px-4 lg:px-6 h-14 flex items-center justify-center">
        <div className="container flex items-center justify-between">
          <Link className="flex items-center justify-center" href="#">
            <Image src="logo_final5.png" alt="Logo" width={120} height={120} className="h-16 w-16" />
          </Link>
          <nav className="flex gap-4 sm:gap-6">
            <Link className="text-sm font-medium hover:underline underline-offset-4" href="#features">
              Features
            </Link>
            <Link className="text-sm font-medium hover:underline underline-offset-4" href="/video">
              Demo
            </Link>
          </nav>
        </div>
      </header>

      <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                AI Whatsapp Chatbot
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-300 md:text-xl">
                AI-empowered Closing Sales
              </p>
            </div>
            <div className="space-x-4">
              <Button className="bg-[#062e86] text-white hover:bg-[#0842c2]" asChild>
                <Link href="#try-it-now">Try It Now</Link>
              </Button>
              {/* "Learn More" button removed */}
            </div>
          </div>
        </div>
      </section>

      {/* New Product Section */}
      <section id="new-product" className="w-full py-12 md:py-24 lg:py-32 bg-gray-800">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              New Whatsapp Chatbot
            </h2>
            <p className="mx-auto max-w-[700px] text-gray-300 md:text-xl">
              <strong>NEW Whatsapp Chatbot</strong> for only $<strong>19/Month</strong>! Promo till End March‼️
            </p>
            <ul className="list-disc text-gray-300 text-left mx-auto max-w-[700px]">
              <li>Unlimited SKU items</li>
              <li>24/7 Chatbot response</li>
              <li>Support all Whatsapp accounts</li>
            </ul>
            <p className="mx-auto max-w-[700px] text-gray-300 md:text-xl">
              𝗦𝗶𝗻𝗴𝗮𝗽𝗼𝗿𝗲'𝘀 <strong>First AI Whatsapp Company</strong>
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

      {/* Video Section */}
      <section id="video-embed" className="w-full py-12 md:py-24 lg:py-32 bg-gray-700">
        <div className="container px-4 md:px-6 mx-auto flex justify-center">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/esN1EH3AOWg?si=iQNgyqydG97xVEvH"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      </section>

      {/* Try It Now Section (scroll target for Try It Now button) */}
      <section id="try-it-now" className="w-full py-12 md:py-24 lg:py-32 bg-gray-800">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Schedule a Visit
            </h2>
            <p className="mx-auto max-w-[700px] text-gray-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Experience the future of communication with AI Landline!
            </p>
            <MailchimpForm />
            <p className="text-sm text-gray-400">
              We'll only use your email or phone number to contact you about AI Landline.
            </p>
          </div>
        </div>
      </section>

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
                <Image src="instagram.png" alt="Instagram" width={20} height={20} className="inline-block mr-1" />
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
    </div>
  );
}