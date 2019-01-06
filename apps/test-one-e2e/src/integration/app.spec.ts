import { getGreeting } from '../support/app.po';

describe('Hello Nx', () => {
  beforeEach(() => cy.visit('/'));

  it('should display welcome message', () => {
    getGreeting().contains('Welcome to test-one!');
  });
  it('check title', () => {
    cy.get('h3').contains('test-one');
  });
});
