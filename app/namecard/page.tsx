"use client";

import Image from "next/image";
import { Card } from "@/components/ui/card";
import { Phone, Mail, Globe, MapPin, User, Building } from "lucide-react";

export default function NamecardPage() {  // Contact information for Sin Ren Xiang, CEO
  const contactInfo = {
    name: "SIN REN XIANG",
    title: "Chief Executive Officer", 
    phone: "+65 8837 9368",
    email: "hello@asi.sg",
    website: "www.asi.sg",
    address: {
      line1: "540 Sims Avenue, #03-05, Sims Avenue Centre",
      line2: "Singapore 387603"
    },
    company: {
      name: "AI SUPER PRIVATE LIMITED",
      regNo: "202508712N"
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 print:bg-white">      {/* Print styles */}
      <style jsx global>{`
        @media print {
          @page {
            size: 89mm 51mm;
            margin: 0;
          }
          
          body, * {
            -webkit-print-color-adjust: exact;
            color-adjust: exact;
          }
          
          .print-hidden {
            display: none !important;
          }
          
          .namecard {
            width: 89mm;
            height: 51mm;
            page-break-after: always;
            page-break-inside: avoid;
            margin: 0;
            box-shadow: none !important;
            border-radius: 0 !important;
          }
          
          .namecard:last-child {
            page-break-after: auto;
          }
        }
        
        @media screen {
          .namecard {
            width: 356px;
            height: 204px;
            margin: 20px auto;
            box-shadow: 0 8px 25px -5px rgb(0 0 0 / 0.1), 0 10px 10px -5px rgb(0 0 0 / 0.04);
            border-radius: 12px;
            overflow: hidden;
          }
        }
      `}</style>      {/* Print Controls - Hidden when printing */}
      <div className="print-hidden p-8 text-center bg-white shadow-sm">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">AI Super Business Card</h1>
          <p className="text-gray-600 mb-6">Professional namecard ready for printing</p>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
            <h3 className="font-semibold text-blue-800 mb-2">Double-Sided Printing Instructions:</h3>
            <ol className="text-sm text-blue-700 text-left space-y-1">
              <li>1. Click the "Print Namecard" button below</li>
              <li>2. In print settings, select "More settings"</li>
              <li>3. Choose "Paper size" → "Custom"</li>
              <li>4. Set dimensions to 89mm × 51mm (standard business card size)</li>
              <li>5. Enable "Background graphics" for colors</li>
              <li>6. Select "Print on both sides" (duplex printing)</li>
              <li>7. Choose "Short edge binding" for proper card orientation</li>
            </ol>
            <div className="mt-3 p-2 bg-yellow-50 border border-yellow-200 rounded">
              <p className="text-xs text-yellow-700">
                <strong>Note:</strong> If your printer doesn't support duplex printing, print the front sides first, 
                then flip the paper and print the back sides.
              </p>
            </div>
          </div>
          
          <button
            onClick={() => window.print()}
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-lg font-medium transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
          >
            🖨️ Print Namecard
          </button>
        </div>
      </div>

      {/* Front of Namecard */}
      <div className="namecard bg-gradient-to-br from-blue-900 via-blue-800 to-purple-900 text-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-32 h-32 rounded-full bg-white transform translate-x-16 -translate-y-16"></div>
          <div className="absolute bottom-0 left-0 w-24 h-24 rounded-full bg-white transform -translate-x-12 translate-y-12"></div>
        </div>

        <div className="relative p-4 h-full flex flex-col justify-between">          {/* Header with Logo */}
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Image
                src="/logo_final5.png"
                alt="AI Super Logo"
                width={32}
                height={32}
                className="rounded"
              />
              <div>
                <h2 className="text-sm font-bold">AI SUPER</h2>
                <p className="text-xs opacity-90">Private Limited</p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <div className="text-right">
                <p className="text-xs opacity-90">WhatsApp AI</p>
                <p className="text-xs opacity-90">Solutions</p>
              </div>
              <Image
                src="/qr code.png"
                alt="QR Code - Contact AI Super"
                width={36}
                height={36}
                className="rounded opacity-90"
              />
            </div>
          </div>{/* Name and Title */}
          <div className="flex-1 flex flex-col justify-center">
            <h1 className="text-lg font-bold mb-1">{contactInfo.name}</h1>
            <p className="text-sm opacity-90 mb-2">{contactInfo.title}</p>
            <div className="w-12 h-0.5 bg-white opacity-60"></div>
          </div>

          {/* Contact Info */}
          <div className="space-y-1">
            <div className="flex items-center space-x-2 text-xs">
              <Phone className="w-3 h-3" />
              <span>{contactInfo.phone}</span>
            </div>
            <div className="flex items-center space-x-2 text-xs">
              <Mail className="w-3 h-3" />
              <span>{contactInfo.email}</span>
            </div>
            <div className="flex items-center space-x-2 text-xs">
              <Globe className="w-3 h-3" />
              <span>{contactInfo.website}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Back of Namecard */}
      <div className="namecard bg-white border-2 border-gray-200 text-gray-800">
        <div className="p-4 h-full flex flex-col justify-between">
          {/* Services */}
          <div>
            <h3 className="text-sm font-bold text-blue-900 mb-2">Our Services</h3>
            <ul className="text-xs space-y-1">
              <li>• WhatsApp AI Chatbots</li>
              <li>• 24/7 Customer Support</li>
              <li>• Business Automation</li>
              <li>• Custom AI Solutions</li>
            </ul>
          </div>          {/* Center Logo and QR Code */}
          <div className="flex justify-center items-center space-x-4">
            <Image
              src="/logo_final5.png"
              alt="AI Super Logo"
              width={32}
              height={32}
              className="opacity-20"
            />
            <Image
              src="/qr code.png"
              alt="QR Code - Contact AI Super"
              width={40}
              height={40}
              className="opacity-60"
            />
          </div>{/* Address and Social */}
          <div>
            <div className="text-xs mb-2">
              <p className="font-semibold text-blue-900">{contactInfo.company.name}</p>
              <p className="text-gray-600">Reg. No: {contactInfo.company.regNo}</p>
            </div>
            <div className="flex items-start space-x-2 text-xs mb-2">
              <MapPin className="w-3 h-3 mt-0.5 flex-shrink-0" />
              <div>
                <p>{contactInfo.address.line1}</p>
                <p>{contactInfo.address.line2}</p>
              </div>
            </div>
            <p className="text-xs text-blue-600 font-medium">No.1 WhatsApp AI in Singapore</p>
          </div>
        </div>
      </div>

      {/* Additional Cards for Printing Multiple Copies */}
      <div className="print-hidden text-center p-6">
        <p className="text-gray-600 mb-4">Multiple copies will print automatically when you print this page</p>
      </div>

      {/* Duplicate cards for printing (hidden on screen) */}
      <div className="hidden print:block">
        {[...Array(7)].map((_, index) => (
          <div key={index}>
            {/* Front copy */}
            <div className="namecard bg-gradient-to-br from-blue-900 via-blue-800 to-purple-900 text-white relative overflow-hidden">
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 right-0 w-32 h-32 rounded-full bg-white transform translate-x-16 -translate-y-16"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 rounded-full bg-white transform -translate-x-12 translate-y-12"></div>
              </div>

              <div className="relative p-4 h-full flex flex-col justify-between">                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Image
                      src="/logo_final5.png"
                      alt="AI Super Logo"
                      width={32}
                      height={32}
                      className="rounded"
                    />
                    <div>
                      <h2 className="text-sm font-bold">AI SUPER</h2>
                      <p className="text-xs opacity-90">Private Limited</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="text-right">
                      <p className="text-xs opacity-90">WhatsApp AI</p>
                      <p className="text-xs opacity-90">Solutions</p>
                    </div>
                    <Image
                      src="/qr code.png"
                      alt="QR Code - Contact AI Super"
                      width={36}
                      height={36}
                      className="rounded opacity-90"
                    />
                  </div>
                </div><div className="flex-1 flex flex-col justify-center">
                  <h1 className="text-lg font-bold mb-1">{contactInfo.name}</h1>
                  <p className="text-sm opacity-90 mb-2">{contactInfo.title}</p>
                  <div className="w-12 h-0.5 bg-white opacity-60"></div>
                </div>

                <div className="space-y-1">                  <div className="flex items-center space-x-2 text-xs">
                    <Phone className="w-3 h-3" />
                    <span>{contactInfo.phone}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-xs">
                    <Mail className="w-3 h-3" />
                    <span>{contactInfo.email}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-xs">
                    <Globe className="w-3 h-3" />
                    <span>{contactInfo.website}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Back copy */}
            <div className="namecard bg-white border-2 border-gray-200 text-gray-800">
              <div className="p-4 h-full flex flex-col justify-between">
                <div>
                  <h3 className="text-sm font-bold text-blue-900 mb-2">Our Services</h3>
                  <ul className="text-xs space-y-1">
                    <li>• WhatsApp AI Chatbots</li>
                    <li>• 24/7 Customer Support</li>
                    <li>• Business Automation</li>
                    <li>• Custom AI Solutions</li>
                  </ul>
                </div>

                <div className="flex justify-center">
                  <Image
                    src="/logo_final5.png"
                    alt="AI Super Logo"
                    width={40}
                    height={40}
                    className="opacity-20"
                  />
                </div>                <div>
                  <div className="text-xs mb-2">
                    <p className="font-semibold text-blue-900">{contactInfo.company.name}</p>
                    <p className="text-gray-600">Reg. No: {contactInfo.company.regNo}</p>
                  </div>
                  <div className="flex items-start space-x-2 text-xs mb-2">
                    <MapPin className="w-3 h-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <p>{contactInfo.address.line1}</p>
                      <p>{contactInfo.address.line2}</p>
                    </div>
                  </div>
                  <p className="text-xs text-blue-600 font-medium">No.1 WhatsApp AI in Singapore</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
