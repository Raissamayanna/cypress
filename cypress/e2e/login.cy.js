describe('funcionalidades de cadastro', () => {

  beforeEach(() => {
    // 1. Executar o navegador
    // 2. Navegar para a url 'http://automationexercise.com'
    cy.visit('https://automationexercise.com');
  });

  it('login de usuário correto e senha', () => {
    cy.get('.shop-menu > .nav > :nth-child(4) > a').click();
    cy.get('[data-qa="login-email"]').type('email1234@teste.com.br');
    cy.get('[data-qa="login-password"]').type('1234');
    cy.get('[data-qa="login-button"]').click();

  });
});