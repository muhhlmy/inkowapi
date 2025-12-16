# SEO & Meta Data Setup Documentation

## Overview

Repository ini telah dikonfigurasi dengan SEO dan Meta Data yang lengkap dan friendly untuk meningkatkan ranking di search engine.

## Struktur Perubahan

### 1. **Favicon Setup**

- **File**: `/public/favicon.svg`
- Favicon modern berlogo "K" (INKOWAPI) dengan gradient emerald
- Konfigurasi di `nuxt.config.ts` untuk multiple favicon variants

### 2. **Meta Tags Configuration**

Konfigurasi meta tags dilakukan di berbagai level:

#### a. Global (nuxt.config.ts)

```javascript
app: {
  head: {
    title: 'INKOWAPI - Organisasi Perdagangan Indonesia',
    meta: [
      { name: 'description', content: '...' },
      { property: 'og:title', content: '...' },
      { property: 'og:image', content: '...' },
      { name: 'twitter:card', content: 'summary_large_image' },
      // ... more meta tags
    ],
    link: [
      { rel: 'canonical', href: 'https://inkowapi.or.id' },
      { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
    ]
  }
}
```

#### b. Page Level (pages/index.vue)

```javascript
useHead({
  title: "INKOWAPI - Induk Koperasi Wanita Pengusaha Indonesia",
  meta: [
    // Page-specific meta tags
  ],
});
```

#### c. Composable (composables/useSeo.js)

```javascript
export const useSeo = (title, description, image, url) => {
  useHead({
    // Dynamic SEO setup
  });
};
```

### 3. **Structured Data (JSON-LD)**

Structured data implementation di `pages/index.vue`:

```javascript
const jsonLdOrganization = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "INKOWAPI",
  description: "...",
  url: "https://inkowapi.or.id",
  logo: "https://inkowapi.or.id/images/inkowapi.png",
  // ... more structured data
};
```

### 4. **Robots.txt**

File: `/public/robots.txt`

- Configured untuk search engines crawling optimization
- Sitemap locations included
- Disallow rules untuk admin dan private paths

### 5. **Sitemap.xml**

File: `/public/sitemap.xml`

- URL list untuk search engine indexing
- Priority dan changefreq settings untuk setiap page
- Last modified timestamps

### 6. **Utilities**

File: `/utils/seoUtils.js`
Fungsi-fungsi helper:

- `seoMetaTags.createOgTags()` - Generate Open Graph tags
- `seoMetaTags.createTwitterTags()` - Generate Twitter Card tags
- `seoMetaTags.createStructuredData()` - Generate JSON-LD
- `validateSeoMetaTags()` - Validate SEO best practices

### 7. **Security Headers Middleware**

File: `/server/middleware/seo.js`

- X-Content-Type-Options
- X-Frame-Options
- X-XSS-Protection
- Referrer-Policy
- Cache-Control optimization

## JavaScript Only (No TypeScript except nuxt.config.ts)

Semua file kecuali `nuxt.config.ts` sudah dikonversi ke JavaScript:

- ✅ app.vue (Script menggunakan JavaScript)
- ✅ pages/index.vue (Script menggunakan JavaScript)
- ✅ composables/useSeo.js (Pure JavaScript)
- ✅ utils/seoUtils.js (Pure JavaScript)
- ✅ server/middleware/seo.js (Pure JavaScript)

## Meta Tags Included

### Essential Meta Tags

- `<meta charset="utf-8">`
- `<meta name="viewport">`
- `<meta name="description">`
- `<meta name="keywords">`
- `<meta name="author">`

### Open Graph (Facebook/LinkedIn)

- `og:title`
- `og:description`
- `og:image`
- `og:url`
- `og:type`

### Twitter Card

- `twitter:card`
- `twitter:title`
- `twitter:description`
- `twitter:image`
- `twitter:url`

### Additional

- `canonical` (untuk duplicate content prevention)
- `language`
- `X-UA-Compatible`

## Best Practices Implemented

1. ✅ **Semantic HTML** - Proper heading hierarchy dan semantic elements
2. ✅ **Mobile Responsive** - Viewport meta tag dan responsive design
3. ✅ **Fast Loading** - Cache-Control headers optimization
4. ✅ **Security Headers** - X-Content-Type-Options, X-Frame-Options, dll
5. ✅ **Structured Data** - JSON-LD schema implementation
6. ✅ **Sitemap & Robots** - Proper crawl directives
7. ✅ **Favicon** - Professional SVG favicon
8. ✅ **OG Images** - Social sharing optimization

## Usage Examples

### Using SEO Composable di Page Baru

```vue
<script setup>
import { useSeo } from "~/composables/useSeo";

useSeo(
  "Page Title",
  "Page description untuk search engines dan social media",
  "/images/og-image.png",
  "https://inkowapi.or.id/page-url"
);
</script>
```

### Validasi SEO Tags

```javascript
import { validateSeoMetaTags } from "~/utils/seoUtils";

const validation = validateSeoMetaTags({
  title: "My Page Title",
  description: "My page description...",
  image: "/og-image.png",
  keywords: "keyword1, keyword2, keyword3, keyword4, keyword5",
});

if (!validation.isValid) {
  console.warn("SEO Issues:", validation.errors);
}
```

## Domain Configuration

Saat deploy, update domain di:

1. `nuxt.config.ts` - runtimeConfig.public.baseUrl
2. `pages/index.vue` - og:url dan canonical links
3. `public/robots.txt` - Sitemap URLs
4. `public/sitemap.xml` - URL locations

## Testing SEO

### Online Tools

1. Google Search Console - https://search.google.com/search-console
2. Meta Tags Debugger - https://www.facebook.com/developers/tools/debug/
3. Twitter Card Validator - https://cards-dev.twitter.com/validator
4. Schema.org Validator - https://validator.schema.org/

### Local Testing

```bash
# Test favicon loading
curl -I http://localhost:3000/favicon.svg

# Check robots.txt
curl http://localhost:3000/robots.txt

# Check sitemap
curl http://localhost:3000/sitemap.xml
```

## Next Steps

1. Replace domain URLs dengan domain asli
2. Replace logo URL dengan actual logo path
3. Update contact email untuk structured data
4. Create og-image.png (1200x630px optimal)
5. Register di Google Search Console
6. Submit sitemap ke Google & Bing
7. Monitor search performance di GSC

---

**Last Updated**: December 16, 2025
