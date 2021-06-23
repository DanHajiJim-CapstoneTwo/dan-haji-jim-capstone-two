import "./App.css";
import Checkout from "./Components/Checkout/Checkout";
import CreditCard from "./Components/CreditCard/CreditCard";
import Cart from "./Components/Cart/Cart";

function App() {
  return (
    <div className="App">
      <h1>Products</h1>
      <Checkout />
      <CreditCard />
      <Cart />
    </div>
  );
}

export default App;
