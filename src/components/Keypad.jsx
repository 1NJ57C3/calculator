import Numbers from "./Numbers";
import Operators from "./Operators";

function Keypad() {
  return (
    <div className="Keypad">
      <Numbers />
      <Operators />
    </div>
  );
}

export default Keypad;
