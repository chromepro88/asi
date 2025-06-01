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
            size: 93mm 58mm;
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
            width: 93mm;
            height: 58mm;
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
            width: 372px;
            height: 232px;
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
              <li>4. Set dimensions to 93mm × 58mm (custom business card size)</li>
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

        <div className="relative p-4 h-full flex">
          {/* Left side - Info */}
          <div className="flex-1 flex flex-col justify-between pr-4">
            {/* Header with Logo */}
            <div className="flex items-center space-x-2">
              <Image
                src="/logo_final5.png"
                alt="AI Super Logo"
                width={28}
                height={28}
                className="rounded"
              />
              <div>
                <h2 className="text-sm font-bold">AI SUPER</h2>
                <p className="text-xs opacity-90">Private Limited</p>
              </div>
            </div>

            {/* Name and Title */}
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

          {/* Right side - Large QR Code */}
          <div className="flex flex-col justify-center items-center">
            <Image
              src="/qr code.png"
              alt="QR Code - Contact AI Super"
              width={140}
              height={140}
              className="rounded-lg opacity-95 bg-white p-2"
            />
            <p className="text-xs text-center mt-2 opacity-90">Scan to Chat</p>
          </div>
        </div>
      </div>

      {/* Back of Namecard */}
      <div className="namecard bg-white border-2 border-gray-200 text-gray-800">
        <div className="p-2.5 h-full flex">
          {/* Left side - Services and Info */}
          <div className="flex-1 flex flex-col justify-between pr-2">
            {/* Services */}
            <div className="mb-2">
              <h3 className="text-sm font-bold text-blue-900 mb-1.5">WhatsApp AI Chatbot</h3>
              <ul className="text-xs space-y-1 leading-tight">
                <li>• 24/7 Automated Responses</li>
                <li>• Voice Message Recognition</li>
                <li>• Multilingual Support</li>
                <li>• Lead Capture & CRM</li>
              </ul>
            </div>

            {/* Company Info and Address */}
            <div className="space-y-1.5">
              <div className="text-xs">
                <p className="font-semibold text-blue-900 mb-0.5">{contactInfo.company.name}</p>
                <p className="text-gray-600 mb-1">Reg. No: {contactInfo.company.regNo}</p>
              </div>
              <div className="flex items-start space-x-1.5 text-xs">
                <MapPin className="w-3 h-3 mt-0.5 flex-shrink-0 text-gray-500" />
                <div className="leading-tight">
                  <p>{contactInfo.address.line1}</p>
                  <p>{contactInfo.address.line2}</p>
                </div>
              </div>
              <p className="text-xs text-blue-600 font-medium mt-1">Singapore's #1 WhatsApp AI Solution</p>
            </div>
          </div>

          {/* Right side - Large QR Code and Logo */}
          <div className="flex flex-col justify-center items-center">
            <Image
              src="/qr code.png"
              alt="QR Code - Contact AI Super"
              width={125}
              height={125}
              className="mx-auto mb-1.5 rounded-lg border border-gray-300 bg-white p-1"
            />
            <div className="text-center">
              <Image
                src="/logo_final5.png"
                alt="AI Super Logo"
                width={20}
                height={20}
                className="mx-auto mb-0.5 opacity-60"
              />
              <p className="text-xs text-gray-600 font-medium">Scan to Chat</p>
            </div>
          </div>
        </div>
      </div>

      {/* Additional Cards for Printing Multiple Copies */}
      <div className="print-hidden text-center p-6">
        <p className="text-gray-600 mb-4">Multiple copies will print automatically when you print this page</p>
      </div>

      {/* Duplicate cards for printing (hidden on screen) */}
      <div className="hidden print:block">
        {[...Array(3)].map((_, index) => (
          <div key={index}>
            {/* Front copy */}
            <div className="namecard bg-gradient-to-br from-blue-900 via-blue-800 to-purple-900 text-white relative overflow-hidden">
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 right-0 w-32 h-32 rounded-full bg-white transform translate-x-16 -translate-y-16"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 rounded-full bg-white transform -translate-x-12 translate-y-12"></div>
              </div>

              <div className="relative p-4 h-full flex">
                {/* Left side - Info */}
                <div className="flex-1 flex flex-col justify-between pr-4">
                  {/* Header with Logo */}
                  <div className="flex items-center space-x-2">
                    <Image
                      src="/logo_final5.png"
                      alt="AI Super Logo"
                      width={28}
                      height={28}
                      className="rounded"
                    />
                    <div>
                      <h2 className="text-sm font-bold">AI SUPER</h2>
                      <p className="text-xs opacity-90">Private Limited</p>
                    </div>
                  </div>

                  {/* Name and Title */}
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

                {/* Right side - Large QR Code */}
                <div className="flex flex-col justify-center items-center">
                  <Image
                    src="/qr code.png"
                    alt="QR Code - Contact AI Super"
                    width={140}
                    height={140}
                    className="rounded-lg opacity-95 bg-white p-2"
                  />
                  <p className="text-xs text-center mt-2 opacity-90">Scan to Chat</p>
                </div>
              </div>
            </div>

            {/* Back copy */}
            <div className="namecard bg-white border-2 border-gray-200 text-gray-800">
              <div className="p-4 h-full flex">
                {/* Left side - Services and Info */}
                <div className="flex-1 flex flex-col justify-between pr-4">
                  {/* Services */}
                  <div>
                    <h3 className="text-sm font-bold text-blue-900 mb-2">WhatsApp AI Chatbot</h3>
                    <ul className="text-xs space-y-1">
                      <li>• 24/7 Automated Responses</li>
                      <li>• Voice Message Recognition</li>
                      <li>• Multilingual Support</li>
                      <li>• Lead Capture & CRM</li>
                      <li>• Calendar Integration</li>
                    </ul>
                  </div>

                  {/* Company Info and Address */}
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
                    <p className="text-xs text-blue-600 font-medium">Singapore's #1 WhatsApp AI Solution</p>
                  </div>
                </div>

                {/* Right side - Large QR Code and Logo */}
                <div className="flex flex-col justify-center items-center">
                  <Image
                    src="/qr code.png"
                    alt="QR Code - Contact AI Super"
                    width={120}
                    height={120}
                    className="mx-auto mb-2 rounded-lg border border-gray-300"
                  />
                  <div className="text-center">
                    <Image
                      src="/logo_final5.png"
                      alt="AI Super Logo"
                      width={24}
                      height={24}
                      className="mx-auto mb-1 opacity-60"
                    />
                    <p className="text-xs text-gray-600 font-medium">Scan to Chat</p>
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
