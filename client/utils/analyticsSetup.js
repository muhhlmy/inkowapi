// Google Analytics & SEO Monitoring Setup
// File ini untuk implementasi analytics tracking

/**
 * Setup Google Analytics 4 (GA4)
 * Tambahkan ke nuxt.config.ts:
 *
 * modules: [
 *   '@nuxtjs/google-analytics'
 * ],
 * googleAnalytics: {
 *   id: 'G-XXXXXXXXXX' // Ganti dengan GA4 ID Anda
 * }
 */

/**
 * Alternative: Menggunakan Google Tag Manager (GTM)
 * modules: [
 *   '@nuxtjs/google-tag-manager'
 * ],
 * googleTagManager: {
 *   id: 'GTM-XXXXXX'
 * }
 */

/**
 * Tracking Events untuk SEO & UX
 */
export const trackingEvents = {
  // Page view events
  pageView: (path, title) => {
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("event", "page_view", {
        page_path: path,
        page_title: title,
      });
    }
  },

  // CTA clicks
  clickButton: (buttonName, category = "engagement") => {
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("event", "click_button", {
        button_name: buttonName,
        event_category: category,
      });
    }
  },

  // Form submissions
  formSubmit: (formName) => {
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("event", "form_submit", {
        form_name: formName,
      });
    }
  },

  // Link clicks
  externalLink: (url) => {
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("event", "click", {
        event_category: "engagement",
        event_label: url,
      });
    }
  },

  // Scroll depth
  scrollDepth: (percentage) => {
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("event", "scroll", {
        scroll_depth: percentage,
      });
    }
  },
};

/**
 * Setup Search Console (GSC)
 * 1. Go to https://search.google.com/search-console
 * 2. Add property dengan domain
 * 3. Verify ownership dengan:
 *    - HTML file upload (upload file ke /public/)
 *    - HTML meta tag (tambah ke nuxt.config.ts)
 *    - Domain name provider verification
 * 4. Submit sitemap di GSC
 */

/**
 * Verification Meta Tag untuk Google Search Console
 * Tambahkan ke nuxt.config.ts:
 * {
 *   name: 'google-site-verification',
 *   content: 'your_google_verification_code'
 * }
 */

/**
 * Bing Webmaster Tools Setup
 * 1. Go to https://www.bing.com/webmasters
 * 2. Add site
 * 3. Verify ownership (gunakan same meta tag dengan Google)
 */

/**
 * SEO Monitoring Tools
 */
export const seoMonitoringTools = {
  // Google Search Console - https://search.google.com/search-console
  googleSearchConsole: {
    setupUrl: "https://search.google.com/search-console",
    tasks: [
      "Submit sitemap",
      "Monitor indexing status",
      "Fix crawl errors",
      "Check Core Web Vitals",
      "Monitor user experience",
    ],
  },

  // Google PageSpeed Insights
  pageSpeed: {
    url: "https://pagespeed.web.dev/",
    metricsToMonitor: [
      "Largest Contentful Paint (LCP)",
      "First Input Delay (FID)",
      "Cumulative Layout Shift (CLS)",
      "First Contentful Paint (FCP)",
    ],
  },

  // Lighthouse
  lighthouse: {
    categories: ["Performance", "Accessibility", "Best Practices", "SEO"],
    targetScores: {
      Performance: 90,
      Accessibility: 90,
      "Best Practices": 90,
      SEO: 90,
    },
  },

  // Semrush / Ahrefs (optional paid tools)
  paid: {
    semrush: "https://www.semrush.com/",
    ahrefs: "https://ahrefs.com/",
    moz: "https://moz.com/",
  },
};

/**
 * Structured Data Testing
 */
export const structuredDataTests = {
  googleRichResults: "https://search.google.com/test/rich-results",
  schemaValidator: "https://validator.schema.org/",
  linkedDataTester: "https://www.w3.org/2019/03/jsonld-context/",
};

/**
 * Checklist untuk SEO Implementation
 */
export const seoChecklist = [
  {
    category: "Technical SEO",
    items: [
      "✅ Favicon configured",
      "✅ Robots.txt created",
      "✅ Sitemap.xml created",
      "✅ Structured data implemented",
      "✅ Mobile responsive design",
      "✅ Security headers set",
      "✅ Meta tags implemented",
      "✅ Canonical tags configured",
    ],
  },
  {
    category: "Content SEO",
    items: [
      "✅ Page titles optimized (50-60 chars)",
      "✅ Meta descriptions optimized (120-160 chars)",
      "✅ Heading tags properly structured",
      "✅ Image alt text added",
      "✅ Internal linking strategy",
      "✅ Keyword optimization",
    ],
  },
  {
    category: "Social Media",
    items: [
      "✅ Open Graph tags implemented",
      "✅ Twitter Card tags implemented",
      "✅ Social sharing buttons (optional)",
    ],
  },
  {
    category: "Monitoring",
    items: [
      "☐ Google Search Console registered",
      "☐ Bing Webmaster Tools registered",
      "☐ Google Analytics setup",
      "☐ Page Speed Insights monitoring",
      "☐ Core Web Vitals monitoring",
    ],
  },
];

export default {
  trackingEvents,
  seoMonitoringTools,
  structuredDataTests,
  seoChecklist,
};
