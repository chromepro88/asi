// app/support/page.tsx
import Link from "next/link";
import { Metadata } from "next";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MessageCircle, Clock, HelpCircle, Book } from "lucide-react";

const AI_SUPER_SITE_URL = "https://aisupersg.com";

export const metadata: Metadata = {
  title: "Support Center | AI Super",
  description: "Get help with AI Super's WhatsApp AI chatbot services. Contact support, find FAQs, and access resources for business automation.",
};

export default function SupportPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-100 flex flex-col">
      <main className="flex-grow container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 text-gray-900">Support Center</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We're here to help you get the most out of your AI Super WhatsApp chatbot. 
            Find answers, get support, and learn how to maximize your business automation.
          </p>
        </div>

        {/* Quick Contact Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-8 text-center text-gray-900">Get in Touch</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <MessageCircle className="h-12 w-12 mx-auto text-green-600 mb-4" />
                <CardTitle className="text-blue-600">WhatsApp Support</CardTitle>
                <CardDescription>Get instant help via WhatsApp</CardDescription>
              </CardHeader>
              <CardContent>
                <Button asChild className="w-full bg-green-600 hover:bg-green-700">
                  <Link href="https://wa.me/6588379368" target="_blank" rel="noopener noreferrer">
                    Start Chat
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Mail className="h-12 w-12 mx-auto text-blue-600 mb-4" />
                <CardTitle className="text-blue-600">Email Support</CardTitle>
                <CardDescription>Send us your questions</CardDescription>
              </CardHeader>
              <CardContent>
                <Button asChild variant="outline" className="w-full">
                  <Link href="mailto:hello@asi.sg">
                    hello@asi.sg
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Phone className="h-12 w-12 mx-auto text-purple-600 mb-4" />
                <CardTitle className="text-blue-600">Phone Support</CardTitle>
                <CardDescription>Call us for immediate assistance</CardDescription>
              </CardHeader>
              <CardContent>
                <Button asChild variant="outline" className="w-full">
                  <Link href="tel:+6588379368">
                    +65 8837 9368
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Support Hours */}
        <section className="mb-12">
          <Card className="max-w-2xl mx-auto">
            <CardHeader className="text-center">
              <Clock className="h-12 w-12 mx-auto text-orange-600 mb-4" />
              <CardTitle className="text-blue-600">Support Hours</CardTitle>
              <CardDescription>Our team is available to help you</CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <div className="space-y-2 text-gray-700">
                <p><strong>Monday - Friday:</strong> 9:00 AM - 6:00 PM (SGT)</p>
                <p><strong>Saturday:</strong> 10:00 AM - 4:00 PM (SGT)</p>
                <p><strong>Sunday:</strong> Closed</p>
              </div>
              <p className="text-sm text-gray-500 mt-4">
                * Emergency support available 24/7 for enterprise customers
              </p>
            </CardContent>
          </Card>
        </section>

        {/* FAQ Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-8 text-center text-gray-900">Frequently Asked Questions</h2>
          <div className="max-w-4xl mx-auto space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-blue-600">How do I set up my WhatsApp AI chatbot?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Setting up your WhatsApp AI chatbot is easy! After signing up, our team will guide you through the setup process. 
                  We'll help you integrate with your WhatsApp Business account and customize your chatbot's responses. 
                  The entire process typically takes 24-48 hours.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-blue-600">What types of businesses can use AI Super?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  AI Super works great for various industries including real estate, e-commerce, healthcare, 
                  hospitality, and professional services. Our chatbot can handle customer inquiries, 
                  appointment scheduling, lead generation, and more.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-blue-600">How much does AI Super cost?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  We offer flexible pricing plans at $99/month, or $69/month billed yearly, for small
                  businesses. Enterprise plans are available with custom pricing. Contact us for a
                  personalized quote based on your specific needs and message volume.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-blue-600">Can I customize my chatbot's responses?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Absolutely! Our platform allows you to fully customize your chatbot's personality, 
                  responses, and workflows. You can train it with your business information, 
                  set up custom conversation flows, and integrate with your existing systems.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-blue-600">Is my data secure with AI Super?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Yes, we take data security very seriously. All communications are encrypted, 
                  and we comply with international data protection standards. Your customer data 
                  is stored securely and never shared with third parties without your consent.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Resource Links */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-8 text-center text-gray-900">Additional Resources</h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Book className="h-8 w-8 text-blue-600 mb-2" />
                <CardTitle className="text-blue-600">Documentation</CardTitle>
                <CardDescription>Comprehensive guides and tutorials</CardDescription>
              </CardHeader>
              <CardContent>
                <Button asChild className="w-full">
                  <Link href="/documentation">
                    View Documentation
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <HelpCircle className="h-8 w-8 text-green-600 mb-2" />
                <CardTitle className="text-blue-600">Try Demo</CardTitle>
                <CardDescription>Experience our chatbot in action</CardDescription>
              </CardHeader>
              <CardContent>
                <Button asChild variant="outline" className="w-full">
                  <Link href={AI_SUPER_SITE_URL} target="_blank" rel="noopener noreferrer">
                    Try Demo
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Back to Home */}
        <div className="text-center">
          <Button asChild variant="outline" size="lg">
            <Link href="/">
              ← Back to Home
            </Link>
          </Button>
        </div>
      </main>
    </div>
  );
}
