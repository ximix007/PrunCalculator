import { useState, useEffect } from "react"
import { PriceGeter } from "../../API/accessors/prices"
import { RecipiesGeter } from "../../API/accessors/recipies"
import { priceParce } from "../../API/parcers/prices"
import { recipiesParce } from "../../API/parcers/recipies"
import './calculator.css'
import { SingleRecipe } from "./singleRecipe/singleRecipe"

export const Calculator = (props) => {
    let [price, setPrice] = useState([])
    let [recipies, setRecipies] = useState([])

    useEffect(() => {
        RecipiesGeter.getInstance().GetRecipies(props.materialTicker)
            .then(x => setRecipies(recipiesParce(x, props.materialTicker)));
        
        PriceGeter.getInstance().GetPrices(props.materialTicker, props.marketTicker)
            .then(x => setPrice(priceParce(x)));

        return () => (1)},
        [props.materialTicker, props.marketTicker])

    return <p className="Calculator"> {price.MaterialTicker} <br/>
        {recipies.map(x => <><SingleRecipe price = {price} recipe = {x} marketTicker = {props.marketTicker}/><br/></>)}</p>
}