// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],

  compatibilityDate: '2024-04-03',

  modules: ["@nuxt/fonts", "@nuxt/eslint", "@nuxtjs/tailwindcss"],

  eslint: {
    config: {
      stylistic: true,
      standalone: false
    }
  },

  typescript: {
    strict: true
  },

  experimental: {
    typedPages: true,
    viewTransition: true
  }
});
