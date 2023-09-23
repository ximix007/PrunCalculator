export const recipiesParce = (x, materialTicker) => {
    return x.filter(x => x.Outputs[0].CommodityTicker === materialTicker)
        .map(x => { return {"Inputs": x.Inputs, "Outputs": x.Outputs, 
            "DurationMs": x.DurationMs, "BuildingTicker": x.BuildingTicker, "RecipeName": x.RecipeName }})
}