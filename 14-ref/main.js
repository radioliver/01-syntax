<<<<<<< HEAD
const app = Vue.createApp({
    setup() {
        let counter = Vue.ref(0)   
        function Increase() {
            counter.value++
        }

        function Decrease() {
            counter.value--
        }

        return { counter, Increase, Decrease}
=======
const {createApp, ref} = Vue

// const app = Vue.createApp({
const app = createApp({
    setup() {
        // let counter = 0
        // let counter = Vue.ref(0)
        const counter = ref(0)

        function increaseCounter() {
            counter.value++
            console.log(counter.value)
        }

        function decreaseCounter() {
            counter.value--
            console.log(counter.value)
        }

        return { 
            counter, 
            increaseCounter, 
            decreaseCounter}
>>>>>>> 8b43e3c24952295782ff40343aca0a2aa30e5643
    }
})

app.mount("#appdiv")