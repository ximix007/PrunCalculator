import './App.css';
import { RecipiesView } from './components/recipiesView'
import { PriceView } from "./components/pricesView"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <RecipiesView ticker = "BBH"></RecipiesView>
        <PriceView materialTicker = "BBH" marketTicker = "IC1"></PriceView>
      </header>
    </div>
  );
}

export default App;
