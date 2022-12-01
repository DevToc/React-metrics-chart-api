import logo from "./logo.svg";
import "./App.css";
import Home from "./components/Home";
import { RateProvider } from "./context/RateContext";
import { TrendProvider } from "./context/TrendContext";

function App() {
  return (
    <RateProvider>
      <TrendProvider>
      <Home />
    
      </TrendProvider>
    </RateProvider>
  );
}

export default App;
