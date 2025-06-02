"use client";

import React from "react";
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
    { name: "Victor", company: "Dade.sg", text: "Good!" }
  ];

  return (
    <div className="bg-white">
      {/* Print Control Button - Only visible on screen */}
      <div className="fixed top-4 right-4 z-50 print:hidden">
        <button
          onClick={() => {
            alert('To print 152x214mm brochure with colors:\n\n1. In print dialog, select "Custom" paper size\n2. Set size to 152mm x 214mm\n3. Click "More settings"\n4. Check "Background graphics"\n5. Set margins to "Custom: 5mm"\n6. Make sure "Fit to page" is unchecked\n7. Click "Print"');
            window.print();
          }}
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg shadow-lg font-medium transition-colors"
        >
          🖨️ Print 152x214mm Brochure
        </button>
      </div>

      {/* Print styles to ensure colors print and A5 format */}
      <style jsx global>{`
        @media print {
          * {
            -webkit-print-color-adjust: exact !important;
            color-adjust: exact !important;
            print-color-adjust: exact !important;
          }
          
          @page {
            margin: 5mm;
            size: 152mm 214mm; /* Custom size: 152mm x 214mm */
          }
          
          html, body {
            -webkit-print-color-adjust: exact !important;
            color-adjust: exact !important;
            print-color-adjust: exact !important;
            font-size: 12px;
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
          
          /* Custom size specific adjustments */
          .a5-page {
            height: 204mm !important; /* 214mm - 10mm margins */
            width: 142mm !important;  /* 152mm - 10mm margins */
            margin: 0 auto !important;
            padding: 6mm !important;
            box-sizing: border-box !important;
            page-break-after: always !important;
            page-break-inside: avoid !important;
          }
          
          /* Ensure second page appears */
          .a5-page:last-child {
            page-break-after: auto !important;
          }
          
          /* Smaller font sizes for A5 */
          .a5-title {
            font-size: 2rem !important;
          }
          
          .a5-subtitle {
            font-size: 1rem !important;
          }
          
          .a5-body {
            font-size: 0.8rem !important;
          }
        }
      `}</style>

      {/* Front Page of Brochure - A5 Optimized */}
      <div className="a5-page bg-gradient-to-br from-blue-900 via-blue-800 to-purple-900 text-white relative overflow-hidden">
        {/* Background Elements - Smaller for A5 */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 right-0 w-32 h-32 rounded-full bg-white transform translate-x-16 -translate-y-16"></div>
          <div className="absolute bottom-0 left-0 w-24 h-24 rounded-full bg-white transform -translate-x-12 translate-y-12"></div>
          <div className="absolute top-1/2 left-1/2 w-16 h-16 rounded-full bg-white transform -translate-x-8 -translate-y-8"></div>
        </div>

        <div className="relative h-full flex flex-col max-w-lg mx-auto">
          {/* Header - Compact */}
          <div className="mb-4">
            <div className="flex items-center space-x-3 mb-3">
              <Image
                src="/logo_final5.png"
                alt="AI Super Logo"
                width={50}
                height={50}
                className="rounded-lg"
              />
              <div>
                <h1 className="text-xl font-bold">AI SUPER</h1>
                <p className="text-blue-200 text-sm">WhatsApp AI Solutions</p>
              </div>
            </div>
          </div>

          {/* Main Content - Optimized for A5 */}
          <div className="flex-1 flex flex-col justify-center">
            <div className="text-center mb-6">
              <h2 className="a5-title text-3xl font-bold mb-3 leading-tight">
                Transform Your<br />
                <span className="text-yellow-300">WhatsApp</span><br />
                Into a Sales Machine
              </h2>
              <p className="a5-subtitle text-sm text-blue-100 mb-4 leading-relaxed">
                Automate customer service, capture leads, and close sales 24/7 
                with Singapore's #1 WhatsApp AI chatbot
              </p>
            </div>

            {/* Key Features Grid - 2x2 for A5 */}
            <div className="grid grid-cols-2 gap-3 mb-6">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-3 text-center">
                  <div className="text-yellow-300 mb-2 flex justify-center">
                    <div className="w-8 h-8 flex items-center justify-center">
                      {React.cloneElement(feature.icon, { className: "w-4 h-4" })}
                    </div>
                  </div>
                  <h3 className="font-semibold text-sm mb-1">{feature.title}</h3>
                  <p className="text-xs text-blue-100">{feature.desc}</p>
                </div>
              ))}
            </div>

            {/* CTA Section - Compact */}
            <div className="text-center">
              <div className="bg-yellow-400 text-blue-900 font-bold py-2 px-4 rounded-lg inline-block mb-2">
                <span className="text-lg">Save 50% - Limited Time!</span>
              </div>
              <p className="text-base text-blue-100">
                Starting from <span className="font-bold text-yellow-300 text-lg">$49/month</span>
              </p>
            </div>
          </div>

          {/* Footer - Compact */}
          <div className="mt-4">
            <div className="text-center border-t border-white/20 pt-3">
              <p className="text-sm text-blue-200">
                Trusted by 500+ businesses • Setup in 5 minutes
              </p>
            </div>
          </div>
        </div>
      </div>      {/* Back Page of Brochure - A5 Optimized */}
      <div className="a5-page bg-white text-gray-800">
        <div className="h-full flex flex-col max-w-lg mx-auto">
          {/* Header - Compact */}
          <div className="text-center mb-4">
            <h2 className="text-2xl font-bold text-blue-900 mb-1">Why Choose AI Super?</h2>
          </div>

          <div className="flex-1 space-y-4">
            {/* Services Section - Ultra Compact */}
            <div>
              <h3 className="text-base font-bold text-blue-900 mb-2">Our Services</h3>
              <div className="grid grid-cols-2 gap-1 text-xs">
                {[
                  "WhatsApp AI Chatbots",
                  "Voice Recognition", 
                  "50+ Languages",
                  "Calendar Integration",
                  "Lead Capture",
                  "Custom AI Solutions"
                ].map((service, index) => (
                  <div key={index} className="flex items-center space-x-1">
                    <CheckCircle className="w-3 h-3 text-green-500 flex-shrink-0" />
                    <span>{service}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Pricing & Testimonials - Side by Side */}
            <div className="grid grid-cols-2 gap-3">
              {/* Pricing - Very Compact */}
              <div>
                <h3 className="text-base font-bold text-blue-900 mb-2">Launch Pricing</h3>
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg p-2">
                  <div className="text-center">
                    <p className="text-xs opacity-90">Monthly</p>
                    <p className="text-lg font-bold">$49</p>
                    <p className="text-xs line-through opacity-70">$99</p>
                    <p className="text-xs mt-1">⚡ Save 50%!</p>
                  </div>
                </div>
              </div>

              {/* Testimonials - Very Compact */}
              <div>
                <h3 className="text-base font-bold text-blue-900 mb-2">Client Reviews</h3>
                <div className="space-y-1">
                  {testimonials.slice(0, 2).map((testimonial, index) => (
                    <div key={index} className="bg-blue-50 rounded p-2">
                      <div className="flex items-start space-x-1">
                        <Star className="w-3 h-3 text-yellow-500 mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="text-xs italic">"{testimonial.text}"</p>
                          <p className="text-xs text-gray-600">- {testimonial.name}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact - Large QR Code Focus */}
            <div className="bg-gray-50 rounded-lg p-3 flex-1">
              <div className="text-center">
                {/* QR Code - Prominent */}
                <div className="bg-white p-3 rounded-lg inline-block shadow-md border border-blue-200 mb-3">
                  <Image
                    src="/qr code.png"
                    alt="QR Code - Contact AI Super"
                    width={100}
                    height={100}
                    className="rounded"
                  />
                </div>
                <p className="text-lg font-bold text-blue-900">📱 Scan to Chat</p>
                <p className="text-xs text-gray-600 mb-3">Get instant demo & pricing</p>
                
                {/* Company Info - Minimal */}
                <div className="border-t border-gray-200 pt-2">
                  <div className="flex items-center justify-center space-x-2 mb-1">
                    <Image
                      src="/logo_final5.png"
                      alt="AI Super Logo"
                      width={20}
                      height={20}
                      className="rounded"
                    />
                    <span className="font-bold text-blue-900 text-xs">AI SUPER PTE LTD</span>
                  </div>
                  
                  <div className="text-xs space-y-1">
                    <div className="flex items-center justify-center space-x-3">
                      <span>{companyInfo.phone}</span>
                      <span>{companyInfo.website}</span>
                    </div>
                    <p className="text-blue-900 font-semibold">🚀 Singapore's #1 WhatsApp AI Solution</p>
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
