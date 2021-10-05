<template>
  <div id="page">
    <SvgComponent />
    <NavBar />
    <div id="main">
      <SideBar />
    </div>
    {{ msg }}
  </div>
</template>

<script>
import SvgComponent from '../src/components/SvgComponent.vue'
import SideBar from '../src/components/SideBar.vue'
import NavBar from '../src/components/NavBar.vue'
export default {
  name: 'App',
  components: { NavBar, SvgComponent, SideBar },
  data () {
    return {
      msg: 'Hello world!'
    }
  }
}
</script>

<style>
div#page {
  height: 100vh;
  height: -webkit-fill-available;
  max-height: 100vh;
}

div#main {
  display: flex;
  flex-wrap: nowrap;
  height: 100vh;
  height: -webkit-fill-available;
  max-height: 100vh;
  overflow-x: auto;
  overflow-y: hidden;
}
</style>