<template>
  <div id="story_panel" v-if="panel === true">
    <p class="page_h">stories</p>
    <div id="story_grid">
      <p class="story-links" v-for="story in stories">
        <a @click="readStory(story['id'])">
          {{story["title"]}}
        </a>
      </p>
    </div>
  </div>
  <div id="selected_story" v-else-if="panel === false">
    <p class="page_h" id="storytitle">{{ storytitle }}</p>
    <p id="storytext">{{ storytext }}</p>
  </div>
</template>

<script>
export default {
  name: 'StoryPanel',
  props: ["stories"],
  data() {
    return {
      panel: true,
      storytitle: "",
      storytext: ""
    }
  },
  methods: {
    readStory: function(file) {
      this.panel = false;

      let x = this.stories[file];
      console.log(x);
      console.log(x["title"]);
      console.log(x["text"]);
      this.storytitle = x["title"];
      this.storytext = x["text"];
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

#story_panel, #selected_story {
  position: fixed;
  display: inline-block;
  background-color: black;
  width: 50%;
  margin-left: 35%;
  margin-top: 8%;
  padding-left: 10px;
  padding-top: 10px;
}

.page_h {
  font-size: 20px;
  font-weight: bold;
}

a {
  cursor: pointer;
  color: white;
}
</style>
