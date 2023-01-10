new Vue({
    el: '#app',
    data: {
        msg: 'olá mundo formatado'
    },
    filters: {
        capitalize: function (value) {
            if (!value) return ''
            value = value.toString()
            return value.charAt(0).toUpperCase() + value.slice(1)
        }
    }
})