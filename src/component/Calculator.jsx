
import React, { useState } from 'react';
import ConfettiExplosion from 'react-confetti-explosion';
import './Calculator.css';
import Button from './Button';

const Calculator = ({buttons, handleRadiansToggle, isRadians}) => {
  let  id = 1;
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');
  const [isExploding, setIsExploding] = useState(false);
  const [memory, setMemory] = useState(0);
  const [isSecond, setIsSecond] = useState(false);


  const handleButtonClick = (value) => {
    setInput((prev) => prev + value);
  };

  const handleClear = () => {
    setInput('');
    setResult('');
  };

  const handleEquals = () => {
    try {
      const sanitizedInput = input
        .replace(/π/g, 'Math.PI')
        .replace(/e/g, 'Math.E')
        .replace(/sin/g, isRadians ? 'Math.sin' : 'Math.sin((Math.PI/180)*')
        .replace(/cos/g, isRadians ? 'Math.cos' : 'Math.cos((Math.PI/180)*')
        .replace(/tan/g, isRadians ? 'Math.tan' : 'Math.tan((Math.PI/180)*')
        .replace(/sinh/g, 'Math.sinh')
        .replace(/cosh/g, 'Math.cosh')
        .replace(/tanh/g, 'Math.tanh')
        .replace(/ln/g, 'Math.log')
        .replace(/log₁₀/g, 'Math.log10')
        .replace(/x²/g, '**2')
        .replace(/x³/g, '**3')
        .replace(/xʸ/g, '**')
        .replace(/²√x/g, 'Math.sqrt')
        .replace(/³√x/g, 'Math.cbrt')
        .replace(/ʸ√x/g, 'Math.pow')
        .replace(/1\/x/g, '1/');

      const res = eval(sanitizedInput); //imp
      setResult(res);
      setInput(res.toString());

      if (input.includes('5') && input.includes('6')) {
        setIsExploding(true);
        setTimeout(() => setIsExploding(false), 3000);
      }
    } catch {
      setResult('Error');
    }
  };

  const handleToggleSign = () => {
    if (input.startsWith('-')) {
      setInput(input.slice(1));
    } else {
      setInput('-' + input);
    }
  };

  const handlePercentage = () => {
    try {
      const res = eval(input) / 100;
      setResult(res);
      setInput(res.toString());
    } catch {
      setResult('Error');
    }
  };

  const handleMemoryClear = () => {
    setMemory(0);
  };

  const handleMemoryAdd = () => {
    try {
      const res = eval(input);
      setMemory(memory + res);
    } catch {
      setResult('Error');
    }
  };

  const handleMemorySubtract = () => {
    try {
      const res = eval(input);
      setMemory(memory - res);
    } catch {
      setResult('Error');
    }
  };



  const handleMemoryRecall = () => {
    setInput(memory.toString());
  };

  const handleSecondToggle = () => {
    setIsSecond(!isSecond);
  };

  
  const handleFactorial = () => {
    const factorial = (n) => (n <= 1 ? 1 : n * factorial(n - 1));
    try {
      const res = factorial(parseInt(input, 10));
      setResult(res);
      setInput(res.toString());
    } catch {
      setResult('Error');
    }
  };
  const handleSquare = () => {
    try {
      const res = Math.pow(parseFloat(input), 2);
      setResult(res);
      setInput(res.toString());
    } catch {
      setResult('Error');
    }
  };
  
  const handleCube = () => {
    try {
      const res = Math.pow(parseFloat(input), 3);
      setResult(res);
      setInput(res.toString());
    } catch {
      setResult('Error');
    }
  };
  
  const handleRandom = () => {
    const res = Math.random();
    setResult(res);
    setInput(res.toString());
  };

  const handleBackspace = () => {
    setInput(input.slice(0, -1));
  };



  const btnFunctions = {
    'handleButtonClick': handleButtonClick,
    'handleMemoryClear': handleMemoryClear,
    'handleMemoryAdd': handleMemoryAdd,
    'handleMemorySubtract': handleMemorySubtract,
    'handleMemoryRecall': handleMemoryRecall,
    'handleBackspace': handleBackspace,
    'handleToggleSign': handleToggleSign,
    'handlePercentage': handlePercentage,
    'handleSquare': handleSquare,
    'handleCube': handleCube,
    'handleSecondToggle': handleSecondToggle,
    'handleFactorial': handleFactorial,
    'handleRadiansToggle': handleRadiansToggle,
    'handleRandom': handleRandom,
    'handleClear': handleClear,
    'handleEquals': handleEquals
    // Add more cases for other unique functions here
};


  return (
    <div className="calculator">
      {isExploding && <ConfettiExplosion />}
      <div className="display">
        <div className="result">{result}</div>
        <div className="input">{input}</div>
      </div>
      <div className="buttons">
        {
          buttons.map((btn)=>{
            const result =btnFunctions[btn.func];
          return   <Button key={id++} btn={btn} result={result}></Button>
          })
        }
      </div>
    </div>
  );
};

export default Calculator;
