Feature: Login

Scenario: login with correct email and password
    Given user is in login page
    When user login using correct email and password
    Then user successfully logged in

