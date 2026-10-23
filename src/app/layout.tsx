import "@/styles/globals.css";

import { type Metadata, type Viewport } from "next";
import { Hanken_Grotesk } from "next/font/google";

import { TRPCReactProvider } from "@/trpc/react";
import { ThemeProvider } from "next-themes";
import { site } from "@/lib/site";
import { siteUrl } from "@/lib/site-url";

export const metadata: Metadata = {
  metadataBase: siteUrl,
  title: { default: site.title, template: `%s · ${site.name}` },
  description: site.description,
  applicationName: site.domain,
  authors: [{ name: site.name, url: siteUrl }],
  creator: site.name,
  keywords: [
    site.name,
    "full-stack engineer",
    "Laravel developer",
    "Next.js developer",
    "TypeScript",
    "Chișinău",
    "Moldova",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "profile",
    firstName: "Madalina",
    lastName: "Chirpicinic",
    url: "/",
    siteName: site.domain,
    title: site.title,
    description: site.description,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: site.title,
    description: site.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
};

export const viewport: Viewport = {
  themeColor: "#1c284f",
  colorScheme: "dark light",
};

const hanken = Hanken_Grotesk({
  subsets: ["latin", "latin-ext"],
  variable: "--font-hanken",
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={hanken.variable} suppressHydrationWarning>
      <body className="min-h-screen font-sans antialiased">
        <TRPCReactProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem={false}
          >
            {children}
          </ThemeProvider>
        </TRPCReactProvider>
      </body>
    </html>
  );
}
