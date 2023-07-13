describe('My First Test', () => {
  it('Visits the initial project page', () => {
    cy.visit('/login');
    cy.url().should('includes', 'login');
    cy.get('#loginFormTitle').should('be.visible');
    cy.get('#loginFormTitle').should ('have.text', 'Login Form');
    cy.get('#loginFormEmailInputValue').should('not.exist');
    cy.get('#loginFormPasswordInputValue').should ('not.exist');
   
    
    })
})
