import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://www.icode-ks.com', // apex 308-redirects here (Vercel)
  integrations: [sitemap()],
});
