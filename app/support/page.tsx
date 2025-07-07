// app/support/page.tsx
import Link from "next/link";
import { Metadata } from "next";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MessageCircle, Clock, HelpCircle, Book } from "lucide-react";

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
                  <Link href="https://wa.me/6582737373" target="_blank" rel="noopener noreferrer">
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
                  <Link href="mailto:support@asi.sg">
                    support@asi.sg
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
                  <Link href="tel:+6582737373">
                    +65 8273 7373
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
                  We offer flexible pricing plans starting from $99/month for small businesses. 
                  Enterprise plans are available with custom pricing. Contact us for a personalized quote 
                  based on your specific needs and message volume.
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

        {/* ZoomConnect Support */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-8 text-center text-gray-900">ZoomConnect Support</h2>
          <div className="bg-white p-8 rounded-lg shadow-md max-w-6xl mx-auto">
            
            {/* Overview */}
            <div className="mb-8">
              <h3 className="text-2xl font-semibold mb-4 text-blue-600">Overview</h3>
              <p className="text-gray-700">
                ZoomConnect integrates your Zoom account with your WhatsApp business messaging platform, enabling seamless
                meeting scheduling and management within your messaging workflow.
              </p>
            </div>

            {/* Getting Started */}
            <div className="mb-8">
              <h3 className="text-2xl font-semibold mb-4 text-blue-600">Getting Started</h3>
              
              <div className="mb-6">
                <h4 className="text-xl font-semibold mb-3 text-gray-800">1. Connecting Your Zoom Account</h4>
                <ol className="list-decimal list-inside space-y-2 text-gray-700 ml-4">
                  <li>Navigate to ZoomConnect in your dashboard</li>
                  <li>Select the WhatsApp instance you want to connect</li>
                  <li>Click "Connect Zoom"</li>
                  <li>Complete the Zoom authorization process</li>
                  <li>You'll be redirected back with a successful connection</li>
                </ol>
              </div>

              <div className="mb-6">
                <h4 className="text-xl font-semibold mb-3 text-gray-800">2. Connection Status</h4>
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                  <li><strong>Connected:</strong> Your Zoom account is linked and ready to use</li>
                  <li><strong>Not Connected:</strong> Click "Connect Zoom" to establish the connection</li>
                  <li><strong>Multiple Instances:</strong> Each WhatsApp instance can have its own Zoom connection</li>
                </ul>
              </div>
            </div>

            {/* Features */}
            <div className="mb-8">
              <h3 className="text-2xl font-semibold mb-4 text-blue-600">Features</h3>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-xl font-semibold mb-3 text-gray-800">OAuth Integration</h4>
                  <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                    <li>Secure OAuth 2.0 authentication with Zoom</li>
                    <li>Encrypted token storage for your security</li>
                    <li>Automatic token refresh for uninterrupted service</li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-xl font-semibold mb-3 text-gray-800">Multi-Instance Support</h4>
                  <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                    <li>Connect different Zoom accounts to different WhatsApp instances</li>
                    <li>Manage connections independently for each instance</li>
                    <li>Easy switching between connected accounts</li>
                  </ul>
                </div>
              </div>

              <div className="mt-6">
                <h4 className="text-xl font-semibold mb-3 text-gray-800">Security</h4>
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                  <li>All data transmitted via HTTPS encryption</li>
                  <li>OAuth tokens stored securely in encrypted database</li>
                  <li>No meeting content or personal data stored</li>
                  <li>User-controlled disconnect removes all stored tokens</li>
                </ul>
              </div>
            </div>

            {/* Troubleshooting */}
            <div className="mb-8">
              <h3 className="text-2xl font-semibold mb-4 text-blue-600">Troubleshooting</h3>
              
              <div className="space-y-4">
                <div className="bg-red-50 p-4 rounded-lg">
                  <h4 className="text-lg font-semibold mb-2 text-red-800">Connection Issues</h4>
                  <div className="space-y-3">
                    <div>
                      <p className="font-medium text-red-700">Problem: Getting "Application not found" error</p>
                      <p className="text-red-600">Solution: Clear your browser cache and cookies for zoom.us, then try again in incognito/private mode</p>
                    </div>
                    <div>
                      <p className="font-medium text-red-700">Problem: OAuth redirect fails</p>
                      <p className="text-red-600">Solution: Ensure you're using HTTPS and have a stable internet connection</p>
                    </div>
                    <div>
                      <p className="font-medium text-red-700">Problem: "Oops! We were unable to complete your request" error</p>
                      <p className="text-red-600">Solution: This typically occurs when using the same account that created the app. Try with a different Zoom account</p>
                    </div>
                  </div>
                </div>

                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="text-lg font-semibold mb-2 text-blue-800">Disconnection</h4>
                  <p className="text-blue-700 mb-2">To disconnect your Zoom account:</p>
                  <ol className="list-decimal list-inside space-y-1 text-blue-700 ml-4">
                    <li>Go to ZoomConnect page</li>
                    <li>Select the connected instance</li>
                    <li>Click "Disconnect Zoom"</li>
                    <li>Confirm the disconnection</li>
                    <li>All stored tokens will be immediately removed</li>
                  </ol>
                </div>
              </div>
            </div>

            {/* Browser Compatibility */}
            <div className="mb-8">
              <h3 className="text-2xl font-semibold mb-4 text-blue-600">Browser Compatibility</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>Supported: Chrome, Firefox, Safari, Edge (latest versions)</li>
                <li>Requires JavaScript enabled</li>
                <li>HTTPS required for secure OAuth flow</li>
              </ul>
            </div>

            {/* Data & Privacy */}
            <div className="mb-8">
              <h3 className="text-2xl font-semibold mb-4 text-blue-600">Data & Privacy</h3>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-xl font-semibold mb-3 text-gray-800">What We Store</h4>
                  <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                    <li>OAuth access tokens (encrypted)</li>
                    <li>OAuth refresh tokens (encrypted)</li>
                    <li>Connection status for each WhatsApp instance</li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-xl font-semibold mb-3 text-gray-800">What We Don't Store</h4>
                  <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                    <li>Personal meeting content</li>
                    <li>Participant information</li>
                    <li>Meeting recordings</li>
                    <li>Zoom account passwords</li>
                    <li>Personal profile data beyond basic authentication</li>
                  </ul>
                </div>
              </div>

              <div className="mt-6">
                <h4 className="text-xl font-semibold mb-3 text-gray-800">Data Rights</h4>
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                  <li><strong>Access:</strong> View your connection status at any time</li>
                  <li><strong>Control:</strong> Disconnect and remove all data instantly</li>
                  <li><strong>Deletion:</strong> All tokens permanently deleted on disconnect</li>
                  <li><strong>Portability:</strong> Export connection data on request</li>
                </ul>
              </div>
            </div>

            {/* API Capabilities */}
            <div className="mb-8">
              <h3 className="text-2xl font-semibold mb-4 text-blue-600">API Capabilities</h3>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-xl font-semibold mb-3 text-gray-800">Available Zoom Scopes</h4>
                  <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                    <li><strong>meeting:read:</strong> View your meetings</li>
                    <li><strong>meeting:write:</strong> Create and manage meetings</li>
                    <li><strong>user:read:</strong> Access basic profile information</li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-xl font-semibold mb-3 text-gray-800">Integration Uses</h4>
                  <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                    <li>Meeting scheduling for WhatsApp conversations</li>
                    <li>Calendar integration for appointment booking</li>
                    <li>Automated meeting creation based on chat interactions</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Best Practices */}
            <div className="mb-8">
              <h3 className="text-2xl font-semibold mb-4 text-blue-600">Best Practices</h3>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-xl font-semibold mb-3 text-gray-800">Security</h4>
                  <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                    <li>Regularly review connected accounts</li>
                    <li>Disconnect unused instances</li>
                    <li>Use strong passwords for your Zoom account</li>
                    <li>Keep your WhatsApp platform updated</li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-xl font-semibold mb-3 text-gray-800">Usage</h4>
                  <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                    <li>Test connections after setup</li>
                    <li>Monitor connection status regularly</li>
                    <li>Disconnect before changing Zoom account passwords</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Support Contact */}
            <div className="mb-8">
              <h3 className="text-2xl font-semibold mb-4 text-blue-600">Support Contact</h3>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-xl font-semibold mb-3 text-gray-800">For Technical Issues</h4>
                  <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                    <li>Check this support documentation first</li>
                    <li>Clear browser cache and try incognito mode</li>
                    <li>Ensure stable internet connection</li>
                    <li>Contact support with specific error messages</li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-xl font-semibold mb-3 text-gray-800">For Data Requests</h4>
                  <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                    <li>Connection status inquiries</li>
                    <li>Token deletion requests</li>
                    <li>Data export requests</li>
                    <li>Privacy-related questions</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Common Error Codes */}
            <div className="mb-8">
              <h3 className="text-2xl font-semibold mb-4 text-blue-600">Common Error Codes</h3>
              <div className="bg-yellow-50 p-4 rounded-lg">
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                  <li><strong>4,700:</strong> OAuth configuration issue - try different browser/account</li>
                  <li><strong>401:</strong> Token expired - will auto-refresh or reconnect</li>
                  <li><strong>403:</strong> Permission denied - check Zoom account access</li>
                  <li><strong>404:</strong> Application not found - clear browser cache</li>
                </ul>
              </div>
            </div>

            {/* FAQ */}
            <div className="mb-8">
              <h3 className="text-2xl font-semibold mb-4 text-blue-600">Frequently Asked Questions</h3>
              <div className="space-y-4">
                <div>
                  <p className="font-semibold text-gray-800">Q: Can I connect multiple Zoom accounts?</p>
                  <p className="text-gray-700">A: Yes, each WhatsApp instance can connect to a different Zoom account.</p>
                </div>
                <div>
                  <p className="font-semibold text-gray-800">Q: What happens if I change my Zoom password?</p>
                  <p className="text-gray-700">A: You may need to reconnect. The system will prompt you if re-authentication is needed.</p>
                </div>
                <div>
                  <p className="font-semibold text-gray-800">Q: Is my data secure?</p>
                  <p className="text-gray-700">A: Yes, all data is encrypted and transmitted via HTTPS. We store only essential OAuth tokens.</p>
                </div>
                <div>
                  <p className="font-semibold text-gray-800">Q: Can I use this with personal Zoom accounts?</p>
                  <p className="text-gray-700">A: Yes, both personal and business Zoom accounts are supported.</p>
                </div>
                <div>
                  <p className="font-semibold text-gray-800">Q: How do I know if my connection is working?</p>
                  <p className="text-gray-700">A: The ZoomConnect page shows clear connection status for each instance.</p>
                </div>
              </div>
            </div>
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
                  <Link href="/demo">
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
