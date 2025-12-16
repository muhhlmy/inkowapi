import tailwindcss from "@tailwindcss/vite";
export default defineNuxtConfig({
  runtimeConfig: {
    secret: {},
    public: {
      //GoogleClient: process.env.GOOGLE_CLIENT_ID,
      //BaseUrl: process.env.BASE_URL, // bisa dipakai di frontend
    },
  },
  compatibilityDate: "2024-11-01",
  app: {
    head: {
      title: "Inkowapi",
    },
  },
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],
  vite: {
    plugins: [tailwindcss()],
  },
});
