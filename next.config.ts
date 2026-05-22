import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    serverActions: {
      // Server-action POSTs hit the bare apex `coachingreallive.com`, but
      // Vercel may set forwarded-host or x-vercel-deployment-url that
      // doesn't match Origin exactly. Whitelist all hostnames the site
      // is served from so Next doesn't return 403 on action submission.
      allowedOrigins: [
        "coachingreallive.com",
        "www.coachingreallive.com",
        "*.vercel.app",
      ],
    },
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "coachingreallive.com",
      },
      {
        protocol: "https",
        hostname: "coaching-real.b-cdn.net",
      },
    ],
  },
  async redirects() {
    return [
      // Route renamed 2026-05-13: /ai-free-course → /career-free-course.
      // The Magi FB campaign (live 10–21 May) still points at the old slug.
      { source: "/ai-free-course",            destination: "/career-free-course",            permanent: true },
      { source: "/ai-free-course/:path*",     destination: "/career-free-course/:path*",     permanent: true },
      { source: "/api/ai-free-course/:path*", destination: "/api/career-free-course/:path*", permanent: true },
    ];
  },
};

export default nextConfig;
