import { test, expect } from '@playwright/test';
import { ADDRGETNETWORKPARAMS } from 'node:dns/promises';
import { studentData } from '../utils/studentData';

test('Create Registration Successfully', async ({ page }) => {

  // ---------- OPEN APPLICATION ----------

  await page.goto('https://education-v2.klaimify.in/dashboard');

  await page.reload({ waitUntil: 'networkidle' });

  // ---------- NAVIGATION ----------

  await page.getByTestId('link-admissions').click();

  await page.getByTestId('link-registrations').click();


  await page.getByTestId('button-create-registration').click();

  await page.getByRole('textbox', { name: 'First Name*' }).fill('Ghulam');
  await page.getByRole('textbox', { name: 'Last Name*' }).fill('Rabbani');
  await page.getByRole('button', { name: 'Date of Birth*' }).click();
  await page.getByRole('gridcell', { name: '3' }).nth(1).click();
  await page.getByRole('combobox').filter({ hasText: 'Male' }).click();
  await page.getByLabel('Female').getByText('Female').click();
  await page.getByRole('textbox', { name: 'Mobile Number' }).fill('7589759487');
  await page.getByRole('textbox', { name: 'Email Address' }).fill('ghulam@gmail.com');
  await page.getByRole('textbox', { name: 'WhatsApp Number' }).fill('7895798457');
  await page.getByRole('textbox', { name: 'Aadhar Card Number' }).fill('748974548789');
  await page.getByTestId('button-next').click();

  await page.getByRole('textbox', { name: 'Father\'s Full Name*' }).fill('Kaif');

  await page.getByRole('textbox', { name: 'Father\'s Phone*' }).fill('7857548978');
  
  await page.getByRole('textbox', { name: 'Father\'s Email' }).fill('kaif@gmail.com');

  await page.getByRole('textbox', { name: 'Father\'s Occupation' }).fill('Teacher');

  await page.getByRole('textbox', { name: 'Mother\'s Full Name*' }).fill('Saba');
 
  await page.getByRole('textbox', { name: 'Mother\'s Phone*' }).fill('7387584789');

  await page.getByRole('textbox', { name: 'Mother\'s Email' }).fill('saba@gmail.com');

  await page.getByRole('textbox', { name: 'Mother\'s Occupation' }).fill('Teacher');

  await page.getByRole('textbox', { name: 'Complete Address *' }).fill('Dubey ');
  await page.getByRole('textbox', { name: 'Complete Address *' }).press('CapsLock');
  await page.getByRole('textbox', { name: 'Complete Address *' }).fill('Dubey Colony');
  await page.getByRole('combobox').click();
  await page.getByRole('option', { name: 'Chhattisgarh' }).click();
  await page.getByRole('textbox', { name: 'City*' }).click();

  await page.getByRole('textbox', { name: 'City*' }).fill('Raipur');
 
  await page.getByRole('textbox', { name: 'Pincode*' }).fill('789439');
  await page.getByTestId('button-next').click();
  await page.getByRole('combobox').filter({ hasText: 'Select class' }).click();
  await page.getByLabel('Class 1', { exact: true }).getByText('Class 1', { exact: true }).click();
  await page.getByRole('combobox').nth(1).click();
  await page.getByRole('option', { name: 'General' }).click();
  await page.getByRole('combobox').filter({ hasText: /^$/ }).click();
  await page.getByRole('option', { name: 'Yes' }).click();
  await page.getByRole('checkbox', { name: 'Hostel required?' }).click();
  // await page.getByRole('button', { name: 'Choose File' }).click();
  await page.setInputFiles(
    'input[type="file"]',
    'tests/test-data/patient.jpeg'
    );
  await page.getByRole('textbox', { name: 'Additional Notes' }).fill('Registration for Class 1');
  await page.getByTestId('button-submit').click();
  await page.getByText('Registration REG-2026-00040').nth(1).click();
});