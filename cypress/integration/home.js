describe('visits homepage', () => {
    it('renders correctly', () =>{
        cy.visit('/')
        cy.get('#login-form').should('exist')
    })
})