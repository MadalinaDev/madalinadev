import "server-only";

import { env } from "@/env";

// Public origin for canonical URLs, Open Graph and the sitemap
export const siteUrl = new URL(
  env.SITE_URL ??
    (env.VERCEL_PROJECT_PRODUCTION_URL
      ? `https://${env.VERCEL_PROJECT_PRODUCTION_URL}`
      : "https://madalina.dev"),
);
