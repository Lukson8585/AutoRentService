Feature: Inputing personal data in form

    I want provide personal data during renting a car
    Checked properly data format
    checking wrong format Email
    checking too long Card number 

    Scenario: Providing personal data for rent a car
        Given I visit rent car website
        When I provide search for any cars in any coutry or city
        And I click search button
        And I click Rent button for one of car
        And I click Rent button on car details screen
        And I entered too long card number and click rent
            | Name | LastName | CardNumber                  | Email               |
            | Tom  | Cypress  | 123451234512345123451234511 | cypress@cypress.com |
        And I click rent button to validate form
        And I entered email without @ sign
            | Name | LastName | CardNumber                  | Email               |
            | Tom  | Cypress  | 1234512345123451234512345 | cypresscypress.com |
        And I click rent button to validate form about email
        And I enter properly data
            | Name | LastName | CardNumber                | Email               |
            | Tom  | Cypress  | 1234512345123451234512345 | cypress@cypress.com |
        Then I click rent button to validate proper data form

