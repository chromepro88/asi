// app/terms-of-service/page.tsx
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | AI Super",
  description: "Review the terms and conditions for using AI Super Private Limited's services and application.",
};

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-100 flex flex-col">
      <main className="flex-grow container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-6 text-center text-gray-900">Terms of Service</h1>
        <div className="bg-white p-8 rounded-lg shadow-md max-w-3xl mx-auto">
          <p className="text-gray-600 mb-4">Last updated: April 12, 2025</p>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-3 text-blue-600">1. Acceptance of Terms</h2>
            <p className="text-gray-700">
              Welcome to AI Super Private Limited ("we," "us," or "our"). By accessing or using our application and services (the "Service"), you agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, please do not use the Service.
            </p>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-3 text-blue-600">2. Use of the Service</h2>
            <p className="text-gray-700">You agree to use the Service only for lawful purposes and in accordance with these Terms. You shall not:</p>
            <ul className="list-disc pl-6 text-gray-700">
              <li>Use the Service in any way that violates applicable laws or regulations.</li>
              <li>Attempt to gain unauthorized access to the Service or its systems.</li>
              <li>Engage in any activity that disrupts or interferes with the Service.</li>
            </ul>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-3 text-blue-600">3. Account Responsibilities</h2>
            <p className="text-gray-700">
              To use certain features of the Service, you may need to create an account. You are responsible for:
            </p>
            <ul className="list-disc pl-6 text-gray-700">
              <li>Maintaining the confidentiality of your account credentials.</li>
              <li>All activities that occur under your account.</li>
              <li>Notifying us immediately of any unauthorized use of your account.</li>
            </ul>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-3 text-blue-600">4. Intellectual Property</h2>
            <p className="text-gray-700">
              The Service and its content, including but not limited to text, graphics, and code, are owned by AI Super Private Limited or its licensors and are protected by intellectual property laws. You may not reproduce, distribute, or create derivative works from the Service without our prior written consent.
            </p>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-3 text-blue-600">5. User Content</h2>
            <p className="text-gray-700">
              You may be able to submit content to the Service ("User Content"). You retain ownership of your User Content but grant us a worldwide, non-exclusive, royalty-free license to use, store, and display it as necessary to provide the Service. You are responsible for ensuring your User Content does not violate any laws or third-party rights.
            </p>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-3 text-blue-600">6. Termination</h2>
            <p className="text-gray-700">
              We may suspend or terminate your access to the Service at our discretion, with or without notice, if you violate these Terms or for any other reason. Upon termination, your right to use the Service will cease immediately.
            </p>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-3 text-blue-600">7. Limitation of Liability</h2>
            <p className="text-gray-700">
              To the fullest extent permitted by law, AI Super Private Limited shall not be liable for any indirect, incidental, or consequential damages arising from your use of the Service. The Service is provided "as is" without warranties of any kind.
            </p>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-3 text-blue-600">8. Governing Law</h2>
            <p className="text-gray-700">
              These Terms are governed by the laws of Singapore. Any disputes arising from these Terms shall be resolved in the courts of Singapore.
            </p>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-3 text-blue-600">9. Changes to These Terms</h2>
            <p className="text-gray-700">
              We may update these Terms from time to time. Changes will be posted on this page with an updated "Last updated" date. Your continued use of the Service after changes constitutes acceptance of the updated Terms.
            </p>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-3 text-blue-600">10. Contact Us</h2>
            <p className="text-gray-700">
              If you have questions about these Terms, please contact us at:
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