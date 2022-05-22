import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode> enlevé pour ne pas avoir de problèmes avec le useEffect
  <App />
  // </React.StrictMode>
);