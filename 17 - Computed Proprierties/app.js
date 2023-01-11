var vm = new Vue({
    el: '#app',
    data: {
        author: {
            name: 'John Doe',
            books: [
                'Vue 2 - Advanced Guide',
                'Vue 3 - Basic Guide',
                'Vue 4 - The Mystery'
            ]
        }
    },
    computed: {
        quantidadeDeLivros() {
            return this.author.books.length > 10 ? 'Yes' : 'No'
        }
    }
})