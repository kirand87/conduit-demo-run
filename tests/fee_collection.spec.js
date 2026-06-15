import { test, expect } from '@playwright/test';

test('Create Enquiry Successfully', async ({ page }) => {

  // ---------- OPEN APPLICATION ----------

  await page.goto('https://education-v2.klaimify.in/dashboard');

  await page.reload({ waitUntil: 'networkidle' });

  // ---------- NAVIGATION ----------

  await page.getByTestId('link-finance').click();
  await page.getByTestId('link-student fees').click();
  await page.getByTestId('input-search-student').click();
  await page.getByTestId('input-search-student').fill('niranjana ');
  await page.getByTestId('row-student-ENQ-2026-00057').getByRole('button').filter({ hasText: /^$/ }).click();
  await page.getByRole('cell', { name: 'Select ACC-SINV-2026-' }).click();
  await page.getByRole('button', { name: 'Collect' }).click();
  await page.getByRole('button', { name: 'Confirm Payment' }).click();