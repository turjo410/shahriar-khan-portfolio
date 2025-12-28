import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { SmoothScrollProvider } from "@/components/smooth-scroll-provider";
import { ThemeProvider } from "@/components/theme-provider";
import { ScrollProgress } from "@/components/scroll-progress";
import { CustomCursor } from "@/components/custom-cursor";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Shahriar Khan - Portfolio",
  description: "Computer Science student specializing in production-ready deep learning systems with proven deployment experience. Built real-time AI solutions using PyTorch, TensorFlow, and full-stack development.",
  keywords: ["Shahriar Khan", "Portfolio", "Computer Science", "Deep Learning", "Machine Learning", "AI", "Software Engineer", "Web Developer"],
  authors: [{ name: "Shahriar Khan" }],
  openGraph: {
    title: "Shahriar Khan - Portfolio",
    description: "Computer Science student specializing in AI and Deep Learning",
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
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <SmoothScrollProvider>
            <CustomCursor />
            <ScrollProgress />
            <Navigation />
            <main>{children}</main>
            <Footer />
            <Toaster
              position="bottom-right"
              toastOptions={{
                duration: 3000,
                style: {
                  background: "#1a1a1a",
                  color: "#fff",
                  border: "1px solid #333",
                },
                success: {
                  iconTheme: {
                    primary: "#22d3ee",
                    secondary: "#fff",
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
