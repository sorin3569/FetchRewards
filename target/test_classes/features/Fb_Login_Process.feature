@login
Feature: LoginProcess

  Background:
    Given the user is on the Facebook homepage

  Scenario: Verify all login options are displayed
    When the user clicks login button
    Then display all options