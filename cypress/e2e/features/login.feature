Feature: Login to the application

  Scenario: Valid Login to Xendit Dashboard
    Given I am on login page
    When I submit the login with email and password
    Then I should see the homepage