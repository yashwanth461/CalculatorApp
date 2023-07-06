import React, { useState } from 'react';
import './calculator.css';

const Calculator = () => {
  const [result, setResult] = useState('0');

  const handleButtonClick = (input) => {
    let currentDisplay = result;

    if (currentDisplay === '0') {
      if (input !== 'C' && input !== 'DEL' && input !== '=') {
        setResult(input);
      }
    } else if (currentDisplay.includes('.') && input === '.') {
      // Do nothing if a dot has already been entered
    } else if (input === 'DEL') {
      setResult(currentDisplay.substring(0, currentDisplay.length - 1));
    } else if (input === 'C') {
      setResult('0');
    } else if (input !== 'C' && input !== 'DEL' && input !== '=') {
      setResult(currentDisplay + input);
    } else if (input === '=') {
      setResult(eval(currentDisplay).toString());
    }
  };

  return (
    <div className="container">
      <div className="result">
        <p id="result">{result}</p>
      </div>
      <div className="buttons">
        <div className="row">
          <button onClick={() => handleButtonClick('C')}>C</button>
          <button onClick={() => handleButtonClick('DEL')}>DEL</button>
          <button onClick={() => handleButtonClick('+')}>+</button>
          <button onClick={() => handleButtonClick('%')}>%</button>
        </div>

        <div className="row">
          <button onClick={() => handleButtonClick('7')}>7</button>
          <button onClick={() => handleButtonClick('8')}>8</button>
          <button onClick={() => handleButtonClick('9')}>9</button>
          <button onClick={() => handleButtonClick('/')}>/</button>
        </div>

        <div className="row">
          <button onClick={() => handleButtonClick('4')}>4</button>
          <button onClick={() => handleButtonClick('5')}>5</button>
          <button onClick={() => handleButtonClick('6')}>6</button>
          <button onClick={() => handleButtonClick('*')}>*</button>
        </div>

        <div className="row">
          <button onClick={() => handleButtonClick('1')}>1</button>
          <button onClick={() => handleButtonClick('2')}>2</button>
          <button onClick={() => handleButtonClick('3')}>3</button>
          <button onClick={() => handleButtonClick('-')}>-</button>
        </div>

        <div className="row">
          <button id="dot" onClick={() => handleButtonClick('.')}>.</button>
          <button onClick={() => handleButtonClick('0')}>0</button>
          <button id="equal" onClick={() => handleButtonClick('=')}>=</button>
        </div>
      </div>
    </div>
  );
};

export default Calculator;