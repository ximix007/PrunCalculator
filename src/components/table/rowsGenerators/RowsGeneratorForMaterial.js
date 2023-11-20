import { TableRow } from '../../RecipeView/row'
import { useRecipeForMaterial } from"../../../hooks/useRecipeForMaterial"

export const RowsGeneratorForMaterial = (props) => {
    let recipies = useRecipeForMaterial(props.materialTicker);

    return <> {recipies.map(x => <TableRow recipe = {x} marketTicker = {props.marketTicker}/>)}</>
}