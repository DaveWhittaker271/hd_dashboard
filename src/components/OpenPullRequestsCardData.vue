<template>
  <div v-if="$apollo.queries.pullRequestData.loading">
    <Loader />
  </div>
  <div v-else-if="!$apollo.queries.pullRequestData.loading">
    <b-table :fields="fields" :items="pullRequestData.pullRequests.items" thead-class="d-none" class="prTable" striped hover borderless fixed>
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
import getOpenPullRequestsQuery from "../graphql/openPullRequests";
import Loader from './Loader.vue'
import { TimeAgo } from 'vue2-timeago'
import 'vue2-timeago/dist/vue2-timeago.css'

export default {
  name  : 'OpenPullRequestsCardData',
  props : [],
  components: {TimeAgo, Loader},
  apollo: {
    pullRequestData: {
      query    : getOpenPullRequestsQuery,
      variables: {
        number_of_repos: 5
      },
    }
  },
  watch: {
    pullRequestData: function(data) {
      data.pullRequests.items.forEach(pr => {
        pr.unresolvedComments = pr.reviewThreads.nodes.filter(function(thread){
          return thread.isResolved == false;
        }).length;
      });
    }
  },
  data()
  {
    return {
      pullRequestData: null,
      fields: [
        {key: 'title', class: ''},
        {key: 'comments', class: 'icon-column fit w-10'},
        {key: 'latestReviews', class: 'icon-column fit'},
        {key: 'createdAt', class: 'date-column fit'}
      ],
      data  : []
    }
  },
  methods: {
    getColumnWidth (key) {
      if (key === "latestReviews" || key === 'comments') {
        return '40px';
      } else if (key === 'createdAt') {
        return '75px';
      }
      return '100%';
    }
  }
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