import Link from "next/link";
import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { getAllPosts, getPostBySlug, getAllSlugs } from "@/lib/blog";
import DynamicLogo from "@/components/DynamicLogo";
import { Instagram, Facebook, ArrowLeft, Clock, Calendar, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return { title: "Post Not Found" };
  }

  return {
    title: post.title,
    description: post.description,
    keywords: post.tags,
    alternates: {
      canonical: `https://asi.sg/blog/${post.slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.description,
      url: `https://asi.sg/blog/${post.slug}`,
      siteName: "AI Super Private Limited",
      locale: "en_SG",
      type: "article",
      publishedTime: post.date,
      modifiedTime: post.updatedDate || post.date,
      authors: [post.author],
      tags: post.tags,
      images: post.image ? [
        {
          url: post.image,
          width: 1200,
          height: 630,
          alt: post.imageAlt || post.title,
        },
      ] : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      images: post.image ? [post.image] : undefined,
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const allPosts = getAllPosts();
  const relatedPosts = allPosts
    .filter((p) => p.slug !== post.slug)
    .slice(0, 2);

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    image: post.image || "https://asi.sg/logo_black.png",
    datePublished: post.date,
    dateModified: post.updatedDate || post.date,
    author: {
      "@type": "Organization",
      name: "AI Super Private Limited",
      url: "https://asi.sg",
    },
    publisher: {
      "@type": "Organization",
      name: "AI Super Private Limited",
      logo: {
        "@type": "ImageObject",
        url: "https://asi.sg/logo_black.png",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://asi.sg/blog/${post.slug}`,
    },
    url: `https://asi.sg/blog/${post.slug}`,
    keywords: post.tags.join(", "),
    wordCount: post.content.replace(/<[^>]*>/g, '').split(/\s+/).length,
    articleSection: post.category,
    inLanguage: "en-SG",
  };

  // FAQ structured data for posts with FAQ sections
  const faqData = post.slug === "whatsapp-chatbot-singapore-complete-guide" ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How much does a WhatsApp chatbot cost in Singapore?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Prices range from free (very limited) to $2,000+/month (enterprise). AI Super offers the best value at $49–$69/month with unlimited messages, AI, voice support, and a built-in CRM. You can get started right away.",
        },
      },
      {
        "@type": "Question",
        name: "Is a WhatsApp chatbot legal in Singapore?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, absolutely. WhatsApp chatbots are legal in Singapore as long as they comply with the PDPA (Personal Data Protection Act). AI Super is fully PDPA-compliant — we encrypt data and don't store personal conversations.",
        },
      },
      {
        "@type": "Question",
        name: "How long does it take to set up a WhatsApp chatbot?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "With AI Super, setup takes 5 minutes. Scan a QR code, upload your business info, and go live. No coding, no technical skills required. Free setup assistance is included.",
        },
      },
      {
        "@type": "Question",
        name: "What languages does a WhatsApp chatbot support in Singapore?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "AI Super supports 50+ languages including English, Mandarin (simplified & traditional), Malay, Tamil, Hindi, Indonesian, Japanese, Korean, and more. The AI auto-detects the language — no manual switching needed.",
        },
      },
      {
        "@type": "Question",
        name: "Can a WhatsApp chatbot handle voice messages?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes! AI Super automatically transcribes voice messages and responds with text. This is a feature most competitors don't offer, and it's essential for Singapore's diverse user base.",
        },
      },
      {
        "@type": "Question",
        name: "What is the best WhatsApp chatbot provider in Singapore?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "AI Super is the top-rated WhatsApp chatbot provider in Singapore, offering advanced AI (not rule-based), voice message support, 50+ languages with auto-detection, Google Calendar integration, built-in CRM, and transparent pricing starting at $49/month.",
        },
      },
      {
        "@type": "Question",
        name: "How is AI Super different from Omnichat or other chatbot platforms?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "AI Super uses advanced AI natural language processing, while platforms like Omnichat rely on rule-based keyword triggers and flowcharts. AI Super also offers voice message transcription, automatic language detection for 50+ languages, 5-minute setup, and transparent pricing ($49-69/month).",
        },
      },
    ],
  } : post.slug === "ai-chatbot-singapore-guide" ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is the best AI chatbot in Singapore?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "For SMEs and growing businesses, AI Super is the best AI chatbot in Singapore. It offers true AI-powered conversations, voice recognition, 50+ languages, Google Calendar integration, and built-in CRM — all from $49/month.",
        },
      },
      {
        "@type": "Question",
        name: "How much does an AI chatbot cost in Singapore?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "AI chatbot pricing in Singapore ranges from $0 (basic DIY) to $10,000+/month (enterprise). For most businesses, AI Super at $49–$69/month provides the best balance of AI capabilities and affordability.",
        },
      },
      {
        "@type": "Question",
        name: "What's the difference between a chatbot agency and a chatbot platform?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "A chatbot agency provides end-to-end service — consultation, setup, customization, and ongoing support. A platform gives you tools to build your own. AI Super is both: a full-service AI chatbot agency with a self-service platform.",
        },
      },
      {
        "@type": "Question",
        name: "Can an AI chatbot replace customer service staff in Singapore?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "An AI chatbot can handle 80-90% of routine inquiries — FAQs, appointment booking, lead qualification, and after-hours support. For complex issues, the AI seamlessly hands off to human agents.",
        },
      },
      {
        "@type": "Question",
        name: "Is an AI chatbot PDPA compliant in Singapore?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "AI Super is fully compliant with Singapore's Personal Data Protection Act (PDPA). We don't store personal conversations, all data is encrypted, and processing happens in real-time only.",
        },
      },
    ],
  } : null;

  const breadcrumbData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://asi.sg",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Blog",
        item: "https://asi.sg/blog",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: post.title,
        item: `https://asi.sg/blog/${post.slug}`,
      },
    ],
  };

  return (
    <div className="flex flex-col min-h-screen bg-white text-gray-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }}
      />
      {faqData && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqData) }}
        />
      )}

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

      {/* Breadcrumb */}
      <nav className="w-full bg-gray-50 border-b border-gray-100" aria-label="Breadcrumb">
        <div className="container px-4 md:px-6 max-w-4xl mx-auto py-3">
          <ol className="flex items-center gap-2 text-sm text-gray-500">
            <li>
              <Link href="/" className="hover:text-blue-600 transition-colors">
                Home
              </Link>
            </li>
            <li className="text-gray-300">/</li>
            <li>
              <Link href="/blog" className="hover:text-blue-600 transition-colors">
                Blog
              </Link>
            </li>
            <li className="text-gray-300">/</li>
            <li className="text-gray-900 font-medium truncate max-w-[200px] sm:max-w-none">
              {post.title}
            </li>
          </ol>
        </div>
      </nav>

      {/* Article */}
      <main className="w-full py-12 md:py-16">
        <article className="container px-4 md:px-6 max-w-4xl mx-auto">
          {/* Article Header */}
          <header className="mb-10">
            <div className="flex items-center gap-3 mb-4">
              <span className="inline-block bg-blue-100 text-blue-700 text-xs font-semibold px-3 py-1 rounded-full">
                {post.category}
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900 leading-tight mb-6">
              {post.title}
            </h1>

            <p className="text-xl text-gray-600 leading-relaxed mb-6">
              {post.description}
            </p>

            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 pb-6 border-b border-gray-200">
              <span className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4" />
                {new Date(post.date).toLocaleDateString("en-SG", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-4 h-4" />
                {post.readingTime}
              </span>
              <span className="text-gray-400">•</span>
              <span>By {post.author}</span>
            </div>
          </header>

          {/* Featured Image */}
          {post.image && (
            <div className="relative w-full h-[400px] md:h-[500px] mb-10 rounded-2xl overflow-hidden">
              <Image
                src={post.image}
                alt={post.imageAlt || post.title}
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 100vw, 896px"
              />
            </div>
          )}

          {/* Article Body */}
          <div
            className="blog-content prose prose-lg prose-gray max-w-none 
              prose-headings:font-bold prose-headings:text-gray-900 prose-headings:tracking-tight
              prose-h2:text-2xl prose-h2:md:text-3xl prose-h2:mt-12 prose-h2:mb-4
              prose-h3:text-xl prose-h3:md:text-2xl prose-h3:mt-8 prose-h3:mb-3
              prose-p:text-gray-700 prose-p:leading-relaxed prose-p:text-lg
              prose-li:text-gray-700 prose-li:text-lg
              prose-a:text-blue-600 prose-a:font-semibold prose-a:no-underline hover:prose-a:underline
              prose-strong:text-gray-900 prose-strong:font-bold
              prose-table:border-collapse prose-table:w-full
              prose-th:bg-gray-100 prose-th:text-left prose-th:p-3 prose-th:font-semibold prose-th:text-gray-900 prose-th:border prose-th:border-gray-200
              prose-td:p-3 prose-td:border prose-td:border-gray-200 prose-td:text-gray-700
              [&_.lead]:text-xl [&_.lead]:md:text-2xl [&_.lead]:text-gray-600 [&_.lead]:leading-relaxed [&_.lead]:mb-8
              [&_.cta-link]:inline-block [&_.cta-link]:bg-blue-600 [&_.cta-link]:text-white [&_.cta-link]:px-8 [&_.cta-link]:py-3 [&_.cta-link]:rounded-xl [&_.cta-link]:font-semibold [&_.cta-link]:text-lg [&_.cta-link]:no-underline [&_.cta-link]:hover:bg-blue-700 [&_.cta-link]:transition-colors [&_.cta-link]:shadow-lg [&_.cta-link]:mt-2"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* Tags */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">
              Tags
            </h3>
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="bg-gray-100 text-gray-600 text-sm px-3 py-1 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </article>
      </main>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="w-full py-12 md:py-16 bg-gray-50 border-t border-gray-100">
          <div className="container px-4 md:px-6 max-w-6xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">
              More Articles
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {relatedPosts.map((relPost) => (
                <Link
                  key={relPost.slug}
                  href={`/blog/${relPost.slug}`}
                  className="group bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-lg hover:border-blue-200 transition-all duration-300 p-6"
                >
                  <span className="inline-block bg-blue-100 text-blue-700 text-xs font-semibold px-3 py-1 rounded-full mb-3">
                    {relPost.category}
                  </span>
                  <h3 className="text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors mb-2 leading-tight">
                    {relPost.title}
                  </h3>
                  <p className="text-gray-600 text-sm line-clamp-2">
                    {relPost.description}
                  </p>
                  <span className="inline-flex items-center gap-1 text-blue-600 font-semibold text-sm mt-3">
                    Read article <ArrowLeft className="w-3 h-3 rotate-180" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="w-full py-16 md:py-20 bg-blue-600">
        <div className="container px-4 md:px-6 max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Try AI Super?
          </h2>
          <p className="text-blue-100 text-lg md:text-xl mb-8 max-w-2xl mx-auto">
            Join 500+ Singapore businesses automating their WhatsApp with AI
            Super.
          </p>
          <Button
            asChild
            className="bg-white text-blue-600 hover:bg-gray-100 py-4 px-10 text-xl font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105"
          >
            <Link href="/signup">Get Started</Link>
          </Button>
          <p className="text-blue-200 text-sm mt-4">
            Get started today
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
