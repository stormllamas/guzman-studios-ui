import { useEffect } from "react";
import { RouterProvider } from "react-router-dom";

import "@coreui/coreui/dist/css/coreui.min.css";
import router from "routes";

import useFetchData from "customHooks/services/useFetchData";

import "./assets/scss/main.scss";

function App() {
  const { getData } = useFetchData("bookings/1");

  useEffect(() => {
    getData();
  }, []);

  return <RouterProvider router={router} />;
}

export default App;
