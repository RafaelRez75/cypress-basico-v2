// privacy.spec.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test

   //seção 8, exercício 2 (Abre politica de privacidade de forma idependente)

it.only('testa a página da política de privacidade de forma independente"', function() {
    cy.visit ('./src/privacy.html')
    cy.contains('Talking About Testing').should('be.visible')
})