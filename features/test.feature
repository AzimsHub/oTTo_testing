Feature: Test Feature

    My first test feature

  Background:
    Given the user has accessed the Google homepage


Scenario: Verifying page url
    When the user accepts cookies 
    Then the user is taken to the Google homepage

Scenario: Verifying the Google search bar
    Then the user can see the Search bar

Scenario: Verifying voice button on Google search bar
    Then the user can see and click the voice button on Google search bar

Scenario: Verifying search button on Google search bar
    Then the user can see and click the search icon button on Google search bar

Scenario: Verifying the ability to click and search on Google search bar
    Then the user can click and type on the search bar 

Scenario: Verifying links are not broken
    Then a check to verify all links work will occur


# // #   Scenario Outline: Verify homepage button text
# // #     Then the "<option>" button is present
# // #     And the "<option>" button text is "<text>"

# // #     Examples:
# // #       | option   | text              |
# // #       | Search   | Google Search     |
# // #       | Refining | Im Feeling Lucky |