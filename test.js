// Feature('Login')
// Before(({ I }) => {
//     I.amOnPage('/url')
// })
// Scenario('login', ({ I }) => {
//     //I.amOnPage ('/url');
//     I.click ('.cookie-banner__button') // opt in to proceed to login
//     I.wait(5); // waiter
//     I.waitForElement('.login-form-input__header'); // Verify input fields
//     I.waitForElement('.login-form__button'); // Verify buttons
//     I.fillField('//input[@id=\'Username\']', 'plandayqa@outlook.com');
//     I.fillField('//input[@id=\'Password\']', 'APItesting21');
//     I.wait(5); // waiter
//     I.click('(//button[@type=\'submit\'])[2]');
//    // I.waitUrlEquals('https://test1234.planday.com/page/home'); // Confirm correct login path
//     //I.amOnPage ('/home_url');
//     I.wait(2); // waiter
//     I.say('/home_url');
//     //I.click('//a[normalize-space()=\'Log out\']') // Log out from application
//     //I.waitForElement({xpath: "//h1[contains(.,'Home')]"})
//     I.wait(2); // waiter
//     I.refreshPage();
//     I.wait(10); // waiter
//     I.waitForElement('//img[@alt=\'Planday\']');
//     I.saveScreenshot("loggedIn.jpg")
// });