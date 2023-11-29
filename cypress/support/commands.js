Cypress.Commands.add('fillMandatoryFieldsAndSubmit', function(){
    cy.get('#firstName').type('Rafael', {delay:100})
    cy.get('#lastName').type('Silva', {delay:100})
    cy.get('#email').type("email@email.com", {delay:100})
    cy.get('#open-text-area').type('text', {delay:100})
    cy.contains('button', "Enviar").click()
})