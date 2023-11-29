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

   //seção 5, exercício (select item in a radio)
   it('Marca o tipo de atendimento "Feedback"', function() {
    cy.get('input[type="radio"][value="feedback"]').check().should('have.value', 'feedback')
})

 //seção 5, exercício 1 (select all itens in a radio)
 it.only('Marca todos os tipos de atendimentos', function() {
    cy.get('input[type="radio"]').should('have.length', 3).each(function($radio){
        cy.wrap($radio).check()
        cy.wrap($radio).should('be.checked')
    })

    //ou

    /*cy.get('input[type="radio"][value="ajuda"]').check().should('have.value', 'ajuda')
    cy.get('input[type="radio"][value="elogio"]').check().should('have.value', 'elogio')
    cy.get('input[type="radio"][value="feedback"]').check().should('have.value', 'feedback')*/
})

})