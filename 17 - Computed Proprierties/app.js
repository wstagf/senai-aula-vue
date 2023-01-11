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
        publishedBooksMessage() {
            return this.author.books.length > 10 ? 'Yes' : 'No'
        }
    }
})