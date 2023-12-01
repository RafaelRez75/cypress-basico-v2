// Secao12-advanced.spec.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test

describe('Central de Atendimento ao Cliente TAT', function() {
    
    const THREE_SECONDS_IN_MS = 3000
    const DELAY_TIME = 10
    
    
    beforeEach(function() {
        cy.visit('./src/index.html')
    })

    //
    it("Preenche os campos obrigatórios e envia o formulário", function(){
        
        cy.clock()

        cy.get('#firstName').type('Rafael', {delay:DELAY_TIME})
        cy.get('#lastName').type('Silva', {delay:DELAY_TIME})
        cy.get('#email').type("email@email.com", {delay:DELAY_TIME})
        cy.get('#open-text-area').type('text', {delay:DELAY_TIME})
        cy.contains('button', "Enviar").click()
        cy.get('.success').should('be.visible')
        cy.tick(THREE_SECONDS_IN_MS)
        cy.get('.success').should('not.be.visible')

    })

    //
    it("exibe mensagem de erro ao submeter o formulário com um email com formatação inválida",function(){
        cy.clock()
        cy.get('#firstName').type('Rafael', {delay: DELAY_TIME})
        cy.get('#lastName').type('Silva', {delay: DELAY_TIME})
        cy.get('#email').type("emailemail.com", {delay: DELAY_TIME}) //linha ex.2
        cy.get('#open-text-area').type('text', {delay: DELAY_TIME})
        cy.contains('button', "Enviar").click()
        cy.get('.error').should('be.visible')
        cy.tick(THREE_SECONDS_IN_MS)
        cy.get('.error').should('not.be.visible')

    })

    //
    it("exibe mensagem de erro quando o telefone se torna obrigatório mas não é preenchido antes do envio do formulário",function(){
        cy.clock()
        cy.get('#firstName').type('Rafael', {delay:DELAY_TIME})
        cy.get('#lastName').type('Silva', {delay:DELAY_TIME})
        cy.get('#email').type("emailemail.com", {delay:DELAY_TIME})
        cy.get('#phone-checkbox').click() 
        cy.get('#open-text-area').type('text', {delay:DELAY_TIME})
        cy.contains('button', "Enviar").click()
        cy.get('.error').should('be.visible')
        cy.tick(THREE_SECONDS_IN_MS)
        cy.get('.error').should('not.be.visible')
    })


     it("exibe mensagem de erro ao submeter o formulário sem preencher os campos obrigatórios",function(){
        cy.clock()
        cy.contains('button', "Enviar").click()
        cy.get('.error').should('be.visible')
        cy.tick(THREE_SECONDS_IN_MS)
        cy.get('.error').should('not.be.visible')
    })

    it.only("envia o formulario com sucesso usando um comando customizado",function(){
        cy.clock()
        cy.fillMandatoryFieldsAndSubmit() 
        cy.get('.success').should('be.visible')
        cy.tick(THREE_SECONDS_IN_MS)
        cy.get('.success').should('not.be.visible')
    })

})