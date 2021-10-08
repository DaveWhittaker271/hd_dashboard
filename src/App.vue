<template>
  <div id="page" >
    <SvgComponent/>
    <Page id="main">
      <SideBar/>
      <GridLayout
          :layout.sync="layout"
          :col-num="12"
          :col-width="15"
          :row-height="30"
          :is-draggable="true"
          :is-resizable="true"
          :responsive="true"
          :vertical-compact="true"
          :margin="[10, 10]"
          :use-css-transforms="true"
          @layout-updated="layoutUpdatedEvent"
          @contextmenu.prevent="$refs.menu.open"
      >
        <GridItem v-for="item in layout" :x="item.x" :y="item.y" :w="item.w" :h="item.h" :i="item.i" :key="item.i" :minW="item.minW" :minH="item.minH" :is-resizable="item.resizable"
                  drag-allow-from=".card-header"
                  @moved="layoutUpdatedEvent"
                  @resized="layoutUpdatedEvent">
          <Header v-if="item.type === 'header'">
            {{ item.text }}
          </Header>

          <Card title="Open Pull Requests" v-else-if="item.type === 'openPRs'">
            <OpenPullRequestsCardData/>
          </Card>

          <Card title="Code Reviews" v-else-if="item.type === 'outstandingReviews'">
            <OutstandingReviewsCardData/>
          </Card>

          <Card title="Notes" v-else-if="item.type === 'notes'">
            <NotesCardData/>
          </Card>

          <Card title="My Current Tasks" v-else-if="item.type === 'in-progress'">
            <InProgressTasksCardData />
          </Card>

          <Card title="My Failed Tasks" v-else-if="item.type === 'failed-tasks'">
            <FailedTasksCardData />
          </Card>

        </GridItem>
      </GridLayout>
    </Page>
  </div>
</template>

<script>
import styled from 'vue-styled-components';

import {GridLayout, GridItem} from "vue-grid-layout"

import SvgComponent from '../src/components/SvgComponent.vue'
import SideBar from '../src/components/SideBar.vue'
import NavBar from '../src/components/NavBar.vue'
import Card from '../src/components/Card.vue'
import OpenPullRequestsCardData from './components/cards/OpenPullRequestsCardData.vue'
import OutstandingReviewsCardData from './components/cards/OutstandingReviewsCardData.vue'
import InProgressTasksCardData from './components/cards/InProgressTasksCardData.vue'
import NotesCardData from './components/cards/NotesCardData.vue'
import FailedTasksCardData from './components/cards/FailedTasksCardData.vue'

const Page = styled.div`
  background: rgb(254,228,228);
  background: linear-gradient(344deg, rgba(254,228,228,1) 0%, rgba(255,255,255,1) 100%);
`;

const CardContainer = styled.div`
  padding: 25px;
`;

const Header = styled.h4`
    margin-left: 5px;
    margin-bottom: 20px;
`;

export default {
  name      : 'App',
  components: {
    NavBar,
    SvgComponent,
    SideBar,
    Card,
    CardContainer,
    OpenPullRequestsCardData,
    OutstandingReviewsCardData,
    InProgressTasksCardData,
    FailedTasksCardData,
    NotesCardData,
    Header,
    GridLayout,
    GridItem,
    Page
  },
  data()
  {
    return {
      layout   : [
        {"x": 0, "y": 0, "w": 12, "h": 1, "type": "header", "text": "GitHub", "i": "0", static: false, resizable: false},
        {"x": 0, "y": 0, "w": 4, "h": 5, "minW": 2, "minH": 4, "type": "openPRs", "i": "1", static: false, resizable: true},
        {"x": 4, "y": 0, "w": 4, "h": 5, "minW": 2, "minH": 4, "type": "outstandingReviews", "i": "2", static: false, resizable: true},
        {"x": 8, "y": 0, "w": 4, "h": 5, "minW": 2, "minH": 4, "type": "notes", "i": "3", static: false, resizable: true},
        {"x": 0, "y": 5, "w": 12, "h": 1, "type": "header", "text": "YouTrack", "i": "4", static: false, resizable: false},
        {"x": 0, "y": 5, "w": 4, "h": 5, "minW": 2, "minH": 4, "type": "in-progress", "i": "5", static: false, resizable: true},
        {"x": 4, "y": 5, "w": 4, "h": 5, "minW": 2, "minH": 4, "type": "failed-tasks", "i": "6", static: false, resizable: true},
      ],
      draggable: true,
      resizable: true,
    }
  },
  methods: {
    layoutUpdatedEvent: function(newLayout){
      this.layout = newLayout;
    }
  },
  mounted() {
      const layout = localStorage.getItem('layout');
      if (layout === null || layout === undefined) {
        return;
      }
      this.layout = JSON.parse(layout);
  },
  watch: {
    layout(newLayout) {
      localStorage.setItem('layout', JSON.stringify(newLayout));
    }
  }
}
</script>

<style lang="less" scoped>
/deep/ div.vue-grid-layout {
  width: 100%;
  height: 200px;

  .vue-grid-item {
    .card-body {
      overflow: hidden;
      overflow-y: auto;
    }
  }
}

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