<<<<<<< HEAD
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

=======
const {createApp, ref, computed} = Vue

// const app = Vue.createApp({
const app = createApp({
    setup() {
        // let counter = 0
        // let counter = Vue.ref(0)
        const price = ref(0)

        function increasePrice() {
            price.value++
            console.log(price.value)
        }

        function decreasePrice() {
            price.value--
            console.log(price.value)
        }

        // function formatPrice() {
        //     return price.value.toLocaleString('en-US', { 
        //         style: 'currency',
        //         currency: 'EUR' })
        // }

        const formattedPrice = computed(() => {
            return price.value.toLocaleString('en-US', { 
                style: 'currency',
                currency: 'EUR' })
        })

        return { 
            price, 
            formattedPrice,
            increasePrice, 
            decreasePrice}
>>>>>>> 8b43e3c24952295782ff40343aca0a2aa30e5643
    }
})

app.mount("#appdiv")