// Secao12-cat.spec.js created with Cypress
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


    it.only("encontra o gato escondido",function(){
        cy.get('#cat').invoke('show').should('be.visible')
        cy.get('#title').invoke('text', 'CAT TAT')
        cy.get('#subtitle').invoke('text', 'Eu ❤️ gatos')
    })

})
