import type { Metadata } from "next";
import { Nunito_Sans, Source_Serif_4 } from "next/font/google";
import { site } from "@/lib/design-tokens";
import "./globals.css";

const bodyFont = Nunito_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap"
});

const displayFont = Source_Serif_4({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap"
});

const defaultTitle = "Weight Loss After 40: Evidence-Informed Guides for Women";
const defaultDescription =
  "Clear, practical weight-loss guidance for women over 40. Learn about metabolism, menopause, sleep, cortisol, supplements, programs, and safe next steps.";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: defaultTitle,
    template: `%s | ${site.name}`
  },
  description: defaultDescription,
  openGraph: {
    title: defaultTitle,
    description: defaultDescription,
    url: site.url,
    siteName: site.name,
    images: [
      {
        url: site.ogImage,
        width: 1200,
        height: 630,
        alt: `${site.name} homepage`
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
      <body className={`${bodyFont.variable} ${displayFont.variable}`}>
        <a className="skip-link" href="#main-content">
          Skip to content
        </a>
        {children}
        <noscript>
          <style>{`.reveal{opacity:1!important;transform:none!important}`}</style>
        </noscript>
      </body>
    </html>
  );
}
