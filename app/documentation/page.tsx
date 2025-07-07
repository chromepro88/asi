// app/documentation/page.tsx
import Link from "next/link";
import { Metadata } from "next";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  BookOpen, 
  Settings, 
  MessageSquare, 
  Smartphone, 
  BarChart3, 
  Users, 
  Zap, 
  Shield,
  ExternalLink,
  Download
} from "lucide-react";

export const metadata: Metadata = {
  title: "Documentation | AI Super",
  description: "Complete documentation for AI Super's WhatsApp AI chatbot platform. Learn how to setup, customize, and optimize your business automation.",
};

export default function DocumentationPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-100 flex flex-col">
      <main className="flex-grow container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 text-gray-900">Documentation</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Everything you need to know about setting up and using AI Super's WhatsApp AI chatbot 
            for your business automation needs.
          </p>
        </div>

        {/* Quick Start Guide */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-8 text-center text-gray-900">Quick Start Guide</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <Smartphone className="h-8 w-8 text-blue-600" />
                  <Badge variant="secondary">Step 1</Badge>
                </div>
                <CardTitle className="text-blue-600">Setup WhatsApp Business</CardTitle>
                <CardDescription>Connect your WhatsApp Business account</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">
                  First, ensure you have a WhatsApp Business account. We'll help you connect it to our platform 
                  and verify your business profile.
                </p>
                <Button variant="outline" size="sm" className="w-full">
                  <ExternalLink className="h-4 w-4 mr-2" />
                  WhatsApp Business Setup
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <Settings className="h-8 w-8 text-green-600" />
                  <Badge variant="secondary">Step 2</Badge>
                </div>
                <CardTitle className="text-blue-600">Configure Your Bot</CardTitle>
                <CardDescription>Customize responses and workflows</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">
                  Train your chatbot with your business information, set up automated responses, 
                  and create conversation flows that match your brand voice.
                </p>
                <Button variant="outline" size="sm" className="w-full">
                  <Settings className="h-4 w-4 mr-2" />
                  Bot Configuration
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <Zap className="h-8 w-8 text-purple-600" />
                  <Badge variant="secondary">Step 3</Badge>
                </div>
                <CardTitle className="text-blue-600">Go Live</CardTitle>
                <CardDescription>Launch your automated customer service</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">
                  Test your chatbot, review the setup, and launch your automated customer service. 
                  Start engaging with customers 24/7!
                </p>
                <Button variant="outline" size="sm" className="w-full">
                  <Zap className="h-4 w-4 mr-2" />
                  Launch Guide
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Main Documentation Sections */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-8 text-center text-gray-900">Documentation Sections</h2>
          <div className="grid md:grid-cols-2 gap-6">
            
            {/* Getting Started */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <BookOpen className="h-8 w-8 text-blue-600 mb-2" />
                <CardTitle className="text-blue-600">Getting Started</CardTitle>
                <CardDescription>Basic setup and initial configuration</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                    Account Setup & Registration
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                    WhatsApp Business Integration
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                    First Bot Configuration
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                    Testing Your Setup
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Bot Configuration */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <MessageSquare className="h-8 w-8 text-green-600 mb-2" />
                <CardTitle className="text-blue-600">Bot Configuration</CardTitle>
                <CardDescription>Customize your chatbot's behavior</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-green-600 rounded-full mr-3"></span>
                    Conversation Flow Design
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-green-600 rounded-full mr-3"></span>
                    Custom Response Templates
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-green-600 rounded-full mr-3"></span>
                    AI Training & Learning
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-green-600 rounded-full mr-3"></span>
                    Multi-language Support
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Analytics & Reporting */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <BarChart3 className="h-8 w-8 text-purple-600 mb-2" />
                <CardTitle className="text-blue-600">Analytics & Reporting</CardTitle>
                <CardDescription>Monitor performance and insights</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-purple-600 rounded-full mr-3"></span>
                    Conversation Analytics
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-purple-600 rounded-full mr-3"></span>
                    Customer Engagement Metrics
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-purple-600 rounded-full mr-3"></span>
                    Performance Reports
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-purple-600 rounded-full mr-3"></span>
                    Export Data & Integration
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* User Management */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Users className="h-8 w-8 text-orange-600 mb-2" />
                <CardTitle className="text-blue-600">User Management</CardTitle>
                <CardDescription>Manage team access and permissions</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-orange-600 rounded-full mr-3"></span>
                    Team Member Roles
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-orange-600 rounded-full mr-3"></span>
                    Permission Settings
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-orange-600 rounded-full mr-3"></span>
                    Access Control
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-orange-600 rounded-full mr-3"></span>
                    Activity Monitoring
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Security */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Shield className="h-8 w-8 text-red-600 mb-2" />
                <CardTitle className="text-blue-600">Security & Privacy</CardTitle>
                <CardDescription>Data protection and compliance</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-red-600 rounded-full mr-3"></span>
                    Data Encryption
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-red-600 rounded-full mr-3"></span>
                    GDPR Compliance
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-red-600 rounded-full mr-3"></span>
                    Security Best Practices
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-red-600 rounded-full mr-3"></span>
                    Audit Logs
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* API Integration */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Zap className="h-8 w-8 text-indigo-600 mb-2" />
                <CardTitle className="text-blue-600">API & Integrations</CardTitle>
                <CardDescription>Connect with external systems</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-indigo-600 rounded-full mr-3"></span>
                    REST API Documentation
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-indigo-600 rounded-full mr-3"></span>
                    Webhook Configuration
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-indigo-600 rounded-full mr-3"></span>
                    Third-party Integrations
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-indigo-600 rounded-full mr-3"></span>
                    Custom Development
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Developer Resources */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-8 text-center text-gray-900">Developer Resources</h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-blue-600">API Reference</CardTitle>
                <CardDescription>Complete API documentation and examples</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">
                  Comprehensive API documentation with code examples, authentication guides, 
                  and integration tutorials for developers.
                </p>
                <Button variant="outline" className="w-full">
                  <ExternalLink className="h-4 w-4 mr-2" />
                  View API Docs
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-blue-600">SDK Downloads</CardTitle>
                <CardDescription>Software development kits for popular platforms</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">
                  Download our SDKs for JavaScript, Python, PHP, and other popular programming languages 
                  to integrate AI Super into your applications.
                </p>
                <Button variant="outline" className="w-full">
                  <Download className="h-4 w-4 mr-2" />
                  Download SDKs
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Common Use Cases */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-8 text-center text-gray-900">Common Use Cases</h2>
          <div className="bg-white p-8 rounded-lg shadow-md max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-blue-600">Real Estate</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Property inquiry automation</li>
                  <li>• Appointment scheduling</li>
                  <li>• Lead qualification</li>
                  <li>• Market updates</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4 text-blue-600">E-commerce</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Order status updates</li>
                  <li>• Product recommendations</li>
                  <li>• Customer support</li>
                  <li>• Abandoned cart recovery</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4 text-blue-600">Healthcare</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Appointment booking</li>
                  <li>• Prescription reminders</li>
                  <li>• Health tips</li>
                  <li>• Emergency protocols</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4 text-blue-600">Hospitality</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Room reservations</li>
                  <li>• Guest services</li>
                  <li>• Event planning</li>
                  <li>• Feedback collection</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Help & Support */}
        <section className="mb-12">
          <div className="bg-blue-50 p-8 rounded-lg max-w-4xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-4 text-gray-900">Need Additional Help?</h2>
            <p className="text-gray-700 mb-6">
              Can't find what you're looking for? Our support team is ready to help you with any questions or issues.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild>
                <Link href="/support">
                  Contact Support
                </Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="/demo">
                  Try Demo
                </Link>
              </Button>
            </div>
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
