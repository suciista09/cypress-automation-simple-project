describe('example to-do app', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  context('simple UI test', () => {

    it('add and verify task', () => {
      const todoText = 'Pay Bill'
      cy.get('.new-todo')
          .type(todoText)
          .type('{enter}')

      cy.get('.todo-list li')
          .should('contain', todoText)
    })

  })

  context('using fixture', () => {

    it('get to do list from stubbed response', function () {
      cy.server()
      cy.intercept('GET', '/api/todos',{fixture: 'get-simple-list'})

      cy.visit('/')

      cy.get('.todo-list li')
          .should('have.length', 3)
          .and('contain', 'Buy Eggs')
    });

  })
})
