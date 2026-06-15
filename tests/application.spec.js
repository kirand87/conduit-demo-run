import { test, expect } from '@playwright/test';

test('Create Enquiry Successfully', async ({ page }) => {

  // ---------- OPEN APPLICATION ----------

  await page.goto('https://education-v2.klaimify.in/dashboard');

  await page.reload({ waitUntil: 'networkidle' });

  await page.getByTestId('link-admissions').click();
  await page.getByTestId('link-applications').click();

  await page.getByTestId('button-create-from-paid-registration').click();
  await page.getByTestId('button-select-registration-ENQ-2026-00057').click();


  await page.getByRole('option', { name: 'General' }).click();

  await page.getByRole('textbox', { name: 'Caste' }).fill('Hindu');

  await page.getByLabel('Hinduism').getByText('Hinduism').click();

  await page.getByRole('textbox', { name: 'Last Board / University' }).fill('CBSE');

  await page.getByRole('textbox', { name: 'Last Program' }).fill('12');
  await page.getByTestId('button-next').click();

  await page.locator('[id=":rqg:-form-item"]').fill('rahul@gmail.com');
  

  await page.locator('[id=":rqh:-form-item"]').fill('Teacher');

  await page.getByRole('textbox', { name: 'Father\'s Aadhar' }).fill('437897897893');

  await page.locator('[id=":rqm:-form-item"]').fill('Teacher');

  await page.locator('[id=":rql:-form-item"]').fill('rahi@gmail.com');

  await page.getByRole('textbox', { name: 'Mother\'s Aadhar' }).fill('738978293783');
  await page.getByTestId('button-next').click();
  await page.getByRole('combobox').click();
  await page.getByRole('option', { name: 'AB+' }).click();
  
  await page.getByRole('textbox', { name: 'Height (cm)' }).fill('120');

  await page.getByRole('textbox', { name: 'Weight (kg)' }).fill('30');
  await page.getByTestId('button-next').click();
  // await page.getByTestId('input-file-student-photo').click();
  // await page.getByTestId('input-file-student-photo').setInputFiles('image - 2026-06-03T152525.759.png');
  await page.getByTestId('input-file-Pan Card').click();
  await page.getByTestId('input-file-Pan Card').setInputFiles('image - 2026-06-03T152525.759.png');
  await page.getByTestId('input-file-Aadhar Card').click();
  await page.getByTestId('input-file-Aadhar Card').setInputFiles('image - 2026-06-02T175419.004.png');
 
  await page.getByTestId('input-aadhar-number').fill('798768979857');


  await page.getByTestId('input-pan-card-number').fill('ABCDE1234F');
  await page.getByTestId('button-next').click();
  await page.locator('div').filter({ hasText: /^Need HostelEnable this option only if the student requires hostel accommodation\.$/ }).nth(1).click();
  await page.getByRole('checkbox', { name: 'Need Hostel' }).click();
  await page.getByRole('combobox', { name: 'Hostel *' }).click();
  await page.getByLabel('Girls Hostel').getByText('Girls Hostel').click();
  await page.getByRole('combobox', { name: 'Hostel Type' }).click();
  await page.getByLabel('Non-AC').getByText('Non-AC').click();
  await page.getByRole('checkbox', { name: 'Need Transport' }).click();
  await page.getByRole('combobox', { name: 'Transport Route *' }).click();
  await page.getByLabel('Primary Van Route (Green').getByText('Primary Van Route (Green').click();
  await page.getByRole('combobox', { name: 'Pickup Point *' }).click();
  await page.getByLabel('Teachers Colony - ₹1,000/month').getByText('Teachers Colony - ₹1,000/month').click();
  await page.getByTestId('button-next').click();
  await page.getByTestId('button-next').click();
  await page.getByTestId('checkbox-declaration-agreed').click();
  await page.getByTestId('button-submit').click();
});



