import type { NitroFetchRequest, $Fetch } from 'nitropack'

// type Quote = {
//     quotes: {
//         id: number;
//         quote: string;
//         author: string;
//     };
//     total: 1454;
//     skip: 0;
//     limit: 3;
// }

type Quote = {
    id: number;
    quote: string;
    author: string;
}

export const repository = <T>(fetch: $Fetch<T, NitroFetchRequest>) => ({
    async get(): Promise<Quote[]> {
        return fetch<Quote[]>('/quotes')
    }
})