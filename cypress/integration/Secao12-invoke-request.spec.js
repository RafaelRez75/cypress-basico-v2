// privacy.spec.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test

describe('Central de Atendimento ao Cliente TAT', function() {
     
    beforeEach(function() {
        cy.visit('https://cac-tat.s3.eu-central-1.amazonaws.com/index.html')
    })

it('exibe e esconde as mensagens de sucesso e erro usando o .invoke', () => {
    cy.get('.success')
      .should('not.be.visible')
      .invoke('show')
      .should('be.visible')
      .and('contain', 'Mensagem enviada com sucesso.')
      .invoke('hide')
      .should('not.be.visible')
    cy.get('.error')
      .should('not.be.visible')
      .invoke('show')
      .should('be.visible')
      .and('contain', 'Valide os campos obrigatórios!')
      .invoke('hide')
      .should('not.be.visible')
  })

  it('preenche a area de texto usando o comando invoke', function() {
    const longText = Cypress._.repeat('0123456789', 20)
    cy.get('#open-text-area').invoke('val', longText)
    .should('have.value', longText)
  })

  it.only('faz uma requisição HTTP', function() {
    cy.request({
      method: 'GET',
      url: 'https://cac-tat.s3.eu-central-1.amazonaws.com/index.html'
    }).then((response) => {
      expect(response.status).to.equal(200);
      expect(response.statusText).to.equal('OK');
      expect(response.body).to.include("CAC TAT");
    })

   /* cy.request('https://cac-tat.s3.eu-central-1.amazonaws.com/index.html')
    .should (function(response) {
      const {status, statusText, body} = response
      
      expect(status).to.equal(200);
      expect(statusText).to.equal('OK');
      expect(body).to.include("CAC TAT");
    })*/
  })

})