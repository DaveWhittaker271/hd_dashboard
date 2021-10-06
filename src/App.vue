<template>
  <div id="page">
    <SvgComponent/>
    <NavBar/>
    <div id="main">
      <SideBar/>
      <CardContainer class="container-fluid">
        <Card title="Open Pull Requests">
          <OpenPullRequestsCardData />
        </Card>
      </CardContainer>
    </div>
  </div>
</template>

<script>
import styled from 'vue-styled-components';

import SvgComponent from '../src/components/SvgComponent.vue'
import SideBar from '../src/components/SideBar.vue'
import NavBar from '../src/components/NavBar.vue'
import Card from '../src/components/Card.vue'
import OpenPullRequestsCardData from './components/OpenPullRequestsCardData.vue'

const CardContainer = styled.div`
  padding: 25px;
`;

export default {
  name: 'App',
  components: {NavBar, SvgComponent, SideBar, Card, CardContainer, OpenPullRequestsCardData},
  data() {
    return {}
  },
  beforeMount() {
    this.fetchData()
  },
  methods: {
    fetchData() {
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