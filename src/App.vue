<template>
  <div id="page">
    <SvgComponent/>
    <NavBar/>
    <div id="main">
      <SideBar/>
    </div>
  </div>
</template>

<script>
// My components
import SvgComponent from '../src/components/SvgComponent.vue'
import SideBar from '../src/components/SideBar.vue'
import NavBar from '../src/components/NavBar.vue'

export default {
  name: 'App',
  components: {NavBar, SvgComponent, SideBar},
  data() {
    return {}
  },
  beforeMount() {
    this.fetchData()
  },
  methods: {
    fetchData() {
      this.responseAvailable = false;
      fetch("https://reqres.in/api/users?page=2", {
        "method": "GET",
        "headers": {}
      })
      .then(response => {
        if (response.ok) {
          return response.json()
        } else {
          console.error("Server returned " + response.status + " : " + response.statusText);
        }
      })
      .then(response => {
        console.log(response);
      })
      .catch(err => {
        console.error(err);
      });
    }
  }
}
</script>

<style lang="less" scoped>
  div {
    &#page {
      height: 100vh;
      height: -webkit-fill-available;
      max-height: 100vh;
    }

    #main {
      display: flex;
      flex-wrap: nowrap;
      height: 100vh;
      height: -webkit-fill-available;
      max-height: 100vh;
      overflow-x: auto;
      overflow-y: hidden;
    }
  }
</style>