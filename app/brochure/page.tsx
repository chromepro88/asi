"use client";

import Image from "next/image";
import { Phone, Mail, Globe, MapPin, CheckCircle, Zap, Shield, Clock, Users, Star, ArrowRight } from "lucide-react";

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
    <div className="min-h-screen bg-white print:bg-white">
      {/* Print styles */}
      <style jsx global>{`
        @media print {
          @page {
            size: A5;
            margin: 0;
          }
          
          body, * {
            -webkit-print-color-adjust: exact;
            color-adjust: exact;
          }
          
          .print-hidden {
            display: none !important;
          }
          
          .brochure-page {
            width: 148mm;
            height: 210mm;
            page-break-after: always;
            page-break-inside: avoid;
            margin: 0;
            padding: 0;
            box-shadow: none !important;
            border-radius: 0 !important;
          }
          
          .brochure-page:last-child {
            page-break-after: auto;
          }
        }
        
        @media screen {
          .brochure-page {
            width: 592px;
            height: 840px;
            margin: 20px auto;
            box-shadow: 0 10px 30px -5px rgba(0, 0, 0, 0.1), 0 15px 15px -5px rgba(0, 0, 0, 0.05);
            border-radius: 8px;
            overflow: hidden;
          }
        }
      `}</style>

      {/* Print Controls - Hidden when printing */}
      <div className="print-hidden p-8 text-center bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-800 mb-3">AI Super A5 Brochure</h1>
          <p className="text-gray-600 mb-8 text-lg">Professional double-sided brochure ready for A5 printing</p>
          
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-8">
            <h3 className="font-semibold text-blue-800 mb-3 text-lg">A5 Printing Instructions:</h3>
            <div className="grid md:grid-cols-2 gap-4 text-sm text-blue-700">
              <ol className="text-left space-y-2">
                <li>1. Click "Print Brochure" below</li>
                <li>2. Select "More settings" in print dialog</li>
                <li>3. Choose "Paper size" → "A5 (148 × 210 mm)"</li>
                <li>4. Enable "Background graphics"</li>
              </ol>
              <ol className="text-left space-y-2" start="5">
                <li>5. Select "Print on both sides" (duplex)</li>
                <li>6. Choose "Long edge binding"</li>
                <li>7. Set "Scale" to 100%</li>
                <li>8. Click "Print"</li>
              </ol>
            </div>
            <div className="mt-4 p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
              <p className="text-xs text-yellow-700">
                <strong>Note:</strong> For best results, use high-quality A5 paper (148×210mm). 
                If duplex printing isn't available, print front pages first, then flip and print back pages.
              </p>
            </div>
          </div>
          
          <button
            onClick={() => window.print()}
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-10 py-4 rounded-xl font-semibold text-lg transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            🖨️ Print A5 Brochure
          </button>
        </div>
      </div>

      {/* Front Page of Brochure */}
      <div className="brochure-page bg-gradient-to-br from-blue-900 via-blue-800 to-purple-900 text-white relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-white transform translate-x-32 -translate-y-32"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 rounded-full bg-white transform -translate-x-24 translate-y-24"></div>
          <div className="absolute top-1/2 left-1/2 w-32 h-32 rounded-full bg-white transform -translate-x-16 -translate-y-16"></div>
        </div>

        <div className="relative h-full flex flex-col">
          {/* Header */}
          <div className="p-8 pb-4">
            <div className="flex items-center space-x-4 mb-6">
              <Image
                src="/logo_final5.png"
                alt="AI Super Logo"
                width={60}
                height={60}
                className="rounded-lg"
              />
              <div>
                <h1 className="text-2xl font-bold">AI SUPER</h1>
                <p className="text-blue-200 text-sm">WhatsApp AI Solutions</p>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1 p-8 pt-0 flex flex-col justify-center">
            <div className="text-center mb-8">
              <h2 className="text-4xl font-bold mb-4 leading-tight">
                Transform Your<br />
                <span className="text-yellow-300">WhatsApp</span><br />
                Into a Sales Machine
              </h2>
              <p className="text-lg text-blue-100 mb-6 leading-relaxed">
                Automate customer service, capture leads, and close sales 24/7 
                with Singapore's #1 WhatsApp AI chatbot
              </p>
            </div>

            {/* Key Features Grid */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                  <div className="text-yellow-300 mb-2 flex justify-center">
                    {feature.icon}
                  </div>
                  <h3 className="font-semibold text-sm mb-1">{feature.title}</h3>
                  <p className="text-xs text-blue-100">{feature.desc}</p>
                </div>
              ))}
            </div>

            {/* CTA Section */}
            <div className="text-center">
              <div className="bg-yellow-400 text-blue-900 font-bold py-3 px-6 rounded-lg inline-block mb-3">
                <span className="text-lg">Save 50% - Limited Time!</span>
              </div>
              <p className="text-sm text-blue-100">
                Starting from <span className="font-bold text-yellow-300">$39/month</span>
              </p>
            </div>
          </div>

          {/* Footer */}
          <div className="p-8 pt-4">
            <div className="text-center border-t border-white/20 pt-4">
              <p className="text-sm text-blue-200">
                Trusted by 500+ businesses • Setup in 5 minutes
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Back Page of Brochure */}
      <div className="brochure-page bg-white text-gray-800">
        <div className="h-full flex flex-col p-8">
          {/* Header */}
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-blue-900 mb-2">Why Choose AI Super?</h2>
            <p className="text-gray-600">Join Singapore's leading businesses already using our AI solutions</p>
          </div>

          {/* Services Section */}
          <div className="mb-8">
            <h3 className="text-xl font-bold text-blue-900 mb-4">Our Services</h3>
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
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">{service}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Testimonials */}
          <div className="mb-8">
            <h3 className="text-xl font-bold text-blue-900 mb-4">What Our Clients Say</h3>
            <div className="space-y-4">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-blue-50 rounded-lg p-4">
                  <div className="flex items-start space-x-3">
                    <Star className="w-4 h-4 text-yellow-500 mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-sm italic mb-2">"{testimonial.text}"</p>
                      <p className="text-xs text-gray-600">
                        <strong>{testimonial.name}</strong> - {testimonial.company}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Pricing */}
          <div className="mb-8">
            <h3 className="text-xl font-bold text-blue-900 mb-4">Special Launch Pricing</h3>
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg p-4 text-center">
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <p className="text-xs opacity-90">Monthly</p>
                  <p className="text-lg font-bold">$39</p>
                  <p className="text-xs line-through opacity-70">$99</p>
                </div>
                <div>
                  <p className="text-xs opacity-90">3 Months</p>
                  <p className="text-lg font-bold">$99</p>
                  <p className="text-xs line-through opacity-70">$199</p>
                </div>
                <div>
                  <p className="text-xs opacity-90">12 Months</p>
                  <p className="text-lg font-bold">$349</p>
                  <p className="text-xs line-through opacity-70">$699</p>
                </div>
              </div>
              <p className="text-sm mt-2 opacity-90">⚡ Save up to 50% - Limited time offer!</p>
            </div>
          </div>

          {/* Contact Information */}
          <div className="mt-auto">
            <div className="bg-gray-50 rounded-lg p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <Image
                    src="/logo_final5.png"
                    alt="AI Super Logo"
                    width={40}
                    height={40}
                    className="rounded"
                  />
                  <div>
                    <h4 className="font-bold text-blue-900">{companyInfo.name}</h4>
                    <p className="text-xs text-gray-600">Reg. No: {companyInfo.regNo}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm font-semibold text-blue-600">Get Started Today!</p>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Phone className="w-4 h-4 text-blue-600" />
                    <span>{companyInfo.phone}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Mail className="w-4 h-4 text-blue-600" />
                    <span>{companyInfo.email}</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Globe className="w-4 h-4 text-blue-600" />
                    <span>{companyInfo.website}</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <MapPin className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                    <div className="text-xs">
                      <p>{companyInfo.address.line1}</p>
                      <p>{companyInfo.address.line2}</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="text-center mt-4 pt-4 border-t border-gray-200">
                <p className="text-sm font-semibold text-blue-900">
                  🚀 No.1 WhatsApp AI Solution in Singapore
                </p>
                <p className="text-xs text-gray-600 mt-1">
                  Free setup • 5-minute installation • Cancel anytime
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Additional copies for printing (hidden on screen) */}
      <div className="hidden print:block">
        {[...Array(3)].map((_, index) => (
          <div key={index}>
            {/* Front Page Copy */}
            <div className="brochure-page bg-gradient-to-br from-blue-900 via-blue-800 to-purple-900 text-white relative overflow-hidden">
              <div className="absolute inset-0 opacity-5">
                <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-white transform translate-x-32 -translate-y-32"></div>
                <div className="absolute bottom-0 left-0 w-48 h-48 rounded-full bg-white transform -translate-x-24 translate-y-24"></div>
                <div className="absolute top-1/2 left-1/2 w-32 h-32 rounded-full bg-white transform -translate-x-16 -translate-y-16"></div>
              </div>

              <div className="relative h-full flex flex-col">
                <div className="p-8 pb-4">
                  <div className="flex items-center space-x-4 mb-6">
                    <Image
                      src="/logo_final5.png"
                      alt="AI Super Logo"
                      width={60}
                      height={60}
                      className="rounded-lg"
                    />
                    <div>
                      <h1 className="text-2xl font-bold">AI SUPER</h1>
                      <p className="text-blue-200 text-sm">WhatsApp AI Solutions</p>
                    </div>
                  </div>
                </div>

                <div className="flex-1 p-8 pt-0 flex flex-col justify-center">
                  <div className="text-center mb-8">
                    <h2 className="text-4xl font-bold mb-4 leading-tight">
                      Transform Your<br />
                      <span className="text-yellow-300">WhatsApp</span><br />
                      Into a Sales Machine
                    </h2>
                    <p className="text-lg text-blue-100 mb-6 leading-relaxed">
                      Automate customer service, capture leads, and close sales 24/7 
                      with Singapore's #1 WhatsApp AI chatbot
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-4 mb-8">
                    {features.map((feature, idx) => (
                      <div key={idx} className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                        <div className="text-yellow-300 mb-2 flex justify-center">
                          {feature.icon}
                        </div>
                        <h3 className="font-semibold text-sm mb-1">{feature.title}</h3>
                        <p className="text-xs text-blue-100">{feature.desc}</p>
                      </div>
                    ))}
                  </div>

                  <div className="text-center">
                    <div className="bg-yellow-400 text-blue-900 font-bold py-3 px-6 rounded-lg inline-block mb-3">
                      <span className="text-lg">Save 50% - Limited Time!</span>
                    </div>
                    <p className="text-sm text-blue-100">
                      Starting from <span className="font-bold text-yellow-300">$39/month</span>
                    </p>
                  </div>
                </div>

                <div className="p-8 pt-4">
                  <div className="text-center border-t border-white/20 pt-4">
                    <p className="text-sm text-blue-200">
                      Trusted by 500+ businesses • Setup in 5 minutes
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Back Page Copy */}
            <div className="brochure-page bg-white text-gray-800">
              <div className="h-full flex flex-col p-8">
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-bold text-blue-900 mb-2">Why Choose AI Super?</h2>
                  <p className="text-gray-600">Join Singapore's leading businesses already using our AI solutions</p>
                </div>

                <div className="mb-8">
                  <h3 className="text-xl font-bold text-blue-900 mb-4">Our Services</h3>
                  <div className="grid grid-cols-1 gap-3">
                    {[
                      "WhatsApp AI Chatbots - Automate customer conversations",
                      "Voice Message Recognition - Understand spoken messages",
                      "Multilingual Support - Communicate in 50+ languages",
                      "Calendar Integration - Schedule appointments automatically",
                      "Lead Capture & CRM - Never lose a potential customer",
                      "Custom AI Solutions - Tailored to your business needs"
                    ].map((service, idx) => (
                      <div key={idx} className="flex items-start space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-sm">{service}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mb-8">
                  <h3 className="text-xl font-bold text-blue-900 mb-4">What Our Clients Say</h3>
                  <div className="space-y-4">
                    {testimonials.map((testimonial, idx) => (
                      <div key={idx} className="bg-blue-50 rounded-lg p-4">
                        <div className="flex items-start space-x-3">
                          <Star className="w-4 h-4 text-yellow-500 mt-1 flex-shrink-0" />
                          <div>
                            <p className="text-sm italic mb-2">"{testimonial.text}"</p>
                            <p className="text-xs text-gray-600">
                              <strong>{testimonial.name}</strong> - {testimonial.company}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mb-8">
                  <h3 className="text-xl font-bold text-blue-900 mb-4">Special Launch Pricing</h3>
                  <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg p-4 text-center">
                    <div className="grid grid-cols-3 gap-4 text-center">
                      <div>
                        <p className="text-xs opacity-90">Monthly</p>
                        <p className="text-lg font-bold">$39</p>
                        <p className="text-xs line-through opacity-70">$99</p>
                      </div>
                      <div>
                        <p className="text-xs opacity-90">3 Months</p>
                        <p className="text-lg font-bold">$99</p>
                        <p className="text-xs line-through opacity-70">$199</p>
                      </div>
                      <div>
                        <p className="text-xs opacity-90">12 Months</p>
                        <p className="text-lg font-bold">$349</p>
                        <p className="text-xs line-through opacity-70">$699</p>
                      </div>
                    </div>
                    <p className="text-sm mt-2 opacity-90">⚡ Save up to 50% - Limited time offer!</p>
                  </div>
                </div>

                <div className="mt-auto">
                  <div className="bg-gray-50 rounded-lg p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        <Image
                          src="/logo_final5.png"
                          alt="AI Super Logo"
                          width={40}
                          height={40}
                          className="rounded"
                        />
                        <div>
                          <h4 className="font-bold text-blue-900">{companyInfo.name}</h4>
                          <p className="text-xs text-gray-600">Reg. No: {companyInfo.regNo}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-sm font-semibold text-blue-600">Get Started Today!</p>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div className="space-y-2">
                        <div className="flex items-center space-x-2">
                          <Phone className="w-4 h-4 text-blue-600" />
                          <span>{companyInfo.phone}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Mail className="w-4 h-4 text-blue-600" />
                          <span>{companyInfo.email}</span>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center space-x-2">
                          <Globe className="w-4 h-4 text-blue-600" />
                          <span>{companyInfo.website}</span>
                        </div>
                        <div className="flex items-start space-x-2">
                          <MapPin className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                          <div className="text-xs">
                            <p>{companyInfo.address.line1}</p>
                            <p>{companyInfo.address.line2}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="text-center mt-4 pt-4 border-t border-gray-200">
                      <p className="text-sm font-semibold text-blue-900">
                        🚀 No.1 WhatsApp AI Solution in Singapore
                      </p>
                      <p className="text-xs text-gray-600 mt-1">
                        Free setup • 5-minute installation • Cancel anytime
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
