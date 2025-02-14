import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Brain, Cpu, Globe, Zap } from "lucide-react"
import Countdown from "@/components/Countdown"
import QuotesCarousel from "@/components/QuotesCarousel"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-900 text-white">
      <header className="px-4 lg:px-6 h-14 flex items-center border-b border-gray-800">
        <Link className="flex items-center justify-center" href="#">
          <Cpu className="h-6 w-6 text-blue-400" />
          <span className="ml-2 font-bold">AI Advent</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:text-blue-400" href="#">
            About
          </Link>
          <Link className="text-sm font-medium hover:text-blue-400" href="#">
            Updates
          </Link>
          <Link className="text-sm font-medium hover:text-blue-400" href="#">
            Contact
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 flex items-center justify-center">
          <div className="container px-4 md:px-6 text-center">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none mb-4">
              Countdown to Superintelligence
            </h1>
            <p className="mx-auto max-w-[700px] text-gray-400 text-sm sm:text-base md:text-lg lg:text-xl mb-8">
              The dawn of a new era approaches on July 14, 2025. Are you ready?
            </p>
            <Countdown />
            <div className="mt-8 space-y-2 sm:space-y-0 sm:space-x-4 flex flex-col sm:flex-row justify-center">
              <Button variant="outline" className="bg-blue-500 text-white hover:bg-blue-600">
                Learn More
              </Button>
              <Button variant="outline" className="border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white">
                Get Involved
              </Button>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 bg-gray-900">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter text-center mb-8">
              Perspectives on Superintelligence
            </h2>
            <QuotesCarousel />
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-800">
          <div className="container px-4 md:px-6">
            <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
              <div className="flex flex-col items-center space-y-4 text-center">
                <Brain className="h-12 w-12 text-blue-400" />
                <h2 className="text-2xl font-bold">Cognitive Leap</h2>
                <p className="text-gray-400">
                  Prepare for intelligence that surpasses human capabilities across all domains.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 text-center">
                <Globe className="h-12 w-12 text-blue-400" />
                <h2 className="text-2xl font-bold">Global Impact</h2>
                <p className="text-gray-400">Anticipate AI-driven solutions to the world's most pressing challenges.</p>
              </div>
              <div className="flex flex-col items-center space-y-4 text-center">
                <Zap className="h-12 w-12 text-blue-400" />
                <h2 className="text-2xl font-bold">Rapid Advancement</h2>
                <p className="text-gray-400">Witness exponential growth in technology and scientific discoveries.</p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-10 lg:grid-cols-2 lg:gap-20 items-center">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Preparing for Tomorrow</h2>
                <p className="text-gray-400">
                  As we count down to the advent of artificial superintelligence, it's crucial to consider the
                  implications and prepare ourselves. This transformative technology will reshape our world in ways
                  we're only beginning to imagine.
                </p>
                <Button className="bg-blue-500 text-white hover:bg-blue-600">Join the Discussion</Button>
              </div>
              <div className="flex items-center justify-center">
                <Image
                  src="/placeholder.svg?height=400&width=400"
                  alt="Futuristic AI Visualization"
                  className="rounded-lg object-cover"
                  width={400}
                  height={400}
                />
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-800">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Stay Informed</h2>
                <p className="max-w-[900px] text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Don't miss a moment in the countdown to superintelligence. Subscribe for regular updates.
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <form className="flex space-x-2">
                  <input
                    className="flex h-10 w-full rounded-md border border-gray-700 bg-gray-900 px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 text-white"
                    placeholder="Enter your email"
                    type="email"
                  />
                  <Button type="submit" className="bg-blue-500 text-white hover:bg-blue-600">
                    Subscribe
                  </Button>
                </form>
                <p className="text-xs text-gray-400">
                  By subscribing, you agree to our Terms & Conditions and Privacy Policy.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t border-gray-800">
        <p className="text-xs text-gray-400">© 2025 AI Advent Initiative. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4 text-gray-400 hover:text-white" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4 text-gray-400 hover:text-white" href="#">
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  )
}

