import { TableRow } from '../../RecipeView/tableRow'
import { useRecipeForMaterial } from"../../../hooks/useRecipeForMaterial"

export const Calculator = (props) => {
    let recipies = useRecipeForMaterial(props.materialTicker);

    return <> {recipies.map(x => <TableRow recipe = {x} marketTicker = {props.marketTicker}/>)}</>
}