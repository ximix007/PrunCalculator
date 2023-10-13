import { useState, useEffect } from "react"
import { RecipiesGeter } from "../API/accessors/recipies"
import { recipiesParce } from "../API/parcers/recipies"

export const useRecipeForMaterial = (materialTicker) => {
    let [recipies, setRecipies] = useState([])

    useEffect(() => {
        RecipiesGeter.getInstance().GetRecipies(materialTicker)
            .then(x => setRecipies(recipiesParce(x, materialTicker)));

        return () => (1)},
        [materialTicker])

    return recipies;
}