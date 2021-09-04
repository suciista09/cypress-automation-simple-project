Feature: Product List Feature

@women-category
Scenario: User able to open women category page
    Given user is in homepage
    When user open 'Women' category
    Then user is in 'Women' category page