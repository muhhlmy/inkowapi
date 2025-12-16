// SEO Utilities - Helper functions untuk SEO optimization

export const seoMetaTags = {
  // Membuat meta tags untuk OG (Open Graph)
  createOgTags: (title, description, image, url) => ({
    "og:title": title,
    "og:description": description,
    "og:image": image,
    "og:url": url,
    "og:type": "website",
  }),

  // Membuat meta tags untuk Twitter Card
  createTwitterTags: (title, description, image) => ({
    "twitter:card": "summary_large_image",
    "twitter:title": title,
    "twitter:description": description,
    "twitter:image": image,
  }),

  // Membuat structured data (JSON-LD)
  createStructuredData: (type, data) => ({
    "@context": "https://schema.org",
    "@type": type,
    ...data,
  }),
};

// Generate sitemap
export const generateSitemapUrl = (
  page,
  changefreq = "weekly",
  priority = 0.8
) => ({
  url: page,
  changefreq,
  priority,
  lastmod: new Date().toISOString().split("T")[0],
});

// Generate robots.txt content
export const generateRobotsTxt = (domain) => `
User-agent: *
Allow: /
Disallow: /admin
Disallow: /private

Sitemap: ${domain}/sitemap.xml
`;

// Validate SEO basics
export const validateSeoMetaTags = (metaTags) => {
  const errors = [];

  if (
    !metaTags.title ||
    metaTags.title.length < 30 ||
    metaTags.title.length > 60
  ) {
    errors.push("Title should be between 30-60 characters");
  }

  if (
    !metaTags.description ||
    metaTags.description.length < 120 ||
    metaTags.description.length > 160
  ) {
    errors.push("Description should be between 120-160 characters");
  }

  if (!metaTags.image) {
    errors.push("Open Graph image is required");
  }

  if (!metaTags.keywords || metaTags.keywords.length < 5) {
    errors.push("At least 5 keywords are recommended");
  }

  return {
    isValid: errors.length === 0,
    errors,
  };
};
