import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../../App';

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

});