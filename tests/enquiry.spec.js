import { test, expect } from '@playwright/test';

test('Create Enquiry Successfully', async ({ page }) => {

  // ---------- OPEN APPLICATION ----------

  await page.goto('https://education-v2.klaimify.in/dashboard');

  await page.reload({ waitUntil: 'networkidle' });

  // ---------- NAVIGATION ----------

  await page.getByTestId('link-admissions').click();

  await page.getByTestId('link-enquiries').click();

  await page.getByTestId('button-create-enquiry').click();

  // ---------- STUDENT DETAILS ----------

  await page.getByRole('textbox', { name: 'First Name*' })
    .fill('Vina');

  await page.getByRole('textbox', { name: 'Last Name*' })
    .fill('Sahu');

  await page.getByRole('button', { name: 'Date of Birth*' })
    .click();

  await page.getByRole('gridcell', { name: '2' })
    .first()
    .click();

  // Gender

  await page.getByRole('combobox')
    .filter({ hasText: 'Male' })
    .click();

  await page.getByRole('option', { name: 'Female' })
    .click();

  // Category

  await page.getByRole('combobox')
    .filter({ hasText: 'General' })
    .click();

  await page.getByRole('option', { name: 'General' })
    .click();

  // Contact Details

  await page.getByRole('textbox', { name: 'Mobile Number' })
    .fill('9876543210');

  await page.getByRole('textbox', { name: 'Email Address' })
    .fill('vina@gmail.com');

  await page.getByRole('textbox', { name: 'WhatsApp Number' })
    .fill('9876543211');

  await page.getByRole('textbox', { name: 'Aadhar Card Number' })
    .fill('123456789012');

  await page.getByTestId('button-next').click();

  // ---------- FATHER DETAILS ----------

  await page.getByRole('textbox', { name: "Father's Full Name*" })
    .fill('Sohan Sahu');

  await page.getByRole('textbox', { name: "Father's Phone*" })
    .fill('9876543212');

  await page.getByRole('textbox', { name: "Father's Email" })
    .fill('sohan@gmail.com');

  await page.getByRole('textbox', { name: "Father's Occupation" })
    .fill('Teacher');

  // ---------- MOTHER DETAILS ----------

  await page.getByRole('textbox', { name: "Mother's Full Name*" })
    .fill('Rahi Sahu');

  await page.getByRole('textbox', { name: "Mother's Phone*" })
    .fill('9876543213');

  await page.getByRole('textbox', { name: "Mother's Email" })
    .fill('rahi@gmail.com');

  await page.getByRole('textbox', { name: "Mother's Occupation" })
    .fill('Teacher');

  // ---------- ADDRESS DETAILS ----------

  await page.getByRole('textbox', { name: 'Complete Address *' })
    .fill('Dubey Colony, Mowa');

  // State

  await page.getByRole('combobox')
    .nth(0)
    .click();

  await page.getByRole('option', { name: 'Chhattisgarh' })
    .click();

  // City

  await page.getByRole('textbox', { name: 'City*' })
    .fill('Raipur');

  // Pincode

  await page.getByRole('textbox', { name: 'Pincode*' })
    .fill('492001');

  await page.getByTestId('button-next').click();

  // ---------- ACADEMIC DETAILS ----------

  // Class

  await page.getByRole('combobox')
    .filter({ hasText: 'Select class' })
    .click();

  await page.getByRole('option', {
    name: 'Class 1',
    exact: true
  }).click();



  // Category

  await page.getByRole('combobox')
    .nth(1)
    .click();

  await page.getByRole('option', { name: 'General' })
    .click();

  // Transport Required

  await page.getByRole('combobox')
    .nth(2)
    .click();

  await page.getByRole('option', { name: 'Yes' })
    .click();

  // ---------- FILE UPLOAD ----------

  await page.setInputFiles(
    'input[type="file"]',
    'tests/test-data/patient.jpeg'
  );

  // ---------- NOTES ----------

  await page.getByRole('textbox', { name: 'Additional Notes' })
    .fill('Student Enquiry');

  // ---------- SUBMIT ----------

  await page.getByTestId('button-submit').click();

  // ---------- VALIDATION ----------

  // Replace selector/message according to your UI

  await expect(
    page.locator('.toast-message')
  ).toContainText('Enquiry submitted successfully!');

});