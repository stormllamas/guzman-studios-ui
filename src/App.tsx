import { useEffect } from "react";

import Header from "components/Header";

import useFetchData from "customHooks/services/useFetchData";

import "./assets/scss/main.scss";
import '@coreui/coreui/dist/css/coreui.min.css'

function App() {
  const { getData } = useFetchData("bookings/1");

  useEffect(() => {
    getData();
  }, []);

  return (
    <div id="app">
      <Header />
    </div>
  );
}

export default App;
