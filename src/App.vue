<template>
  <div id="page">
    <SvgComponent/>
    <NavBar/>
    <div id="main">
      <SideBar/>
      <CardContainer class="container-fluid">
        <Header>GitHub</Header>
        <Card title="Open Pull Requests">
          <OpenPullRequestsCardData />
        </Card>
        <Card title="Outstanding Code Reviews">
          <OutstandingReviewsCardData />
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
import OutstandingReviewsCardData from './components/OutstandingReviewsCardData.vue'

const CardContainer = styled.div`
  padding: 25px;
`;

const Header = styled.h4`
    margin-left: 5px;
    margin-bottom: 20px;
`;

export default {
  name: 'App',
  components: {
    NavBar, SvgComponent, SideBar, Card, CardContainer, OpenPullRequestsCardData, OutstandingReviewsCardData, Header
  },
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