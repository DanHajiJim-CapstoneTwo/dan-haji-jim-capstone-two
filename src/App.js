import "./App.css";
import Checkout from "./Components/Checkout/Checkout";
import CreditCard from "./Components/CreditCard/CreditCard";

function App() {
  return (
    <div className="App">
      <h1>Products</h1>
      <Checkout />
      <CreditCard />
    </div>
  );
}

export default App;
