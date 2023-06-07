import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.js";
import { IngredientsContextProvider } from "./context/IngredientContext";
import { LecturesContextProvider } from "./context/LectureContext";
import { SemesterPLansContextProvider } from "./context/SemesterPlansContext";
import { UsersContextProvider } from "./context/UserContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <UsersContextProvider>
      <SemesterPLansContextProvider>
        <LecturesContextProvider>
          <IngredientsContextProvider>
            <App />
          </IngredientsContextProvider>
        </LecturesContextProvider>
      </SemesterPLansContextProvider>
    </UsersContextProvider>
  </React.StrictMode>
);
