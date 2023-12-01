// privacy.spec.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test

   //seção 12, exercício 1 (Repete teste várias vezes)
Cypress._.times(3, function(){
    it.only('testa a página da política de privacidade de forma independente"', function() {
        cy.visit ('./src/privacy.html')
        cy.contains('Talking About Testing').should('be.visible')
    })
})