import type { Metadata } from "next";
import { Inter, Noto_Sans_Arabic, Space_Grotesk } from "next/font/google";
import { LocaleProvider } from "@/components/providers/locale-provider";
import { siteConfig } from "@/lib/site-config";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

const notoSansArabic = Noto_Sans_Arabic({
  subsets: ["arabic"],
  variable: "--font-noto-sans-arabic",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: `${siteConfig.name} | ${siteConfig.role}`,
  description: "Premium multilingual personal site for an IoT, AI, agentic AI, and robotics developer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <body className={`${inter.variable} ${spaceGrotesk.variable} ${notoSansArabic.variable}`}>
        <LocaleProvider>{children}</LocaleProvider>
      </body>
    </html>
  );
}
