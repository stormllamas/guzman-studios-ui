import { useEffect } from "react";

import axios from "axios";

import "./App.css";
import logo from "./logo.svg";

import "./assets/scss/main.scss";

function App() {
  useEffect(() => {
    axios.get("http://localhost:8000/bookings/1", {});
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
