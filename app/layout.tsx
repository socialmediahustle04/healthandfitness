import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://healthandfitness.com"),
  title: {
    default: "Weight Loss After 40: Evidence-Informed Guides for Women",
    template: "%s | Quiet Proof Wellness"
  },
  description:
    "Clear, practical weight-loss guidance for women over 40. Learn about metabolism, menopause, sleep, cortisol, supplements, programs, and safe next steps.",
  openGraph: {
    title: "Weight Loss After 40: Evidence-Informed Guides for Women",
    description:
      "Clear, practical weight-loss guidance for women over 40. Learn about metabolism, menopause, sleep, cortisol, supplements, programs, and safe next steps.",
    url: "https://healthandfitness.com",
    siteName: "Quiet Proof Wellness",
    images: [
      {
        url: "/media/og-home.svg",
        width: 1200,
        height: 630,
        alt: "Quiet Proof Wellness homepage"
      }
    ],
    locale: "en_US",
    type: "website"
  },
  alternates: {
    canonical: "/"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
        <noscript>
          <style>{`.reveal{opacity:1!important;transform:none!important}`}</style>
        </noscript>
      </body>
    </html>
  );
}
