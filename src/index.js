import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { GuideContextProvider } from "./context/guideContext";
import { AuthContextProvider } from "./context/authContext";
import VideoContextProvider from "./context/videoContext";

ReactDOM.render(
  <React.StrictMode>
    <AuthContextProvider>
      <VideoContextProvider>
        <GuideContextProvider>
          <App />
        </GuideContextProvider>
      </VideoContextProvider>
    </AuthContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
