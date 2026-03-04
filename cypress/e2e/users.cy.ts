// https://on.cypress.io/api

describe('User Page  Test', () => {
  it('visits the User Page', () => {
    cy.visit('/random-users')
    cy.contains('button', 'Load more...')
    cy.get('li').should('have.length.at.least', 3)
  })
  it('click load button', () => {
    cy.visit('/random-users')
    cy.contains('button', 'Load more...').should('be.visible').click()

    cy.get('li').should('have.length.at.least', 6)
  })
})
