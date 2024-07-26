// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  extends: ["@sse-ui/nuxt"],
  modules: [
    "nuxt-mongoose",
    "@nuxt/ui",
    "@vueuse/nuxt",
    "@nuxtjs/mdc",
    "@nuxt/content",
    "./modules/auth.module",
    "@nuxt/image"
  ],

  ui: {
    icons: ["ph", "logos", "simple-icons"],
  },

  app: {
    head: {
      htmlAttrs: {
        lang: "en",
      },
      link: [
        {
          rel: "icon",
          href: "/favicon.ico",
        },
      ],
    },
  },
});