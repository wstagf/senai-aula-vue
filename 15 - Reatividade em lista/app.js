var vm = new Vue({
    el: '#app',
    data: {
        novaFruta: "",
        frutas: [
            { nome: 'apple' },
            { nome: 'banana' },
            { nome: 'orange' }
        ],
        adicionarFruta: () => {
            Vue.set(vm.frutas, vm.frutas.length, { nome: vm.novaFruta })
            vm.novaFruta = "";
        }
    }
})