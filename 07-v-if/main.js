const app = Vue.createApp({
    setup() {
        const guitars = [
            { id: 1, name: "Fender Stratocaster", stock: 0 },
            { id: 2, name: "Gibson Les Paul", stock: 3 },
            { id: 3, name: "Ibanez RG", stock: 5 },
            { id: 4, name: "PRS Custom 24", stock: 2 },
            { id: 5, name: "Yamaha Pacifica", stock: 0 }
        ]
        return { guitars }
    }
})

app.mount("#appdiv")