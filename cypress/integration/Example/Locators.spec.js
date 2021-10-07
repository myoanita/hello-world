/// <reference types ="cypress" />

describe('Locating Elements', function() 
    {
        it('Verify types of locators', function()
            {
                cy.visit('https://create-develop.quipper.net') // open the URL quipper
                cy.get('.mb-16').type('leonardi.leonardi@quipper.com') // Input email
                cy.get('.PasswordInput > .Input').type('quipper123{enter}') // input password and login
            }
        )        
    }
)