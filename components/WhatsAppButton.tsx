import Image from "next/image"

export function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/6588379368"
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

