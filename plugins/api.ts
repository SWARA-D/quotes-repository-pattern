export default defineNuxtPlugin({
    setup() {
        const api = $fetch.create({
            baseURL: 'https://dummyjson.com/'
        })

        return {
            provide: {
                api
            }
        }
    }
})