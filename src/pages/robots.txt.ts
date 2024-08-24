import { trimLines } from "@phanect/utils";
import type { APIRoute } from "astro";

export const GET: APIRoute = ({ site }) => {
  const sitemapURL = new URL("sitemap-index.xml", site).href;
  const robotsTxt = trimLines(`
    User-agent: *
    ${ import.meta.env.PROD ?
      "Allow: /" :
      "Disallow: /"
    }

    Sitemap: ${sitemapURL}
  `);

  return new Response(robotsTxt);
};
