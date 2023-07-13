describe('template spec', () => {
    it('passes', () => {
      cy.visit('/usermovie')
      cy.url().should('includes', 'usermovie')
    })
  })