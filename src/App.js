import logo from "./logo.svg";
import "./App.css";
import HeaderBar from "../src/Components/HeaderBar";
import WeatherBody from "./Components/WeatherBody";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    //make sure there is a parental div to hold the information
    <div className="App">
      <HeaderBar name="GIT HUB USER SEARCH" />

      <WeatherBody />
    </div>
  );
}

export default App;
