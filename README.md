

# Project Name: Asana

## Project Overview
This project implements automated testing for a web application, focusing on the Login, Project, and Work Requests Pages. It utilizes the Page Object Model (POM) pattern to enhance code cleanliness and reusability.

## Key Features
1. **Page Object Model**: Created for Login, Project Page, and Work Requests Page.
2. **Login Helper**: Implemented `loginHelper.js` with a `beforeEach` method to handle common Login Acceptance Criteria across test cases, utilizing constants for username and password fields.
3. **DOM Element Handling**: Addressed challenges with non-unique identifiers in the DOM.

## Technical Approach
- Initially used element indices for locating DOM elements (not ideal).
- Transitioned to using filters containing specific text for more reliable element selection.
- Recommendation: Create a task to assist the Development team in implementing unique locators for a more stable testing environment.

## Future Improvements
1. Collaborate with the Development team to implement unique element identifiers.
2. Explore alternative approaches to handle login limitations without compromising test integrity.
3. Consider implementing a more robust error handling and retry mechanism for login attempts.

## Setup and Installation
- **Prerequisites**: Node.js (version 18 or higher), npm (Node Package Manager)
- **Initialize Project**:
 npm init playwright@latest

 ## Running Tests
Installed Playwright Test for VSCode and CodeRunner Extensions for Running test cases directly from files and not from package.json only
Switched  headless mode back to "true" in order for tests to run in a headless mode.
npx playwright test 
to run tests in headed mode you can  use npx playwright test --headed   