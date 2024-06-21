/* eslint-disable no-unused-vars */
import React, {useState} from 'react';
import Calculator from './component/Calculator';
import './App.css';

function App() {
  const [isRadians, setIsRadians] = useState(true);
  const calculatorButtons = [
    { type: '(', isA: 'function', pass: '(' , func: 'handleButtonClick' },
    { type: ')', isA: 'function', pass: ')' , func: 'handleButtonClick' },
    { type: 'MC', isA: 'function', pass: 'MC' , func:'handleMemoryClear' },
    { type: 'M+', isA: 'function', pass: 'M+' , func:'handleMemoryAdd'},
    { type: 'M-', isA: 'function', pass: 'M-' , func:'handleMemorySubtract' },
    { type: 'MR', isA: 'function', pass: 'MR' , func:'handleMemoryRecall' },
    { type: '⌫', isA: 'function', pass: '⌫'  , func: 'handleBackspace'  },
    { type: '+/-', isA: 'function', pass: '+/-' , func:'handleToggleSign'  },
    { type: '%', isA: 'function', pass: '%' , func:'handlePercentage'  },
    { type: '÷', isA: 'operator', pass: '/' ,  func: 'handleButtonClick' },
    { type: '2nd', isA: 'function', pass: '2nd'  , func:'handleSecondToggle'},
    { type: 'x²', isA: 'function', pass: 'x²' , func:'handleSquare'       },
    { type: 'x³', isA: 'function', pass: 'x³'   , func:'handleCube'     },
    { type: 'xʸ', isA: 'function', pass: 'xʸ'   , func: 'handleButtonClick'     },
    { type: 'eˣ', isA: 'function', pass: 'eˣ'    , func: 'handleButtonClick'    },
    { type: '10ˣ', isA: 'function', pass: '10ˣ' , func: 'handleButtonClick'       },
    { type: '7', isA: 'number', pass: '7'  , func: 'handleButtonClick'   },
    { type: '8', isA: 'number', pass: '8'  , func: 'handleButtonClick'   },
    { type: '9', isA: 'number', pass: '9'  , func: 'handleButtonClick'   },
    { type: '×', isA: 'operator', pass: '*'  , func: 'handleButtonClick'   },
    { type: '¹/x', isA: 'function', pass: '¹/x'   , func: 'handleButtonClick'  },
    { type: '²√x', isA: 'function', pass: '²√x'  , func: 'handleButtonClick'   },
    { type: '³√x', isA: 'function', pass: '³√x' , func: 'handleButtonClick'    },
    { type: 'ʸ√x', isA: 'function', pass: 'ʸ√x' , func: 'handleButtonClick'    },
    { type: 'ln', isA: 'function', pass: 'ln'  , func: 'handleButtonClick'   },
    { type: 'log₁₀', isA: 'function', pass: 'log₁₀'  , func: 'handleButtonClick'   },
    { type: '4', isA: 'number', pass: '4'  , func: 'handleButtonClick'   },
    { type: '5', isA: 'number', pass: '5'  , func: 'handleButtonClick'   },
    { type: '6', isA: 'number', pass: '6'  , func: 'handleButtonClick'   },
    { type: '−', isA: 'operator', pass: '-' , func: 'handleButtonClick'    },
    { type: 'x!', isA: 'function', pass: 'x!' , func:'handleFactorial'    },
    { type: 'tan', isA: 'function', pass: 'tan' , func: 'handleButtonClick'   },
    { type: 'sin', isA: 'function', pass: 'sin'  , func: 'handleButtonClick'   },
    { type: 'cos', isA: 'function', pass: 'cos'  , func: 'handleButtonClick'   },
    { type: 'e', isA: 'function', pass: 'e'  , func: 'handleButtonClick'   },
    { type: 'EE', isA: 'function', pass: 'EE'   , func: 'handleButtonClick'  },
    { type: '1', isA: 'number', pass: '1'    , func: 'handleButtonClick'    },
    { type: '2', isA: 'number', pass: '2'   , func: 'handleButtonClick'     },
    { type: '3', isA: 'number', pass: '3'    , func: 'handleButtonClick'    },
    { type: '+', isA: 'operator', pass: '+'   , func: 'handleButtonClick'   },
    { type: `${isRadians ? 'Rad' : 'Deg'}` , isA: 'function deg', pass: 'Rad'   , func:'handleRadiansToggle'     },
    { type: 'sinh', isA: 'function', pass: 'sinh'    , func: 'handleButtonClick'    },
    { type: 'cosh', isA: 'function', pass: 'cosh'    , func: 'handleButtonClick'    },
    { type: 'tanh', isA: 'function', pass: 'tanh'     , func: 'handleButtonClick'   },
    { type: 'π', isA: 'function', pass: 'π'    , func: 'handleButtonClick'    },
    { type: 'Rand', isA: 'function', pass: 'Rand'   , func:'handleRandom'     },
    { type: '0', isA: 'number', pass: '0'   , func: 'handleButtonClick'     },
    { type: '.', isA: 'number', pass: '.'    , func: 'handleButtonClick'    },
    { type: 'AC', isA: 'function', pass: 'AC'   , func:'handleClear'     },
    { type: '=', isA: 'operator equal', pass: '='   , func:'handleEquals'                    }
  ];
  const handleRadiansToggle = () => {
    setIsRadians(!isRadians);
    
  };

  
  return (
    <div className="App">
      <Calculator  buttons={calculatorButtons} handleRadiansToggle={handleRadiansToggle} isRadians={isRadians}/>
    </div>
  );
}

export default App;
