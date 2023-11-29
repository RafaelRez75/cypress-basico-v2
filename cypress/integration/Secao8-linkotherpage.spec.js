// Secao5-radio-button.spec.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test

/// <reference types = "Cypress" />
describe('Central de Atendimento ao Cliente TAT', function() {
   
    beforeEach(function() {
        cy.visit('./src/index.html')
    })

   //seção 8, exercício (Valida politica de privacidade outra aba)
   it('verifica que a política de privacidade abre em outra aba sem a necessidade de um clique"', function() {
    cy.get('#privacy a').should('have.attr', 'target', '_blank')
   })

   //seção 8, exercício 1 (Valida politica de privacidade mesma aba)
   it.only('acessa a página da política de privacidade removendo o target e então clicando no link"', function() {
    cy.get('#privacy a').invoke('removeAttr', 'target').click()
    cy.contains('Talking About Testing').should('be.visible')
   })

})