import "./App.css";
import Checkout from "./Components/Checkout/Checkout";
import CreditCard from "./Components/CreditCard/CreditCard";
import Cart from "./Components/Cart/Cart";
import CartIcon from "./Components/CartIcon/CartIcon";

const fakedata = [
  {
    name: "bulbasaur",
    url: "https://pokeapi.co/api/v2/pokemon/1/",
    price: 30,
  },
  {
    name: "ivysaur",
    url: "https://pokeapi.co/api/v2/pokemon/2/",
    price: 30,
  },
  {
    name: "venusaur",
    url: "https://pokeapi.co/api/v2/pokemon/3/",
    price: 30,
  },
  {
    name: "Charizard",
    url: "https://pokeapi.co/api/v2/pokemon/3/",
    price: 30,
  },
];

function App() {
  return (
    <div className="App">
      <CartIcon />
      <h1>Products</h1>
      <Checkout />
      <CreditCard />
      <Cart pokemons={fakedata} />
    </div>
  );
}

export default App;
