import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  runtimeConfig: {
    secret: {},
    public: {
      baseUrl: process.env.BASE_URL || "https://inkowapi.or.id",
    },
  },

  compatibilityDate: "2024-11-01",

  app: {
    head: {
      title: "INKOWAPI - Organisasi Perdagangan Indonesia",
      htmlAttrs: {
        lang: "id",
      },
      meta: [
        {
          charset: "utf-8",
        },
        {
          name: "description",
          content:
            "INKOWAPI adalah Induk Koperasi Wanita Pengusaha Indonesia yang menaungi 128 Koperasi Wanita dengan 1 Juta anggota UMKM. Bergabung dan perluas jaringan bisnis Anda sekarang!",
        },
        {
          name: "keywords",
          content:
            "INKOWAPI, Induk Koperasi Wanita, Pengusaha Indonesia, Koperasi Wanita, UMKM, Juta Anggota, Jaringan Bisnis, Koperasi Indonesia",
        },
        {
          name: "author",
          content: "Sharmila Yahya",
        },
        {
          name: "viewport",
          content: "width=device-width, initial-scale=1, maximum-scale=5",
        },
        {
          name: "X-UA-Compatible",
          content: "ie=edge",
        },
        // Open Graph / Facebook
        {
          property: "og:type",
          content: "website",
        },
        {
          property: "og:url",
          content: "https://inkowapi.or.id",
        },
        {
          property: "og:title",
          content: "INKOWAPI - Organisasi Perdagangan Indonesia",
        },
        {
          property: "og:description",
          content:
            "Organisasi perdagangan terkemuka yang mendukung pengembangan bisnis dan industri di Indonesia.",
        },
        {
          property: "og:image",
          content: "https://inkowapi.nusacode.id/images/inkowapi.png",
        },
        // Twitter
        {
          name: "twitter:card",
          content: "summary_large_image",
        },
        {
          name: "twitter:url",
          content: "https://inkowapi.or.id",
        },
        {
          name: "twitter:title",
          content: "INKOWAPI - Organisasi Perdagangan Indonesia",
        },
        {
          name: "twitter:description",
          content:
            "Organisasi perdagangan terkemuka yang mendukung pengembangan bisnis dan industri di Indonesia.",
        },
        {
          name: "twitter:image",
          content: "/images/og-image.svg",
        },
      ],
      link: [
        {
          rel: "icon",
          type: "image/svg+xml",
          href: "/favicon.ico",
        },
        {
          rel: "apple-touch-icon",
          href: "/apple-touch-icon.png",
        },
        {
          rel: "canonical",
          href: "https://inkowapi.or.id",
        },
      ],
    },
  },

  devtools: { enabled: true },

  css: ["~/assets/css/main.css"],

  vite: {
    plugins: [tailwindcss()],
  },

  future: {
    compatibilityVersion: 4,
  },

  experimental: {
    payloadExtraction: false,
  },
});
