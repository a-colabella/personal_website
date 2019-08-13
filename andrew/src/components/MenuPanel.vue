<template>
  <div id="menu_panel">
    <div id="name" v-on:click="activateAndGo('home')">
      andrew colabella
    </div>
    <ul>
      <li v-bind:id="op.id" v-for="op in options" v-on:click="activateAndGo(op.id)"
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
  methods: {
    activateAndGo(id) {
      this.activate = id;
      this.$emit('menu-click', id);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#menu_panel {
    background-color: black;
    position: sticky;
    display: inline-block;
    z-index: 1;
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
    font-weight: bold;
}

</style>
