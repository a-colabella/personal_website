<template>
  <i class="glyphicon glyphicon-refresh"></i>
</template>

<script>
export default {
  name: 'BackgroundShuffle',
  methods: {}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  i {
    position: absolute;
    z-index: 2;
    color: black;
    font-size: 30px;
    border: dashed black 2px;
    padding: 5px;
    cursor: pointer;
    top: 2%;
    right: 2%;
  }

  i:hover {
    font-weight: bold;
  }
</style>
