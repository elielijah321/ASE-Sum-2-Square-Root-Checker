import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../../App';

describe('App', () => {
  let formElement: HTMLElement,
      headingElement: HTMLElement,
      subHeadingElement: HTMLElement,
      descriptionElement: HTMLElement;

beforeEach(() => {
  render(<App />);

  formElement = screen.getByTestId('form'); 
  headingElement = screen.getByTestId('heading'); 
  subHeadingElement = screen.getByTestId('sub-heading'); 
  descriptionElement = screen.getByTestId('description'); 
 
});

it('should render default app components', () => {

  // Assert
  expect(formElement).toBeInTheDocument();
  expect(headingElement).toBeInTheDocument();
  expect(subHeadingElement).toBeInTheDocument();
  expect(descriptionElement).toBeInTheDocument();
  
  expect(headingElement).toHaveTextContent('Square number checker');
  expect(subHeadingElement).toBeEmptyDOMElement();
  expect(descriptionElement).toBeEmptyDOMElement();
});

});