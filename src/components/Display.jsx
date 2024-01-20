import { useEffect } from "react";
import { useCalculatorContext } from "../contexts/CalculatorContext";

function Display() {
  const { equation, input, buffer, setBuffer, handleCalculations } = useCalculatorContext();

  const display = input.isUserInput ? input.value : buffer;

  useEffect(() => {
    setBuffer(() => {
      handleCalculations();
    })
  }, [equation])

  return (
    <div>
      <p>
        {equation}
      </p>
      <p>      
        {display}
      </p>
    </div>
  );
}

export default Display;
