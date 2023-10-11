import { useState, useEffect } from "react"
import { PriceGeter } from "../API/accessors/prices"
import { priceParce } from "../API/parcers/prices"

const round10 = (num) => Math.round(num * 100) / 100
const milisecondToHours = (time) => time / 1000 / 60 / 60

export const useRecipeParameters = (recipe, marketTicker) => {
    let [outputPrices, setOutputPrices] = useState([]);
    let [inputPrices, setInputPrices] = useState([])

    useEffect(() => {
        let temp = [];
        Promise.all(
            recipe.Inputs.map(input => PriceGeter.getInstance().GetPrices(input.CommodityTicker, marketTicker)
                .then(x => Object.assign(priceParce(x), {"Amount": input.Amount}))
                .then(x => temp.push(x))))
        .then(() => setInputPrices(temp)).then(() => temp = [])
        .then(() => Promise.all(recipe.Outputs.map(output => PriceGeter.getInstance().GetPrices(output.CommodityTicker, marketTicker)
            .then(x => Object.assign(priceParce(x), {"Amount": output.Amount}))
            .then(x => temp.push(x)))))
        .then(() => setOutputPrices(temp)).then(() => temp = [])
        
        return () => (1)},
        [recipe, marketTicker])

    let highInputsCost = round10(inputPrices.reduce((acum, cur) => acum + (cur.Amount * cur.Ask), 0))
    let lowInputsCost = round10(inputPrices.reduce((acum, cur) => acum + (cur.Amount * cur.Bid), 0))

    let highOutputsCost = round10(outputPrices.reduce((acum, cur) => acum + (cur.Amount * cur.Ask), 0))
    let lowOutputsCost = round10(outputPrices.reduce((acum, cur) => acum + (cur.Amount * cur.Bid), 0))

    let highProfit = round10(highOutputsCost - lowInputsCost)
    let lowProfit = round10(lowOutputsCost - highInputsCost)

    let highMarginality = round10(highProfit / lowInputsCost)
    let lowMarginality = round10(lowProfit / highInputsCost)

    let highDailyProfit = round10(highProfit * 24 / milisecondToHours(recipe.DurationMs))
    let lowDailyProfit = round10(lowProfit * 24 / milisecondToHours(recipe.DurationMs))

    return {"highInputsCost": highInputsCost, "lowInputsCost": lowInputsCost,
        "highMarginality": highMarginality, "lowMarginality": lowMarginality,
        "highProfit": highProfit, "lowProfit": lowProfit,
        "highDailyProfit": highDailyProfit, "lowDailyProfit": lowDailyProfit,};
}