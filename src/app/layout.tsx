import type { Metadata } from "next";
import { Onest } from "next/font/google";
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
  );
}
