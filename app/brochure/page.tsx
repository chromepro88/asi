"use client";

import Image from "next/image";
import { Phone, Mail, Globe, MapPin, CheckCircle, Zap, Shield, Clock, Users, Star } from "lucide-react";

export default function BrochurePage() {
  const companyInfo = {
    name: "AI SUPER PRIVATE LIMITED",
    regNo: "202508712N",
    phone: "+65 8837 9368",
    email: "hello@asi.sg",
    website: "www.asi.sg",
    address: {
      line1: "540 Sims Avenue, #03-05, Sims Avenue Centre",
      line2: "Singapore 387603"
    }
  };

  const features = [
    { icon: <Zap className="w-5 h-5" />, title: "24/7 Automation", desc: "Never miss a customer inquiry" },
    { icon: <Shield className="w-5 h-5" />, title: "Secure & Reliable", desc: "Enterprise-grade security" },
    { icon: <Clock className="w-5 h-5" />, title: "Instant Responses", desc: "Reply in seconds, not hours" },
    { icon: <Users className="w-5 h-5" />, title: "Multilingual", desc: "Support for 50+ languages" }
  ];

  const testimonials = [
    { name: "Patrick Lee", company: "PropNex", text: "Transformed our engagement completely!" },
    { name: "James Lee", company: "Realstar Premier Group", text: "Works like magic with voice commands!" },
    { name: "Victor", company: "Dade.sg", text: "Simply amazing results!" }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Print Control Button - Only visible on screen */}
      <div className="fixed top-4 right-4 z-50 print:hidden">
        <button
          onClick={() => {
            alert('To print with colors:\n\n1. In the print dialog, click "More settings"\n2. Check "Background graphics"\n3. Set margins to "Minimum"\n4. Click "Print"');
            window.print();
          }}
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg shadow-lg font-medium transition-colors"
        >
          🖨️ Print with Colors
        </button>
      </div>

      {/* Print styles to ensure colors print */}
      <style jsx global>{`
        @media print {
          * {
            -webkit-print-color-adjust: exact !important;
            color-adjust: exact !important;
            print-color-adjust: exact !important;
          }
          
          @page {
            margin: 0.5in;
            size: auto;
          }
          
          body {
            -webkit-print-color-adjust: exact !important;
            color-adjust: exact !important;
            print-color-adjust: exact !important;
          }
          
          /* Force background colors and gradients to print */
          .bg-gradient-to-br,
          .bg-gradient-to-r,
          .bg-blue-50,
          .bg-gray-50,
          .bg-white,
          .bg-yellow-400 {
            -webkit-print-color-adjust: exact !important;
            color-adjust: exact !important;
            print-color-adjust: exact !important;
          }
          
          /* Ensure specific elements print with colors */
          [class*="bg-gradient"],
          [class*="bg-blue"],
          [class*="bg-gray"],
          [class*="bg-yellow"],
          [class*="bg-white"] {
            -webkit-print-color-adjust: exact !important;
            color-adjust: exact !important;
            print-color-adjust: exact !important;
          }
        }
      `}</style>

      {/* Front Page of Brochure */}
      <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-purple-900 text-white relative overflow-hidden p-8">
        {/* Background Elements */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-white transform translate-x-32 -translate-y-32"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 rounded-full bg-white transform -translate-x-24 translate-y-24"></div>
          <div className="absolute top-1/2 left-1/2 w-32 h-32 rounded-full bg-white transform -translate-x-16 -translate-y-16"></div>
        </div>

        <div className="relative h-full flex flex-col max-w-4xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <div className="flex items-center space-x-6 mb-6">
              <Image
                src="/logo_final5.png"
                alt="AI Super Logo"
                width={80}
                height={80}
                className="rounded-lg"
              />
              <div>
                <h1 className="text-3xl font-bold">AI SUPER</h1>
                <p className="text-blue-200 text-lg">WhatsApp AI Solutions</p>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1 flex flex-col justify-center">
            <div className="text-center mb-12">
              <h2 className="text-6xl font-bold mb-6 leading-tight">
                Transform Your<br />
                <span className="text-yellow-300">WhatsApp</span><br />
                Into a Sales Machine
              </h2>
              <p className="text-xl text-blue-100 mb-8 leading-relaxed max-w-3xl mx-auto">
                Automate customer service, capture leads, and close sales 24/7 
                with Singapore's #1 WhatsApp AI chatbot
              </p>
            </div>

            {/* Key Features Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
                  <div className="text-yellow-300 mb-3 flex justify-center">
                    <div className="w-12 h-12 flex items-center justify-center">
                      {feature.icon}
                    </div>
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                  <p className="text-sm text-blue-100">{feature.desc}</p>
                </div>
              ))}
            </div>

            {/* CTA Section */}
            <div className="text-center">
              <div className="bg-yellow-400 text-blue-900 font-bold py-4 px-8 rounded-xl inline-block mb-4">
                <span className="text-2xl">Save 50% - Limited Time!</span>
              </div>
              <p className="text-xl text-blue-100">
                Starting from <span className="font-bold text-yellow-300 text-2xl">$39/month</span>
              </p>
            </div>
          </div>

          {/* Footer */}
          <div className="mt-8">
            <div className="text-center border-t border-white/20 pt-6">
              <p className="text-lg text-blue-200">
                Trusted by 500+ businesses • Setup in 5 minutes
              </p>
            </div>
          </div>
        </div>
      </div>{/* Back Page of Brochure */}
      <div className="min-h-screen bg-white text-gray-800 p-8">
        <div className="h-full flex flex-col max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-5xl font-bold text-blue-900 mb-4">Why Choose AI Super?</h2>
            <p className="text-gray-600 text-xl">Join Singapore's leading businesses already using our AI solutions</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Left Column */}
            <div>
              {/* Services Section */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-blue-900 mb-4">Our Services</h3>
                <div className="grid grid-cols-1 gap-3">
                  {[
                    "WhatsApp AI Chatbots - Automate customer conversations",
                    "Voice Message Recognition - Understand spoken messages",
                    "Multilingual Support - Communicate in 50+ languages",
                    "Calendar Integration - Schedule appointments automatically",
                    "Lead Capture & CRM - Never lose a potential customer",
                    "Custom AI Solutions - Tailored to your business needs"
                  ].map((service, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                      <span className="text-base">{service}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Testimonials */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-blue-900 mb-4">What Our Clients Say</h3>
                <div className="space-y-4">
                  {testimonials.map((testimonial, index) => (
                    <div key={index} className="bg-blue-50 rounded-lg p-4">
                      <div className="flex items-start space-x-3">
                        <Star className="w-5 h-5 text-yellow-500 mt-1 flex-shrink-0" />
                        <div>
                          <p className="text-base italic mb-2">"{testimonial.text}"</p>
                          <p className="text-sm text-gray-600">
                            <strong>{testimonial.name}</strong> - {testimonial.company}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div>
              {/* Pricing */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-blue-900 mb-4">Special Launch Pricing</h3>
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg p-6">
                  <div className="grid grid-cols-3 gap-4 text-center mb-4">
                    <div>
                      <p className="text-sm opacity-90">Monthly</p>
                      <p className="text-2xl font-bold">$39</p>
                      <p className="text-sm line-through opacity-70">$99</p>
                    </div>
                    <div>
                      <p className="text-sm opacity-90">3 Months</p>
                      <p className="text-2xl font-bold">$99</p>
                      <p className="text-sm line-through opacity-70">$199</p>
                    </div>
                    <div>
                      <p className="text-sm opacity-90">12 Months</p>
                      <p className="text-2xl font-bold">$349</p>
                      <p className="text-sm line-through opacity-70">$699</p>
                    </div>
                  </div>
                  <p className="text-base text-center opacity-90">⚡ Save up to 50% - Limited time offer!</p>
                </div>
              </div>

              {/* Contact Information */}
              <div>
                <div className="bg-gray-50 rounded-lg p-6">
                  {/* QR Code Section - Made prominent */}
                  <div className="text-center mb-6">
                    <div className="bg-white p-6 rounded-lg inline-block shadow-lg border-2 border-blue-200">
                      <Image
                        src="/qr code.png"
                        alt="QR Code - Contact AI Super"
                        width={120}
                        height={120}
                        className="rounded"
                      />
                    </div>
                    <p className="text-xl font-bold text-blue-900 mt-4">📱 Scan to Chat</p>
                    <p className="text-base text-gray-600">Get instant demo & pricing</p>
                  </div>

                  {/* Company Info - Simplified */}
                  <div className="flex items-center justify-center mb-4">
                    <div className="flex items-center space-x-3">
                      <Image
                        src="/logo_final5.png"
                        alt="AI Super Logo"
                        width={40}
                        height={40}
                        className="rounded"
                      />
                      <div>
                        <h4 className="font-bold text-blue-900 text-sm">{companyInfo.name}</h4>
                        <p className="text-sm text-gray-600">Reg. No: {companyInfo.regNo}</p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Essential Contact Info - Simplified */}
                  <div className="text-center text-sm space-y-2">
                    <div className="flex items-center justify-center space-x-6">
                      <div className="flex items-center space-x-2">
                        <Phone className="w-4 h-4 text-blue-600" />
                        <span className="font-medium">{companyInfo.phone}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Globe className="w-4 h-4 text-blue-600" />
                        <span className="font-medium">{companyInfo.website}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="text-center mt-4 pt-4 border-t border-gray-200">
                    <p className="text-base font-bold text-blue-900">
                      🚀 Singapore's #1 WhatsApp AI Solution
                    </p>
                    <p className="text-sm text-gray-600 mt-2">
                      Free 14-day trial • Setup in 5 minutes
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
