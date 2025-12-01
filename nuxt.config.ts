// https://nuxt.com/docs/api/configuration/nuxt-config

import { motionConfig } from "./motion.config";
import { EVersion } from './types/version.enum'

export type UBreakpoints = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl'

export type TBreakpointsConfig = Record<UBreakpoints, number>

const breakpoints: TBreakpointsConfig = {
  xs: 520,
  sm: 768,
  md: 1024,
  lg: 1200,
  xl: 1440,
  xxl: 1728,
}

const baseUrl = 'https://korbil.se'

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  devServer: {
    port: 5200,
  },
  modules: ['@nuxt/eslint', '@nuxt/image', '@nuxtjs/i18n', '@nuxtjs/device', '@vueuse/motion/nuxt', '@pinia/nuxt'],
  css: ['@/assets/styles/main.scss'],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "~/assets/styles/design-system.scss" as *;'
        }
      }
    },
  },
  runtimeConfig: {
    public: {
      baseUrl,
      breakpoints,

      motion: motionConfig,

      version: EVersion.DEFAULT,
    }
  },

  app: {
    head: {
      htmlAttrs: {
        lang: 'en-GB'
      },
      title: 'Korbil - Find the Best Driving Schools Near You',
      // viewport: "width=device-width, initial-scale=1, minimum-scale=1.0, maximum-scale=5, shrink-to-fit=no",
      link: [
        { rel: 'icon', type: 'image/png', href: '/favicon-96x96.png', sizes: '96x96' },
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg', sizes: '96x96' },
        { rel: 'shortcut icon', href: '/favicon.ico' },
        { rel: 'apple-touch-icon', href: '/apple-touch-icon.png', sizes: '180x180' },
        { rel: 'manifest', href: '/site.webmanifest' },
      ],
      meta: [
        {
          name: 'description',
          content: '' // TODO: add general site description
        },
        {
          name: 'keywords',
          content: '' // TODO: add general site keywords (optional)
        },
        { name: 'apple-mobile-web-app-title', content: 'Korbil' },
        { name: 'format-detection', content: 'telephone=no' },
        { 'http-equiv': 'X-UA-Compatible', content: 'ie=edge' },
      ]
    }
  },

  image: {
    // format: ['avif', 'webp'],
    presets: {
      default: {
        modifiers: {
          format: 'avif,webp',
          quality: 90,
        },
      },
    },
    screens: breakpoints
  },

  i18n: {
    locales: [
      {
        code: 'en',
        language: 'en-US',
        isCatchallLocale: true,
        file: 'en.json',
      },
      {
        code: 'sv',
        language: 'sv-SE',
        file: 'sv.json',
      },
    ],
    defaultLocale: 'en',
    vueI18n: '../i18n.config.ts',
    baseUrl,
    strategy: 'prefix_except_default',
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: '_locale',
      redirectOn: 'root'
    },
    compilation: {
      escapeHtml: false
    },
  },
  router: {
    options: {
      linkActiveClass: '_active',
      linkExactActiveClass: '_exact-active',
      scrollBehaviorType: 'smooth',
    }
  },
  routeRules: {
    '/guide': {
      ssr: false
    },
  }
})

// FONTS
// Poppins
// DM Sans
