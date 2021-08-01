class PersonalDataPage {

getInputName(){
   return cy.get('#name')
}
getInputLastName(){
    return cy.get('#last_name')
}
getInputCardNumber(){
    return cy.get('#card_number')
}
getInputEmail(){
    return cy.get('#email')
}
getRentButton(){
    return cy.get('.btn-primary')
}
getValidationMessage(){
    return cy.get('.alert-danger')
}
getRentButtonAction(){
    return cy.get('.btn-success')
}

}
export default PersonalDataPage
