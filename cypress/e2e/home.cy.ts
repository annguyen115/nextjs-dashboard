describe('Home page', () => {
  it('should load the landing page', () => {
    cy.visit('/');
    cy.contains('Welcome to Acme');
    cy.contains('Log in');
  });
});
