import { AppPage } from '../pages/AppPage';


describe('Sqaure number checker', () => {

  const appPage = new AppPage();

  beforeEach(() => {
    cy.visit(Cypress.env("url"))
  })

  it('should display correct message when input is not a square number', () => {
    appPage
      .withInput('123')
      .submit()
      .hasSubHeading('123 is not a square number')
      .hasDescription('')
  })

  it('should display correct message when input is a square number', () => {
    appPage
      .withInput('9')
      .submit()
      .hasSubHeading('9 is a square number')
      .hasDescription('The square root is: 3')
  })

  it('should only accept numerical values in the input field', () => {
    appPage
      .withInput('abc')
      .submitIsDisabled()
  })
})