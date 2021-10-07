/// <reference types="cypress" />


it('Login Create Quipper', function() {
    
    cy.visit('https://create-develop.quipper.net')
    cy.get('.mb-16').type('leonardi.leonardi@quipper.com')
    cy.get('.PasswordInput > .Input').type('quipper123{enter}')

})