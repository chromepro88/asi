'use client';

import { useEffect } from 'react';

export default function SignupRedirect() {
  useEffect(() => {
    // Redirect to the external signup URL
    window.location.href = 'https://aisupersg.com/signup';
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
        <p className="text-gray-600">Redirecting to signup...</p>
      </div>
    </div>
  );
}
