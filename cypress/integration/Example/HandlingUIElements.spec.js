/// <reference types ="cypress" />

import LoginPage from '../PageObjects/LoginPage'

describe('Login Test Suite', function() 
    {
        before(function()
            {
                cy.log('************ This is Setup Block ************')
                cy.fixture('example').then(function(data) {
                    this.data=data
                })
            }
        )   

        it('Valid Login Page', function() 
            {
                const login=new LoginPage()
                login.visit()
                login.inputEmail(this.data.email)
                login.inputPassword(this.data.password)
                login.loginButton()
                //Title verification
                cy.title().should('eq', 'All courses | Create')
            }
        )

        it('invalid Login Page', function()
        {
            const login = new LoginPage()
            login.visit()
            login.inputEmail('abcd@getnada.com')
            login.inputPassword('abcd')
            login.loginButton()
            cy.get('[role=alert]').should('be.contain', 'Could not login. Please check your username and password.')
        })

        
    }
)