import { test, expect } from '@playwright/test';

test('Login And Save Session', async ({ page, context }) => {

  // ---------- CLEAR OLD COOKIES ----------

  await context.clearCookies();

  // ---------- OPEN SITE ----------

  await page.goto('https://education-v2.klaimify.in');

  // ---------- HANDLE REDIRECT ----------

  await page.waitForLoadState('networkidle');

  // If already redirected to app/home
  // then logout manually by opening login page

  if (page.url().includes('/app')) {

    await page.goto(
      'https://education-v2.klaimify.in/login'
    );
  }

  // ---------- WAIT FOR LOGIN FORM ----------

  await page.getByTestId('input-username')
  .fill('Administrator');

await page.getByTestId('input-password')
  .fill('7b86e9c12a71181b5a9e3af9e446644f');

await page.getByTestId('button-login').click();

  // ---------- WAIT FOR HOME ----------

  await page.waitForURL('**/dashboard', {
    timeout: 60000,
  });

  await page.waitForLoadState('networkidle');

  // ---------- SAVE SESSION ----------

  await context.storageState({
    path: '.auth/user.json',
  });

  console.log('✅ Session saved successfully');

});