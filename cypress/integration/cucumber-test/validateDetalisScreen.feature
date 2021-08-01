Feature: Validation Car details screen

    I want to validate car details screen

    Scenario: Validation of Car details screen
        Given I visit rent car website
        When I provide search for any cars in any coutry or city
        And I click search button
        And I choose any results and click Rent button
        Then I checked details car screen
        Then I check is Rent button is visible and have correct text


        