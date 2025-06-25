'use client'

import { useEffect } from 'react'

export default function PitchPage() {
  useEffect(() => {
    console.log('PitchPage component loaded');
    console.log('PDF URL:', '/chatbot.pdf');
  }, []);

  return (
    <div className="w-screen h-screen">
      <iframe
        src="/chatbot.pdf"
        className="w-full h-full border-0"
        title="Chatbot Pitch"
        style={{ 
          width: '100vw', 
          height: '100vh'
        }}
        onLoad={() => console.log('PDF iframe loaded successfully')}
        onError={(e) => console.error('PDF iframe error:', e)}
      />
    </div>
  );
}