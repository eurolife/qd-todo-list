context('Updating', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/');
  });

  it('Shows a todo item is done when clicking button', () => {
    cy.get('ul li:nth-child(2) [data-cy="checkButton"]').click()
    cy.get('ul li:nth-child(2)')
      .find('span')
      .should('have.class', 'line-through')
  });

  it('Deletes a todo item', () => {
    cy.window()
    .its("store")
    .invoke("getState")
    .its("todos")
    .should("have.length", 6)

    cy.get('ul li:first-child [data-cy=deleteButton]').click();

    cy.window()
    .its("store")
    .invoke("getState")
    .its("todos")
    .should("have.length", 5)
  })

  it('Adds a new todo item', () => {
    cy.window()
    .its("store")
    .invoke("getState")
    .its("todos")
    .should("have.length", 6);

    cy.get('[data-cy=addInput]').type("Another thing to do{enter}");

    cy.window()
    .its("store")
    .invoke("getState")
    .its("todos")
    .should("have.length", 7);

  });
});