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
    { name: "Darren", company: "SgVenusFlyTrap", image: "/darren.png", alt: "Customer testimonial from Darren - SgVenusFlyTrap" },
    { name: "James", company: "Realstar Premier Group", image: "/james.png", alt: "Customer testimonial from James - Realstar Premier Group" },
    { name: "Hakeem", company: "Mortgage Titan", image: "/hakeem.png", alt: "Customer testimonial from Hakeem - Mortgage Titan" }
  ];

  return (
    <div className="bg-white">
      {/* Print Control Button - Only visible on screen */}
      <div className="fixed top-4 right-4 z-50 print:hidden">
        <button
          onClick={() => {
            alert('To print with 3mm bleed for A5 cutting:\n\n1. In print dialog, select "Custom" paper size\n2. Set size to 158mm x 220mm (includes 3mm bleed)\n3. Click "More settings"\n4. Check "Background graphics"\n5. Set margins to "None" or "0mm"\n6. Make sure "Fit to page" is unchecked\n7. Print on 158x220mm paper\n8. Cut to final A5 size (152x214mm) after printing');
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
            margin: 0mm; /* Remove page margins */
            size: 152mm 214mm; /* Bleed size: 152mm + 6mm, 214mm + 6mm */
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
            height: 214mm !important; /* Full bleed height */
            width: 152mm !important;  /* Full bleed width */
            margin: 0 !important;
            padding: 0 !important; /* No padding - content will handle safe area */
            box-sizing: border-box !important;
            page-break-after: always !important;
            page-break-inside: avoid !important;
          }
          
          /* Safe area for content - keeps text away from trim lines */
          .safe-area {
            margin: 6mm !important; /* 3mm bleed + 3mm safe margin */
            height: calc(214mm - 12mm) !important; /* Full height minus margins */
            width: calc(152mm - 12mm) !important; /* Full width minus margins */
            box-sizing: border-box !important;
          }
          
          /* Ensure second page appears */
          .a5-page:last-child {
            page-break-after: auto !important;
          }
          
          /* Smaller font sizes for A5 */
          .a5-title {
            font-size: 2.5rem !important;
            line-height: 1.1 !important;
          }
          
          .a5-subtitle {
            font-size: 1.1rem !important;
          }
          
          .a5-body {
            font-size: 0.9rem !important;
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

        <div className="relative h-full flex flex-col safe-area">
          {/* Header - Compact */}
          <div className="mb-3">
            <div className="flex items-center space-x-3 mb-2">
              <Image
                src="/logo_white.png"
                alt="AI Super Logo"
                width={60}
                height={60}
                className="rounded-lg"
              />
              <div>
                <h1 className="text-2xl font-bold">AI SUPER</h1>
                <p className="text-blue-200 text-base">WhatsApp AI Solutions</p>
              </div>
            </div>
          </div>

          {/* Main Content - Optimized for A5 */}
          <div className="flex-1 flex flex-col justify-center">
            <div className="text-center mb-8">
              <h2 className="a5-title text-4xl font-bold mb-4 leading-tight">
                Transform Your<br />
                <span className="text-yellow-300">WhatsApp</span><br />
                Into a Sales Machine
              </h2>
              <p className="a5-subtitle text-lg text-blue-100 mb-6 leading-relaxed px-4">
                Automate customer service, capture leads, and close sales 24/7 
                with Singapore's #1 WhatsApp AI chatbot
              </p>
            </div>

            {/* Key Features Grid - 2x2 for A5 */}
            <div className="grid grid-cols-2 gap-4 mb-8 px-2">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                  <div className="text-yellow-300 mb-3 flex justify-center">
                    <div className="w-10 h-10 flex items-center justify-center">
                      {React.cloneElement(feature.icon, { className: "w-6 h-6" })}
                    </div>
                  </div>
                  <h3 className="font-semibold text-base mb-2">{feature.title}</h3>
                  <p className="text-sm text-blue-100">{feature.desc}</p>
                </div>
              ))}
            </div>

            {/* CTA Section - Compact */}
            <div className="text-center px-4">
              <div className="bg-yellow-400 text-blue-900 font-bold py-3 px-6 rounded-lg inline-block mb-3">
                <span className="text-xl">Save 50% - Limited Time!</span>
              </div>
              <p className="text-xl text-blue-100">
                Starting from <span className="font-bold text-yellow-300 text-2xl">$49/month</span>
              </p>
            </div>
          </div>

          {/* Footer - Compact */}
          <div className="mt-6">
            <div className="text-center border-t border-white/20 pt-4">
              <p className="text-base text-blue-200">
                Trusted by 500+ businesses • Setup in 5 minutes
              </p>
            </div>
          </div>
        </div>
      </div>      {/* Back Page of Brochure - A5 Optimized */}
      <div className="a5-page bg-white text-gray-800">
        <div className="h-full flex flex-col safe-area">
          {/* Header - Compact */}
          <div className="text-center mb-6">
            <h2 className="text-3xl font-bold text-blue-900 mb-2">Why Choose AI Super?</h2>
          </div>

          <div className="flex-1 space-y-6">
            {/* Services Section - Ultra Compact */}
            <div>
              <h3 className="text-xl font-bold text-blue-900 mb-3">Our Services</h3>
              <div className="grid grid-cols-2 gap-2 text-sm">
                {[
                  "WhatsApp AI Chatbots",
                  "Voice Recognition", 
                  "50+ Languages",
                  "Calendar Integration",
                  "Lead Capture",
                  "Custom AI Solutions"
                ].map((service, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                    <span>{service}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Pricing & Testimonials - Side by Side */}
            <div className="grid grid-cols-2 gap-6">
              {/* Pricing - Very Compact */}
              <div>
                <h3 className="text-xl font-bold text-blue-900 mb-3">Launch Pricing</h3>
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg p-4">
                  <div className="text-center">
                    <p className="text-sm opacity-90">Monthly</p>
                    <p className="text-3xl font-bold">$49</p>
                    <p className="text-sm line-through opacity-70">$99</p>
                    <p className="text-sm mt-2">⚡ Save 50%!</p>
                  </div>
                </div>
              </div>

              {/* Testimonials - Very Compact */}
              <div>
                <h3 className="text-xl font-bold text-blue-900 mb-3">Client Reviews</h3>
                <div className="grid grid-cols-2 gap-1">
                  <div className="bg-white rounded border overflow-hidden">
                    <Image 
                      src="/darren.png" 
                      alt="Customer testimonial from Darren - SgVenusFlyTrap" 
                      width={414} 
                      height={896} 
                      className="w-full h-20 object-cover object-top" 
                    />
                  </div>
                  <div className="bg-white rounded border overflow-hidden">
                    <Image 
                      src="/james.png" 
                      alt="Customer testimonial from James - Realstar Premier Group" 
                      width={414} 
                      height={896} 
                      className="w-full h-20 object-cover object-top" 
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Contact - Large QR Code Focus */}
            <div className="bg-gray-50 rounded-lg p-6 flex-1">
              <div className="text-center">
                {/* QR Code - Prominent */}
                <div className="bg-white p-4 rounded-lg inline-block shadow-md border border-blue-200 mb-4">
                  <Image
                    src="/qr code.png"
                    alt="QR Code - Contact AI Super"
                    width={120}
                    height={120}
                    className="rounded"
                  />
                </div>
                <p className="text-2xl font-bold text-blue-900">📱 Scan to Chat</p>
                <p className="text-sm text-gray-600 mb-4">Get instant demo & pricing</p>
                
                {/* Company Info - Minimal */}
                <div className="border-t border-gray-200 pt-3">
                  <div className="flex items-center justify-center space-x-3 mb-2">
                    <Image
                      src="/logo_black.png"
                      alt="AI Super Logo"
                      width={24}
                      height={24}
                      className="rounded"
                    />
                    <span className="font-bold text-blue-900 text-sm">AI SUPER PTE LTD</span>
                  </div>
                  
                  <div className="text-sm space-y-2">
                    <div className="flex items-center justify-center space-x-4">
                      <span>{companyInfo.phone}</span>
                      <span>{companyInfo.website}</span>
                    </div>
                    <p className="text-blue-900 font-semibold text-base">🚀 Singapore's #1 WhatsApp AI Solution</p>
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
