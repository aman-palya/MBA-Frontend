describe('template spec', () => {
    it('passed', () => {
      cy.visit('/register')
      cy.url().should('includes', 'register')
    })
  })