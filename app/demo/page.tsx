'use client';

import { useEffect } from 'react';

export default function DemoPage() {
  useEffect(() => {
    // Redirect to WhatsApp immediately when the page loads
    window.location.href = "https://wa.me/6588379368?text=Demo";
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 flex items-center justify-center">
      <div className="text-center text-white">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-white mx-auto mb-4"></div>
        <p className="text-lg">Redirecting to WhatsApp...</p>
      </div>
    </div>
  );
}
