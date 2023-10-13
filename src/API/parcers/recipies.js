export const recipiesParce = (x, materialTicker) => {
    return x.filter(x => x.Outputs.find(y => y.CommodityTicker === materialTicker) != undefined)
        .map(x => { return {"Inputs": x.Inputs, "Outputs": x.Outputs, 
            "DurationMs": x.DurationMs, "BuildingTicker": x.BuildingTicker, "RecipeName": x.RecipeName }})
}