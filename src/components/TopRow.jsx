import { useCalculatorContext } from "../contexts/CalculatorContext";
import Button from "./Button";

function TopRow() {
  const { setInput, setEquation, setBuffer } = useCalculatorContext();
  const topRow = ["AC", "CE", "del"];
  const handlers = {
    AC: () => {
      setBuffer(0);
      setEquation([]);
      setInput({ value: "0", isUserInput: true });
    },
    CE: () => {
      setInput({ value: "0", isUserInput: true });
    },
    del: () => {
      setInput((prev) => ({ ...prev, value: prev.value.slice(0, -1) || "0" }));
    },
  };

  const renderTopRow = topRow.map((button) => (
    <Button
      key={button}
      className="clear"
      label={button}
      clickHandler={handlers[button]}
    />
  ));

  return <div>{renderTopRow}</div>;
}

export default TopRow;
