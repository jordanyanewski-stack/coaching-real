import type { Metadata } from "next";
import { Onest } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import { bgBG } from "@clerk/localizations";
import "./globals.css";
import { FacebookPixel } from "./pixel";
import CookieBanner from "./cookie-banner";
import { GlobalContactFooter } from "@/components/global-contact-footer";

// Substituting Sharp Grotesk Cyr Medium 20 with Onest -
// same geometric family, full Cyrillic support, closest available on Google Fonts.
const mv = Onest({
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-mv",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://coachingreallive.com"),
  title: "Станислава Павлова · Coaching Real",
  description:
    "Бизнес ментор, Ikigai стратег и основател на Coaching Real. Онлайн бизнес с душа – стратегия, видимост и устойчив растеж.",
  icons: {
    icon: [
      { url: "/favicon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/favicon-48.png", sizes: "48x48", type: "image/png" },
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    shortcut: "/favicon.ico",
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  openGraph: {
    images: ["/stasi-1.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider
      localization={bgBG}
      afterSignOutUrl="/"
      appearance={{
        variables: {
          colorPrimary: "#70150E",
          colorBackground: "#faf8f5",
          fontFamily: "var(--font-mv, sans-serif)",
          borderRadius: "10px",
        },
      }}
    >
      <html
        lang="bg"
        className={`${mv.variable} h-full`}
        suppressHydrationWarning
      >
        <body className="min-h-full flex flex-col antialiased">
          <FacebookPixel />
          {children}
          <GlobalContactFooter />
          <CookieBanner />
        </body>
      </html>
    </ClerkProvider>
  );
}
