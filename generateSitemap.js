import { SitemapStream, streamToPromise } from "sitemap";
import { createWriteStream, writeFileSync, existsSync, mkdirSync } from "fs";
import path from "path";
import { fileURLToPath } from "url";

// Support __dirname in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Target Vite build output directory
const outputDir = path.resolve(__dirname, "../dist");

// Ensure dist directory exists
if (!existsSync(outputDir)) {
  mkdirSync(outputDir, { recursive: true });
}

const sitemapPath = path.join(outputDir, "sitemap.xml");
const robotsPath = path.join(outputDir, "robots.txt");

const hostname = "https://sujihairandmakeup.com";

// Define your site pages
const pages = [
  { url: "/", changefreq: "daily", priority: 1.0 },
  { url: "/about", changefreq: "monthly", priority: 0.8 },
  { url: "/gallery", changefreq: "monthly", priority: 0.8 },
  { url: "/portfolio", changefreq: "monthly", priority: 0.8 },
  { url: "/contact", changefreq: "yearly", priority: 0.5 },
];

(async () => {
  try {
    // Generate sitemap
    const sitemapStream = new SitemapStream({ hostname });
    const writeStream = createWriteStream(sitemapPath);
    sitemapStream.pipe(writeStream);

    pages.forEach((page) => sitemapStream.write(page));
    sitemapStream.end();

    await streamToPromise(sitemapStream);
    console.log("✅ Sitemap generated at:", sitemapPath);

    // Generate robots.txt
    const robotsContent = `User-agent: *
Allow: /

Sitemap: ${hostname}/sitemap.xml
`;

    writeFileSync(robotsPath, robotsContent, "utf8");
    console.log("✅ robots.txt generated at:", robotsPath);
  } catch (error) {
    console.error("❌ Failed to generate files:", error);
  }
})();
