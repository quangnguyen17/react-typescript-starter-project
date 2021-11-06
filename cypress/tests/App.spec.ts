const APP_URL = 'http://localhost:3000'

describe('App', () => {
  beforeEach(() => {
    cy.visit(APP_URL)
  })

  it('render "react-typescript-template" text', () => {
    cy.contains('react-typescript-template')
  })
})

export {}
