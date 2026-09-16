const app = Vue.createApp({
    setup() {
        let price = Vue.ref(0)
        const myMoney = Vue.ref(5)
        const errorMessage = Vue.ref(null)
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

        Vue.watch(price, ()=>{
            errorMessage.value = price.value > myMoney.value ?
             "You don't have enough money!" : null
        }) //figyeljuk egy adott változó ertekenek a valtozasat!!!! 

        return { price, Increase, Decrease, formattedPrice, errorMessage, myMoney }

    }
})

app.mount("#appdiv")