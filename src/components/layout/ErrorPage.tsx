import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div id="error-page" className="p-4">
      <h1>404 Page Not Found</h1>
      <Link to="/">Click here to go back to Home Page</Link>
    </div>
  );
};

export default ErrorPage;
