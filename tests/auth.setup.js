import { test as setup } from '@playwright/test';

setup('authenticate', async ({ page }) => {

  await page.goto('https://education-v2.klaimify.in/');

  await page.getByTestId('input-username')
    .fill('Administrator');

  await page.getByTestId('input-password')
    .fill('7b86e9c12a71181b5a9e3af9e446644f');

  await page.getByTestId('button-login')
    .click();

  await page.waitForLoadState('networkidle');

  await page.reload({ waitUntil: 'networkidle' });

  // SAVE SESSION

  await page.context().storageState({
    path: '.auth/user.json',
  });

});