import { createContext, useContext, useState } from "react";

const CalculatorContext = createContext(null);

export function CalculatorProvider({ children }) {
  const [input, setInput] = useState({ value: "0", isUserInput: true });
  const [equation, setEquation] = useState([]);
  const [buffer, setBuffer] = useState(0);

  function handleCalculations() {
    let output = equation.map((element) => Number(element) || element);

    function doMath(i, operation) {
      output.splice(i - 1, 3, operation);
    }

    if (output.length % 2 === 0) {
      output.pop();
    }

    // Do multiplication and division in equation from left to right
    for (let i = 1; i < output.length; i += 2) {
      let ltOperand = output[i - 1];
      let rtOperand = output[i + 1];

      if (output[i] === "*") {
        doMath(i, multiply(ltOperand, rtOperand));
        i -= 2;
      } else if (output[i] === "/") {
        doMath(i, divide(ltOperand, rtOperand));
        i -= 2;
      }
    }

    // Do multiplication and division in equation from left to right
    for (let i = 1; i < output.length; i += 2) {
      let ltOperand = output[i - 1];
      let rtOperand = output[i + 1];

      if (output[i] === "+") {
        doMath(i, add(ltOperand, rtOperand));
        i -= 2;
      } else if (output[i] === "-") {
        doMath(i, subtract(ltOperand, rtOperand));
        i -= 2;
      }
    }

    setBuffer(output[0] || 0);
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
