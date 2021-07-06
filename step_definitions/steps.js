const { I } = inject();

Given('I navigate to the site', () => {
I.amOnPage('/url')
I.wait(5);
});

Then('I consent to cookies', () => {
    I.checkOption(".cookie-banner__button")
});

Given('I see input fields', () => {
    I.waitForElement('.login-form-input__header', 3); // Verify input fields
});

Given('I see login button', () => {
    I.waitForElement('.login-form__button', 3); // Verify button
});

Given('Login with username and password', (table) => {
 const cells = table.rows[1].cells
    I.fillField ('//input[@id=\'Username\']', cells [0].value)
    I.fillField ('//input[@id=\'Password\']', cells [1].value)
});

Then('I click Login button', () => {
    I.doubleClick("(//button[@type=\'submit\'])[2]")
});

Then(/^I wait (\d+)$/, function (ms) {
    I.wait (ms);
});

Given ('I see Planday Logo', () => {
    I.waitForElement('//img[@alt=\'Planday\']');
    I.wait (5);
});

Then('I load page', () => {
    I.refreshPage();
});

Then(/^I see text "([^"]*)"$/, async function () {
    I.waitForText('The username or password is incorrect.', 5, '.validation-message');
});

Given(/^I navigate to Scheduling page$/, function () {
    I.amOnPage ('/schedule_url');
});

Given(/^I see three employees in the schedule list$/, async function () {
    await
    I.grabNumberOfVisibleElements('(//span[@title=\'0h 0m,0 Shifts\'][contains(.,\'0h 0m / 0 Shifts\')])');
});