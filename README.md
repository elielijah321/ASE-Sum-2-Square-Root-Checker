# Square number checker app - Advanced Software Engineering Summative 2

For Northeastern University

[![codecov](https://codecov.io/gh/elielijah321/ASE-Sum-2-Square-Root-Checker/branch/main/graph/badge.svg?token=FkUOknCveH)](https://codecov.io/gh/elielijah321/ASE-Sum-2-Square-Root-Checker)

#  Reason for creating the app

The Square number checker app was created as a prototype for the organisation I work for to determine the viability of using the React and Typescript technology for building web applications. The decision to introduce React and Typescript into the organisation's technology stack was made with the aim of improving the performance and maintainability of their applications. To assess the feasibility of using React, the organisation wanted to develop a small-scale application that would demonstrate the capabilities of the technology.

The Square number checker app was chosen as the prototype because it was relatively simple to build, but still required some complex logic and user interaction. It provided a solid foundation for further exploration and development, and helped to set the stage for future innovation and growth. 

## React 

React is a JavaScript library for building user interfaces using reusable components React uses a virtual DOM (Document Object Model) which is a lightweight representation of the actual DOM. When a component's state changes React calculates the minimal set of changes needed to update the virtual DOM and applies them to the actual DOM resulting in faster and more efficient updates.

## Typescript 

TypeScript is a programming language that is a superset of JavaScript meaning it extends and enhances JavaScript with additional features. TypeScript adds features such as static typing, interfaces and classes making it easier to write and maintain large and complex applications.

The main advantage of TypeScript over JavaScript is that it provides compile-time checking of types which helps to catch errors early in the development process before the code is run. This can save developers a lot of time and effort by reducing the number of bugs and errors that need to be fixed later on.


# About the app

Author: Elijah Aremu

GitHub Username: @elielijah321

![APP SCREENSHOT](https://user-images.githubusercontent.com/45821029/232090390-4c833dfd-f85e-426e-99d7-a98875544739.jpeg)


The Square number checker app is a web application built with React and Bootstrap that allows users to input a number and determine if it is a perfect square. The app provides two main functionalities; it checks if the entered number is a square number and calculates the square root of that number. The app has a simple and user-friendly interface that includes an input field for the number to be checked, a submit button to initiate the check and a message section that displays the results of the check.

# User Documentation

To use the square number checker app a user should
* Click this [link](https://zealous-river-0a1c30e03.2.azurestaticapps.net/)
* Enter a number into the input box 
* Press the submit button to view the results


# Technical Documentation

To run the files for this project npm is necessary, therefore make sure that it has been installed.

### 1. Ensure node and npm are installed by running the following commands in your terminal:

```sh
node -v
```
```sh
npm -v
```
If they are not installed, follow the steps on [npm Docs](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm).

### 2. Clone the repo:

```sh
git clone https://github.com/elielijah321/ASE-Sum-2-Square-Root-Checker.git
```

### 3. Install dependencies

```sh
npm install
```

### 4. Launch the project
```sh
npm start
```
Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### 5. Run logic and UI test:

```sh
npm test
```
```sh
a
```

Press the 'a' button to runs all tests (excluding End-to-End tests).

Visit [create-react-app/docs/running-tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information on running tests.

### 6. Run cypress tests:

Ensure that the app is running (See step 4)

```sh
npm run cy:open
```
or
```sh
npm run cy:run
```

Visit [cypress documentation](https://docs.cypress.io/guides/end-to-end-testing/writing-your-first-end-to-end-test) for more information on running cypress tests.

# Code and Design


### Technical Stack
* [HMTL](https://devdocs.io/html/)
* [CSS](https://devdocs.io/css/)
* [React](https://devdocs.io/react/)
* [TypeScript](https://devdocs.io/typescript/)
* [Jest](https://jestjs.io/docs/getting-started)
* [Cypress](https://devdocs.io/cypress/)
* [Azure](https://azure.microsoft.com/en-gb/get-started/#explore-azure)

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


The CSS BEM (Block, Element, Modifier) naming strategy is a way to name CSS classes that follows a modular and consistent structure. It helps to create reusable code and makes it easier to maintain and scale large CSS codebases. 

In BEM each CSS class is made up of three parts: the block, the element and the modifier, separated by double underscores (__) and double hyphens (--)

![BEM naming stratergy](https://user-images.githubusercontent.com/45821029/233633668-c80306d2-291b-4af0-891f-51d8f826d72b.jpeg)

# Figma designs

Figma is a collaborative design tool that allows designers to create user interface designs and interactive prototypes. Figma can be a valuable tool for visualizing the overall look and feel of the app as well as the specific functionality and user interactions.

By creating both a desktop and mobile prototype in Figma I was able to better understand how the app should look and feel on different devices and could identify any potential design issues or usability challenges early in the development process. 

### Prototype 1
![Prototype 1](https://user-images.githubusercontent.com/45821029/232894163-81ceed6e-ad8d-48b2-bded-14823ffdbf5d.jpeg)

### Prototype 2
![Prototype 2](https://user-images.githubusercontent.com/45821029/232896279-6ec8b242-89c0-4759-8e9e-e3ab7b597398.jpeg)

### Prototype 3
![Prototype 3](https://user-images.githubusercontent.com/45821029/232896374-51486d93-b2a1-43cb-a0d1-97b43f67f6d7.jpeg)

I created three prototypes of my project's user interface in Figma and tested them with end-users. I used Google Forms to create a survey that was circulated to potential users. I presented all designs to users and included questions asking them which design they prefer while ensuring that the questions do not introduce any biases. Based on user feedback I selected the design that received the most votes as the user interface for my project. 

[Prototype Form](https://forms.gle/ju5TE9xqYKfeSC6e6)


## Building the MVP

How the MVP was produced
1. I started by creating the CI/CD pipelines

2. I then wrote failing UI tests to check for the presence of the elements that will be on the page

3. Next was to create and style the page to include elements such as the background, form, input and submit button 

4. I then wrote unit test to for the method that would confirm whether the input is or is not a square number 

5. I then wrote the function that would confirm whether the input is or is not a square number 

6. Lastly, i wrote the end to end test

# Project Management

This project was managed using Github's project tracker. GitHub's project tracker is a tool that allows users to manage and track the progress of projects within their GitHub repositories. It provides a visual interface for organising tasks, issues and pull requests into boards and columns similar to kanban boards.

For this project I used the kanban methodology which allowed me to visualise the workflow, limit work in progress, and track the progress of tasks more effectively. This helped me to identify and address bottlenecks in the process and deliver value to customers more efficiently.

Labels were attached to stories to categorise and organise them based on different criteria such as documentation, testing, status, and bug. By using labels it becomes easier to filter and search for stories that share similar characteristics or are related to specific areas of the project.

![Project Kanban Board](https://user-images.githubusercontent.com/45821029/232847497-86161f5d-c675-4d91-81fa-7a08e002dc99.jpeg)

## User stories

User stories were created with a detailed description and a set of acceptance criteria that defined the specific requirements and functionality to be implemented.

![User story](https://user-images.githubusercontent.com/45821029/232890190-3ef82f43-a582-45cf-bbb6-4f113649ce8d.jpeg)

## Gitflow
Gitflow is a branching model and workflow for version control using Git designed to help teams manage the development, testing, and release of software products.

Gitflow defines a clear set of branching rules and conventions that dictate how code changes should be managed within a Git repository. It uses two main branches: a "main" branch, which represents the latest stable version of the software and a "develop" branch which represents the ongoing development of new features and bug fixes.

Gitflow also defines a set of supporting branches, including feature branches for developing new features, release branches for preparing software releases and hotfix branches for addressing critical bugs or issues in production environments.

To ensure clarity on which branch corresponded to which ticket, I made a point of incorporating the ID of the user story in the branch name.
The naming convention of the branch goes as follows "feauture/[TicketID]-[description-of-ticket]"


# Testing

Test driven development (TDD) was used on this project because it is a software development methodology that promotes the creation of high-quality, reliable and maintainable code. By writing tests before writing the actual code, developers can ensure that the code they produce meets the desired functionality and quality requirements.

The testing frameworks used in this project were Cypress, Jest, and the React Testing Library. Cypress was used for end-to-end testing of the application's user interface, while Jest was used for unit testing of individual code modules. The React Testing Library was used for integration testing, ensuring that the various components of the application worked together as intended. Together, these testing frameworks provided comprehensive coverage of the application's functionality, ensuring that it met the project's quality and reliability requirements.

## Unit Testing with Jest

Jest is a JavaScript testing framework that is commonly used for unit testing, which involves testing individual modules or functions in isolation from the rest of the application. Unit testing helps to ensure that each part of the codebase functions correctly and meets its individual requirements.

![Unit tests](https://user-images.githubusercontent.com/45821029/232757667-68a53670-886c-469b-8fd3-c889641d2bec.jpeg)


## React Testing Library Tests

The React Testing Library is a popular testing library that is specifically designed for testing React components. Integration testing involves testing how different parts of an application work together including the interactions between components.

![React Testing library](https://user-images.githubusercontent.com/45821029/232757844-30b3fb87-eca1-4872-812d-0c81ebe03f9e.jpeg)


## Cypress Tests

Cypress is a JavaScript end-to-end testing framework that is specifically designed for testing the user interface of web applications. End-to-end testing involves simulating a user's interactions with an application from start to finish ensuring that all parts of the application work together as intended.

![Cypress Tests](https://user-images.githubusercontent.com/45821029/232759599-b849d228-019b-41d6-a5a9-c6fcf71fac77.jpeg)


## Performance and Accessibility Testing

I evaluated and improved my webpage's quality using the Google Lighthouse tool, which is free and accessible through the development console for Chromium-based browsers. This tool generates a report that summarises various quality metrics, including performance, accessibility, best practices, and SEO.

The performance metric evaluated loading speed, time for loading basic frames, and displaying meaningful content. Accessibility evaluated the website's accessibility for users with disabilities through audio captions, button names, and 'aria-' attributes. Best practices evaluated many practices deemed 'best,' such as using HTTPS and avoiding deprecated code. SEO analysed features such as meta descriptions, titles, and font sizes.

The website scored highly in all four metrics, with a performance rating of 100, an accessibility rating of 96, a best practices rating of 100, and an SEO rating of 100. This means the website is highly optimised, easy to navigate, and attracts high-quality internet traffic naturally without the need for advertising.

![LIGHT HOUSE](https://user-images.githubusercontent.com/45821029/232130330-2a34047f-211b-4de0-945d-64b6a72451e4.jpeg)


## Continuous Integration Testing
When I make changes to the code and push them to the repository on GitHub, the platform runs Continuous Integration tests automatically. These tests check to ensure that my changes don't introduce any errors or problems into the codebase.

If all the tests pass, I know that the changes I've made are ready for review and can be merged into the codebase by a team member. However, if a test fails, it means that one of my changes caused an issue and needs to be fixed before the code can be merged.

By using Continuous Integration tests we can ensure that changes to the codebase are thoroughly checked for errors. This helps to maintain the accuracy and reliability of the codebase, and prevents errors from causing problems down the line.


# Deployment process

During the development of the app, I implemented continuous integration and continuous deployment pipeline which will build, test and deploy the code to Azure when a pull request is opened on the repository

* [Live Version](https://zealous-river-0a1c30e03.2.azurestaticapps.net/)
* [Develop Version](https://happy-ground-09b048e03.3.azurestaticapps.net/)

**Continuous Integration (CI)** is the practice of regularly integrating code changes from multiple developers into a central repository. This is typically achieved through automated build and testing processes that run every time code changes are made. The goal of CI is to detect errors and conflicts early in the development process, before they can cause problems downstream.

**Continuous Delivery (CD)** is the practice of automating the process of deploying software applications to production environments. This is typically achieved through a series of automated tests and deployment pipelines that ensure that each new version of the software is properly tested and validated before being released to users. The goal of CD is to deliver high-quality software quickly and reliably, while minimising the risk of errors or downtime.

### CI/CD pipeline yaml file
![CI/CD Pipeline](https://user-images.githubusercontent.com/45821029/232880309-cea1238b-2240-4246-bb11-11283d98111f.jpeg)

### Visulisation of the pipeline
![Visualisation of the pipeline](https://user-images.githubusercontent.com/45821029/232879023-6b821b6e-821c-40ef-a5fe-c2b64356ba05.jpeg)


# License

This project is licensed under the MIT License - see the [LICENCE](https://github.com/elielijah321/ASE-Sum-2-Square-Root-Checker/blob/main/LICENSE) file for details.

