/// <reference types="cypress" />

describe('Teste de alteração', () => {
        
    it ('Deve alterar', () => {

        cy.visit('https://agenda-contatos-react.vercel.app/')

        cy.get('.sc-beqWaB.eQdhbg.contato').first().find('.edit').click()
        cy.get('input[type="text"]').clear()
        cy.get('input[type="text"]').type('alexandre da silva')
        cy.get('.alterar').click()

    })

})