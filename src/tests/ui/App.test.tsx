import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import App from '../../App';
import ReactDOM from 'react-dom';

describe('App', () => {
  let formElement: HTMLElement,
      headingElement: HTMLElement,
      subHeadingElement: HTMLElement,
      descriptionElement: HTMLElement,
      inputElement: HTMLElement,
      hintElement: HTMLElement,
      submitElement: HTMLElement;

beforeEach(() => {
  render(<App />);

  formElement = screen.getByTestId('form'); 
  headingElement = screen.getByTestId('heading'); 
  subHeadingElement = screen.getByTestId('sub-heading'); 
  descriptionElement = screen.getByTestId('description'); 
  inputElement = screen.getByTestId('input'); 
  hintElement = screen.getByTestId('hint-text');  
  submitElement = screen.getByTestId('submit-button'); 
 
});

it('renders app component', () => {
  render(<App />);
});

it('should render default app components', () => {

  // Assert
  expect(formElement).toBeInTheDocument();
  expect(headingElement).toBeInTheDocument();
  expect(subHeadingElement).toBeInTheDocument();
  expect(descriptionElement).toBeInTheDocument();
  expect(inputElement).toBeInTheDocument();
  expect(hintElement).toBeInTheDocument();
  expect(submitElement).toBeInTheDocument();
  
  expect(headingElement).toHaveTextContent('Square number checker');
  expect(subHeadingElement).toBeEmptyDOMElement();
  expect(descriptionElement).toBeEmptyDOMElement();
  expect(inputElement).toBeEmptyDOMElement();
  expect(hintElement).toHaveTextContent('Enter a number to check if it is a square number');
  expect(submitElement).toHaveTextContent('Submit');
});

it('should disable submit button when the input field is empty', () => {
  // Assert
  expect(inputElement).toBeEmptyDOMElement();
  expect(submitElement).toBeDisabled(); 
});

it('should only accept numerical values in the input field', () => {

  // Arrange
  const inputValue = 'abc';
  const mockedEvent = { target: { value: inputValue } };

  // Act
  fireEvent.change(inputElement, mockedEvent);

  // Assert
  expect(inputElement).toBeEmptyDOMElement();  
});

it('should display correct message when input is not a square number', () => {

  // Arrange
  const inputValue = '123';
  const mockedEvent = { target: { value: inputValue } };
  const expectedSubHeading = '123 is not a square number';

  // Act
  fireEvent.change(inputElement, mockedEvent);
  fireEvent.click(submitElement);

  // Assert
  expect(subHeadingElement).toHaveTextContent(expectedSubHeading);
  expect(descriptionElement).toBeEmptyDOMElement(); 
});

it('should display correct message when input is a square number', () => {

  // Arrange
  const inputValue = '16';
  const mockedEvent = { target: { value: inputValue } };
  const expectedSubHeading = '16 is a square number';
  const expectedDescription = 'The square root is: 4';

  // Act
  fireEvent.change(inputElement, mockedEvent);
  fireEvent.click(submitElement);

  // Assert
  expect(subHeadingElement).toHaveTextContent(expectedSubHeading);
  expect(descriptionElement).toHaveTextContent(expectedDescription); 
});

});