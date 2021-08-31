/* global cy */

const search = query => {
  cy.get('.ais-SearchBox').within(() => {
    cy.get('input').type(query);
  });

  cy.wait(300);
};

const clear = () => {
  cy.get('.ais-SearchBox').within(() => {
    cy.get('input').clear();
  });
};

describe('Search bar optimized', () => {
  before(() => {
    cy.visit('/');
  });

  beforeEach(() => {
    clear();
  });

  it('Should render properly', () => {
    cy.get('[data-cy=ais-SearchBox]').should('be.visible');
  });

  it('Should not display hits', () => {
    search('freeCodeCamp');
    cy.get('[data-cy=ais-Hits-list]').should('not.exist');
  });

  it('Should open a new tab ', () => {
    cy.visit('/', {
      onBeforeLoad(win) {
        cy.stub(win, 'open').as('open');
      }
    });
    search('freeCodeCamp');
    cy.get('[data-cy=ais-SearchBox-form]').submit();
    const queryUrl =
      'https://www.freecodecamp.org/news/search/?query=freeCodeCamp';
    cy.get('@open').should('have.been.calledOnceWith', queryUrl);
  });
});

describe('Search bar', () => {
  before(() => {
    cy.visit('/learn');
  });

  beforeEach(() => {
    clear();
  });

  it('Should render properly', () => {
    cy.get('.ais-SearchBox').should('be.visible');
  });

  it('Should accept input and display hits', () => {
    search('freeCodeCamp');

    cy.get('[data-cy=ais-Hits-list]')
      .children()
      .should('to.have.length.of.at.least', 1);
  });

  it('Should clear hits when input is cleared', () => {
    search('freeCodeCamp');

    cy.get('[data-cy=ais-Hits-list]')
      .children()
      .should('to.have.length.of.at.least', 1);

    clear();

    cy.get('div.ais-Hits').should('not.exist');
  });

  it('Should show up to 8 hits when height >= 768px', () => {
    cy.viewport(1300, 768);

    search('freeCodeCamp');

    cy.get('[data-cy=ais-Hits-list]').children().should('to.have.length.of', 8);
  });

  it('Should show up to 5 hits when height < 768px', () => {
    cy.viewport(1300, 767);

    search('freeCodeCamp');

    cy.get('[data-cy=ais-Hits-list]').children().should('to.have.length.of', 5);
  });

  it('Should show no hits for queries that do not exist in the Algolia index', () => {
    search('testtttt');

    cy.get('[data-cy=ais-Hits-list]').children().should('to.have.length.of', 0);

    cy.contains('No tutorials found');
  });

  it('Should not redirect to the News search page if there are no hits', () => {
    search('testtttt');

    cy.get('.ais-SearchBox-form').submit();

    cy.url('/');
  });
});
