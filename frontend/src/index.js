import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.js";
import { LecturesContextProvider } from "./context/LectureContext";
import { UsersContextProvider } from "./context/UserContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <UsersContextProvider>
        <LecturesContextProvider>
            <App />
        </LecturesContextProvider>
    </UsersContextProvider>
  </React.StrictMode>
);
