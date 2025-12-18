import type { Metadata } from "next";
import { Geist, Geist_Mono, Podkova, Hepta_Slab } from "next/font/google";
import { ThemeProvider } from "next-themes";
import NextToploader from "nextjs-toploader";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const podkova = Podkova({
  variable: "--font-podkova",
  subsets: ["latin"],
});

const heptaSlab = Hepta_Slab({
  variable: "--font-hepta-slab",
  subsets: ["latin"],
});

const APP_URL = process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000";
const APP_NAME = process.env.NEXT_PUBLIC_APP_NAME || "Elite Wanderer";
const APP_DEFAULT_TITLE = "Elite Wanderer";
const APP_TITLE_TEMPLATE = "%s - Elite Wanderer";
const APP_DESCRIPTION =
  "Redefining luxury travel and global relocation for the discerning few.";

export const metadata: Metadata = {
  applicationName: APP_NAME,
  title: {
    default: APP_DEFAULT_TITLE,
    template: APP_TITLE_TEMPLATE,
  },
  description: APP_DESCRIPTION,
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: APP_DEFAULT_TITLE,
    // startUpImage: [],
  },
  formatDetection: {
    telephone: false,
  },
  openGraph: {
    type: "website",
    siteName: APP_NAME,
    title: {
      default: APP_DEFAULT_TITLE,
      template: APP_TITLE_TEMPLATE,
    },
    description: APP_DESCRIPTION,
  },
  twitter: {
    card: "summary",
    title: {
      default: APP_DEFAULT_TITLE,
      template: APP_TITLE_TEMPLATE,
    },
    description: APP_DESCRIPTION,
  },
  metadataBase: new URL(APP_URL),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${podkova.variable} ${heptaSlab.variable} antialiased`}
      >
        <ThemeProvider attribute="class" enableColorScheme enableSystem>
          <NextToploader color="#fff" />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
