<template>
    <div>
        <h1 class="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Quotes</h1>

        <div v-if="data" v-for="q in data.quotes" :key="q.id">
            <div class="relative flex flex-col mt-6 text-gray-700 bg-white shadow-md bg-clip-border rounded-xl">
                <div class="p-6">
                    <h5 class="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                    "{{ q.quote }}"
                    </h5>
                    <p class="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
                    By {{ q.author }}
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
type Quote = {
    id: number;
    quote: string;
    author: string;
}

const { $api } = useNuxtApp()
const quoteRepo = repository($api)
const { data } = await useAsyncData(() => quoteRepo.get())

// var allQuotes: Quote[] = [];
// function quotesFromAPI() {
//     for (const q of data) {
//     allQuotes.push(q);
//   }
// }
</script>