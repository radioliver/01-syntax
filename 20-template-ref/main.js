const app = Vue.createApp({
    setup() {
        let formData = Vue.reactive({
            name: '',
            email: ''
        })

        const userForm = Vue.ref()

        function handleSubmit() {
            // event.preventDefault()
            console.log(formData)
            console.log(`Name: ${formData.name}, Email: ${formData.email}`)

            userForm.value.reset() // template ref megoldás

            // javascript megoldás
            // document.getElementById("userForm").reset();
            // document.querySelector('#userForm').reset();
        }

        return { 
             handleSubmit,
             userForm,
             formData}
    }
})

app.mount("#appdiv")