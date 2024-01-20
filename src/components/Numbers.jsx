import Button from "./Button";

function Numbers() {
  const numbers = ["0", ".", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

  const renderNumbers = numbers.map((num) => (
    <Button key={num} type="number" value={num} />
  ));

  return <div>{renderNumbers}</div>;
}

export default Numbers;
