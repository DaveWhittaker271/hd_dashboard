<template>
  <div v-if="$apollo.queries.search.loading" class="loading">
    <Loader />
  </div>
  <div v-else-if="!$apollo.queries.search.loading">
    <b-table :fields="fields" :items="search.pullRequests.items" thead-class="d-none" class="prTable" striped hover borderless fixed>
      <template #table-colgroup="scope">
        <col
            v-for="field in scope.fields"
            :key="field.key"
            :style="{ width: getColumnWidth(field.key) }"
        >
      </template>
      <template #cell(title)="data">
        <a :href="data.item.url">{{data.item.title}}</a>
      </template>
      <template #cell(comments)="data">
        <div v-show="data.item.comments.totalCount > 0" class="v-center">
          <b-icon icon="chat-right-text"/>
          {{ data.item.comments.totalCount }}
        </div>
      </template>
      <template #cell(latestReviews)="data">
        <div class="v-center">
          <b-icon icon="slash-circle"/>
          {{ data.item.latestReviews.totalCount }}
        </div>
      </template>
      <template #cell(createdAt)="data">
        <time-ago :datetime="data.item.createdAt" :refresh="3600" tooltip long />
      </template>
    </b-table>
  </div>
</template>
<script>
import repositoriesQuery from "./../graphql/repositories";
import Loader from './Loader.vue'
import { TimeAgo } from 'vue2-timeago'
import 'vue2-timeago/dist/vue2-timeago.css'

export default {
  name  : 'OpenPullRequestsCardData',
  props : [],
  components: {TimeAgo, Loader},
  apollo: {
    search: {
      query    : repositoriesQuery,
      variables: {
        number_of_repos: 5
      },
    }
  },
  data()
  {
    return {
      search: null,
      fields: [
        {key: 'title'},
        {key: 'latestReviews'},
        {key: 'comments'},
        {key: 'createdAt'}
      ],
      data  : []
    }
  },
  methods: {
    getColumnWidth (key) {
      if (key === "latestReviews" || key === 'comments') {
        return '10%';
      } else if (key === 'createdAt') {
        return '15%';
      }
      return '75%';
    }
  }
}
</script>
<style lang="less">
  .prTable {
    margin: 0;
    font-size: 12px;

    th {
      font-weight: normal;
    }

    td {
      position: relative;
    }

    td:not(:first-child) {
      text-align: right;
    }
  }
</style>
<style lang="less" scoped>
  .loading {
    padding: 5px;
    font-size: @fontSize;
  }

  td:not(:first-child) div, .v-timeago {
    font-size: @fontSizeSmaller;
  }
</style>