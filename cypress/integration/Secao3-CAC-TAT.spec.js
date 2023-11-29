// CAC-TAT.spec.js created with Cypress
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

    it('verifica o título da aplicação', function() {
        cy.title().should('be.equal', 'Central de Atendimento ao Cliente TAT')
    })

    //seção 3, exercício 1
    it("Preenche os campos obrigatórios e envia o formulário", function(){
        cy.get('#firstName').type('Rafael', {delay:100})
        cy.get('#lastName').type('Silva', {delay:100})
        cy.get('#email').type("email@email.com", {delay:100})
        cy.get('#open-text-area').type('text', {delay:100})
        cy.contains('button', "Enviar").click()
        cy.get('.success').should('be.visible')
    })

    //seção 3, exercício 2 (validação email inválido)
    it("exibe mensagem de erro ao submeter o formulário com um email com formatação inválida",function(){
        cy.get('#firstName').type('Rafael', {delay:100})
        cy.get('#lastName').type('Silva', {delay:100})
        cy.get('#email').type("emailemail.com", {delay:100}) //linha ex.2
        cy.get('#open-text-area').type('text', {delay:100})
        cy.contains('button', "Enviar").click()
        cy.get('.error').should('be.visible')
    })

     //seção 3, exercício 3 (validação telefone texto ao invés de número)
     it("campo telefone continua vazio quando preenchido com valor não numérico",function(){
        cy.get('#firstName').type('Rafael', {delay:100})
        cy.get('#lastName').type('Silva', {delay:100})
        cy.get('#email').type("emailemail.com", {delay:100})
        cy.get('#phone').type("telefone", {delay:100}).should('have.value', '') //linha ex.3
        cy.get('#open-text-area').type('text', {delay:100})
        cy.contains('button', "Enviar").click()
        cy.get('.error').should('be.visible')
    })

     //seção 3, exercício 4 (validação telefone obrigatório)
     it("exibe mensagem de erro quando o telefone se torna obrigatório mas não é preenchido antes do envio do formulário",function(){
        cy.get('#firstName').type('Rafael', {delay:100})
        cy.get('#lastName').type('Silva', {delay:100})
        cy.get('#email').type("emailemail.com", {delay:100})
        cy.get('#phone-checkbox').click() //linha ex.4
        cy.get('#open-text-area').type('text', {delay:100})
        cy.contains('button', "Enviar").click()
        cy.get('.error').should('be.visible')
    })

     //seção 3, exercício 5 (validação texto nome, sobrenome, email, telefone e validando limpando campos)
    it("preenche e limpa os campos nome, sobrenome, email e telefone",function(){
        cy.get('#firstName').type('Rafael', {delay:100}).should('have.value', 'Rafael')
        .clear().should('have.value', '')

        cy.get('#lastName').type('Silva', {delay:100}).should('have.value', 'Silva')
        .clear().should('have.value', '')
        
        cy.get('#email').type("emailemail.com", {delay:100}).should('have.value', 'emailemail.com')
        .clear().should('have.value', '')
                
        cy.get('#phone').type('1234567890', {delay:100}).should('have.value', '1234567890')
        .clear().should('have.value', '')
    })

     //seção 3, exercício 6 (validação envio sem preenchimento campos obrigatórios)
     it("exibe mensagem de erro ao submeter o formulário sem preencher os campos obrigatórios",function(){
        cy.contains('button', "Enviar").click()
        cy.get('.error').should('be.visible')
    })

    //seção 3, exercício 7  (comando customizado)
    it("envia o formulario com sucesso usando um comando customizado",function(){
        cy.fillMandatoryFieldsAndSubmit() //linha ex.7
        cy.get('.success').should('be.visible')
    })

    //seção 3, exercício 8  (comando customizado)
    it("envia o formulario com uso de contains",function(){
        cy.get('#firstName').type('Rafael', {delay:100})
        cy.get('#lastName').type('Silva', {delay:100})
        cy.get('#email').type("email@email.com", {delay:100})
        cy.get('#open-text-area').type('text', {delay:100})
        cy.contains('button', "Enviar").click() //linha ex.8
        cy.get('.success').should('be.visible')
    })

  })