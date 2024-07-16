import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./styles/globals.css";
import Layout from "@/components/layout";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Eskelds",
  description: "Eskelds Transportation",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Layout>
        <body className={inter.className}>{children}</body>
      </Layout>
    </html>
  );
}
