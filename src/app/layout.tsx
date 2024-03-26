import type { Metadata } from "next";
import { Inter, Quicksand } from "next/font/google";
import "./globals.css";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });
const quicksand = Quicksand({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "WiseStack",
  description: "Elevate Your Brand Presence: Our Social Media Magic",
  openGraph: {
    type: "website",
    description: "Elevate Your Brand Presence: Our Social Media Magic",
    images:
      "https://drive.google.com/file/d/1Q4O8kXQIZHXTPa-ZkPaT22vftAZAL0cu/view?usp=drive_link",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </Head>
      <body className={quicksand.className}>{children}</body>
    </html>
  );
}
