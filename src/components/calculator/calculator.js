import './calculator.css'
import { SingleRecipe } from "../RecipeView/textCard"
import { useRecipeForMaterial } from "../../hooks/useRecipeForMaterial"

export const Calculator = (props) => {
    let recipies = useRecipeForMaterial(props.materialTicker)

    return <p className="Calculator"> {props.materialTicker} <br/>
        {recipies.map(x => <><SingleRecipe recipe = {x} marketTicker = {props.marketTicker}/><br/></>)}</p>
}