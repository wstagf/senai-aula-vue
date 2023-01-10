
var vm = new Vue({
    el: '#app',
    data: {
        titulo: "Este título vai mudar",
        contador: 0,
    },
    methods: {
        alteraTitulo: () => {
            vm.titulo = "Novo Título"
            vm.contador = vm.contador + 1;
        }
    }
})