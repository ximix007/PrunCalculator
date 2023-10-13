import { useState } from "react"
import { Calculator } from "../calculator/calculator"
import { Flex } from "../Flex/Flex"
import { MaterialInput } from "../Inputs/MaterialInput"

export const CalculatorController = () => {
    let [calculatorProps, setProps] = useState([])

    const callback = (x) => {
        setProps([...calculatorProps, x]) 
    }

    return <> <MaterialInput callback = {callback}/>
    <Flex>{calculatorProps.map(x => <Calculator materialTicker = {x[0]} marketTicker = {x[1]}></Calculator>)}</Flex></>
}

