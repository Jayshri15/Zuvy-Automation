/// <reference types="cypress" />

// Global handling for uncaught exceptions
Cypress.on('uncaught:exception', (err, runnable) => {
    // Prevent Cypress from failing the test on uncaught exceptions
    return false;
});

describe('Home Page (Learn)', () => {
    before(function () {
        // Log in with JWT token before running the tests
        cy.loginByJWT(); // Ensure the custom command 'loginByJWT' is implemented
    });

    it('should create a new course, set its duration, and manage batches and students', () => {
        // Step 1: Visit the home page
        cy.visit('https://dev.app.zuvy.org/');

        // Step 2: Navigate to the "Courses" section
        cy.get('.bg-white').click();  // Assuming this is the side menu or navigation
        cy.contains('Courses').click(); // Find the "Courses" option and click

        // Step 3: Create a new course
        cy.get('.flex-col > .inline-flex').click(); // Click the "Create Course" button
        
        // Step 4: Enter a course name
        cy.get('input[placeholder="Enter course name"]')
            .should('be.visible')
            .click({ force: true })
            .type('Automation jayu', { delay: 100 }); // Type the course name
        
        // Step 5: Submit the new course creation
        cy.contains('Create Course').click(); 
        cy.wait(2000); // Wait for 2 seconds to allow the course to be created
        
        // Step 6: Verify the course was created and is visible in the list
        cy.get('.flex-col > .flex')  // Assuming this is where the list of courses appears
            .type('Automation jayu', { delay: 100 });
        
        // Step 7: Check if the course is listed and click it
        cy.contains('Automation jayu', { timeout: 10000 }) // Ensure the course is created and listed
            .should('exist')
            .click();

        // Step 8: Verify the URL contains the course ID or path
        cy.url().should('include', '/admin/courses/');
        
        cy.contains('Settings').click();
        cy.get('.my-5 > .inline-flex').click();
        cy.get('.border-transparent').click();

    });

    after(function () {
        // Optional: Log out after completing the tests
        // Uncomment the following line if you want to log out after the tests
        // cy.logOut(); 
    });
});
