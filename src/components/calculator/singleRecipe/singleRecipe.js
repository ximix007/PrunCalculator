import { useState, useEffect } from "react"
import { PriceGeter } from "../../../API/accessors/prices"
import { priceParce } from "../../../API/parcers/prices"

const round10 = (num) => Math.round(num * 100) / 100

export const SingleRecipe = (props) => {
    let price = props.price;
    let recipe = props.recipe;
    let [materialPrices, setMaterialPrices] = useState([])

    useEffect(() => {
        let temp = [];
        Promise.all(
            recipe.Inputs.map(input => PriceGeter.getInstance().GetPrices(input.CommodityTicker, props.marketTicker)
                .then(x => Object.assign(priceParce(x), {"Amount": input.Amount}))
                .then(x => temp.push(x))))
        .then(() => setMaterialPrices(temp))
        
        return () => (1)},
        [recipe.Inputs, props.recipe, props.marketTicker])

    let highProductionCost = round10(materialPrices.reduce((acum, cur) => acum + (cur.Amount * cur.Ask), 0))
    let lowProductionCost = round10(materialPrices.reduce((acum, cur) => acum + (cur.Amount * cur.Bid), 0))
    let highProfit = round10(price.Ask * recipe.Outputs[0].Amount - lowProductionCost, -2)
    let lowProfit = round10(price.Bid * recipe.Outputs[0].Amount - highProductionCost, -2)

    return <p className="SingleRecipe">{recipe.RecipeName} <br/> 
        Low Production Cost: {lowProductionCost}; High Production Cost: {highProductionCost} <br/>
        High Profit: {highProfit}; Low Profit: {lowProfit} <br/>
        High Marginality: {round10(highProfit / lowProductionCost, -2)}; 
        Low Marginality: {round10(lowProfit / highProductionCost, -2)}</p>
}