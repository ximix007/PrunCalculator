import './App.css';
import { CalculatorController } from "./components/calculatorControl/calculatorController"
import { ResourceTable } from "./components/table/ResourceTable"
import { BuildingGeter } from "./API/accessors/buldings"

function App() {
  BuildingGeter.getInstance().GetBuilding("SME").then(x => console.log(x))

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
