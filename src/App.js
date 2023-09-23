import './App.css';
import { RecipiesView } from './components/recipiesView'
import { PriceView } from "./components/pricesView"
import { Calculator } from "./components/calculator/calculator"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <RecipiesView ticker = "BBH"></RecipiesView>
        <PriceView materialTicker = "BBH" marketTicker = "IC1"></PriceView>
        <Calculator materialTicker = "BBH" marketTicker = "IC1"></Calculator>
      </header>
    </div>
  );
}

export default App;
