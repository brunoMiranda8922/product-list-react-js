describe('Accessing the home page', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  describe('Page Title ',  () => {
    it('Should return success when the page title is Stack',  () => {
      cy.title().should('eq', 'Stack');
    });
  });

  describe('Header Component', () => {
    it('Should return success when header component has title The Best Stack', () => {
      cy.get('h1')
        .contains('The Best Stacks');
    });
  });

  describe('Article Componet', () => {
    it('Should return success when stack list cards are present', () => {
      cy.get('div.product-list > article > strong');
    });

    it('Should return success when clicking on the access button and go to the stack details page', () => {
      cy.get('div.product-list > article > a')
        .first()
        .should('have.text', 'Acessar')
        .click();
    });
  });

  describe('Button Component', () => {
    it('Should return success when click the next button and go to the next page', () => {
      cy.log('Previous button disabled');
      cy.get('div.actions > button')
        .contains('Anterior')
        .should('be.disabled');

      cy.log('Next page');
      cy.get('div.actions > button')
        .contains('Próximo')
        .click();
    });

    it('Should return success when click the previous button and return to the first page ', () => {
      cy.log('Next page');
      cy.get('div.actions > button')
        .contains('Próximo')
        .click();

      cy.log('Previous page');
      cy.get('div.actions > button')
        .contains('Anterior')
        .click();
    });
  });
});
