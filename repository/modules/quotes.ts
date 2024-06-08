import type { FetchOptions } from 'ofetch'
import type { AsyncDataOptions } from '#app'

import FetchFactory from '../factory'

interface IQuote {
    id: number;
    quote: string;
    author: string;
}

class QuoteModule extends FetchFactory<IQuote[]> {
    private RESOURCE = '/quotes'

    async getQuotes(
        asyncDataOptions?: AsyncDataOptions<IQuote[]>
    ) {
        return useAsyncData(() => {
            const fetchOptions: FetchOptions<'json'> = {
              headers: {
                'Content-Type': 'application/json',
                'Accept-Language': 'en-US',
              },
            }
            return this.call('GET', `${this.RESOURCE}`, undefined, fetchOptions)
          }, asyncDataOptions)
    }
}

export default QuoteModule
