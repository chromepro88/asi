import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Facebook,
  Instagram,
  Mail,
  MessageCircle,
} from "lucide-react";

const DEMO_WHATSAPP_URL =
  "https://api.whatsapp.com/send/?phone=6588379368&text=Demo&type=phone_number&app_absent=0";

const footerSections = [
  {
    title: "Get Started",
    links: [
      { label: "Sign Up", href: "/signup" },
      { label: "Pricing", href: "/#pricing" },
      { label: "Intro Video", href: "/video" },
      { label: "Book Demo", href: DEMO_WHATSAPP_URL, external: true },
    ],
  },
  {
    title: "Support",
    links: [
      { label: "Support Center", href: "/support" },
      { label: "Documentation", href: "/documentation" },
      { label: "Email Us", href: "mailto:hello@asi.sg", external: true },
      { label: "WhatsApp Us", href: DEMO_WHATSAPP_URL, external: true },
    ],
  },
  {
    title: "AI Super",
    links: [
      { label: "Home", href: "/" },
      { label: "Blog", href: "/blog" },
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Service", href: "/terms-of-service" },
    ],
  },
  {
    title: "Use Cases",
    links: [
      { label: "Property Valuation", href: "/valuation" },
      { label: "Sales Pitch Assistant", href: "/pitch" },
    ],
  },
  {
    title: "Sales Tips & Tricks",
    links: [
      { label: "AI Super Blog", href: "/blog" },
      {
        label: "WhatsApp Chatbot Singapore Guide",
        href: "/blog/whatsapp-chatbot-singapore-complete-guide",
      },
      {
        label: "WhatsApp Chatbot vs Live Chat",
        href: "/blog/whatsapp-chatbot-vs-live-chat-singapore",
      },
      {
        label: "5 Ways WhatsApp Automation Boosts Sales",
        href: "/blog/5-ways-whatsapp-automation-boost-sales-singapore",
      },
    ],
  },
] as const;

const socialLinks = [
  {
    label: "Visit AI Super on Facebook",
    href: "https://www.facebook.com/people/AI-Super-SG/61573691083537/",
    icon: Facebook,
  },
  {
    label: "Visit AI Super on Instagram",
    href: "https://www.instagram.com/aisupersg/",
    icon: Instagram,
  },
  {
    label: "Email AI Super",
    href: "mailto:hello@asi.sg",
    icon: Mail,
  },
  {
    label: "Chat with AI Super on WhatsApp",
    href: DEMO_WHATSAPP_URL,
    icon: MessageCircle,
  },
] as const;

export function SiteFooter() {
  return (
    <footer
      className="bg-[#0f2f6b] text-white"
      role="contentinfo"
    >
      <div className="mx-auto max-w-7xl px-4 py-14 md:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.15fr_2fr]">
          <div className="space-y-8">
            <Link href="/" className="inline-flex items-center">
              <Image
                src="/logo_white.png"
                alt="AI Super"
                width={168}
                height={48}
                className="h-12 w-auto"
                priority
              />
            </Link>

            <div className="flex flex-wrap gap-3">
              {socialLinks.map(({ label, href, icon: Icon }) => (
                <Link
                  key={label}
                  href={href}
                  aria-label={label}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/8 text-white transition hover:bg-white hover:text-[#0f2f6b]"
                >
                  <Icon className="h-5 w-5" />
                </Link>
              ))}
            </div>

            <div className="space-y-2 text-sm leading-7 text-blue-100/85">
              <p className="text-base font-semibold text-white">
                AI Super Private Limited
              </p>
              <p>Reg. No: 202508712N</p>
              <p>540 Sims Avenue, #03-05, Sims Avenue Centre, Singapore 387603</p>
              <p>
                <a className="hover:text-white" href="tel:+6588379368">
                  +65 8837 9368
                </a>
              </p>
              <p>
                <a className="hover:text-white" href="mailto:hello@asi.sg">
                  hello@asi.sg
                </a>
              </p>
            </div>
          </div>

          <div className="grid gap-10 sm:grid-cols-2 xl:grid-cols-5">
            {footerSections.map((section) => (
              <div key={section.title}>
                <h2 className="mb-4 text-base font-semibold text-white">
                  {section.title}
                </h2>
                <nav className="space-y-3">
                  {section.links.map((link) => (
                    <Link
                      key={link.label}
                      href={link.href}
                      target={link.external ? "_blank" : undefined}
                      rel={link.external ? "noopener noreferrer" : undefined}
                      className="group flex items-start gap-2 text-sm leading-6 text-blue-100/80 transition hover:text-white"
                    >
                      <span>{link.label}</span>
                      <ArrowRight className="mt-1 h-3.5 w-3.5 shrink-0 opacity-0 transition group-hover:translate-x-0.5 group-hover:opacity-100" />
                    </Link>
                  ))}
                </nav>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6 text-sm text-blue-100/75">
          © 2026 AI Super Private Limited. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
