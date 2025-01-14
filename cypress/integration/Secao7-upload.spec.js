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

   //seção 7, exercício (select file from folder fixtures)
   it('Seleciona um arquivo da pasta fixtures"', function() {
    cy.get('input[type="file"]').should('not.have.value').selectFile('cypress/fixtures/example.json')
    .should(function($input){
        expect($input[0].files[0].name).to.equal('example.json')
    })
   })

 
   //seção 7, exercício 1 (select file drag-drop from folder fixtures)
   it('seleciona um arquivo simulando um drag and drop', function() {
    cy.get('input[type="file"]').should('not.have.value')
    .selectFile('cypress/fixtures/example.json', {action: "drag-drop"})
    .should(function($input){
        expect($input[0].files[0].name).to.equal('example.json')
    })
   })

   //seção 7, exercício 2 (select file drag-drop from folder fixtures)
   it.only('seleciona um arquivo utilizando uma fixture para a qual foi dada um alias', function() {
    cy.fixture('example.json').as('sampleFile')
    cy.get('input[type="file"]').selectFile('@sampleFile')
    .should(function($input){
        expect($input[0].files[0].name).to.equal('example.json')
    })
   })
})