"use client";

import Image from "next/image";
import { track } from "@vercel/analytics";

export function WhatsAppButton() {
  const whatsappHref =
    "https://api.whatsapp.com/send/?phone=6588379368&text=Hi%2C+I+want+to+find+out+more+about+Whatsapp+Chatbot+%40+%2499%2FMonth.+&type=phone_number&app_absent=0";

  return (
    <a
      href={whatsappHref}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 transition-all hover:scale-110 [transform-origin:center] animate-float-prominent"
      aria-label="Chat with us on WhatsApp"
      onClick={() => {
        track("whatsapp_click", {
          location: "floating_button",
          href: whatsappHref,
        });
      }}
    >
      <Image
        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/whatsapp-ImTCFZlBC1kAzHEHSJi1RgocmZJYRn.png"
        alt="WhatsApp"
        width={64}
        height={64}
        className="drop-shadow-lg"
      />
    </a>
  );
}
