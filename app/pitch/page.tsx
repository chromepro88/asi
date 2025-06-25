'use client'

import { useEffect, useState } from 'react'

export default function PitchPage() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    console.log('PitchPage component loaded');
    console.log('Is mobile:', window.innerWidth <= 768);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    if (isMobile) {
      window.location.href = '/chatbot.pdf';
    }
  }, [isMobile]);

  if (isMobile) {
    return (
      <div className="w-full h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
        <div className="text-center">
          <h2 className="text-xl font-bold mb-2">Downloading PDF...</h2>
          <p className="text-gray-600">If download doesn't start automatically:</p>
          <a
            href="/chatbot.pdf"
            download
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg text-lg font-medium mt-4 inline-block"
          >
            Click to Download
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="w-screen h-screen">
      <object
        data="/chatbot.pdf"
        type="application/pdf"
        className="w-full h-full"
        style={{ width: '100vw', height: '100vh' }}
      >
        <iframe
          src="/chatbot.pdf"
          className="w-full h-full border-0"
          title="Chatbot Pitch"
        />
      </object>
    </div>
  );
}