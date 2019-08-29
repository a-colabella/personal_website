<template>
  <div id="photo_panel">
    <p class="page_h"><b>photos</b></p>
    <div id="photo_grid">
      <img v-for="pic in pics" :src="require('../assets/images/'+pic)" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'PhotoPanel',
  props: ["pics"]
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

#photo_panel {
  position: fixed;
  display: inline-block;
  background-color: black;
  width: 50%;
  height: 60%;
  margin-left: 35%;
  margin-top: 8%;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 10px;
  overflow-y: scroll;
}

.page_h {
  font-size: 20px;
}

#photo_grid {
  line-height: 0;
  -webkit-column-count: 3;
  -webkit-column-gap:   0px;
  -moz-column-count:    3;
  -moz-column-gap:      0px;
  column-count:         3;
  column-gap:           0px;
}


img {
  width: 100% !important;
  height: auto !important;
  transition: all .2s ease-in-out;
}

img:hover {
  cursor: pointer;
  transform: scale(1.1);
}

</style>
