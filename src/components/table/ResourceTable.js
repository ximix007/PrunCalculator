import { useState } from "react"
import { Calculator } from "./singleRecipe/calculator"
import "./ResourceTable.css"

export const ResourceTable = () => {
    let [materialTicker, setMaterialTicker] = useState("BBH")
    let [marketTicker, setMarketTicker] = useState("IC1")

    let [calculatorProps, setProps] = useState([])

    return <>Material Ticker <input type="text" 
        onChange = {e => setMaterialTicker(e.target.value)} value = {materialTicker}/> <br/>
    Market Ticker <input type="text" 
        onChange = {e => setMarketTicker(e.target.value)} value = {marketTicker}/> <br/>
    <button onClick={() => setProps([...calculatorProps ,[materialTicker, marketTicker]])}>Add</button>
    <table className="ResourceTable">
        <tr>
            <th>Recipe Name</th>
            <th>High Production Cost</th>
            <th>Low Production Cost</th>
            <th>High Profit</th>
            <th>Low Profit</th>
            <th>High Marginality</th>
            <th>Low Marginality</th>
            <th>High Daily Profit</th>
            <th>Low Daily Profit</th>
        </tr>
        {calculatorProps.map(x => <Calculator materialTicker = {x[0]} marketTicker = {x[1]}/>)}
    </table></>
}

