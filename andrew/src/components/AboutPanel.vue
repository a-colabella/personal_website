<template>
  <div id="about_panel">
    <p class="page_h"><b>about</b></p>
    <p>Hi. I'm Andrew Colabella.</p>
    <p>I'm studying Computer Engineering/Computer Science at Northeastern University.</p>
    <p>I write. I play music. I take photos.</p>
  </div>
</template>

<script>
export default {
  name: 'AboutPanel'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

#about_panel {
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

</style>
