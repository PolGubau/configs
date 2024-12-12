import { defineConfig } from "astro/config"
import preact from "@astrojs/preact";
import vercel from "@astrojs/vercel";
export default defineConfig({
  site: "https://biome.polgubau.com",
  output:"server",

  i18n: {
      locales: ["es", "en", "de"],
      defaultLocale: "en",
      routing: {
          prefixDefaultLocale: false
      },
      domains: {
          de: "https://biome-de.polgubau.com",
          es: "https://biome-es.polgubau.com",
      }
  },

  integrations: [preact()],
  adapter: vercel({
      isr: true,
  })
})
