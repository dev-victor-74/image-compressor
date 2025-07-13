import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

//<meta name="google-site-verification" content="xADiFbE94hca6J0VsB2mqrkuavmdbXhm9MUsw7gpUpw" />

export const metadata: Metadata = {
  title: "ImagePro - Best Free Image Compressor And Resizer",
  description:
    "Free online image compression and resizing tools. Compress JPEG, PNG, and WebP images without losing quality. No registration required.",

  keywords:
    "image compressor, image resizer, free image optimization, JPEG compression, PNG compression, WebP compression, online image tools",
  authors: [{ name: "ImagePro" }],
  creator: "ImagePro",
  publisher: "ImagePro",
  robots: "index, follow",
  verification: {
    google: "xADiFbE94hca6J0VsB2mqrkuavmdbXhm9MUsw7gpUpw", // Replace with your actual Google verification code
  },
  openGraph: {
    title: "ImagePro - Best Free Image Compressor And Resizer",
    description:
      "Free online image compression and resizing tools. Compress JPEG, PNG, and WebP images without losing quality.",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "ImagePro - Free Image Compression Tools",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ImagePro - Best Free Image Compressor And Resizer",
    description:
      "Free online image compression and resizing tools. Compress JPEG, PNG, and WebP images without losing quality.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
