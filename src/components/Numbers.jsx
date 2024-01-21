import { useCalculatorContext } from "../contexts/CalculatorContext";
import Button from "./Button";

function Numbers() {
  const { setInput } = useCalculatorContext();
  const numbers = ["0", ".", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

  function handleNumber(num) {
    setInput((prev) => ({
      ...prev,
      isUserInput: true,
      value:
        num === "." && prev.value.includes(".")
          ? prev.value
          : (num === "." && prev.value === "0") || prev.value !== "0"
          ? prev.value + num
          : num,
    }));
  }

  const renderNumbers = numbers.map((num) => (
    <Button
      key={num}
      className="number"
      label={num}
      clickHandler={handleNumber}
    />
  ));

  return <div>{renderNumbers}</div>;
}

export default Numbers;
