import { useState, useEffect } from "react"
import { PriceGeter } from "../API/accessors/prices"
//import { PricesParcer } from "../API/parcers/prices"

export const PriceView = (props) => {
    let [price, setPrice] = useState([])

    useEffect(() => {
        PriceGeter.getInstance().GetPrices(props.materialTicker, props.marketTicker).then(setPrice);
        return () => (1)},
        [props.materialTicker, props.marketTicker])

    //PriceGeter.getInstance().GetPrices(props.materialTicker, props.marketTicker).then(setPrice)

    return <p>{price?.High} {price?.Low} sdfsadf</p>
}
