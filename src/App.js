// import logo from "./logo.svg";
import "./App.css";
import Pokemon from "./components/Pokemon/Pokemon/Pokemon";
import SearchBar from "./components/Pokemon/SearchBar/SearchBar";

function App() {
  return (
    <div className="App">
      <SearchBar />
      <Pokemon />
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
