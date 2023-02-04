import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BackgroundProvider } from "./context/BackgroundContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BackgroundProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </BackgroundProvider>
);
