import { useState } from "react"

export const MaterialInput = (props) => {
    let [materialTicker, setMaterialTicker] = useState("BBH")
    let [marketTicker, setMarketTicker] = useState("IC1")

    return <> Material Ticker <input type="text" 
        onChange = {e => setMaterialTicker(e.target.value)} value = {materialTicker}/> <br/>
    Market Ticker <input type="text" 
        onChange = {e => setMarketTicker(e.target.value)} value = {marketTicker}/> <br/>
    <button onClick={() => props.callback([materialTicker, marketTicker])}>Add</button>
    </>}