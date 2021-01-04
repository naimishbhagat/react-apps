import logo from "./logo.svg";
import "./App.css";
import Nav from "./components/Nav";
import Map from "./components/Map";
import TopCountries from "./components/TopCountries";
function App() {
  return (
    <div className="App">
      <Nav />
      <Map />
      <TopCountries />
    </div>
  );
}

export default App;
