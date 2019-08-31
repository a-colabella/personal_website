<template>
  <div id="story_panel">
    <p class="page_h"><b>stories</b></p>
    <div id="story_grid">
      <p class="titles" v-for="story in stories">
        <a>
          {{story.substring(0,story.length - 4)}}
        </a>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'StoryPanel',
  props: ["stories"]
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

#story_panel {
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
}

a {
  cursor: pointer;
  color: white;
}
</style>
