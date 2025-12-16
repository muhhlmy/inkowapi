// Security headers middleware untuk SEO dan security best practices
export default defineEventHandler((event) => {
  // Security headers
  setHeader(event, "X-Content-Type-Options", "nosniff");
  setHeader(event, "X-Frame-Options", "SAMEORIGIN");
  setHeader(event, "X-XSS-Protection", "1; mode=block");

  // SEO-related headers
  setHeader(event, "Referrer-Policy", "strict-origin-when-cross-origin");

  // Cache control for static assets
  if (event.node.req.url.match(/\.(js|css|png|jpg|jpeg|gif|svg|webp|ico)$/i)) {
    setHeader(event, "Cache-Control", "public, max-age=31536000, immutable");
  }

  // Don't cache HTML
  if (
    event.node.req.url.endsWith(".html") ||
    !event.node.req.url.includes(".")
  ) {
    setHeader(event, "Cache-Control", "public, max-age=0, must-revalidate");
  }
});
