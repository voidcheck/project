Feature: CtestFeature
    ctest Feature

    Scenario: Click button ctest1
    Given I visit site
    Given I click ctest1
    Then I click ctest2
    And I got city
    Then Logout app
