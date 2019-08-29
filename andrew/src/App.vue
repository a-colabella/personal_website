<template>
  <div id="app">
    <img class="bg_img" :src="require('./assets/images/'+backgroundURL)"/>
    <MenuPanel class="menu" v-bind:options="menu_items" v-on:menu-click="menuClick"/>
    <BackgroundShuffle v-on:shuffleMe="shuffleBackground()"/>
    <AboutPanel class="content" v-if="myView === 'about'"/>
    <PhotoPanel class="content" v-bind:pics="photos" v-if="myView === 'photos'"/>
    <StoryPanel class="content" v-if="myView === 'shorts'"/>
    <ResumePanel class="content" v-if="myView === 'resume'"/>
  </div>
</template>

<script>
import MenuPanel from './components/MenuPanel.vue'
import BackgroundShuffle from './components/BackgroundShuffle.vue'
import AboutPanel from './components/AboutPanel.vue'
import PhotoPanel from './components/PhotoPanel.vue'
import StoryPanel from './components/StoryPanel.vue'
import ResumePanel from './components/ResumePanel.vue'

export default {
  name: 'app',
  components: {
    MenuPanel,
    BackgroundShuffle,
    AboutPanel,
    PhotoPanel,
    StoryPanel,
    ResumePanel
  },
  data() {
    return {
      myView: "home",
      backgrounds: [],
      photos: [],
      backgroundURL: "brick.jpg",
      menu_items: [
        {
          name: "about",
          id: "about"
        },
        {
          name: "stories",
          id: "shorts"
        },
        {
          name: "photos",
          id: "photos"
        },
        {
          name: "resume",
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
    },
    shuffleBackground: function() {
      var index = Math.floor(Math.random() * (this.backgrounds.length - 1));

      this.backgroundURL = this.backgrounds[index];
    }
  },
  mounted() {
    var background_url = require('./assets/background.json');
    var photo_url = require('./assets/photos.json');
    this.backgrounds = background_url['backgrounds'];
    this.photos = photo_url['photos'];
    this.shuffleBackground();
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

.bg_img {
  display: block;
  position: absolute;
  z-index: 1;
  max-width: 100%;
}

.content {
  z-index: 2;
}
</style>
