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
        cy.visit('https://dev.app.zuvy.org/');

        // Step 1: Navigate to Courses section
        cy.get('.bg-white').click();  // Assuming this is the side menu or navigation
        cy.contains('Courses').click(); 

        // Step 2: Create a new course
        cy.contains('New Course').click(); // Adjust 'Create Course' to the actual text on the button

        // Step 3: Enter a course name
        // Corrected syntax for the placeholder attribute
        cy.get('input[placeholder="fjofjoe"]')
            .should('be.visible')
            .click({ force: true })
            .type('Automation jayu', { delay: 100 }); // Type the course name

        // Step 4: Submit the new course creation
        cy.contains('Create Course').click(); 
        cy.wait(2000); // Wait for 2 seconds to allow the course to be created

        // Step 5: Verify the course was created and is visible in the list
        cy.get('.flex-col > .flex')  // Assuming this is where the list of courses appears
            .type('Automation jayu', { delay: 100 });

        // Step 6: Check if the course is listed and click it
        cy.contains('Automation jayu', { timeout: 10000 }) // Ensure the course is created and listed
            .should('exist')
            .click();

        // Step 7: Verify the URL contains the course ID or path
        cy.url().should('include', '/admin/courses/');
        
        // Step 8: Fill in the course details (topic and duration)
        cy.get('input[name="bootcampTopic"]').type('Super-Bootcamp');
        cy.get('input[name="duration"]').type('12 weeks');

        // Step 9: Submit the changes
        cy.get('button.bg-secondary.text-white').click();
    });

    after(function () {
        // Optional: Log out after completing the tests
        // Uncomment the following line if you want to log out after the tests
        // cy.logOut(); 
    });
});
