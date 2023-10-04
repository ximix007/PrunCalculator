import { useState } from "react"
import { Calculator } from "../calculator/calculator"
import { Flex } from "../Flex/Flex"

export const CalculatorController = () => {
    let [materialTicker, setMaterialTicker] = useState("BBH")
    let [marketTicker, setMarketTicker] = useState("IC1")

    let [calculatorProps, setProps] = useState([])

    return <>Material Ticker <input type="text" 
        onChange = {e => setMaterialTicker(e.target.value)} value = {materialTicker}/> <br/>
    Market Ticker <input type="text" 
        onChange = {e => setMarketTicker(e.target.value)} value = {marketTicker}/> <br/>
    <button onClick={() => setProps([...calculatorProps ,[materialTicker, marketTicker]])}>Add</button>
    <Flex>{calculatorProps.map(x => <Calculator materialTicker = {x[0]} marketTicker = {x[1]}></Calculator>)}</Flex></>
}