import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    serverActions: {
      // Server-action POSTs hit the bare apex `coachingreallive.com`, but
      // Vercel may set forwarded-host or x-vercel-deployment-url that
      // doesn't match Origin exactly. Narrowed from `*.vercel.app` (which
      // would accept any Vercel preview anywhere, including from foreign
      // accounts) to project-specific preview patterns.
      allowedOrigins: [
        "coachingreallive.com",
        "www.coachingreallive.com",
        "coaching-real-*.vercel.app",
        "coaching-real-git-*.vercel.app",
        "coaching-real.vercel.app",
      ],
    },
  },
  images: {
    // Allow any HTTPS image source so admin-pasted Unsplash/etc. URLs work
    // for blog covers. Bunny CDN (coaching-real.b-cdn.net) and the legacy
    // WordPress assets on coachingreallive.com both fall under this.
    remotePatterns: [
      { protocol: "https", hostname: "**" },
    ],
  },
  async redirects() {
    return [
      // Route renamed 2026-05-13: /ai-free-course → /career-free-course.
      // Renamed again 2026-05-23: /career-free-course → /career-course (post-Magi
      // event the page is paid €97, "free" framing dropped). Both legacy slugs
      // collapse directly to /career-course to avoid double-hop redirects.
      // The legacy /api/ai-free-course path is dropped — the lead-capture API
      // was removed when the page flipped to MyPOS-only paid checkout.
      { source: "/ai-free-course",                destination: "/career-course",            permanent: true },
      { source: "/ai-free-course/:path*",         destination: "/career-course/:path*",     permanent: true },
      { source: "/career-free-course",            destination: "/career-course",            permanent: true },
      { source: "/career-free-course/:path*",     destination: "/career-course/:path*",     permanent: true },
    ];
  },
};

export default nextConfig;
