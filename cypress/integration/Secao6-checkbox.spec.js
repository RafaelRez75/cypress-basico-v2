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

   //seção 6, exercício (select all itens checkbox and uncheck the last)
   it('Marca ambos checkbox, depois desmarca o último"', function() {
    cy.get('input[type="checkbox"]').check().last().uncheck().should('not.be.checked')
})

 //seção 6, exercício 1 (validar telefone obrigatório mas não preenchido)
   it.only('exibe mensagem de erro quando o telefone se torna obrigatório mas não é preenchido antes do envio do formulário', function() {
    cy.get('#firstName').type('Rafael', {delay:100})
    cy.get('#lastName').type('Silva', {delay:100})
    cy.get('#email').type("emailemail.com", {delay:100})
    cy.get('#phone-checkbox').check().should('be.checked')
    cy.contains('button', "Enviar").click()
    cy.get('.error').should('be.visible')
   })
})