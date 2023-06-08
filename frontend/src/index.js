import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.js";
import { LecturesContextProvider } from "./context/LectureContext";
import { UsersContextProvider } from "./context/UserContext";
import { AuthContextProvider } from "./context/AuthContext";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AuthContextProvider>
      <UsersContextProvider>
          <LecturesContextProvider>
              <App />
          </LecturesContextProvider>
      </UsersContextProvider>
    </AuthContextProvider>
  </React.StrictMode>
);
