import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Brain, Cpu, Globe, Zap } from "lucide-react"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link className="flex items-center justify-center" href="#">
          <Cpu className="h-6 w-6 text-primary" />
          <span className="sr-only">AI Welcome</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            About
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Features
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Contact
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-white">
                  Welcome to the Era of Artificial Superintelligence
                </h1>
                <p className="mx-auto max-w-[700px] text-white md:text-xl">
                  Embracing a new chapter in human-AI collaboration. Together, we shape the future.
                </p>
              </div>
              <div className="space-x-4">
                <Button variant="secondary" className="bg-white text-black hover:bg-gray-100">
                  Learn More
                </Button>
                <Button variant="outline" className="text-white border-white hover:bg-white hover:text-black">
                  Get Involved
                </Button>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
          <div className="container px-4 md:px-6">
            <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
              <div className="flex flex-col items-center space-y-4 text-center">
                <Brain className="h-12 w-12 text-primary" />
                <h2 className="text-2xl font-bold">Cognitive Leap</h2>
                <p className="text-muted-foreground">
                  Experience intelligence that surpasses human capabilities across all domains.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 text-center">
                <Globe className="h-12 w-12 text-primary" />
                <h2 className="text-2xl font-bold">Global Impact</h2>
                <p className="text-muted-foreground">
                  Witness AI-driven solutions to world's most pressing challenges.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 text-center">
                <Zap className="h-12 w-12 text-primary" />
                <h2 className="text-2xl font-bold">Rapid Advancement</h2>
                <p className="text-muted-foreground">
                  Observe exponential growth in technology and scientific discoveries.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-10 lg:grid-cols-2 lg:gap-20">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Shaping Our Collective Future</h2>
                <p className="text-muted-foreground">
                  As we stand at the threshold of a new era, artificial superintelligence offers unprecedented
                  opportunities for growth, innovation, and problem-solving. Together, we'll navigate this exciting
                  frontier, ensuring that the power of AI is harnessed responsibly for the benefit of all humanity.
                </p>
                <Button>Join the Conversation</Button>
              </div>
              <div className="flex items-center justify-center">
                <Image
                  src="/placeholder.svg?height=400&width=400"
                  alt="AI and Human Collaboration"
                  className="rounded-lg object-cover"
                  width={400}
                  height={400}
                />
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Be Part of the AI Revolution</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Stay informed, get involved, and help shape the future of artificial superintelligence.
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <form className="flex space-x-2">
                  <input
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 flex-1"
                    placeholder="Enter your email"
                    type="email"
                  />
                  <Button type="submit">Subscribe</Button>
                </form>
                <p className="text-xs text-muted-foreground">
                  By subscribing, you agree to our Terms & Conditions and Privacy Policy.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-muted-foreground">© 2025 AI Welcome Initiative. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  )
}

