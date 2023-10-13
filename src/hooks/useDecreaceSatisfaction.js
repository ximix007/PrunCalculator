import { useRecipeParameters } from "./useRecipeParameters";
import { BuildingGeter } from "../API/accessors/buldings";
import { PriceGeter } from "../API/accessors/prices";
import { useState, useEffect } from "react";

const useSatisfactionPerDay = (building, marketTicker) => {
    let [satisfaction, setSatisfaction] = useState(0)

    let SatisfactionTicker = new Set();
    SatisfactionTicker.add("DW")
    if(building.Pioneers != 0){
        SatisfactionTicker.add("RAT")
        SatisfactionTicker.add("OVE")
    }
    if(building.Settlers != 0){
        SatisfactionTicker.add("RAT")
        SatisfactionTicker.add("EXO")
        SatisfactionTicker.add("PT")
    }
    if(building.Technicians != 0){
        SatisfactionTicker.add("RAT")
        SatisfactionTicker.add("MED")
        SatisfactionTicker.add("HMS")
        SatisfactionTicker.add("SCN")
    }
    if(building.Engineers != 0){
        SatisfactionTicker.add("FIM")
        SatisfactionTicker.add("MED")
        SatisfactionTicker.add("HSS")
        SatisfactionTicker.add("PDA")
    }
    if(building.Scientists != 0){
        SatisfactionTicker.add("MEA")
        SatisfactionTicker.add("MED")
        SatisfactionTicker.add("LC")
        SatisfactionTicker.add("WS")
    }

    useEffect(() => {
        let temp = [];
        let pricegeter = PriceGeter.getInstance()
        Promise.all(Array.from(SatisfactionTicker).map
                (x => pricegeter.GetPrices(x, marketTicker).then(x => temp.push(x))))
            .then(() => setSatisfaction(temp))
    }, [building, marketTicker]
    )
    
}

export const useDecreaceSatisfaction = (recipe, marketTicker) => {
    let recipe = useRecipeParameters(recipe, marketTicker);
    let [building, setBuilding] = useState()
    let buildingName = recipe.StandardRecipeName.split([':'][0])
    
    useEffect(() => {
        BuildingGeter.getInstance().GetBuilding(buildingName).then(x => setBuilding(x))
    },
    [recipe])
    return {"highInputsCost": recipe.highInputsCost, "lowInputsCost": recipe.lowInputsCost,
        "highMarginality": recipe.highMarginality, "lowMarginality": recipe.lowMarginality,
        "highProfit": recipe.highProfit, "lowProfit": recipe.lowProfit,
        "highDailyProfit": recipe.highDailyProfit, "lowDailyProfit": recipe.lowDailyProfit,};
}