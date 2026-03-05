// https://on.cypress.io/api

describe('User Page  Test', () => {
  it('visits the User Page', () => {
    cy.visit('/our-students')
    cy.contains('button', 'Load more...')
    cy.get('li').should('have.length.at.least', 6)
  })
  it('click load button', () => {
    cy.visit('/our-students')
    cy.contains('button', 'Load more...').should('be.visible').click()

    cy.get('li').should('have.length.at.least', 12)
  })
})
