export class RecipiesGeter{
    recipies = new Map()

    static Instance;

    static getInstance(){
        if(!this.Instance)
            this.Instance = new RecipiesGeter()
        return this.Instance
    }

    request = (materialTicker) => { 
        return fetch("https://rest.fnar.net/recipes/" + materialTicker)
        .then(response => response.json())
    }

    GetRecipies = (materialTicker) => {
        if(!this.recipies.has(materialTicker))
            this.recipies.set(materialTicker, this.request(materialTicker))
        return this.recipies.get(materialTicker)
    }
}
    