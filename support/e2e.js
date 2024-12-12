// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'

// Alternatively you can use CommonJS syntax:
// require('./commands')

describe('Casos de testes da tela de Login', () => {
    
    it('Login com usuario e senha', () => {
        expect(true).to.equal(true)
    })

    it('Login com usuario incorreto', () => {
        expect(true).to.equal(true)
    })

    it('Login com senha incorreta', () => {
      expect(true).to.equal(true)
    })

    it('Login com usuario e senha dentro do padrao, mas que nao é usuario do sistema', () => {
        expect(true).to.equal(true)
    })
      
    it('Login através do Linkedin', () => {
        expect(true).to.equal(true)
    })

})