import Button from "./Button";

function Operators() {
  const operators = ["=", "+", "-", "*", "/"];

  const renderOperators = operators.map((op) => (
    <Button key={op} type="operator" value={op} />
  ));

  return <div>{renderOperators}</div>;
}

export default Operators;
