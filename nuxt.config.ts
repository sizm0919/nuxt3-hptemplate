// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  ssr: false,
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      meta: [
        {
          property: 'og:url',
          content: '',
        },
        {
          property: 'og:type',
          content: '',
        },
        {
          property: 'og:title',
          content: '',
        },
        {
          property: 'og:description',
          content: '',
        },
        {
          property: 'og:image',
          content: '',
        },
        {
          property: 'twitter:card',
          content: '',
        },
        {
          property: 'twitter:site',
          content: '',
        },
      ],
    },
  },
  modules: [
    '@nuxtjs/tailwindcss',
    'nuxt-simple-sitemap',
    '@nuxtjs/robots',
    'nuxt-microcms-module',
  ],
  css: [
    '@/assets/css/main.scss',
    '@/assets/css/tailwind.css'
  ],
  microCMS: {
    serviceDomain: process.env.MICROCMS_SERVICE_DOMAIN,
    apiKey: process.env.MICROCMS_API_KEY,
  },
  sitemap: {
    hostname: 'http://example.com', //ホストネームを変更する。
  },
  robots: {
    UserAgent: '*',
    Disallow: '',
  },
})
