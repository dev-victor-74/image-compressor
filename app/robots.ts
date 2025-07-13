import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: [
        // Add any private areas here if needed
        // '/admin/',
        // '/private/',
      ],
    },
    sitemap: "https://image-compressor-eight-chi.vercel.app/sitemap.xml", // Replace with your actual domain
    host: "https://image-compressor-eight-chi.vercel.app/", // Replace with your actual domain
  };
}
