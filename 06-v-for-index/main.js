const app = Vue.createApp({
    setup() {
        const frameworks = [
<<<<<<< HEAD
            {name: "Vue.js"},
            {name: "React"},
            {name: "Angular"}
=======
            { name: "Vue.js"},
            { name: "React"},
            { name: "Angular"}
>>>>>>> 19a49fe344154a0b4f037a26e046757a1db12c3a
        ]
        return { frameworks }
    }
})

app.mount("#appdiv")