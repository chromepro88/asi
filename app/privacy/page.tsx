// app/privacy/page.tsx
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | AI Super Private Limited",
  description: "Learn how AI Super Private Limited collects, uses, and protects your personal information when you use our WhatsApp AI chatbot services.",
  openGraph: {
    title: "Privacy Policy | AI Super Private Limited",
    description: "Learn how AI Super Private Limited collects, uses, and protects your personal information when you use our WhatsApp AI chatbot services.",
    url: "https://asi.sg/privacy",
    siteName: "AI Super Private Limited",
    type: "website",
    images: [
      {
        url: "https://asi.sg/logo_black.png",
        width: 800,
        height: 600,
        alt: "AI Super Private Limited - Privacy Policy",
      },
    ],
  },
  alternates: {
    canonical: "https://asi.sg/privacy",
  },
  other: {
    "fb:app_id": "1846789336144846",
  },
};

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-100 flex flex-col">
      <main className="flex-grow container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-6 text-center text-gray-900">Privacy Policy</h1>
        <div className="bg-white p-8 rounded-lg shadow-md max-w-3xl mx-auto">
          <p className="text-gray-600 mb-4">Last updated: August 6, 2025</p>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-3 text-blue-600">1. Introduction</h2>
            <p className="text-gray-700">
              Welcome to AI Super Private Limited ("we," "us," or "our"). We are committed to protecting your privacy and ensuring that your personal information is handled in a safe and responsible manner. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our application and services, including when you interact with us through social media platforms like Facebook.
            </p>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-3 text-blue-600">2. Information We Collect</h2>
            <p className="text-gray-700">We may collect the following types of information:</p>
            <ul className="list-disc pl-6 text-gray-700">
              <li>
                <strong>Personal Information:</strong> Name, email address, and other information you provide when registering or contacting us.
              </li>
              <li>
                <strong>Usage Data:</strong> Information about how you interact with our app, such as IP address, browser type, pages visited, and timestamps.
              </li>
              <li>
                <strong>Social Media Data:</strong> When you connect through social media platforms like Facebook, we may receive information you've made publicly available or that you authorize us to access.
              </li>
              <li>
                <strong>Cookies:</strong> We use cookies to enhance your experience. You can manage cookie preferences through your browser settings.
              </li>
            </ul>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-3 text-blue-600">3. How We Use Your Information</h2>
            <p className="text-gray-700">We use your information to:</p>
            <ul className="list-disc pl-6 text-gray-700">
              <li>Provide, operate, and improve our services.</li>
              <li>Communicate with you, including sending updates or responding to inquiries.</li>
              <li>Analyze usage trends to enhance user experience.</li>
              <li>Comply with legal obligations.</li>
              <li>We explicitly affirm that Google Workspace APIs are not used to develop, improve, or train generalized AI and/or ML models.</li>
            </ul>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-3 text-blue-600">4. Sharing Your Information</h2>
            <p className="text-gray-700">
              We do not sell your personal information. We may share your information with:
            </p>
            <ul className="list-disc pl-6 text-gray-700">
              <li>Service providers who assist in operating our app (e.g., hosting or analytics providers).</li>
              <li>Legal authorities when required by law or to protect our rights.</li>
            </ul>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-3 text-blue-600">5. Data Security</h2>
            <p className="text-gray-700">
              We implement reasonable security measures to protect your information. However, no method of transmission over the internet is completely secure, and we cannot guarantee absolute security.
            </p>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-3 text-blue-600">6. Your Rights</h2>
            <p className="text-gray-700">
              Depending on your location, you may have rights to:
            </p>
            <ul className="list-disc pl-6 text-gray-700">
              <li>Access, correct, or delete your personal information.</li>
              <li>Opt out of certain data collection or sharing.</li>
              <li>Request a copy of your data.</li>
            </ul>
            <p className="text-gray-700">
              To exercise these rights, contact us at{" "}
              <a href="mailto:hello@asi.sg" className="text-blue-600 hover:underline">
                hello@asi.sg
              </a>.
            </p>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-3 text-blue-600">7. Third-Party Links</h2>
            <p className="text-gray-700">
              Our app may contain links to third-party websites. We are not responsible for their privacy practices and encourage you to review their policies.
            </p>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-3 text-blue-600">8. Changes to This Policy</h2>
            <p className="text-gray-700">
              We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated "Last updated" date. Please review periodically.
            </p>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-3 text-blue-600">9. Contact Us</h2>
            <p className="text-gray-700">
              If you have questions about this Privacy Policy, please contact us at:
            </p>
            <p className="text-gray-700">
              Email:{" "}
              <a href="mailto:hello@asi.sg" className="text-blue-600 hover:underline">
                hello@asi.sg
              </a>
            </p>
            <p className="text-gray-700">Phone: +65 8837 9368</p>
            <p className="text-gray-700">
              Address: AI Super Private Limited, 540 Sims Avenue, #03-05, Sims Avenue Centre, Singapore 387603
            </p>
          </section>

          <p className="text-gray-600 mt-6">
            Return to{" "}
            <Link href="/" className="text-blue-600 hover:underline">
              Home
            </Link>
          </p>
        </div>
      </main>
    </div>
  );
}