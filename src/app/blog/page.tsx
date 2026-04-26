import Image from "next/image";
import { T, GRADIENT_TEXT, SiteNav, SiteFooter } from "@/app/_shared";
import { POSTS, type Post } from "./_posts";

export const metadata = {
  title: "Блог – Coaching Real",
  description:
    "Статии, стратегии и вдъхновение за холистични предприемачи, коучове и терапевти, готови да изградят устойчив онлайн бизнес.",
};

/* ─── PAGE ─────────────────────────────────────────────────────────── */
export default function BlogPage() {
  return (
    <div
      style={{
        fontFamily: "var(--font-mv, sans-serif)",
        backgroundColor: "#ffffff",
        minHeight: "100vh",
      }}
    >
      <SiteNav />
      <PageHero />
      <PostsGrid posts={POSTS} />
      <SiteFooter />
    </div>
  );
}

/* ─── HERO ──────────────────────────────────────────────────────────── */
function PageHero() {
  return (
    <section
      className="relative px-6 md:px-16 lg:px-24 pt-36 pb-16 overflow-hidden"
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
      <div className="relative max-w-4xl mx-auto text-center">
        <span className="mv-tag mv-tag-light">Блог</span>
        <h1
          className="mt-5"
          style={{
            fontSize: "clamp(2rem, 5vw, 3.6rem)",
            fontWeight: 900,
            color: T.textPrimary,
            lineHeight: 1.1,
            letterSpacing: "-0.03em",
          }}
        >
          Идеи, стратегии и{" "}
          <span style={{ ...GRADIENT_TEXT }}>вдъхновение</span>
        </h1>
        <p
          className="mt-5 mx-auto"
          style={{
            fontSize: "17px",
            color: T.textSecondary,
            lineHeight: 1.8,
            maxWidth: "540px",
          }}
        >
          Практически статии за холистични предприемачи, коучове и терапевти
          - за бизнес, маркетинг и личностно развитие.
        </p>
      </div>
    </section>
  );
}

/* ─── LIST ──────────────────────────────────────────────────────────── */
function PostsGrid({ posts }: { posts: Post[] }) {
  if (posts.length === 0) {
    return (
      <section
        className="px-6 md:px-16 lg:px-24 pb-32"
        style={{ backgroundColor: "#f3f4f6" }}
      >
        <div className="max-w-6xl mx-auto pt-16 text-center">
          <p style={{ fontSize: "16px", color: T.textSecondary }}>
            Скоро тук ще се появят нови статии. Следи ни!
          </p>
        </div>
      </section>
    );
  }

  return (
    <section
      className="px-6 md:px-16 lg:px-24 pt-4 pb-24"
      style={{ backgroundColor: "#f3f4f6" }}
    >
      <div className="max-w-4xl mx-auto flex flex-col gap-4 pt-8">
        {posts.map((p) => (
          <PostRow key={p.slug} post={p} />
        ))}
      </div>
    </section>
  );
}

/* ─── POST ROW ───────────────────────────────────────────────────────── */
function PostRow({ post }: { post: Post }) {
  return (
    <a
      href={`/blog/${post.slug}`}
      className="mv-program-card group flex flex-row overflow-hidden"
      style={{
        backgroundColor: "#ffffff",
        borderRadius: "12px",
        border: "1px solid rgba(0,0,0,0.08)",
        textDecoration: "none",
      }}
    >
      {/* Thumbnail - 16:9 on the left */}
      <div
        className="relative overflow-hidden shrink-0"
        style={{ width: "280px", aspectRatio: "16/9", alignSelf: "stretch" }}
      >
        <Image
          src={post.cover}
          alt={post.title}
          fill
          style={{ objectFit: "cover", objectPosition: "center top" }}
          sizes="280px"
        />
      </div>

      {/* Body */}
      <div className="flex flex-col justify-center px-7 py-5 flex-1 min-w-0">
        <div className="flex items-center gap-2 mb-3">
          <span className="mv-tag mv-tag-light" style={{ fontSize: "10px" }}>
            {post.category}
          </span>
          <span style={{ fontSize: "12px", color: T.textSecondary }}>
            {post.date} · {post.readMin} мин четене
          </span>
        </div>
        <h2
          style={{
            fontSize: "clamp(1rem, 2vw, 1.25rem)",
            fontWeight: 800,
            color: T.textPrimary,
            lineHeight: 1.3,
            letterSpacing: "-0.01em",
            marginBottom: "8px",
          }}
        >
          {post.title}
        </h2>
        <p
          style={{
            fontSize: "13px",
            color: T.textSecondary,
            lineHeight: 1.75,
            display: "-webkit-box",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
            marginBottom: "16px",
          }}
        >
          {post.excerpt}
        </p>
        <span
          style={{
            fontSize: "12px",
            fontWeight: 700,
            color: "#6b150e",
            letterSpacing: "0.01em",
          }}
        >
          Прочети статията →
        </span>
      </div>
    </a>
  );
}
