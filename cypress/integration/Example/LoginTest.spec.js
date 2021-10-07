/// <reference types ="cypress" />

//const { after } = require("mocha")

describe('LoginTestSuites', function() 
    {
        let userDetails
        before(function()
            {
                cy.log('************ This is Setup Block ************')
                cy.fixture('loginDetails.json').then(loginDetails =>
                    {
                    userDetails=loginDetails
                })
            }
        )

        it('Login Successfull', function() 
            {
                cy.log('************ This is Login Successfull Test ************')
                cy.login(userDetails.email[0],userDetails.password[0])
                cy.title().should('eq', 'All courses | Create')
                cy.get('.Input').type('Android')
                cy.logout()
                cy.url().should('be.contain', 'create')
            }
        )

        it('Invalid Credentials', function()
            {
                cy.log('************ This is Invalid Credentials Test ************')
                cy.login(userDetails.email[1],userDetails.password[1])
                cy.get('[role=alert]').should('be.contain', 'Could not login. Please check your username and password.')

            }
        )
    }
)