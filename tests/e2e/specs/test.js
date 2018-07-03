// https://docs.cypress.io/api/introduction/api.html
import { expect } from 'chai';

describe('My First Test', () => {
  it('Visits the app root url', () => {
    cy.visit('/');
    cy.contains('NO RESULTS FOUND');
  });

  it('Highlight incorrect fields when starting search', () => {
    cy.get('.search__button').click();
    cy.get('.select__group_error');
  });
  it('Going to My List empty Page', () => {
    cy.visit('/my-list');
    cy.contains('NOTHING THERE');
  });
});

describe('My Second Test', () => {
  it('Visits the app root url', () => {
    cy.visit('/');
    cy.contains('NO RESULTS FOUND');
  });
  it('Starts search by keywords on submit', () => {
    cy.get(':nth-child(1) > .select-group__select').select('Repositories');
    cy.get(':nth-child(2) > .select-group__select').select('Javascript');
    let waited = false;

    function waitTwoSeconds() {
      return new Cypress.Promise((resolve) => {
        setTimeout(() => {
          cy.get('.search__button').click();
          waited = true;
          resolve();
        }, 2000);
      });
    }

    cy.wrap(null).then(() =>
      waitTwoSeconds().then(() => {
        cy.get('.results');
        expect(waited).to.eq(true);
      }));
  });
  it('Saves a repo', () => {
    cy.get(':nth-child(1) > .repo > .wrapper-repo-action > .repo__action').click();
    cy.visit('/my-list');
  });
});
