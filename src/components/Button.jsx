import { useCalculatorContext } from "../contexts/CalculatorContext";

function Button({ type, value }) {
  const {
    input,
    setInput,
    setEquation,
  } = useCalculatorContext();

  function handleNumber() {
    setInput((prev) => ({
      ...prev,
      isUserInput: true,
      value: input.value === "0" ? value : prev.value + value,
    }));
  }

  function handleOperator() {
    if (input.isUserInput === true) {
      setEquation((prev) => [...prev, input.value, value]);
      setInput({ value: "0", isUserInput: false });
    } else {
      setEquation((prev) => {
        let updatedEquation = [...prev];

        updatedEquation[updatedEquation.length - 1] = value;

        return updatedEquation;
      });
    }
  }

  function handleClick(e) {
    e.preventDefault();

    if (type === "number") {
      handleNumber();
    }

    if (type === "operator") {
      handleOperator();
    }
  }

  return (
    <button className={type} id={value} onClick={handleClick}>
      {value}
    </button>
  );
}

export default Button;
