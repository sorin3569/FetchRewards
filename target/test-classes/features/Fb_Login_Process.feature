@Smoke
Feature: LoginProcess
  Scenario: Login with email

    Given user is on the Facebook homepage
    When user enters email and password
    And user clicks login button
    Then user should be on profile page
    When user inputs "Fetch Rewards" in search field and press enter
    Then user should see Fetch Rewards profile page
    When user goes to Fetch Rewards page
    And user clicks like button
    Then like button should change to liked
