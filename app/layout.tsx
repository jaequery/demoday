import type { Metadata } from "next";
import "./globals.css";

const title = "Jae Lee — Design Engineer";
const description =
  "Design engineer in Seoul. Interfaces designed and built by one person, in code, and shipped.";

// No public deployment yet. Point this at the real origin when there is one.
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  openGraph: {
    title,
    description,
    siteName: "Jae Lee",
    locale: "en_US",
    type: "website",
    url: "/",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
