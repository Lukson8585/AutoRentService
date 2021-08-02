import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps'
import DetailsPage from './detailsPage'
const serviceURL = 'http://qalab.pl.tivixlabs.com/'

const detailsPage = new DetailsPage()
let picupDate = '2021-10-10'
let dropOffDate = '2021-10-10'

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
    detailsPage.getSearchButton().click()
});
And('I choose any results and click Rent button', () => {
    // get all information about choosen car
    cy.get('tbody tr').eq(0).then(($carDetails) => {
        cy.get($carDetails).find('td').then(($CarInfo) => {
            const Company = $CarInfo.eq(0).text()

            //TODO finish automated getting text value of choosen auto

            for (let i = 0; i < $CarInfo.length; i++) {
                const el = i;
                var Table = []
                cy.get($CarInfo).eq(el).then(($val1) => {
                    let Value = $val1.text()
                   
                    Table.push(el + ':' + Value)
                    cy.log(Value)
                    cy.writeFile('cypress/fixtures/data.json', Table)
                })
            }
        });
    })

    detailsPage.getRentButtonAction().eq(0).click()
});
Then('I checked details car screen', () => {
   
    cy.get('h5').should('contain', "Charles-Alvarez")
    cy.get('.card').should('contain', "Toyota RAV4")
    cy.get('.card').should('contain', '9W 3J3KBI')
    cy.get('h6').should('contain', "Pickup date: " + picupDate)
    cy.get('h6').should('contain', "Dropoff date: " + dropOffDate)
});
Then('I check is Rent button is visible and have correct text', () => {
    cy.get('.btn-primary')
        .should('be.visible')
        .should('have.text', 'Rent!')
});