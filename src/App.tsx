import React, { ChangeEvent, FormEvent, useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Form } from 'react-bootstrap';
import { calculateSquareRoot, isSquareNumber } from './functions/squareNumberHelper';

function App() {

  const [input, setInput] = useState("");
  const [resultMessage, setResultMessage] = useState("");
  const [sqrRootMessage, setSqrRootMessage] = useState("");
  const [isDisabled, setIsDisabled] = useState(true);

  const  handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    let value = event.target.value;

    // Only allow numerical values to be entered
    value = value.replace(/\D/, '');

    //if the parsed input value is more than one enable the submit button
    value.length > 0 ? setIsDisabled(false) : setIsDisabled(true);

    // set the input value 
    setInput(value);
  }

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Reset values from previous submission
    setResultMessage("");
    setSqrRootMessage("");

    const parsedInput = parseInt(input);

    // Check if the input is a square number
    const result = isSquareNumber(parsedInput);

    // construct the result messge based on the square number result
    const resultMessage = result ? `${input} is a square number` : `${input} is not a square number`;

    // set the result message
    setResultMessage(resultMessage);

    if (result) {
      // if result is true, calculate the square root
      const sqrNumber = calculateSquareRoot(parsedInput);
      setSqrRootMessage(`The square root is: ${sqrNumber}`);
    }

  }
  

  return (
    <>
      <div className='app'>

        <div className='app__container'>
          <div className='app__header'>
            <h1 data-testid="heading">Square number checker</h1>
            <h2 data-testid="sub-heading">{`${resultMessage}`}</h2>
            <h4 data-testid="description">{`${sqrRootMessage}`}</h4>
          </div>

        <Form className='app__form' data-testid="form" onSubmit={event => handleSubmit(event)}>
          <Form.Group className="mb-3" controlId="formNumber" >
            <Form.Control 
              data-testid="input"
              type="text" 
              className='app__input'
              placeholder="Enter a number" 
              value={input}
              onChange={handleChange}
              required
              />
            <Form.Text className="text-muted" data-testid="hint-text">
              Enter a number to check if it is a square number
            </Form.Text>
          </Form.Group>
          <Button 
            variant="primary" 
            className='app__button' 
            type="submit" 
            data-testid="submit-button"
            disabled={isDisabled}>
            Submit
          </Button>
        </Form>
      </div>
      </div>
    </>
  );
}

export default App;
