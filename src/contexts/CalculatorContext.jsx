import { createContext, useContext, useState } from "react";

const CalculatorContext = createContext(null);

export function CalculatorProvider({ children }) {
  const [input, setInput] = useState({value: "0", isUserInput: true});
  const [equation, setEquation] = useState([]);
  const [buffer, setBuffer] = useState(0);

  function handleCalculations() {
    let output = equation.map(element => Number(element) || element);
    let i = 1;

    function doMath(operation) {
      output.splice(i-1, 3, operation)
    }

    while (output.length > 2 && i < output.length) {
      let ltOperand = output[i-1];
      let rtOperand = output[i+1];

      if (output[i] === "*" && rtOperand) {
        doMath(multiply(ltOperand, rtOperand));
      } else if (output[i] === "/" && rtOperand) {
        doMath(divide(ltOperand, rtOperand));
      } else {
        i++;
      }
    }

    i = 1;

    while (output.length > 2 && i < output.length) {
      let ltOperand = output[i-1];
      let rtOperand = output[i+1];

      if (output[i] === "+" && rtOperand) {
        doMath(add(ltOperand, rtOperand));
      } else if (output[i] === "-" && rtOperand) {
        doMath(subtract(ltOperand, rtOperand));
      } else {
        i++;
      }
    }

    setBuffer(output);
  }

  function add(a, b) {
    return a + b;
  }
  
  function subtract(a, b) {
    return a - b;
  }
  
  function multiply(a, b) {
    return a * b;
  }
  
  function divide(a, b) {
    return a / b;
  }

  return (
    <CalculatorContext.Provider
      value={{
        input,
        setInput,
        equation,
        setEquation,
        buffer,
        setBuffer,
        handleCalculations,
      }}
    >
      {children}
    </CalculatorContext.Provider>
  );
}

export function useCalculatorContext() {
  const context = useContext(CalculatorContext);

  if (!context) {
    throw new Error("CalculatorContext Provider not found!");
  }

  return context;
}
