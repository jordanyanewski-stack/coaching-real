import { notFound } from "next/navigation";
import Image from "next/image";
import { T, SiteNav, SiteFooter } from "@/app/_shared";
import { getPost } from "@/lib/blog-posts";
import { sanitizeBlogHtml } from "@/lib/sanitize";

export const dynamic = "force-dynamic";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) return {};
  return {
    title: `${post.title} – Coaching Real`,
    description: post.excerpt,
  };
}

/* ─── PAGE ─────────────────────────────────────────────────────────── */
export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) notFound();

  return (
    <div
      style={{
        fontFamily: "var(--font-mv, sans-serif)",
        backgroundColor: "#ffffff",
        minHeight: "100vh",
      }}
    >
      <SiteNav />

      {/* ── Hero ───────────────────────────────────────────────────── */}
      <section
        className="relative px-6 md:px-16 lg:px-24 pt-36 pb-0 overflow-hidden"
        style={{ backgroundColor: "#ffffff" }}
      >
        <div
          aria-hidden
          style={{
            position: "absolute",
            inset: 0,
            pointerEvents: "none",
            background:
              "radial-gradient(ellipse 55% 50% at 50% 0%, rgba(107,21,14,0.07) 0%, transparent 65%)",
          }}
        />
        <div className="relative max-w-3xl mx-auto">
          {/* Back link */}
          <a
            href="/blog"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "6px",
              fontSize: "13px",
              fontWeight: 600,
              color: "#70150E",
              textDecoration: "none",
              marginBottom: "28px",
            }}
          >
            ← Всички статии
          </a>

          {/* Meta */}
          <div className="flex items-center gap-3 mb-5">
            <span className="mv-tag mv-tag-light">{post.category}</span>
            <span style={{ fontSize: "13px", color: T.textSecondary }}>
              {post.date} · {post.readMin} мин четене
            </span>
          </div>

          {/* Title */}
          <h1
            style={{
              fontSize: "clamp(1.8rem, 5vw, 3rem)",
              fontWeight: 900,
              color: T.textPrimary,
              lineHeight: 1.12,
              letterSpacing: "-0.03em",
              marginBottom: "20px",
            }}
          >
            {post.title}
          </h1>

          {/* Excerpt */}
          <p
            style={{
              fontSize: "18px",
              color: T.textSecondary,
              lineHeight: 1.8,
              marginBottom: "40px",
            }}
          >
            {post.excerpt}
          </p>
        </div>
      </section>

      {/* ── Cover image ─────────────────────────────────────────────── */}
      <div className="px-6 md:px-16 lg:px-24">
        <div
          className="max-w-3xl mx-auto overflow-hidden relative"
          style={{ borderRadius: "14px", aspectRatio: "16/7" }}
        >
          <Image
            src={post.cover}
            alt={post.title}
            fill
            style={{ objectFit: "cover", objectPosition: "center top" }}
            sizes="(max-width: 768px) 100vw, 896px"
          />
        </div>
      </div>

      {/* ── Article body ────────────────────────────────────────────── */}
      <article
        className="px-6 md:px-16 lg:px-24 py-12"
        style={{ backgroundColor: "#ffffff" }}
      >
        <div
          className="max-w-3xl mx-auto"
          style={{
            fontSize: "16px",
            color: T.textPrimary,
            lineHeight: 1.9,
          }}
        >
          <div
            className="blog-content"
            dangerouslySetInnerHTML={{ __html: sanitizeBlogHtml(post.content) }}
          />
        </div>
      </article>

      {/* ── CTA ─────────────────────────────────────────────────────── */}
      <section
        className="px-6 md:px-16 lg:px-24 py-24"
        style={{
          background:
            "#faf8f5",
          borderTop: "1px solid rgba(107,21,14,0.15)",
        }}
      >
        <div className="max-w-3xl mx-auto text-center">
          <span className="mv-tag mv-tag-light">Готова ли си?</span>
          <h2
            className="mt-6"
            style={{
              fontSize: "clamp(1.6rem, 4vw, 2.6rem)",
              fontWeight: 900,
              color: T.textPrimary,
              lineHeight: 1.15,
              letterSpacing: "-0.02em",
            }}
          >
            Направи следващата си стъпка{" "}
            <span style={{ color: "#70150E" }}>
              запази безплатна стратегическа сесия.
            </span>
          </h2>
          <a
            href="/kickstart#waitlist"
            className="mv-btn mv-btn-primary mt-10 inline-flex"
            style={{ fontSize: "16px", padding: "16px 40px" }}
          >
            Запази своята безплатна сесия →
          </a>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
