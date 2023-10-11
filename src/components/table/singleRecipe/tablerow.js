import { useRecipeParameters } from "../../../hooks/useRecipeParameters"

export const TableRow = (props) => {
    let result = useRecipeParameters(props.recipe, props.marketTicker)

    return <tr><td>{props.recipe.RecipeName} </td>
        <td>{result.highInputsCost}</td> 
        <td> {result.lowInputsCost } </td>
        <td> {result.highProfit} </td>
        <td> {result.lowProfit} </td>
        <td> {result.highMarginality} </td> 
        <td> {result.lowMarginality} </td>
        <td> {result.highDailyProfit} </td>
        <td> {result.lowDailyProfit} </td>
        </tr>
}