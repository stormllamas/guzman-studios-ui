import { useEffect } from "react";

import useFetchData from "customHooks/services/useFetchData";

import "./assets/scss/main.scss";

function App() {
  const { getData } = useFetchData("bookings/1");

  useEffect(() => {
    getData();
  }, []);

  return <div id="app"></div>;
}

export default App;
