export class PriceGeter{
    prices = new Map()

    static Instance;

    static getInstance(){
        if(!this.Instance)
            this.Instance = new PriceGeter()
        return this.Instance
    }

    request = (materialTicker, marketTicker) => { 
        return fetch("https://rest.fnar.net/exchange/" + materialTicker + "." + marketTicker)
        .then(response => response.json())
    }

    GetPrices = (materialTicker, marketTicker) => {
        if(!this.prices.has(materialTicker + "." + marketTicker))
            this.prices.set(materialTicker + "." + marketTicker, this.request(materialTicker, marketTicker))
        return this.prices.get(materialTicker + "." + marketTicker)
    }
}
    