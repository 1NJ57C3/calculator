import "./App.css";
import Display from "./components/Display";
import Keypad from "./components/Keypad";
import { CalculatorProvider } from "./contexts/CalculatorContext";

function App() {
  return (
    <div className="App">
      <CalculatorProvider>
        <Display />
        <Keypad />
      </CalculatorProvider>
    </div>
  );
}

export default App;
