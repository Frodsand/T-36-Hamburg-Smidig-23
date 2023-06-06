import { useIngredientContext } from "../hooks/useIngredientContext";
import { useEffect } from "react";

export const Ingredient = () => {
  const { ingredients, dispatch } = useIngredientContext();

  useEffect(() => {
    const fetchIngredients = async () => {
      const response = await fetch("/api/ingredients");
      const json = await response.json();

      if (response.ok) {
        dispatch({ type: "SET_INGREDIENTS", payload: json });
      }
    };

    fetchIngredients();
  }, [dispatch]);

  console.log('ingredients', ingredients)

  return (
    <>
      <div>
      </div>
    </>
  );
};