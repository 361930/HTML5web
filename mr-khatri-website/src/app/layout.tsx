import type { Metadata } from "next";
import "./globals.css";
import Layout from "@/components/Layout";

export const metadata: Metadata = {
  title: "MR Khatri - Web Development & IT Services",
  description: "Expert Web Development, Website Management, Security Consultancy, IT Infrastructure Planning, SEO, and CRM Integration services.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}