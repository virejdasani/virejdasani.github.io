import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import "./fonts/akira/akira.otf";
import "./fonts/glendale/Glendale-Light.otf";
import "./fonts/glendale/Glendale-Regular.otf";
import "./fonts/glendale/Glendale-Bold.otf";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
