Feature: Search for specific car model

    I want to search only Skoda Octavia car in France/Paris

    Scenario: Check Searching all Skoda Octavia specific car
        Given I visit rent car website
        When I searching for only Skoda Octavia in France,Paris
        And I click search button
        Then I check search results for one model of car
        


        