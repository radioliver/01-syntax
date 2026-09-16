const app = Vue.createApp({
    setup() {
        let price = Vue.ref(0)
        function Increase() {
            price.value += 0.5
        }

        function Decrease() {
            price.value -= 0.5
        }

        // function FormatPrice() {
        //     return price.value.toLocaleString('en-US', { style: 'currency', currency: 'EUR' })
        // }

        const formattedPrice = Vue.computed(() => {
            return price.value.toLocaleString(
                'en-US', 
                { style: 'currency', currency: 'EUR' })
        })

        return { price, Increase, Decrease, formattedPrice }

    }
})

app.mount("#appdiv")