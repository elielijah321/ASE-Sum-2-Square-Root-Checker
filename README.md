# Software Engineering Summative 2

For Northeastern University

## Square number checker app 

[![codecov](https://codecov.io/gh/elielijah321/ASE-Sum-2-Square-Root-Checker/branch/main/graph/badge.svg?token=FkUOknCveH)](https://codecov.io/gh/elielijah321/ASE-Sum-2-Square-Root-Checker)


### About

Author: Elijah Aremu

GitHub Username: @elielijah321

![APP SCREENSHOT](https://user-images.githubusercontent.com/45821029/232090390-4c833dfd-f85e-426e-99d7-a98875544739.jpeg)


The Square number checker app is a web application built with React and Bootstrap that allows users to input a number and determine if it is a perfect square. The app provides two main functionalities; it checks if the entered number is a square number and calculates the square root of that number. The app has a simple and user-friendly interface that includes an input field for the number to be checked, a submit button to initiate the check and a message section that displays the results of the check.


**Reason for creating the app**

The Square number checker app was created as a prototype for the organization I work for to determine the viability of using React as a technology for building web applications. The decision to introduce React into the organization's tech stack was made with the aim of improving the performance and maintainability of their applications. To assess the feasibility of using React, the organization wanted to develop a small-scale application that would demonstrate the capabilities of the technology.

The Square number checker app was chosen as the prototype because it was relatively simple to build, but still required some complex logic and user interaction. It provided a solid foundation for further exploration and development, and helped to set the stage for future innovation and growth. 

# Code and Design

## Technical Documentation

### Technical Stack
* [HMTL](https://devdocs.io/html/)
* [CSS](https://devdocs.io/css/)
* [TypeScript](https://devdocs.io/typescript/)
* [Jest](https://jestjs.io/docs/getting-started)
* [Cypress](https://devdocs.io/cypress/)

### Files used to run the app

* App.tsx
* index.html
* index.css
* launch.json

### Files used in testing

* squareNumberHelper.test.tsx
* App.test.tsx
* app.cy.ts
* package.json

### User End Links

* Repo name: ASE-Sum-2-Square-Root-Checker
* Repo link: https://github.com/elielijah321/ASE-Sum-2-Square-Root-Checker


## Coding Practice

I have made sure that the code is easy to read and comprehend by following the correct naming and coding conventions. I used camelCase and code indentation throughout the codebase to achieve this. Comments were used to allow other who have not worked on the project to understand what is being done.

![F1A9B9AE-A631-4C7B-92DE-BCBB1F00E71A](https://user-images.githubusercontent.com/45821029/232496332-90aae2d6-fa67-4e07-a947-dd92222722fb.jpeg)



# Testing

Test driven development (TDD) was used on this project because it is a software development methodology that promotes the creation of high-quality, reliable and maintainable code. By writing tests before writing the actual code, developers can ensure that the code they produce meets the desired functionality and quality requirements.

The testing frameworks used in this project were Cypress, Jest, and the React Testing Library. Cypress was used for end-to-end testing of the application's user interface, while Jest was used for unit testing of individual code modules. The React Testing Library was used for integration testing, ensuring that the various components of the application worked together as intended. Together, these testing frameworks provided comprehensive coverage of the application's functionality, ensuring that it met the project's quality and reliability requirements.

**Unit Testing with Jest**

Jest is a JavaScript testing framework that is commonly used for unit testing, which involves testing individual modules or functions in isolation from the rest of the application. Unit testing helps to ensure that each part of the codebase functions correctly and meets its individual requirements.

![Unit tests](https://user-images.githubusercontent.com/45821029/232757667-68a53670-886c-469b-8fd3-c889641d2bec.jpeg)


**React Testing Library Tests**

The React Testing Library is a popular testing library that is specifically designed for testing React components. Integration testing involves testing how different parts of an application work together including the interactions between components.

![React Testing library](https://user-images.githubusercontent.com/45821029/232757844-30b3fb87-eca1-4872-812d-0c81ebe03f9e.jpeg)


**Cypress Tests**

Cypress is a JavaScript end-to-end testing framework that is specifically designed for testing the user interface of web applications. End-to-end testing involves simulating a user's interactions with an application from start to finish ensuring that all parts of the application work together as intended.

![Cypress Tests](https://user-images.githubusercontent.com/45821029/232759599-b849d228-019b-41d6-a5a9-c6fcf71fac77.jpeg)


**Performance and Accessibility Testing**

![LIGHT HOUSE](https://user-images.githubusercontent.com/45821029/232130330-2a34047f-211b-4de0-945d-64b6a72451e4.jpeg)

I evaluated and improved my webpage's quality using the Google Lighthouse tool, which is free and accessible through the development console for Chromium-based browsers. This tool generates a report that summarizes various quality metrics, including performance, accessibility, best practices, and SEO.

The performance metric evaluated loading speed, time for loading basic frames, and displaying meaningful content. Accessibility evaluated the website's accessibility for users with disabilities through audio captions, button names, and 'aria-' attributes. Best practices evaluated many practices deemed 'best,' such as using HTTPS and avoiding deprecated code. SEO analyzed features such as meta descriptions, titles, and font sizes.

The website scored highly in all four metrics, with a performance rating of 100, an accessibility rating of 96, a best practices rating of 100, and an SEO rating of 100. This means the website is highly optimized, easy to navigate, and attracts high-quality internet traffic naturally without the need for advertising.

## Continuous Integration Testing
When I make changes to the code and push them to the repository on GitHub, the platform runs Continuous Integration tests automatically. These tests check to ensure that my changes don't introduce any errors or problems into the codebase.

If all the tests pass, I know that the changes I've made are ready for review and can be merged into the codebase by a team member. However, if a test fails, it means that one of my changes caused an issue and needs to be fixed before the code can be merged.

By using Continuous Integration tests we can ensure that changes to the codebase are thoroughly checked for errors. This helps to maintain the accuracy and reliability of the codebase, and prevents errors from causing problems down the line.


# License

This project is licensed under the MIT License - see the [LICENCE](https://devdocs.io/cypress/) file for details.