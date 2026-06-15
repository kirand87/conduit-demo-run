import { defineConfig } from '@playwright/test';

export default defineConfig({

  testDir: './tests',

  use: {
    headless: false,
    storageState: '.auth/user.json',
  },

});