import Numbers from "./Numbers";
import Operators from "./Operators";
import TopRow from "./TopRow";

function Keypad() {
  return (
    <div className="Keypad">
      <TopRow />
      <Numbers />
      <Operators />
    </div>
  );
}

export default Keypad;
