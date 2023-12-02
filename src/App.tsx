import { useEffect } from "react";

import "@coreui/coreui/dist/css/coreui.min.css";

import Header from "components/header";
import MainBody from "components/layout/MainBody";
import Sidebar from "components/sidebar";

import useFetchData from "customHooks/services/useFetchData";

import "./assets/scss/main.scss";

function App() {
  const { getData } = useFetchData("bookings/1");

  useEffect(() => {
    getData();
  }, []);

  return (
    <div id="root">
      <Sidebar />
      <MainBody>
        <Header />
      </MainBody>
    </div>
  );
}

export default App;
