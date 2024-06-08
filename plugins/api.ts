import { $fetch, type FetchOptions } from 'ofetch'

import QuoteModule from '~/repository/modules/quotes'

interface IApiInstance {
    quote: QuoteModule
  }

export default defineNuxtPlugin((nuxtApp) => {
    const config = useRuntimeConfig()

    const fetchOptions: FetchOptions = {
        baseURL: 'https://dummyjson.com/' as string
    }

    const apiFetcher = $fetch.create(fetchOptions)


    const modules: IApiInstance = {
        quote: new QuoteModule(apiFetcher),
    }

    return {
        provide: {
            api: modules,
        },
    }
})
