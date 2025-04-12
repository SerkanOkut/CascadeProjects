describe('Login Form Testleri', () => {
    beforeEach(() => {
      cy.visit('/');
    });
  
    it('Başarılı giriş → success sayfası açılır', () => {
      cy.get('input[type="email"]').type('test@example.com');
      cy.get('input[type="password"]').type('StrongPass1');
      cy.get('input[type="checkbox"]').check();
      cy.get('button[type="submit"]').should('not.be.disabled').click();
      cy.url().should('include', '/success');
      cy.contains('Giriş Başarılı!');
    });
  });
  