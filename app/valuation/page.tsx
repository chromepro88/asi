import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import DynamicLogo from "@/components/DynamicLogo";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { SmoothScroll } from "@/components/SmoothScroll";

export const metadata: Metadata = {
  title: "Company Valuation | AI Super",
  description: "Discover AI Super's current company valuation and investment opportunities in artificial super intelligence technology.",
  keywords: ["AI Super", "company valuation", "investment", "artificial intelligence", "startup valuation", "Singapore"],
  openGraph: {
    title: "AI Super Company Valuation",
    description: "Learn about AI Super's valuation and explore investment opportunities in cutting-edge AI technology.",
    url: "https://asi.sg/valuation",
    images: [
      {
        url: "/logo_black.png",
        width: 800,
        height: 600,
        alt: "AI Super Logo",
      },
    ],
  },
};

export default function ValuationPage() {
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-SG', {
      style: 'currency',
      currency: 'SGD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  const currentValuation = 7500000; // SGD 7.5M

  return (
    <SmoothScroll>
      <div className="flex flex-col min-h-screen bg-white">
        <header className="px-4 lg:px-6 h-12 flex items-center justify-center bg-white shadow-sm">
          <div className="container flex items-center justify-between max-w-6xl mx-auto">
            <Link href="/" className="flex items-center">
              <DynamicLogo width={48} height={48} className="h-12 w-12" />
            </Link>
            <nav className="flex gap-3 sm:gap-5">
              <Link
                href="/"
                className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors"
              >
                Home
              </Link>
              <Link
                href="/pitch"
                className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors"
              >
                Pitch Deck
              </Link>
              <Link
                href="/demo"
                className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors"
              >
                Demo
              </Link>
            </nav>
          </div>
        </header>

        <main className="flex-1">
          {/* Hero Section */}
          <section className="w-full py-20 md:py-28 bg-gradient-to-br from-blue-50 to-purple-50">
            <div className="container px-4 md:px-6 lg:px-8 max-w-6xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-gray-900 mb-6">
                Company Valuation
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                Discover AI Super's current market valuation and explore investment opportunities
                in the future of artificial super intelligence.
              </p>
            </div>
          </section>

          {/* Current Valuation Section */}
          <section className="w-full py-20 md:py-28">
            <div className="container px-4 md:px-6 lg:px-8 max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Current Valuation
                </h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  Our company valuation reflects our cutting-edge AI technology, 
                  market potential, and growth trajectory.
                </p>
              </div>

              <Card className="bg-gradient-to-br from-blue-600 to-purple-600 text-white border-0 shadow-2xl max-w-2xl mx-auto">
                <CardHeader className="text-center pb-4">
                  <CardTitle className="text-2xl md:text-3xl font-bold text-white opacity-90">
                    AI Super Valuation
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <div className="text-5xl md:text-7xl font-bold mb-4">
                    {formatCurrency(currentValuation)}
                  </div>
                  <p className="text-lg opacity-90 mb-6">
                    Current Market Valuation
                  </p>
                  <p className="text-sm opacity-75">
                    *Valuation based on proprietary AI technology, market analysis, and growth projections
                  </p>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Valuation Components */}
          <section className="w-full py-20 md:py-28 bg-gray-50">
            <div className="container px-4 md:px-6 lg:px-8 max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Valuation Components
                </h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  Our valuation is built on solid fundamentals and future growth potential.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <Card className="bg-white shadow-md border border-gray-200 transition-transform hover:scale-105">
                  <CardHeader>
                    <CardTitle className="text-xl font-bold text-blue-600">
                      Technology Assets
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">
                      Proprietary AI algorithms, machine learning models, and intellectual property
                      form the core of our technological advantage.
                    </p>
                    <div className="text-2xl font-bold text-gray-900">
                      {formatCurrency(2500000)}
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-white shadow-md border border-gray-200 transition-transform hover:scale-105">
                  <CardHeader>
                    <CardTitle className="text-xl font-bold text-green-600">
                      Market Potential
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">
                      Massive addressable market in AI solutions across multiple industries
                      with exponential growth projections.
                    </p>
                    <div className="text-2xl font-bold text-gray-900">
                      {formatCurrency(3000000)}
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-white shadow-md border border-gray-200 transition-transform hover:scale-105">
                  <CardHeader>
                    <CardTitle className="text-xl font-bold text-purple-600">
                      Strategic Position
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">
                      First-mover advantage in artificial super intelligence with strong
                      partnerships and market positioning.
                    </p>
                    <div className="text-2xl font-bold text-gray-900">
                      {formatCurrency(2000000)}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* Investment Opportunity */}
          <section className="w-full py-20 md:py-28">
            <div className="container px-4 md:px-6 lg:px-8 max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Investment Opportunity
                </h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  Join us in building the future of artificial intelligence. 
                  Be part of the next generation of AI innovation.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">
                    Why Invest in AI Super?
                  </h3>
                  <ul className="space-y-4 text-gray-600">
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span>Revolutionary AI technology with proven results</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span>Experienced team with deep AI expertise</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span>Large and growing market opportunity</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span>Strong intellectual property portfolio</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span>Clear path to market leadership</span>
                    </li>
                  </ul>
                </div>

                <Card className="bg-gradient-to-br from-purple-600 to-blue-600 text-white border-0 shadow-xl">
                  <CardHeader>
                    <CardTitle className="text-2xl font-bold text-white">
                      Get Started Today
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-white/90 mb-6">
                      Ready to learn more about investment opportunities with AI Super? 
                      Contact us to discuss partnership and funding options.
                    </p>
                    <div className="space-y-3">
                      <Button 
                        className="w-full bg-white text-purple-600 hover:bg-gray-100 font-semibold"
                        asChild
                      >
                        <Link href="/pitch">
                          View Pitch Deck
                        </Link>
                      </Button>
                      <Button 
                        variant="outline" 
                        className="w-full border-white text-white hover:bg-white hover:text-purple-600"
                        asChild
                      >
                        <Link href="/demo">
                          Watch Demo
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>
        </main>

        <WhatsAppButton />
      </div>
    </SmoothScroll>
  );
}