
<script>
import VueInlineCalendar from 'vue2-inline-calendar'

export default {
  name: 'App',
  components: {
    VueInlineCalendar
  },
  data() {
    return {
      selectedDate: null
    }
  },
}
</script>

<template>
  <div class="about">
    <vue-inline-calendar @select-date="selectedDate = $event" />
  </div>
</template>

<style>
.about {
  width: 50vw;
}
</style>
