var vm = new Vue({
    el: '#app',
    data: {
        contador: 0,
    },
    methods: {
        incrementaContador: () => {
            vm.contador++;
        }
    },
    watch: {
        contador(newValue, oldValue) {
            console.log(vm.contador)
            console.log("O valor do contador mudou de " + oldValue + " para " + newValue + ";")
        }
    },
})