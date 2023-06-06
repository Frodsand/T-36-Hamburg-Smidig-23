export const IngredientApiContext = React.createContext({
    async listIngredients(){
        return await fetch('/api/ingredients')
    }
})