import { useState, useEffect } from "react"
import { RecipiesGeter } from "../../../API/accessors/recipies"
import { recipiesParce } from "../../../API/parcers/recipies"
import { TableRow } from "./tablerow"

export const Calculator = (props) => {
    let [recipies, setRecipies] = useState([])

    useEffect(() => {
        RecipiesGeter.getInstance().GetRecipies(props.materialTicker)
            .then(x => setRecipies(recipiesParce(x, props.materialTicker)));

        return () => (1)},
        [props.materialTicker, props.marketTicker])

    return <> {recipies.map(x => <TableRow recipe = {x} marketTicker = {props.marketTicker}/>)}</>
}