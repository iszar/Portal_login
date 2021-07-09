@test
Feature: Login

  Background: As a user I want to login to Planday portal

#   1. Navigate to the following Planday portal https://test1234.planday.com/ and verify that the login form is present.
#      Verify that the main login fields and buttons are also displayed.

    Scenario: Navigate to the base URL and validate the main login fields and button are displayed
    Given I navigate to the site
      And I consent to cookies
      And I see "Input fields"
      And I see "Login button"

#   2. Fill in the Username & Password fields with invalid data.
#      Verify if the proper error messages are shown.

  Scenario: Fill in the Username & Password with invalid data and verify the error messages are shown
    Given Login with username and password
          |Username |Password|
          |test123  |APItesting|
      And I click Login button
      #And I click Login button
      And I see text "The username or password is incorrect."

#   3. Now, login into the portal using the following credentials:
#   • Username: plandayqa@outlook.com
#   • Password: APItesting21

  Scenario: Login into the portal using valid credentials
    Given I load page
    Then Login with username and password
          |Username             |Password|
          |plandayqa@outlook.com|APItesting21|
      And I click Login button
      And I wait 3
    When I load page
    Then I see Planday Logo

#    4. Using the top navigation bar go to the Schedule page.
#       Verify the URL contains /page/ schedule.
#    5. At this point, the schedule grid view should display an interval of 1 week.
#       Count and assert that the number of displayed employees is 3.

  Scenario: Count and display the number of employees in the schedule list
    Given I navigate to "Scheduling page"
      And I see "three employees" in the schedule list
      And I wait 5