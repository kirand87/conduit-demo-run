await page.goto('https://education-v2.klaimify.in/');

await page.getByTestId('input-username')
  .fill('Administrator');

await page.getByTestId('input-password')
  .fill('7b86e9c12a71181b5a9e3af9e446644f');

await page.getByTestId('button-login').click();


// WAIT AFTER LOGIN

await page.waitForLoadState('networkidle');


// REFRESH PAGE

await page.reload();


// WAIT AGAIN

await page.waitForLoadState('networkidle');


// NAVIGATION

await page.getByTestId('link-admissions').click();

await page.getByText('Enquiries').click();