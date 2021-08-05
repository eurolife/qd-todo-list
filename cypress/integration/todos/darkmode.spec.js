context('Dark mode', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/');
  });

  it('Switches to dark mode', () => {
    cy.get('[data-cy=selectDarkMode]').click();

    cy.get('body')
      .should('have.class', 'dark')

  });

  
});