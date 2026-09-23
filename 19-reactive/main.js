const app = Vue.createApp({
    setup() {
        let formData = Vue.reactive({
            name: '',
            email: ''
        })

        function handleSubmit() {
            // event.preventDefault()
            console.log(formData)
            console.log(`Name: ${formData.name}, Email: ${formData.email}`)
        }

        return { 
             handleSubmit,
             formData}
    }
})

app.mount("#appdiv")