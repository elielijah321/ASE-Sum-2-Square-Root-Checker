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

    value = value.replace(/\D/, '');
    value.length > 0 ? setIsDisabled(false) : setIsDisabled(true);

    setInput(value);
  }

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setResultMessage("");
    setSqrRootMessage("");

    const parsedInput = parseInt(input);

    // Check if the input is a square number
    const result = isSquareNumber(parsedInput);
    const resultMessage = result ? `${input} is a square number` : `${input} is not a square number`;

    setResultMessage(resultMessage);

    
    if (result) {
      const sqrNumber = calculateSquareRoot(parsedInput);
      setSqrRootMessage(`The square root is: ${sqrNumber}`);
    }

  }
  

  return (
    <>
      <div className='app'>

        <div className='form-container'>
        <h1 className='text-align' data-testid="heading">Square number checker</h1>
        <h2 className='text-align' data-testid="sub-heading">{`${resultMessage}`}</h2>
        <h4 className='text-align' data-testid="description">{`${sqrRootMessage}`}</h4>

        <Form data-testid="form" onSubmit={event => handleSubmit(event)}>
          <Form.Group className="mb-3" controlId="formNumber" >
            <Form.Control 
              data-testid="input"
              type="text" 
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
            className='submit' 
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
