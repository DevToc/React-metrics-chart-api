import logo from "./logo.svg";
import "./App.css";
import Home from "./components/Home";
import { RateProvider } from "./context/RateContext";


function App() {
  return (
    <RateProvider>
      <Home />
    </RateProvider>
  );
}

export default App;
