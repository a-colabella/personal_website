<template>
  <div id="resume_panel">
    <p class="page_h"><b>my resume</b></p>
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
