import { useEffect } from "react";

import axios from "axios";

import "./assets/scss/main.scss";

function App() {
  useEffect(() => {
    axios.get("http://localhost:8000/bookings/1");
  }, []);

  return <div id="app"></div>;
}

export default App;
