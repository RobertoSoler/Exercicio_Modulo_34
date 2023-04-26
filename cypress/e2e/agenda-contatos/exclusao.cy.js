/// <reference types="cypress" />

describe('Teste de exclusão', () => {
        
    it ('Deve excluir', () => {

        cy.visit('https://agenda-contatos-react.vercel.app/')

        cy.get('.sc-beqWaB.eQdhbg.contato').first().find('.delete').click()

    })

})