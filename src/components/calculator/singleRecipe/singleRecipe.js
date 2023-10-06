import { useState, useEffect } from "react"
import { PriceGeter } from "../../../API/accessors/prices"
import { priceParce } from "../../../API/parcers/prices"

const round10 = (num) => Math.round(num * 100) / 100
const milisecondToHours = (time) => time / 1000 / 60 / 60

export const SingleRecipe = (props) => {
    let [outputPrices, setOutputPrices] = useState([]);
    let recipe = props.recipe;
    let [inputPrices, setInputPrices] = useState([])

    useEffect(() => {
        let temp = [];
        Promise.all(
            recipe.Inputs.map(input => PriceGeter.getInstance().GetPrices(input.CommodityTicker, props.marketTicker)
                .then(x => Object.assign(priceParce(x), {"Amount": input.Amount}))
                .then(x => temp.push(x))))
        .then(() => setInputPrices(temp)).then(() => temp = [])
        .then(() => Promise.all(recipe.Outputs.map(output => PriceGeter.getInstance().GetPrices(output.CommodityTicker, props.marketTicker)
            .then(x => Object.assign(priceParce(x), {"Amount": output.Amount}))
            .then(x => temp.push(x)))))
        .then(() => setOutputPrices(temp)).then(() => temp = [])
        
        return () => (1)},
        [recipe, props.recipe, props.marketTicker])

    let highInputsCost = round10(inputPrices.reduce((acum, cur) => acum + (cur.Amount * cur.Ask), 0))
    let lowInputsCost = round10(inputPrices.reduce((acum, cur) => acum + (cur.Amount * cur.Bid), 0))

    let highOutputsCost = round10(outputPrices.reduce((acum, cur) => acum + (cur.Amount * cur.Ask), 0))
    let lowOutputsnCost = round10(outputPrices.reduce((acum, cur) => acum + (cur.Amount * cur.Bid), 0))

    let highProfit = highOutputsCost - lowInputsCost
    let lowProfit = lowOutputsnCost - highInputsCost

    return <p className="SingleRecipe">{recipe.RecipeName} <br/> 
        Low Production Cost: {lowInputsCost}; High Production Cost: {highInputsCost} <br/>
        High Profit: {highProfit}; Low Profit: {lowProfit} <br/>
        High Marginality: {round10(highProfit / lowInputsCost)}; 
        Low Marginality: {round10(lowProfit / highInputsCost)} <br/>
        High daily profit: {round10(highProfit * 24 / milisecondToHours(recipe.DurationMs))}; 
        Low daily profit: {round10(lowProfit * 24 / milisecondToHours(recipe.DurationMs))}
        </p>
}