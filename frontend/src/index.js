import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.js";
import { IngredientContextProvider } from "./context/ingredientContext.js";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <IngredientContextProvider>
      <App />
    </IngredientContextProvider>
  </React.StrictMode>
);
