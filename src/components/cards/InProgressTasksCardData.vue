<template>
  <div v-if="$apollo.queries.inProgressTasks.loading">
    <Loader/>
  </div>
  <div v-else-if="!$apollo.queries.inProgressTasks.loading">
    <b-table :fields="fields" :items="inProgressTasks.tasks" thead-class="d-none" class="prTable" striped hover
             borderless fixed>
      <template #cell(iconUrl)="data">
        <ProjectIcon :src="'https://davetest1271.myjetbrains.com' + data.item.project.iconUrl" />
      </template>
      <template #cell(idReadable)="data">
        <a :href="'https://davetest1271.myjetbrains.com/youtrack/issue/' + data.item.idReadable" class="v-center">{{ data.item.idReadable }}</a>
      </template>
    </b-table>
  </div>
</template>
<script>
import inProgressTasksQuery from "../../graphql/inProgressTasksQuery";
import Loader from '../Loader.vue'
import 'vue2-timeago/dist/vue2-timeago.css'
import styled from 'vue-styled-components';

const ProjectIcon = styled.img`
  width: 25px;
  height: 25px;
`;

export default {
  name: 'InProgressTasksCardData',
  props: [],
  components: {Loader, ProjectIcon},
  apollo: {
    inProgressTasks: {
      query: inProgressTasksQuery,
      client: 'youtrackClient'
    }
  },
  data() {
    return {
      inProgressTasks: {},
      fields: [
        {key: 'iconUrl', class: ''},
        {key: 'idReadable', class: ''},
        {key: 'summary', class:'task-desc'},
      ],
      data: []
    }
  },
}
</script>
<style lang="less" scoped>
/deep/ .table {
  font-size: @fontSizeBigger;

  > th {
    font-weight: normal;
  }

  td {
    position: relative;
  }

  .task-desc {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  a {
    text-decoration: none;
  }

  td:first-child {
    width: 80px;
  }

  td.fit,
  th.fit {
    white-space: nowrap;
    width: 1%;
  }
}
</style>