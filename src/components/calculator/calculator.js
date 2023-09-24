import { useState, useEffect } from "react"
import { PriceGeter } from "../../API/accessors/prices"
import { RecipiesGeter } from "../../API/accessors/recipies"
import { priceParce } from "../../API/parcers/prices"
import { recipiesParce } from "../../API/parcers/recipies"


const SingleRecipe = (props) => {
    let price = props.price;
    let recipe = props.recipe;
    let [materialPrices, setMaterialPrices] = useState([])

    useEffect(() => {
        let temp = []
        recipe.Inputs.map(input => PriceGeter.getInstance().GetPrices(input.CommodityTicker, props.marketTicker)
        .then(x => temp.push(Object.assign(priceParce(x), {"Amount": input.Amount}))))

        return () => setMaterialPrices(temp)},
        [recipe.Inputs, props.recipe, props.marketTicker])

    let highProductionCost = materialPrices.reduce((acum, cur) => acum + (cur.Amount * cur.Ask), 0)
    let lowProductionCost = materialPrices.reduce((acum, cur) => acum + (cur.Amount * cur.Bid), 0)
    let highProfit = price.Ask * recipe.Outputs.Amount - lowProductionCost
    let lowProfit = price.Bid * recipe.Outputs.Amount - highProductionCost

    return <p>{recipe.RecipeName} <br/> 
        High Profit: {highProfit}; Low Profit: {lowProfit} <br/>
        High Marginality: {highProfit / lowProductionCost} Low Marginality: {lowProfit / highProductionCost}</p>
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

    //console.log(price, recipies)

    return <p>{recipies.map(x => <><SingleRecipe price = {price} recipe = {x} marketTicker = {props.marketTicker}/><br/></>)}</p>
}