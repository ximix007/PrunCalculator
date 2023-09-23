import { useState, useEffect } from "react"
import { PriceGeter } from "../API/accessors/prices"

export const PriceView = (props) => {
    let [price, setPrice] = useState([])

    useEffect(() => {
        PriceGeter.getInstance().GetPrices(props.materialTicker, props.marketTicker).then(setPrice);
        return () => (1)},
        [props.materialTicker, props.marketTicker])

    return <p>{price?.High} {price?.Low} sdfsadf</p>
}
