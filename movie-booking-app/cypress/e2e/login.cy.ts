describe('My First Login', () => {
    it('Passed', () => {
        cy.visit('/login')
        cy.url().should('includes', 'login')
        
        
      });
        
      
    })
  