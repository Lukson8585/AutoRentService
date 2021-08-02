import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps'
import DetailsPage from '../validateDetalisScreen/detailsPage'
import SearchPage from './searchPage'
const serviceURL = 'http://qalab.pl.tivixlabs.com/'

const detailsPage = new DetailsPage()
const searchPage = new SearchPage()

let picupDate = '2021-10-10'
let dropOffDate = '2021-10-10'
let setCountry = 'France'
let setCity = 'Paris'
let carModel = 'Skoda Octavia'


Given('I visit rent car website', () => {
    cy.visit(serviceURL)
    cy.url().should('contain', serviceURL)
})

When('I searching for only Skoda Octavia in France,Paris', () => {
    detailsPage.getCountryDropBox().select(setCountry).should('have.value', '3')
    detailsPage.getCityDropBox().select(setCity).should('have.value', '4')
    searchPage.getInputModel().type(carModel)
    // only dates are obligatory for saerching car
    
    detailsPage.getPickupDate().type(picupDate) // there is a issue about date format on UI is dd.mm.rrrr/ but input format validation is rrrr.mm.dd
    detailsPage.getPickupDate().should('have.value', picupDate)
    detailsPage.getDropOffDate().type(dropOffDate)
    detailsPage.getDropOffDate().should('have.value', dropOffDate)
})

And('I click search button', () => {
    detailsPage.getSearchButton().click()
})

Then('I check search results for one model of car', () => {

    // Validation of results of searching for Skoda Octavia
    cy.get('tbody tr').then(($tabela) =>{
        for (let i=0 ; i<$tabela.length; i++){
            const el = i
            let modelValue
            cy.get($tabela).eq(el).find('td').eq(1).should('have.text' , carModel)
            
        }
    })
})
