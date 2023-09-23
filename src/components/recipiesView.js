import { useState } from "react"
import { RecipiesGeter } from "../API/accessors/recipies"

export const RecipiesView = (props) => {
    let [recipies, setRecipies] = useState()

    RecipiesGeter.getInstance().GetRecipies(props.ticker).then(setRecipies)

    return <p>{JSON.stringify(recipies?.map(x => x.RecipeName))}</p>
}
