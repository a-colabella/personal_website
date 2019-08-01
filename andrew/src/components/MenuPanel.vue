<template>
  <div id="menu_panel">
    <div id="name" v-on:click="activate = 'name'">
      ANDREW COLABELLA
    </div>
    <ul>
      <li v-bind:id="op.id" v-for="op in options" v-on:click="activate = op.id"
      v-bind:class="{'activePanelLink': activate == op.id}">
        {{op.name}}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'MenuPanel',
  props: ["options"],
  data() {
    return {
      activate: true
    }
  },
  methods: {}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#menu_panel {
    background-color: black;
    position: sticky;
    z-index: 1;
    color: white;
    width: 23%;
    margin-left: 6%;
    margin-top: 8%;
    padding-left: 10px;
    padding-top: 10px;
    padding-bottom: 5px;
}

#name {
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 10px;
    cursor: pointer;
}

ul {
    list-style-type: none;
    padding-left: 0px;
}

ul li {
    margin-bottom: 10%;
    cursor: pointer;
    width: 50%;
}

ul li:hover {
    font-weight: bold;
}

.activePanelLink {
    border: solid white 2px;
}

</style>
