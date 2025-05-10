"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo } from "react";
import createDOMPurify from "dompurify";
import { decode } from "he";

const isBrowser = typeof window !== "undefined";
const DOMPurify = isBrowser ? createDOMPurify(window) : null;

interface ArticleProps {
  article: {
    title: string;
    content: string;
    image: string;
    date: string;
    category: string;
    description: string;
  };
}

export default function BlogContent({ article }: { article: ArticleProps["article"] }) {
  const imageSrc = useMemo(() => {
    if (!article.image) return "/default-blog-image.jpg";
    const cleanPath = DOMPurify?.sanitize(article.image) ?? article.image;
    return cleanPath.startsWith("/") || cleanPath.startsWith("http") ? cleanPath : `/${cleanPath}`;
  }, [article.image]);

  const sanitizedContent = useMemo(() => {
    const unescaped = decode(article.content);
    const dirty = unescaped.replace(/\n/g, "<br>");
    return DOMPurify
      ? DOMPurify.sanitize(dirty, {
          ALLOWED_TAGS: ["br", "p", "strong", "em", "ul", "ol", "li", "a", "img", "h1", "h2", "h3"],
          ALLOWED_ATTR: ["href", "target", "rel", "src", "alt", "title"],
        })
      : dirty;
  }, [article.content]);

  const cleanTitle = useMemo(() => {
    return DOMPurify?.sanitize(article.title) ?? article.title;
  }, [article.title]);

  return (
    <main className="max-w-3xl mx-auto">
      <article itemScope itemType="http://schema.org/Article">
        <header>
          <h1 itemProp="headline" className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            {cleanTitle}
          </h1>

          <div className="flex flex-col sm:flex-row gap-2 text-sm text-gray-500 mb-6">
            <span className="inline-flex items-center" itemProp="articleSection">
              {DOMPurify?.sanitize(article.category) ?? article.category}
            </span>
            <span className="inline-flex items-center">
              <time dateTime={article.date} itemProp="datePublished">
                {DOMPurify?.sanitize(article.date) ?? article.date}
              </time>
            </span>
          </div>
        </header>

        <figure className="relative aspect-video overflow-hidden rounded-xl shadow-lg mb-8 bg-gray-100">
          <Image
            src={imageSrc}
            alt={cleanTitle}
            fill
            className="object-cover"
            priority
            sizes="(max-width: 768px) 100vw, 800px"
          />
        </figure>

        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          {article.description}
        </h2>

        <section
          itemProp="articleBody"
          className="prose prose-lg max-w-none text-gray-700"
          dangerouslySetInnerHTML={{ __html: sanitizedContent }}
        />

        <footer className="mt-12 pt-6 border-t border-gray-200">
          <Link
            href="/#blogsId"
            className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors"
            aria-label="กลับไปยังหน้าบทความทั้งหมด"
          >
            กลับไปยังหน้าบทความทั้งหมด
          </Link>
        </footer>
      </article>
    </main>
  );
}
