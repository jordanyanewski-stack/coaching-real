import type { Metadata } from "next";
import { Onest } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import { bgBG } from "@clerk/localizations";
import "./globals.css";
import { FacebookPixel } from "./pixel";

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
          colorText: "#0f131a",
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
        </body>
      </html>
    </ClerkProvider>
  );
}
