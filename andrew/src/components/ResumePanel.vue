<template>
  <div id="resume_panel">
    <p class="page_h">
      <span v-on:click="$emit('menu-click', 'home')">&#8592;</span> my resume</p>
    <h2>Education</h2>
    <p>Northeastern University, Boston MA, Class of 2020</p>
    <p>Bachelor of Science in Computer Engineering/Computer Science</p>
    <h2>Experience</h2>
    <h3>Camera IQ</h3>
    <h3>Amazon Robotics</h3>
    <h3>Charles Stark Draper Laboratory</h3>
    <h2>Skills</h2>

  </div>
</template>

<script>
export default {
  name: 'ResumePanel'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

#resume_panel {
  position: fixed;
  display: inline-block;
  background-color: black;
  width: 88%;
  margin-left: 6%;
  margin-top: 8%;
  padding-left: 10px;
  padding-top: 10px;
}

.page_h {
  font-size: 20px;
  font-weight: bold;
}

span {
  cursor: pointer;
}

</style>
