import { useState } from "react"
import { Calculator } from "./singleRecipe/calculator"
import "./ResourceTable.css"
import { MaterialInput } from "../Inputs/MaterialInput"
import { TableRow } from '../RecipeView/tableRow'
import { useRecipeForMaterial } from"../../hooks/useRecipeForMaterial"

export const ResourceTable = () => {
    let [calculatorProps, setProps] = useState([])

    const callback = (x) => setProps([...calculatorProps, x])

    return <> <MaterialInput callback = {callback}/>
    <table className="ResourceTable">
        <Header/>
        {calculatorProps.map(x => <Calculator materialTicker = {x[0]} marketTicker = {x[1]}/>)}
    </table></>
}

const Header = () => <tr>
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