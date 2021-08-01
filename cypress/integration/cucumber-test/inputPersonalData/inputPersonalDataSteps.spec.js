import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps'
import PersonalData from './personalDataPage'
import DetailsPage from '../validateDetalisScreen/detailsPage'
const serviceURL = 'http://qalab.pl.tivixlabs.com/'

let picupDate = '2021-10-10'
let dropOffDate = '2021-10-10'

const personalData = new PersonalData()
const detailsPage = new DetailsPage()
Given('I visit rent car website', () => {
    cy.visit(serviceURL)
    cy.url().should('contain', serviceURL)
}),

    When('I provide search for any cars in any coutry or city', () => {
    detailsPage.getCountryDropBox().select('Poland').should('have.value', '1')
    detailsPage.getCityDropBox().select('Wroclaw').should('have.value', '1')
    // only dates are obligatory for saerching car
    detailsPage.getPickupDate().type(picupDate) // there is a issue about date format on UI is dd.mm.rrrr/ but input format validation is rrrr.mm.dd
    detailsPage.getPickupDate().should('have.value', picupDate)
    detailsPage.getDropOffDate().type(dropOffDate)
    detailsPage.getDropOffDate().should('have.value', dropOffDate)

    })

And('I click search button', () => {
    personalData.getRentButton().click()
});
And('I click Rent button for one of car', () => {

    personalData.getRentButtonAction().eq(0).click()
});
And('I click Rent button on car details screen', () => {
    personalData.getRentButton().click()
});
And('I entered too long card number and click rent', (datatable) => {
    datatable.hashes().forEach(element => {
        personalData.getInputName().type(element.Name)
        personalData.getInputLastName().type(element.LastName)
        personalData.getInputCardNumber().type(element.CardNumber)
        personalData.getInputEmail().type(element.Email)

    });
});
And('I click rent button to validate form', () => {
    personalData.getRentButton().click()
    personalData.getValidationMessage()
        .should('be.visible')
        .should('contain', 'Card number value is too long')
});
And('I entered email without @ sign', (datatable) => {
    datatable.hashes().forEach(element => {
        personalData.getInputName().type(element.Name)
        personalData.getInputLastName().type(element.LastName)
        personalData.getInputCardNumber().type(element.CardNumber)
        personalData.getInputEmail().type(element.Email)

    });
});

And('I click rent button to validate form about email', () => {
    personalData.getRentButton().click()
    personalData.getValidationMessage()
        .should('be.visible')
        .should('contain', 'Please provide valid email')
});
And('I enter properly data', (datatable) => {
    datatable.hashes().forEach(element => {
        personalData.getInputName().type(element.Name)
        personalData.getInputLastName().type(element.LastName)
        personalData.getInputCardNumber().type(element.CardNumber)
        personalData.getInputEmail().type(element.Email)

    });
});
Then('I click rent button to validate proper data form', () => {
    personalData.getRentButton().click()
    personalData.getValidationMessage()
        .should('be.not.visible')
});
