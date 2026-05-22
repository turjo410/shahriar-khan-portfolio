import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { CardNav } from "@/components/card-nav";
import PillNav from "@/components/pill-nav";
import { MobileDock } from "@/components/mobile-dock";
import { Footer } from "@/components/footer";
import { SmoothScrollProvider } from "@/components/smooth-scroll-provider";
import { ThemeProvider } from "@/components/theme-provider";
import { ScrollProgress } from "@/components/scroll-progress";
import { SiteBackground } from "@/components/site-background";
import { Toaster } from "react-hot-toast";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "Shahriar Khan — AI/ML Engineer · Computer Vision · Full-Stack",
  description:
    "Shahriar Khan — Computer Science & Engineering at East West University, Dhaka, Bangladesh. Building production-ready AI systems: real-time object detection, election analytics dashboards, explainable AI, and full-stack platforms.",
  keywords: [
    "Shahriar Khan",
    "AI Engineer",
    "Machine Learning",
    "Computer Vision",
    "YOLOv11",
    "PyTorch",
    "TensorFlow",
    "Next.js",
    "Flutter",
    "PySpark",
    "East West University",
    "Bangladesh",
  ],
  authors: [{ name: "Shahriar Khan" }],
  openGraph: {
    title: "Shahriar Khan — AI/ML Engineer",
    description:
      "Building production-ready AI systems with real-world impact. Computer Vision · Deep Learning · Full-Stack.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${jetbrains.variable} font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          forcedTheme="dark"
        >
          <SmoothScrollProvider>
            <SiteBackground />
            <ScrollProgress />
            {/* PillNav — desktop only, fixed sticky */}
            <div className="fixed top-0 left-0 right-0 z-50 pointer-events-none">
              <div className="pointer-events-auto">
                <PillNav
                  items={[
                    { label: "About", href: "/#about" },
                    { label: "Projects", href: "/#projects" },
                    { label: "Skills", href: "/#skills" },
                    { label: "Experience", href: "/#experience" },
                    { label: "About Me", href: "/about" },
                    { label: "Contact", href: "/#contact" },
                  ]}
                />
              </div>
            </div>
            {/* MobileDock — bottom dock, mobile only */}
            <MobileDock />
            <main className="relative pb-24 md:pb-0">{children}</main>
            <Footer />
            <Toaster
              position="bottom-right"
              toastOptions={{
                duration: 3000,
                style: {
                  background: "hsl(var(--surface-elevated))",
                  color: "hsl(var(--text-primary))",
                  border: "1px solid hsl(var(--border-accent))",
                  borderRadius: "0.75rem",
                  fontSize: "0.875rem",
                },
                success: {
                  iconTheme: {
                    primary: "hsl(var(--accent-emerald))",
                    secondary: "hsl(var(--surface-elevated))",
                  },
                },
              }}
            />
          </SmoothScrollProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
