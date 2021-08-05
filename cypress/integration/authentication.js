
context('Authentication', () =>{
    const email ='tester@gmail.com'
    const password ='tester'

    before(() => {
        cy.request('POST', `http://localhost:5000/api/user/signin`, {
            email,
            password
        })
    })
    
    it('should work with right credentials', () => {
        cy.viewport(300, 600)
        cy.visit('/')

        cy.get('#email').type(email)
        cy.get('#password').type(password)
        cy.get('#login-button').click()
        cy.visit('/dashboard')
    })
})