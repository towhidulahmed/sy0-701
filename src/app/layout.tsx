import type { Metadata, Viewport } from "next";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { MobileNav } from "@/components/mobile-nav";

export const metadata: Metadata = {
  title: "Stuick, Why Study Long When You Can Study Quick",
  description: "Your quick and focused learning platform. Study smarter, not longer.",
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "Stuick",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body>
        <div className="mx-auto min-h-dvh max-w-5xl px-0 pb-20 sm:px-6 sm:pb-6 sm:pt-6">
          <SiteHeader />
          {children}
        </div>
        {/* Mobile bottom tab bar, hidden during exam */}
        <MobileNav />
      </body>
    </html>
  );
}
