<template>
  <div id="app">
    <MenuPanel v-bind:options="menu_items" v-on:menu-click="menuClick"/>
    <BackgroundShuffle/>
    <AboutPanel v-if="myView === 'about'"/>
  </div>
</template>

<script>
import MenuPanel from './components/MenuPanel.vue'
import BackgroundShuffle from './components/BackgroundShuffle.vue'
import AboutPanel from './components/AboutPanel.vue'

export default {
  name: 'app',
  components: {
    MenuPanel,
    BackgroundShuffle,
    AboutPanel
  },
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
  },
  methods: {
    menuClick: function(id) {
      this.myView = id;
    },
    goHome: function() {
      this.myView = "home";
    }
  }
}
</script>

<style>
#app {
  font-family: "Cantarell", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: white;
}
</style>
