import { SITE_URL, SITE_ROUTES } from "@/lib/siteConfig";

export default function sitemap() {
  const lastModified = new Date();

  return SITE_ROUTES.map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified,
    changeFrequency: "daily",
    priority: route === "/" ? 1 : 0.8,
  }));
}
