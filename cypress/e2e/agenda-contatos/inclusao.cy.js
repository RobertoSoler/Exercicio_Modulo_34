/// <reference types="cypress" />

describe('Teste de inclusão', () => {
        
    it ('Deve adicionar', () => {
        cy.visit('https://agenda-contatos-react.vercel.app/')

        cy.get('input[type="text"]').type('alexandre da silva')
        cy.get('input[type="email"]').type('asilva@teste.com')
        cy.get('input[type="tel"]').type('11 953256565')
        cy.get('.adicionar').click()

    })

})