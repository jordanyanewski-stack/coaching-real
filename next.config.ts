import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "coachingreallive.com",
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
