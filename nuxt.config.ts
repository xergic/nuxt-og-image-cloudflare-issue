// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["nuxt-og-image"],
  nitro: {
    preset: "cloudflare",
  },
  ssr: true,
  site: {
    url: "https://www.example.com",
    name: "Example",
  },
});
