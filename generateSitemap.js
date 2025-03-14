import { SitemapStream, streamToPromise } from "sitemap";
import { createWriteStream, existsSync, mkdirSync } from "fs";
import path from "path";
import { fileURLToPath } from "url";

// Convert ES module __dirname equivalent in TypeScript
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Set directory to "dist" since Vite does not have a public folder
const outputDir = path.resolve(__dirname, "dist");

// Ensure "dist" folder exists
if (!existsSync(outputDir)) {
  mkdirSync(outputDir);
}

const sitemapPath = path.join(outputDir, "sitemap.xml");

// Define your pages
const pages = [
  { url: "/", changefreq: "daily", priority: 1.0 },
  { url: "/about", changefreq: "monthly", priority: 0.8 },
  { url: "/services", changefreq: "monthly", priority: 0.8 },
  { url: "/portfolio", changefreq: "monthly", priority: 0.8 },
  { url: "/contact", changefreq: "yearly", priority: 0.5 },
];

(async () => {
  try {
    const stream = new SitemapStream({
      hostname: "https://sujihairandmakeup.com",
    });

    pages.forEach((page) => stream.write(page));
    stream.end();

    const sitemap = await streamToPromise(stream);
    createWriteStream(sitemapPath).write(sitemap);

    console.log("✅ Sitemap generated successfully at:", sitemapPath);
  } catch (error) {
    console.error("❌ Error generating sitemap:", error);
  }
})();
