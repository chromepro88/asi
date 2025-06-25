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
    return null;
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