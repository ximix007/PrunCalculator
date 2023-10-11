import './App.css';
import { CalculatorController } from "./components/calculatorControl/calculatorController"
import { ResourceTable } from "./components/table/ResourceTable"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <CalculatorController/>
        <ResourceTable/>
      </header>
    </div>
  );
}

export default App;
