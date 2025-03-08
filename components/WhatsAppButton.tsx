import Image from "next/image"

export function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/6588379368?text=Hi%2C%20I%20want%20to%20find%20out%20more%20about%20AI%20Landline%20%40%20%2499%2FMonth.%20Can%20you%20please%20share%20more%20details%20about%20the%20features%20and%20how%20it%20works%3F"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 transition-all hover:scale-110 [transform-origin:center] animate-float-prominent"
      aria-label="Chat with us on WhatsApp"
    >
      <Image
        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/whatsapp-ImTCFZlBC1kAzHEHSJi1RgocmZJYRn.png"
        alt="WhatsApp"
        width={64}
        height={64}
        className="drop-shadow-lg"
      />
    </a>
  )
}

