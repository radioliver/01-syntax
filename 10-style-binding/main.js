const app = Vue.createApp({
    setup() {
        const guitars = [
<<<<<<< HEAD
            {id: 1, name: "Fender Stratocaster", stock: 0},
            {id: 2, name: "Gibson Les Paul", stock: 3},
            {id: 3, name: "Ibanez RG", stock: 5},
            {id: 4, name: "ESP Eclipse", stock: 0},
            {id: 5, name: "PRS Custom 24", stock: 2}
        ]
        const outOfStockColor = "red"
        const OnlyFewLeftColor = "orange"
        const inStockColor = "lightgreen"
        return { guitars, outOfStockColor, OnlyFewLeftColor, inStockColor}
=======
            { id: 1, name: "Fender Stratocaster", stock: 0 },
            { id: 2, name: "Gibson Les Paul", stock: 3 },
            { id: 3, name: "Ibanez RG", stock: 5 },
            { id: 4, name: "PRS Custom 24", stock: 2 },
            { id: 5, name: "Yamaha Pacifica", stock: 0 }
        ]
        const outOfStockColor = "red"
        const onlyFewLeftColor = "orange"
        const inStockColor = "lightgreen"
        return { guitars, outOfStockColor, onlyFewLeftColor, inStockColor }
>>>>>>> 19a49fe344154a0b4f037a26e046757a1db12c3a
    }
})

app.mount("#appdiv")