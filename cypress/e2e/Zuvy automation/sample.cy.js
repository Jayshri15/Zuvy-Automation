// /// <reference types="cypress" />

// describe('Home Page (Learn)', () => {
//     before(function () {
//         // Log in with JWT token
//         cy.loginByJWT();
//     });
//     it('should visit the home page', () => {
//         // Visit the home page
//         cy.visit('https://dev.app.zuvy.org/');
//         cy.get('.bg-white').click()
//         cy.contains('Courses').click()
//         cy.get('.flex-col > .inline-flex').click()
//         cy.get('input[placeholder="Enter course name"]')
//         .should('be.visible')
//         .click({ force: true })
//         .type('Automation jayu', { delay: 100 });

//       // Click the "Create Course" button
//       cy.contains('Create Course').click();

//       // Assert that the new course is successfully created
//       cy.contains('Automation jayu').should('exist');
//       cy.get('.flex-col > .flex').click()


//     });
// });
//     after(function () {
//         cy.logOut();
//     });


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

        // Step 3: Click to create a new course
        cy.get('.flex-col > .inline-flex').click();

        // Step 4: Fill in the course name and create the course
        cy.get('input[placeholder="Enter course name"]')
            .should('be.visible') // Ensure the input field is visible
            .click({ force: true }) // Click on the input field
            .type('Automation jayu', { delay: 100 }); // Type the course name

        // Step 5: Click the "Create Course" button
        cy.contains('Create Course').click();

        // Step 6: Wait for the course to be created and visible in the list
        cy.wait(2000); // Adjust if necessary for UI updates

        // Step 7: Search for the newly created course
        cy.get('.flex-col > .flex').type('Automation jayu', { delay: 100 });

        // Step 8: Assert that the course is visible in the search results and click to access it
        cy.contains('Automation jayu', { timeout: 10000 }).should('exist').click();

        // Step 9: Verify that you're on the course details page
        cy.url().should('include', '/admin/courses/');

        // Step 10: Fill in the duration of the course
        cy.get('#\\:ra\\:-form-item') // Use double backslashes to escape special characters
            .should('be.visible') // Ensure the input field for duration is visible
            .clear() // Clear any existing text (if needed)
            .type('6 months', { delay: 100 }); // Type the duration

        // Step 11: Click to save the duration or proceed
        cy.get('.bg-secondary').click();

        // Step 12: Click on the batches link to manage course batches
        cy.get('[href="/admin/courses/69/batches"]').click();

        // Step 13: Click on the students link to manage course students
        cy.get('[href="/admin/courses/69/students"]').click();

        // Step 14: Click on the add student option
        cy.get('.flex-col.justify-between').click();

        // Step 15: Click on the "Add Students" button
        cy.get('.flex-col > .inline-flex')
            .should('be.visible') // Check that the button is visible
            .and('not.be.disabled') // Ensure the button is not disabled
            .click(); // Click the button

        // Step 16: Click on the "One at a time" option
        cy.get('.flex-col > .inline-flex')
            .contains('One at a time') // Ensure the element contains the text "One at a time"
            .should('be.visible') // Check that the option is visible
            .click(); // Click on the "One at a time" option
            cy.contains('One at a time').click();

    });

    after(function () {
        // Optional: Log out after completing the tests
        // cy.logOut(); // Uncomment if you want to log out
    });
});
