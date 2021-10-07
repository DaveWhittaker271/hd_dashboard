<template>
  <div v-if="$apollo.queries.inProgressTasks.loading">
    <Loader />
  </div>
  <div v-else-if="!$apollo.queries.inProgressTasks.loading">
    <b-table :fields="fields" :items="inProgressTasks.pullRequests.items" thead-class="d-none" class="prTable" striped hover borderless fixed>
      <template #table-colgroup="scope">
        <col
            v-for="field in scope.fields"
            :key="field.key"
            :style="{ width: getColumnWidth(field.key) }"
        >
      </template>
      <template #cell(title)="data">
        <a :href="data.item.url" class="v-center">{{data.item.title}}</a>
      </template>
      <template #cell(comments)="data">
        <div v-show="data.item.unresolvedComments && data.item.unresolvedComments > 0" class="v-center">
          <b-icon icon="chat-right-text"/>
          {{ data.item.unresolvedComments }}
        </div>
      </template>
      <template #cell(latestReviews)="data">
        <div v-show="data.item.reviewDecision === 'CHANGES_REQUESTED'" class="v-center text-danger">
          <b-icon icon="wrench"/>
        </div>
      </template>
      <template #cell(createdAt)="data">
        <time-ago :datetime="data.item.createdAt" :refresh="3600" tooltip long />
      </template>
    </b-table>
  </div>
</template>
<script>
import inProgressTasksQuery from "../../graphql/inProgressTasksQuery";
import Loader from '../Loader.vue'
import 'vue2-timeago/dist/vue2-timeago.css'

export default {
  name  : 'InProgressTasksCardData',
  props : [],
  components: {Loader},
  apollo: {
    inProgressTasks: {
      query    : inProgressTasksQuery,
      client: 'youtrackClient'
    }
  },
  data()
  {
    return {
      inProgressTasks: null,
      fields: [
        {key: 'title', class: ''},
        {key: 'comments', class: 'icon-column fit w-10'},
        {key: 'latestReviews', class: 'icon-column fit'},
        {key: 'createdAt', class: 'date-column fit'}
      ],
      data  : []
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

    .date-column {
      width: 125px;
    }
  }

  td:first-child {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  td:not(:first-child) {
    text-align: right;
  }

  td.fit,
  th.fit {
    white-space: nowrap;
    width: 1%;
  }
}

.v-timeago {
  font-size: @fontSizeSmaller;
}

.icon-column {
  font-size: 14px;
}
</style>