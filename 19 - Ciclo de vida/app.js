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
    mounted() {
        console.log(`O componente foi carregado`)
    },
    updated() {
        console.log(`Algum valor foi alterado`)
    },
})