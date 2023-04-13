import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  

  return (
    <>
      <div className='app'>

      <div className='form-container'>
      <h1 className='text-align' data-testid="heading">Square number checker</h1>
      <h2 className='text-align' data-testid="sub-heading">{`{resultMessage}`}</h2>
      <h4 className='text-align' data-testid="description">{`{sqrRootMessage}`}</h4>
      </div>
      </div>
    </>
  );
}

export default App;
