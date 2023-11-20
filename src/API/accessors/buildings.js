export class BuildingGeter{
    prices = new Map()

    static Instance;

    static getInstance(){
        if(!this.Instance)
            this.Instance = new BuildingGeter()
        return this.Instance
    }

    request = (buidingTicker) => { 
        return fetch("https://rest.fnar.net/building/" + buidingTicker)
        .then(response => response.json())
    }

    GetBuilding = (buidingTicker) => {
        if(!this.prices.has(buidingTicker))
            this.prices.set(buidingTicker, this.request(buidingTicker))
        return this.prices.get(buidingTicker)
    }
}
    