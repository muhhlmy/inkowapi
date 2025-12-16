<script setup>
// Global SEO configuration untuk app
useHead({
  htmlAttrs: {
    lang: "id",
  },
  link: [
    {
      rel: "icon",
      type: "image/svg+xml",
      href: "/favicon.ico",
    },
  ],
});
</script>

<template>
  <div>
    <NuxtPage />
  </div>
</template>
