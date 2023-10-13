import { useRecipeParameters } from "../../hooks/useRecipeParameters"

export const SingleRecipe = (props) => {
    let result = useRecipeParameters(props.recipe, props.marketTicker)

    return <p className="SingleRecipe">{props.recipe.RecipeName} <br/> 
        Low Production Cost: {result.lowInputsCost}; High Production Cost: {result.highInputsCost} <br/>
        High Profit: {result.highProfit}; Low Profit: {result.lowProfit} <br/>
        High Marginality: {result.highMarginality}; 
        Low Marginality: {result.lowMarginality} <br/>
        High daily profit: {result.highDailyProfit}; 
        Low daily profit: {result.lowDailyProfit}
        </p>
}