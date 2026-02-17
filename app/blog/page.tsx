import Link from "next/link";
import type { Metadata } from "next";
import Image from "next/image";
import { getAllPosts } from "@/lib/blog";
import DynamicLogo from "@/components/DynamicLogo";
import { Instagram, Facebook, ArrowRight, Clock, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Blog - WhatsApp Chatbot Tips & Guides for Singapore Businesses",
  description:
    "Expert tips, guides, and insights on WhatsApp chatbot automation for Singapore businesses. Learn how to boost sales, automate customer service, and grow your business.",
  alternates: {
    canonical: "https://asi.sg/blog",
  },
  openGraph: {
    title: "Blog - WhatsApp Chatbot Tips & Guides | AI Super",
    description:
      "Expert tips and guides on WhatsApp chatbot automation for Singapore businesses.",
    url: "https://asi.sg/blog",
    siteName: "AI Super Private Limited",
    locale: "en_SG",
    type: "website",
  },
};

export default function BlogPage() {
  const posts = getAllPosts();

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "AI Super Blog",
    description:
      "Tips, guides, and insights on WhatsApp chatbot automation for Singapore businesses.",
    url: "https://asi.sg/blog",
    publisher: {
      "@type": "Organization",
      name: "AI Super Private Limited",
      logo: {
        "@type": "ImageObject",
        url: "https://asi.sg/logo_black.png",
      },
    },
    blogPost: posts.map((post) => ({
      "@type": "BlogPosting",
      headline: post.title,
      description: post.description,
      datePublished: post.date,
      dateModified: post.updatedDate || post.date,
      author: {
        "@type": "Organization",
        name: "AI Super Private Limited",
      },
      url: `https://asi.sg/blog/${post.slug}`,
    })),
  };

  return (
    <div className="flex flex-col min-h-screen bg-white text-gray-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      {/* Header */}
      <header className="px-4 lg:px-6 h-14 flex items-center justify-center bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
        <div className="container flex items-center justify-between max-w-6xl mx-auto">
          <Link href="/" className="flex items-center">
            <DynamicLogo width={48} height={48} className="h-12 w-12" />
          </Link>
          <div className="flex items-center gap-4">
            <nav className="flex gap-3 sm:gap-5 relative z-50">
              <Link
                href="/"
                className="text-sm font-medium hover:underline underline-offset-4 text-gray-600 hover:text-blue-600 transition-colors"
              >
                Home
              </Link>
              <Link
                href="/blog"
                className="text-sm font-medium underline underline-offset-4 text-blue-600"
              >
                Blog
              </Link>
              <Link
                href="/#pricing"
                className="text-sm font-medium hover:underline underline-offset-4 text-gray-600 hover:text-blue-600 transition-colors"
              >
                Pricing
              </Link>
            </nav>
            <Button
              asChild
              size="sm"
              className="bg-blue-600 hover:bg-blue-700 text-white relative z-50 transition-transform hover:scale-105"
            >
              <Link href="/signup">Get Started</Link>
            </Button>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="w-full py-16 md:py-24 bg-gradient-to-b from-blue-50 to-white">
        <div className="container px-4 md:px-6 max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl text-gray-900 mb-6">
            WhatsApp Chatbot Blog
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto">
            Expert tips, guides, and insights to help Singapore businesses grow
            with WhatsApp automation.
          </p>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <main className="w-full py-12 md:py-16">
        <div className="container px-4 md:px-6 max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <article
                key={post.slug}
                className="group bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-xl hover:border-blue-200 transition-all duration-300 hover:-translate-y-1 overflow-hidden flex flex-col"
              >
                {/* Featured Image */}
                {post.image && (
                  <Link href={`/blog/${post.slug}`} className="block relative w-full h-48 overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.imageAlt || post.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </Link>
                )}

                {/* Category Badge */}
                <div className="px-6 pt-6">
                  <span className="inline-block bg-blue-100 text-blue-700 text-xs font-semibold px-3 py-1 rounded-full">
                    {post.category}
                  </span>
                </div>

                {/* Content */}
                <div className="px-6 py-4 flex-1 flex flex-col">
                  <Link href={`/blog/${post.slug}`} className="block group">
                    <h2 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors leading-tight">
                      {post.title}
                    </h2>
                  </Link>
                  <p className="text-gray-600 text-base leading-relaxed mb-4 flex-1">
                    {post.description}
                  </p>

                  {/* Meta */}
                  <div className="flex items-center gap-4 text-sm text-gray-400 mb-4">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {new Date(post.date).toLocaleDateString("en-SG", {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                      })}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {post.readingTime}
                    </span>
                  </div>

                  {/* Read More */}
                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-700 transition-colors group/link"
                  >
                    Read article
                    <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </main>

      {/* CTA Section */}
      <section className="w-full py-16 md:py-20 bg-blue-600">
        <div className="container px-4 md:px-6 max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Automate Your WhatsApp?
          </h2>
          <p className="text-blue-100 text-lg md:text-xl mb-8 max-w-2xl mx-auto">
            Join 500+ Singapore businesses already using AI Super to boost sales
            and automate customer service.
          </p>
          <Button
            asChild
            className="bg-white text-blue-600 hover:bg-gray-100 py-4 px-10 text-xl font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105"
          >
            <Link href="/signup">Get Started</Link>
          </Button>
          <p className="text-blue-200 text-sm mt-4">
            Get started today • No credit card required
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer
        className="flex flex-col gap-2 sm:flex-row py-4 w-full shrink-0 items-center justify-center px-4 md:px-6 border-t border-gray-700"
        role="contentinfo"
      >
        <div className="container flex flex-col items-center justify-between max-w-6xl mx-auto">
          <div className="flex flex-col sm:flex-row items-center justify-between w-full mb-2">
            <p className="text-xs text-gray-400">
              © 2026 AI Super Private Limited. All rights reserved.
            </p>
            <nav className="flex gap-3 sm:gap-5 mt-2 sm:mt-0">
              <Link
                href="/terms-of-service"
                className="text-xs hover:underline underline-offset-4 text-gray-400"
              >
                Terms
              </Link>
              <Link
                href="/privacy"
                className="text-xs hover:underline underline-offset-4 text-gray-400"
              >
                Privacy
              </Link>
              <Link
                href="https://www.instagram.com/aisupersg/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs hover:underline underline-offset-4 text-gray-400"
              >
                <Instagram className="inline-block mr-1 h-4 w-4" /> Instagram
              </Link>
              <Link
                href="https://www.facebook.com/people/AI-Super-SG/61573691083537/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs hover:underline underline-offset-4 text-gray-400"
              >
                <Facebook className="inline-block mr-1 h-4 w-4" /> Facebook
              </Link>
            </nav>
          </div>
          <div className="text-center text-xs text-gray-400 space-y-0.5">
            <p>AI SUPER PRIVATE LIMITED</p>
            <p>Reg. No: 202508712N</p>
            <p>
              540 Sims Avenue, #03-05, Sims Avenue Centre, Singapore 387603
            </p>
            <p>Phone: +65 8837 9368</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
