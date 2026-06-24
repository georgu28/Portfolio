import Navbar from "@/components/navbar";
import { FlickeringGrid } from "@/components/magicui/flickering-grid";
import { ThemeProvider } from "@/components/theme-provider";
import { TooltipProvider } from "@/components/ui/tooltip";
import { DATA } from "@/data/resume";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "500", "600", "700"],
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  metadataBase: new URL(DATA.url),
  title: {
    default: `${DATA.name} — CS @ Michigan · ML/SWE`,
    template: `%s | ${DATA.name}`,
  },
  description: DATA.tagline,
  openGraph: {
    title: `${DATA.name} — CS @ Michigan · ML/SWE`,
    description: DATA.tagline,
    url: DATA.url,
    siteName: `${DATA.name}`,
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    title: `${DATA.name} — CS @ Michigan · ML/SWE`,
    description: DATA.tagline,
    card: "summary_large_image",
  },
  verification: {
    google: "",
    yandex: "",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased relative",
          geist.variable,
          geistMono.variable
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="light">
          <TooltipProvider delayDuration={0}>
            {/* Full-width animated grid across the top of the page */}
            <div className="pointer-events-none absolute inset-x-0 top-0 z-0 h-[420px] overflow-hidden [mask-image:linear-gradient(to_bottom,black,transparent)]">
              <FlickeringGrid
                className="h-full w-full"
                squareSize={2}
                gridGap={4}
                flickerChance={0.22}
                maxOpacity={0.2}
                color="rgb(120,120,120)"
              />
            </div>
            <div className="relative z-10 mx-auto max-w-2xl px-6 py-12 pb-28 sm:py-20">
              {children}
            </div>
            <Navbar />
          </TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
