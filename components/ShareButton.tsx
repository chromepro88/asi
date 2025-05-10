"use client";

import { Button } from "@/components/ui/button";

const ShareButton: React.FC = () => {
  const handleShare = async () => {
    const shareData: ShareData = {
      title: "AI Super Private Limited | No.1 WhatsApp Chatbot in Singapore",
      text: "Boost your business with AI Super's WhatsApp Chatbot—24/7 support, automated responses, starting at $19/month.",
      url: "https://asi.sg",
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
      } catch (err) {
        console.error("Error sharing:", err);
      }
    } else {
      alert("Sharing is not supported on this browser. Please copy the URL: https://asi.sg");
    }
  };

  return (
    <Button className="btn-primary bg-blue-600 hover:bg-blue-700 text-white" onClick={handleShare}>
      Share Now
    </Button>
  );
};

export default ShareButton;