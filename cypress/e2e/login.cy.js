describe('funcionalidades de cadastro', () => {

  beforeEach(() => {
    // 1. Executar o navegador
    // 2. Navegar para a url 'http://automationexercise.com'
    cy.visit('https://automationexercise.com');
  });

  it('cadastrar um novo usuário', () => { 
    // 3. Validar que a página inicial carregou com sucesso
    cy.get('a > img').should('be.visible');
    cy.get('.shop-menu > .nav > :nth-child(1) > a').should('be.visible');

    // 4. Clicar no botão “Signup / Login”
    cy.get('.shop-menu > .nav > :nth-child(4) > a').click();

    // 5. Validar que 'New User Signup!' está visível
    cy.get('.signup-form > h2').should('be.visible');

    // 6. Entrar com nome e e-mail
    cy.get('[data-qa="signup-name"]').type('Thiago');
    cy.get('[data-qa="signup-email"]').type('email1234@teste.com.br');

    // 7. Clicar no botão “Signup”
    cy.get('[data-qa="signup-button"]').click();

    // 8. Validar que a label “ENTER ACCOUNT INFORMATION” está visível
    cy.get(':nth-child(1) > b').should('be.visible');

    // 9. Preencher os campos: Title, Name, Email, Password, Date of birth
    cy.get('#id_gender1').click();
    cy.get('[data-qa="name"]').clear().type('Thiago');
    cy.get('[data-qa="email"]').should('have.value', 'email1234@teste.com.br');
    cy.get('[data-qa="password"]').type('password');
    cy.get('[data-qa="days"]').select('6');
    cy.get('[data-qa="months"]').select('November');
    cy.get('[data-qa="years"]').select('1996');

    // 10. Selecionar o checkbox “Sign up for our newsletter!”
    cy.get('#newsletter').click();

    // 11. Selecionar o checkbox “Receive special offers from our partners!”
    cy.get('#optin').click();

    // 12. Preencher os campos: First name, Last name, Company, Address, Address2, Country, State, City, Zipcode, Mobile Number
    cy.get('[data-qa="first_name"]').type('Thiago');
    cy.get('[data-qa="last_name"]').type('Castilho');
    cy.get('[data-qa="company"]').type('Study');
    cy.get('[data-qa="address"]').type('Rua A, 123');
    cy.get('[data-qa="address2"]').type('Rua B, 321');
    cy.get('[data-qa="country"]').select('Australia');
    cy.get('[data-qa="state"]').type('São Paulo');
    cy.get('[data-qa="city"]').type('São Paulo');
    cy.get('[data-qa="zipcode"]').type('03416555');
    cy.get('[data-qa="mobile_number"]').type('11912345678');
    
    // 13. Clicar em "Create Account button"
    cy.get('[data-qa="create-account"]').click();

    // 14. Validar que a mensagem "ACCOUNT CREATED!"" está visível
    cy.get('[data-qa="account-created"]').should('be.visible');

    // 15. Clicar no botão "Continue"
    cy.get('[data-qa="continue-button"]').click();
    
    // 16. Validar que o nome de usuário "Logged in as $username" está visível
    cy.get('b').should('have.text', 'Thiago')

    // 17. Clicar no botão 'Delete Account'
    cy.get('.shop-menu > .nav > :nth-child(5) > a').click();

    // 18. Validar que a mensagem "ACCOUNT DELETED!" está visível e clicar no botão "Continue"
    cy.get('[data-qa="account-deleted"]').should('be.visible');
  });
  it('login de usuário correto e senha', () => {
    cy.get('.shop-menu > .nav > :nth-child(4) > a').click();
    cy.get('[data-qa="login-email"]').type('email1234@teste.com.br');
    cy.get('[data-qa="login-password"]').type('1234');
    cy.get('[data-qa="login-button"]').click();

  });
});