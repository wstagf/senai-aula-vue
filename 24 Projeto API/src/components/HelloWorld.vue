<script setup lang="ts">
import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import { todoModel } from './todoModel'
import { ref } from "vue";
Vue.use(VueAxios, axios)
const $localStorage = ref({
  listaToDo: []
});

defineProps<{
  msg: string
}>()



function getData() {
  alert('teste');

  console.log($localStorage)
  Vue.axios.get("https://jsonplaceholder.typicode.com/todos").then((response) => {
    console.log(response.data)
    response.data.forEach(element => {
      $localStorage.value.listaToDo.push(element)
    });
  })
}





</script>

<template>
  <div class="greetings">
    <h1 class="green" v-on:click="getData">{{ msg }}</h1>
    <ul>
      <li style="margin: 20px;" v-for="todo in $localStorage.listaToDo" :key="todo.id">
        Tarefa: {{ todo.title }} <br />
        Tarefa: {{ todo.completed }} <br />
      </li>
    </ul>

  </div>

</template>

<style scoped>
.elemento {
  background-color: red;
  margin: 10px;
}
h1 {

h1 {
  font-weight: 500;
  font-size: 2.6rem;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {

  .greetings h1,
  .greetings h3 {
    display: block;
    text-align: left;
  }
}
