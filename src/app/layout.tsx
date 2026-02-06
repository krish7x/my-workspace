import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    default: "Immigration and Visa Consultants | PassX Global Services",
    template: `%s | PassX Global`,
  },
  description:
    "PassX Global Immigration experts in visa and immigration services for individuals and businesses worldwide. Since 2018, Our 80K+ Stories",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased`} suppressHydrationWarning>
        <Header />
        <main className="min-h-screen w-full min-w-0">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
