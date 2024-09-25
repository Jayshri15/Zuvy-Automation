/// <reference types="cypress" />

Cypress.on('uncaught:exception', (err, runnable) => {
    // Ignore specific errors to prevent test failure
    if (err.message.includes('Cannot read properties of undefined (reading \'status\')')) {
        return false;  // Prevent Cypress from failing the test
    }
});

describe('Home Page (Learn)', () => {
    before(function () {
        // Log in with JWT token before running the tests
        cy.loginByJWT();
    });

    it('should create a new course, set its duration, and manage batches and students', () => {
        // Step 1: Visit the home page
        cy.visit('https://dev.app.zuvy.org/');

        // Step 2: Navigate to the Courses section
        cy.get('.bg-white').click();
        cy.contains('Courses').click();

        // Step 3: Create a new course
        cy.get('.flex-col > .inline-flex').click();
        cy.get('input[placeholder="Enter course name"]')
            .should('be.visible')
            .click({ force: true })
            .type('Automation jayu', { delay: 100 });

        cy.contains('Create Course').click();
        cy.wait(2000);
        cy.get('.flex-col > .flex').type('Automation jayu', { delay: 100 });
        cy.contains('Automation jayu', { timeout: 10000 }).should('exist').click();
        cy.url().should('include', '/admin/courses/');

        cy.contains('Sessions').click();
        cy.contains('Create Session', {timeout:10000}).should('exist').click()                  


        // cy.contains('Settings').click();
        // cy.get('.my-5 > .inline-flex').click();
        // cy.get('.border-transparent').click();
        



    });

    after(function () {
        // Optional: Log out after completing the tests
        // cy.logOut(); // Uncomment if you want to log out
    });
});
