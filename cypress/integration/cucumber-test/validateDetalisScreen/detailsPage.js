class DetailsPage {
getCountryDropBox(){
    return cy.get('select').eq(0)
}
getCityDropBox(){
    return cy.get('select').eq(1)
}
getPickupDate(){
    return cy.get('#pickup')
}
getDropOffDate(){
    return cy.get('#dropoff')
}
getSearchButton(){
    return cy.get('.btn-primary')
}
getRentButtonAction(){
    return cy.get('.btn-success')
}
getRentButtonDetaliScreen(){
    return cy.get('.btn-primary')
}


}
export default DetailsPage
