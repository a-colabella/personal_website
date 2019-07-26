<template>
  <div id="app">
    <MenuPanel v-bind:options="menu_items"/>
  </div>
</template>

<script>
import MenuPanel from './components/MenuPanel.vue'

export default {
  name: 'app',
  components: { MenuPanel},
  data() {
    return {
      myView: "home",
      menu_items: [
        {
          name: "ABOUT",
          id: "about"
        },
        {
          name: "SHORT STORIES",
          id: "shorts"
        },
        {
          name: "PHOTOS",
          id: "photos"
        },
        {
          name: "RESUME",
          id: "resume"
        }]
    }
  }
}
</script>

<style>
#app {
  font-family: "Cantarell", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
