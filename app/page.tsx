import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Phone, MessageSquare, Settings, Download, HeadphonesIcon } from "lucide-react"
import { MailchimpForm } from "@/components/MailchimpForm"
import { SmoothScroll } from "@/components/SmoothScroll"
import { WhatsAppButton } from "@/components/WhatsAppButton"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <WhatsAppButton />
      <SmoothScroll />
      <header className="px-4 lg:px-6 h-14 flex items-center justify-center">
        <div className="container flex items-center justify-between">
          <Link className="flex items-center justify-center" href="#">
            <Image src="logo.png" alt="Logo" width={40} height={40} className="h-6 w-6" />
            <span className="ml-2 font-bold text-xl">AI Super</span>
          </Link>
          <nav className="flex gap-4 sm:gap-6">
            <Link className="text-sm font-medium hover:underline underline-offset-4" href="#features">
              Features
            </Link>
            <Link className="text-sm font-medium hover:underline underline-offset-4" href="/video">
              Videos
            </Link>
          </nav>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  AI Landline
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-300 md:text-xl">ASI | AI Customer Support</p>
              </div>
              <div className="space-x-4">
                <Button className="bg-[#062e86] text-white hover:bg-[#0842c2]" asChild>
                  <Link href="#try-it-now">Try It Now</Link>
                </Button>
                <Button
                  variant="outline"
                  className="border-[#062e86] text-[#062e86] hover:bg-[#062e86] hover:text-white"
                  asChild
                >
                  <Link href="#try-it-now">Learn More</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
        <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-gray-800">
          <div className="container px-4 md:px-6 mx-auto">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">Features</h2>
            <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 justify-items-center">
              <div className="flex flex-col items-center space-y-4 text-center">
                <Phone className="h-12 w-12 text-[#062e86]" />
                <h3 className="text-2xl font-bold">Automated Response</h3>
                <p className="text-gray-300">Efficient and accurate automated responses for common inquiries.</p>
              </div>
              <div className="flex flex-col items-center space-y-4 text-center">
                <MessageSquare className="h-12 w-12 text-[#062e86]" />
                <h3 className="text-2xl font-bold">Customizable FAQ</h3>
                <p className="text-gray-300">Tailor your FAQ to address specific customer needs and queries.</p>
              </div>
              <div className="flex flex-col items-center space-y-4 text-center">
                <Settings className="h-12 w-12 text-[#062e86]" />
                <h3 className="text-2xl font-bold">Personalized Chat</h3>
                <p className="text-gray-300">
                  Engage in personalized conversations with AI-powered chat functionality.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 text-center">
                <Phone className="h-12 w-12 text-[#062e86]" />
                <h3 className="text-2xl font-bold">Free On-site Installation</h3>
                <p className="text-gray-300">Expert installation service provided at no additional cost.</p>
              </div>
              <div className="flex flex-col items-center space-y-4 text-center">
                <Download className="h-12 w-12 text-[#062e86]" />
                <h3 className="text-2xl font-bold">Regular Software Updates</h3>
                <p className="text-gray-300">Stay up-to-date with the latest features and improvements.</p>
              </div>
              <div className="flex flex-col items-center space-y-4 text-center">
                <HeadphonesIcon className="h-12 w-12 text-[#062e86]" />
                <h3 className="text-2xl font-bold">24/7 Customer Support</h3>
                <p className="text-gray-300">Round-the-clock assistance for any inquiries or issues.</p>
              </div>
            </div>
          </div>
        </section>
        <section id="how-it-works" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6 mx-auto">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">
              How It Works
            </h2>
            <div className="grid gap-10 lg:grid-cols-3 items-center justify-items-center">
              <div className="space-y-4 text-center">
                <h3 className="text-2xl font-bold">1. Install</h3>
                <p className="text-gray-300">Our team provides free on-site installation of AI Landline.</p>
              </div>
              <div className="space-y-4 text-center">
                <h3 className="text-2xl font-bold">2. Customize</h3>
                <p className="text-gray-300">Set up your personalized FAQ and chat preferences.</p>
              </div>
              <div className="space-y-4 text-center">
                <h3 className="text-2xl font-bold">3. Communicate</h3>
                <p className="text-gray-300">Start using AI-powered communication for your business needs.</p>
              </div>
            </div>
          </div>
        </section>
        <section id="try-it-now" className="w-full py-12 md:py-24 lg:py-32 bg-gray-800">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Try It Now</h2>
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
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center justify-center px-4 md:px-6 border-t border-gray-700">
        <div className="container flex flex-col items-center justify-between">
          <div className="flex flex-col sm:flex-row items-center justify-between w-full mb-4">
            <p className="text-xs text-gray-400">© 2023 AI Landline. All rights reserved.</p>
            <nav className="flex gap-4 sm:gap-6 mt-2 sm:mt-0">
              <Link className="text-xs hover:underline underline-offset-4 text-gray-400" href="#">
                Terms of Service
              </Link>
              <Link className="text-xs hover:underline underline-offset-4 text-gray-400" href="#">
                Privacy
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
  )
}

