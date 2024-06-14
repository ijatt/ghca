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
    public: {
      SUPABASE_URL: process.env.SUPABASE_URL,
      SUPABASE_KEY: process.env.SUPABASE_KEY,
      BUCKET_URL: process.env.BUCKET_URL
    }
  },
  pages: true,
});
