describe('Home Page (Learn)', () => {
    before(() => {
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
            .type('random', { delay: 100 });

        cy.contains('Create Course').click();
        cy.wait(2000);
        cy.get('.flex-col > .flex').type('random', { delay: 100 });
        cy.contains('random', { timeout: 10000 }).should('exist').click();
        cy.url().should('include', '/admin/courses/');

        // Step 4: Navigate to Curriculum and add a module
        cy.contains('Curriculum').click();

        // Wait for the "Add module" button to be visible before clicking
        cy.contains('Add module').click();

        // Fill in module details
        cy.get('input[name="name"]').should('be.visible').type('Navgurukul');  // Module name
        cy.get('input[name="description"]').should('be.visible').type('This is a very important module');  // Module description
        cy.get('input[name="months"]').should('be.visible').type('6');  // Number of months
        cy.get('input[name="weeks"]').should('be.visible').type('2');  // Number of weeks
        cy.get('input[name="days"]').should('be.visible').type('2');  // Number of days

        // Click the 'Create Module' button
        cy.contains('button', 'Create Module').should('be.visible').click();
        cy.get('p.text-md.font-semibold.capitalize.text-gray-600')
          .contains('27 weeks') // Ensure it contains the correct text
          .should('be.visible')  // Check if it is visible
          .click();             // Click the element
          
        cy.contains('button', 'Add Chapter').should('be.visible').click(); // Click the button
        cy.contains('div', 'Assessment').should('be.visible').click(); // Click the element
        // cy.contains('Any Difficulty').click(); // Open the dropdown
        // cy.contains('All Topics').click()

// Using the name attribute
// cy.get('[name="addQuestion"]')
// .click(); // Perform the click action







    });

    after(() => {
        // Optional: Log out after completing the tests
        // cy.logOut(); // Uncomment if you want to log out
    });
});
