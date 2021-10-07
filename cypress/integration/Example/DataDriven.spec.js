/// <reference types ="cypress" />

// const { after } = require("mocha")

describe('MyTestSuites', function() 
    {
        before(function(){
            cy.log('************ This is Setup Block ************')
            cy.fixture('example').then(function(data) {
                this.data=data
            })
            cy.visit('https://create-develop.quipper.net')
            cy.url().should('include', 'quipper').should('include', 'create')
        }
        )
        
        beforeEach(function() {
            cy.log('************ This is Login Block ************')
            cy.get('.mb-16').type(this.data.email) // Input email
            cy.get('.PasswordInput > .Input').type(this.data.password) // input password
            cy.get('[data-testid=login-button]').should('be.enabled').should('be.visible').click()
        })

        afterEach(function() {
            cy.log('************ This is Logout Block ************')
            cy.get('[data-testid=avatar-menu] > .m-auto').click()
            cy.get('.rc-dropdown-menu-item.cursor-pointer').should('be.visible').click()
        })

        it('Test', function() 
            {
                cy.log('************ This is Test Block ************')
            }
        )

        it('Test2', function() 
            {
                cy.log('************ This is Test2 Block ************')
            }
        )
    }
)