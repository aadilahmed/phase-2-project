import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./components/App";
import "semantic-ui-css/semantic.min.css";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </BrowserRouter>
);
