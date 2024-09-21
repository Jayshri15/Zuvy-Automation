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

        cy.get('#\\:ra\\:-form-item') // Use double backslashes to escape special characters
            .should('be.visible') // Ensure the input field for duration is visible
            .clear() 
            .type('6 months', { delay: 100 }); 
        cy.get('.bg-secondary').click();
        cy.get('[href="/admin/courses/70/curriculum"]').click();
        cy.get('.gap-y-5 > .inline-flex').click();
        // Wait for the module name input to be visible and type in it
cy.get('input[placeholder*="module name"]', { timeout: 10000 }) // Use a partial match if placeholder text is not exact
.should('be.visible')    // Ensure the element is visible
.click({ force: true })   // Click to activate the input
.clear()                  // Clear any existing text
.type('Module 1: Introduction to Automation');

// Wait for the module description textarea to be visible and type in it
cy.get('textarea[placeholder*="description"]', { timeout: 10000 }) // Use a partial match to handle variations in placeholder text
.should('be.visible')    // Ensure the textarea is visible
.click({ force: true })   // Click to activate the textarea
.clear()                  // Clear any existing text
.type('This module covers the basics of Automation Testing.');


        


        // Step 12: Click on the batches link to manage course batches
        // cy.get('[href="/admin/courses/69/batches"]').click();

        // Step 13: Click on the students link to manage course students
        // cy.get('[href="/admin/courses/69/students"]').click();

        // // Step 14: Click on the add student option
        // cy.get('.flex-col.justify-between').click();

        // // Step 15: Click on the "Add Students" button
        // cy.get('.flex-col > .inline-flex')
        //     .should('be.visible') // Check that the button is visible
        //     .and('not.be.disabled') // Ensure the button is not disabled
        //     .click(); // Click the button

        // // Step 16: Click on the "One at a time" option
        // cy.get('.flex-col > .inline-flex')
        //     .contains('One at a time') // Ensure the element contains the text "One at a time"
        //     .should('be.visible')  .click(); // Click on the "One at a time" option
        //     cy.get('[href="/admin/courses/70/curriculum"]').click();

    });

    after(function () {
        // Optional: Log out after completing the tests
        // cy.logOut(); // Uncomment if you want to log out
    });
});
