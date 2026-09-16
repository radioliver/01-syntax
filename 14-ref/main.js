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
    }
})

app.mount("#appdiv")