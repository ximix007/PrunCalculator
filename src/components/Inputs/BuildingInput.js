import { useState } from "react"

export const BuildingInput = (props) => {
    let [buildingTicker, setBuildingTicker] = useState("BBH")
    let [marketTicker, setMarketTicker] = useState("IC1")

    return <> Building Ticker <input type="text" 
        onChange = {e => setBuildingTicker(e.target.value)} value = {buildingTicker}/> <br/>
    Market Ticker <input type="text" 
        onChange = {e => setMarketTicker(e.target.value)} value = {marketTicker}/> <br/>
    <button onClick={() => props.callback([buildingTicker, marketTicker])}>Add</button>
    </>}