import { IngredientContext } from "../context/ingredientContext";
import { useContext } from "react";

export const useIngredientContext = () => {
    const context = useContext(IngredientContext);

    if(!context){
        throw Error("woops");
    }

    return context;
}