import { useCalculatorContext } from "../contexts/CalculatorContext";
import Button from "./Button";

function Operators() {
  const { input, setInput, setEquation } = useCalculatorContext();
  const operators = ["=", "+", "-", "*", "/"];

  function handleOperator(operator) {
    if (input.isUserInput === true) {
      setEquation((prev) => [...prev, input.value, operator]);
      setInput({ value: "0", isUserInput: false });
    } else {
      setEquation((prev) => {
        let updatedEquation = [...prev];

        updatedEquation[updatedEquation.length - 1] = operator;

        return updatedEquation;
      });
    }
  }

  const renderOperators = operators.map((operator) => (
    <Button key={operator} className="operator" label={operator} clickHandler={handleOperator} />
  ));

  return <div>{renderOperators}</div>;
}

export default Operators;
