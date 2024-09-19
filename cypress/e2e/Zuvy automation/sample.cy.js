/// <reference types="cypress" />

describe('Home Page (Learn)', () => {
    it('should visit the home page', () => {
        // Visit the home page
        cy.visit('https://dev.app.zuvy.org/');
        cy.get('.inline-flex').click()
    });
});
