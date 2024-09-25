// /// <reference types="cypress" />

// // Global handling for uncaught exceptions
// Cypress.on('uncaught:exception', (err, runnable) => {
//     // Prevent Cypress from failing the test on uncaught exceptions
//     return false;
// });

// describe('Home Page (Learn)', () => {
//     before(function () {
//         // Log in with JWT token before running the tests
//         cy.loginByJWT(); // Ensure the custom command 'loginByJWT' is implemented
//     });

//     it('should create a new course, set its duration, and manage batches and students', () => {
//         // Step 1: Visit the home page
//         cy.visit('https://dev.app.zuvy.org/');

//         // Step 2: Navigate to the "Courses" section
//         cy.get('.bg-white').click();  // Assuming this is the side menu or navigation
//         cy.contains('Courses').click(); // Find the "Courses" option and click

//         // Step 3: Create a new course
//         cy.get('.flex-col > .inline-flex').click(); // Click the "Create Course" button
        
//         // Step 4: Enter a course name
//         cy.get('input[placeholder="Enter course name"]')
//             .should('be.visible')
//             .click({ force: true })
//             .type('Automation jayu', { delay: 100 }); // Type the course name
        
//         // Step 5: Submit the new course creation
//         cy.contains('Create Course').click(); 
//         cy.wait(2000); // Wait for 2 seconds to allow the course to be created
        
//         // Step 6: Verify the course was created and is visible in the list
//         cy.get('.flex-col > .flex')  // Assuming this is where the list of courses appears
//             .type('Automation jayu', { delay: 100 });
        
//         // Step 7: Check if the course is listed and click it
//         cy.contains('Automation jayu', { timeout: 10000 }) // Ensure the course is created and listed
//             .should('exist')
//             .click();

//         // Step 8: Verify the URL contains the course ID or path
//         cy.url().should('include', '/admin/courses/');
//         cy.contains('Courses').click();

//         // Step 3: Create a new course
//         cy.get('.flex-col > .inline-flex').click();
//         cy.get('input[placeholder="Enter course name"]')
//             .should('be.visible')
//             .click({ force: true })
//             .type('Automation jayu', { delay: 100 });

//         cy.contains('Create Course').click();
//         cy.wait(2000);
//         cy.get('.flex-col > .flex').type('Automation jayu', { delay: 100 });
//         cy.contains('Automation jayu', { timeout: 10000 }).should('exist').click();
//         cy.url().should('include', '/admin/courses/');

//         // Step 4: Navigate to Students and add a new student
//         cy.contains('Students').click();
//         cy.contains('Add Students').click();
//         cy.contains('One at a time').click();
        
//         // Fill in student details
//         cy.get('#name').type('Jayshri');
//         cy.get('#email').type('anuja20@nav.org');
//         cy.get('button[type="submit"]').click();
//         cy.get('.bg-white').click();
//         cy.contains('Courses').click();

//         // Step 3: Create a new course
//         cy.get('.flex-col > .inline-flex').click();
//         cy.get('input[placeholder="Enter course name"]')
//             .should('be.visible')
//             .click({ force: true })
//             .type('Automation jayu', { delay: 100 });

//         cy.contains('Create Course').click();
//         cy.wait(2000);
//         cy.get('.flex-col > .flex').type('Automation jayu', { delay: 100 });
//         cy.contains('Automation jayu', { timeout: 10000 }).should('exist').click();
//         cy.url().should('include', '/admin/courses/');

//         // Step 4: Navigate to Students and add a new student
//         cy.contains('Batches').click();
//         cy.contains('+ Create Batch').should('be.visible').click();
//         cy.get('input[name="name"]').should('be.visible').type('Active Batch');    // Type the desired batch name
//         cy.get('input[name="instructorEmail"]').should('be.visible').type('instructor@navgurukul.org');
//         cy.get('input[name="capEnrollment"]').should('be.visible').type('30');                          // Type the desired number
//         cy.contains('button', 'Create batch') // Select the button by its text
//         .should('be.visible')                 // Ensure the button is visible
//         .click();                            // Click the button        
//         cy.get('.bg-white').click();
//         cy.contains('Courses').click();

//         // Step 3: Create a new course
//         cy.get('.flex-col > .inline-flex').click();
//         cy.get('input[placeholder="Enter course name"]')
//             .should('be.visible')
//             .click({ force: true })
//             .type('Automation jayu', { delay: 100 });

//         cy.contains('Create Course').click();
//         cy.wait(2000);
//         cy.get('.flex-col > .flex').type('Automation jayu', { delay: 100 });
//         cy.contains('Automation jayu', { timeout: 10000 }).should('exist').click();
//         cy.url().should('include', '/admin/courses/');

//         // Step 4: Navigate to Curriculum and add a module
//         cy.contains('Curriculum').click();

//         // Wait for the "Add module" button to be visible before clicking
//         cy.contains('Add module').click();

//         // Fill in module details
//         cy.get('input[name="name"]').should('be.visible').type('Navgurukul');  // Module name
//         cy.get('input[name="description"]').should('be.visible').type('This is a very important module');  // Module description
//         cy.get('input[name="months"]').should('be.visible').type('6');  // Number of months
//         cy.get('input[name="weeks"]').should('be.visible').type('2');  // Number of weeks
//         cy.get('input[name="days"]').should('be.visible').type('2');  // Number of days

//         // Click the 'Create Module' button
//         cy.contains('button', 'Create Module').should('be.visible').click();
//         cy.get('p.text-md.font-semibold.capitalize.text-gray-600')
//           .contains('27 weeks') // Ensure it contains the correct text
//           .should('be.visible')  // Check if it is visible
//           .click();             // Click the element
//           cy.contains('Courses').click();
  
//           // Step 3: Create a new course
//           cy.get('.flex-col > .inline-flex').click();
//           cy.get('input[placeholder="Enter course name"]')
//               .should('be.visible')
//               .click({ force: true })
//               .type('Automation jayu', { delay: 100 });
  
//           cy.contains('Create Course').click();
//           cy.wait(2000);
//           cy.get('.flex-col > .flex').type('Automation jayu', { delay: 100 });
//           cy.contains('Automation jayu', { timeout: 10000 }).should('exist').click();
//           cy.url().should('include', '/admin/courses/');
  
//           cy.contains('Sessions').click();
//           cy.contains('Create Session', {timeout:10000}).should('exist').click()   
//           cy.get('.bg-white').click();
//           cy.contains('Courses').click();
  
//           // Step 3: Create a new course
//           cy.get('.flex-col > .inline-flex').click();
//           cy.get('input[placeholder="Enter course name"]')
//               .should('be.visible')
//               .click({ force: true })
//               .type('Automation jayu', { delay: 100 });
  
//           cy.contains('Create Course').click();
//           cy.wait(2000);
//           cy.get('.flex-col > .flex').type('Automation jayu', { delay: 100 });
//           cy.contains('Automation jayu', { timeout: 10000 }).should('exist').click();
//           cy.url().should('include', '/admin/courses/');
  
//           // Step 4: Navigate to Students and add a new student
//           cy.contains('Submissions').click();
//           cy.contains('button', 'Assessments').should('be.visible').click();
                 
  
  







        
//         cy.contains('Settings').click();
//         cy.get('.my-5 > .inline-flex').click();
//         cy.get('.border-transparent').click();

//     });

//     after(function () {
//         // Optional: Log out after completing the tests
//         // Uncomment the following line if you want to log out after the tests
//         // cy.logOut(); 
//     });
// });
