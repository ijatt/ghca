// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    "@nuxt/ui",
    "@vee-validate/nuxt",
    "@vueuse/nuxt",
    "@pinia/nuxt", // needed
    "@pinia-plugin-persistedstate/nuxt",
  ],
  runtimeConfig: {
    SECRET_KEY: process.env.SECRET_KEY,
  },
  pages: true,
});
