const app = Vue.createApp({
    setup() {
        const name = Vue.ref("")

        // setTimeout(()=>{
        //     name.value = "Olivér"
        // },2000)

        function UpdateName(event) 
        {
            name.value = event.target.value
        }

        return { 
            name,
            UpdateName 
        }
    }
})

app.mount("#appdiv")