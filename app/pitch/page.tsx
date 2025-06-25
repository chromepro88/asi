'use client'

import { useState } from 'react'

export default function PitchPage() {
  const [pdfError, setPdfError] = useState(false)

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-center mb-8">AI SUPER Whatsapp Chatbot Pitch</h1>
        {!pdfError ? (
          <div className="w-full h-[80vh] border rounded-lg overflow-hidden">
            <iframe
              src="/AI%20SUPER%20Whatsapp%20Chatbot.pdf"
              className="w-full h-full border-0"
              title="AI SUPER Whatsapp Chatbot Pitch"
              onError={() => setPdfError(true)}
            />
          </div>
        ) : (
          <div className="w-full h-[80vh] flex flex-col items-center justify-center border rounded-lg bg-gray-50">
            <p className="text-gray-600 mb-4">PDF viewer not available</p>
            <a
              href="/AI%20SUPER%20Whatsapp%20Chatbot.pdf"
              download
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition-colors"
            >
              Download PDF
            </a>
          </div>
        )}
      </div>
    </div>
  );
}