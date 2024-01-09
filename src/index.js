import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";

// Use createRoot instead of ReactDOM.render
const root = document.getElementById("root");
const rootInstance = ReactDOM.createRoot(root);
rootInstance.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
