import { useState, useEffect } from "react"
import { BuildingGeter } from "../API/accessors/buildings"

export const useRecipeForMaterial = (materialTicker) => {
    let [recipies, setRecipies] = useState([])

    useEffect(() => {
        BuildingGeter.getInstance().GetRecipies(materialTicker)
            .then(x => setRecipies(x.Recipies));

        return () => (1)},
        [materialTicker])

    return recipies;
}