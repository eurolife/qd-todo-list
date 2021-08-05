context('Filtering', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/');
  });

  it('Shows number of items not done', () => {
    cy.get('[data-cy=numberActive]')
      .should('contain', '5')
  });

  it('Shows only active items', () => {
    cy.get('[data-cy=showActive]').click({multiple:true, force: true});
    cy.get('ul li').should(($li) => {
      expect($li).to.have.length(6)
    })

    
  })

  it('Shows only completed items', () => {
    cy.get('[data-cy=showCompleted]').click({multiple:true, force: true});
    cy.get('ul li').should(($li) => {
      expect($li).to.have.length(2)
    })

  });

  it('Appear as an active item', () => {
    cy.get('[data-cy=showActive]').click({multiple:true, force: true});
    cy.get('[data-cy=showActive]').should('have.class', 'text-brightblue');

  });
});