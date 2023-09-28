describe('O sistema deve', () => {
  it('Acessar o corpo da página', () => {
    cy.visit('/');
  });

  it('Verificar conexão com a API', () => {
    cy.visit('/');
    cy.request('http://localhost:3030/api/videos');
  });

  it('Verificar video', () => {
    cy.visit('/');
    cy.get('.view').should('exist');
  });

  it('Navegar para o próximo video', () => {
    cy.visit('/');
    cy.get('.go').click();
  });

  it('Navegar para o video anterior', () => {
    cy.visit('/');
    cy.get('.go').click();
    cy.get('.back').click();
  });
});
