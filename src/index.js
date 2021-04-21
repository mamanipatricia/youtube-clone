import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { GuideContextProvider } from "./context/guideContext";

ReactDOM.render(
  <React.StrictMode>
    <GuideContextProvider>
      <App />
    </GuideContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
