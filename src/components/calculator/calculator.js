import { useState, useEffect } from "react"
import { PriceGeter } from "../../API/accessors/prices"
import { RecipiesGeter } from "../../API/accessors/recipies"
import { priceParce } from "../../API/parcers/prices"
import { recipiesParce } from "../../API/parcers/recipies"


const SingleRecipe = (props) => {
    let price = props.price;
    let recipe = props.recipe;
    return <p>{JSON.stringify(price)} {recipe.RecipeName}</p>
}


export const Calculator = (props) => {
    let [price, setPrice] = useState([])
    let [recipies, setRecipies] = useState([])

    useEffect(() => {
        PriceGeter.getInstance().GetPrices(props.materialTicker, props.marketTicker)
        .then(x => setPrice(priceParce(x)));
        RecipiesGeter.getInstance().GetRecipies(props.materialTicker)
        .then(x => setRecipies(recipiesParce(x, props.materialTicker)));

        return () => (1)},
        [props.materialTicker, props.marketTicker])

    console.log(price, recipies)

    return <p>{recipies.map(x => <><SingleRecipe price = {price} recipe = {x}/><br/></>)}</p>
}