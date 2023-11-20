import { useState } from "react"
import { RowsGeneratorForMaterial } from "./rowsGenerators/RowsGeneratorForMaterial"
import "./ResourceTable.css"
import { MaterialInput } from "../Inputs/MaterialInput"
import { BuildingInput } from "../Inputs/BuildingInput"

export const ResourceTable = () => {
    let [rowsComponents, setRowsComponents] = useState([])

    const callbackForMaterial = (x) => setRowsComponents([...rowsComponents, 
        <RowsGeneratorForMaterial materialTicker = {x[0]} marketTicker = {x[1]}/>])

    return <> <MaterialInput callback = {callbackForMaterial}/>
    <table className="ResourceTable">
        <Header/>
        {rowsComponents}
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