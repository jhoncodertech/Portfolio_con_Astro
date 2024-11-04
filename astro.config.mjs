// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import pdf from 'astro-pdf';

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind(),
    pdf() // Configuración básica sin opciones adicionales
  ],
});



