
/// <reference types="cypress" />

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

        cy.get('#\\:ra\\:-form-item') 
            .should('be.visible') 
            .clear() 
            .type('6 months', { delay: 100 }); 
        cy.get('.bg-secondary').click();
        cy.get('[href="/admin/courses/70/students"]').click()
        cy.contains('Add Students').click()
        cy.contains('One at a time').click();
        cy.get('#name').type('Jayshri ');
        cy.get('#email').type('jayshri202@navgurukul.org');
        cy.contains('Add Student').click()


        // cy.get('[href="/admin/courses/70/curriculum"]').click();
        // cy.get('.gap-y-5 > .inline-flex').click();

    });

    after(function () {
        // Optional: Log out after completing the tests
        // cy.logOut(); // Uncomment if you want to log out
    });
});
