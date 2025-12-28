import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";

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
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
