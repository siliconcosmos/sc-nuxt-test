// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  srcDir: 'src/',
  css: [
    // '@fortawesome/fontawesome-svg-core/styles.css',
    // '@fortawesome/fontawesome-free/css/all.css',
    // '@/assets/css/tailwind.css',
    // '@/assets/css/layout.scss',
    // '~/assets/global.scss'
    '~/assets/main.scss'
  ],
  // vite: {
  //     css: {
  //         preprocessorOptions: {
  //             scss: {
  //               additionalData: '@use "@/assets/global.scss" as *;'
  //             }
  //         }
  //     }
  // },
});
