import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { GuideContextProvider } from "./context/guideContext";
import { AuthContextProvider } from "./context/authContext";

ReactDOM.render(
  <React.StrictMode>
    <AuthContextProvider>
      <GuideContextProvider>
        <App />
      </GuideContextProvider>
    </AuthContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
