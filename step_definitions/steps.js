const { I } = inject();

Given('I navigate to the site', () => {
I.amOnPage('/url') // Verify correct URL defined as in package.json file (url: 'https://test1234.planday.com/',)
I.wait(5);
});

Then('I consent to cookies', () => {
    I.checkOption(".cookie-banner__button") // Accept cookies
});
Given(/^I see "([^"]*)"$/, async function () {
    await
    I.waitForElement('.login-form-input__header', 3,); // Verify input fields
});
Given(/^I see "([^"]*)"$/, async function () {
    await
    I.waitForElement('.login-form__button', 3,); // Verify input button
});

//Given('Input fields', () => {
//    I.waitForElement('.login-form-input__header', 3); // Verify input fields
//});

//Given('I see login button', () => {
//    I.waitForElement('.login-form__button', 3); // Verify button
//});

Given('Login with username and password', (table) => {
 const cells = table.rows[1].cells
    I.fillField ('//input[@id=\'Username\']', cells [0].value) // Fill in username input field
    I.fillField ('//input[@id=\'Password\']', cells [1].value) // Fill in password input field
});

Then('I click Login button', () => {
    I.doubleClick("(//button[@type=\'submit\'])[2]") // Click on login button
});

Then(/^I wait (\d+)$/, function (ms) {
    I.wait (ms); // Waiter after each action if needed
});

Given ('I see Planday Logo', () => {
    I.waitForElement('//img[@alt=\'Planday\']'); // Verify page by element
    I.wait (5);
});

Then('I load page', () => {
    I.refreshPage(); // Refresh page
});

Then(/^I see text "([^"]*)"$/, async function () {
    await
    I.waitForText('The username or password is incorrect.', 5, '.validation-message'); // Verify validation message
});

Given(/^I see "([^"]*)" in the schedule list$/, async function () {
    await
    I.grabNumberOfVisibleElements('(//span[@title=\'0h 0m,0 Shifts\'][contains(.,\'0h 0m / 0 Shifts\')])'); // Verify specific elements by locator
});
Given(/^I navigate to "([^"]*)"$/, async function () {
    await
    I.amOnPage ('/schedule_url'); // Verify correct URL is used
});