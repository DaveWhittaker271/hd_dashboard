<template>
  <div v-if="$apollo.queries.codeReviews.loading">
    <Loader/>
  </div>
  <div v-else-if="!$apollo.queries.codeReviews.loading">
    <b-table :fields="fields" :items="codeReviews.items" thead-class="d-none" class="prTable" striped hover borderless
             fixed>
      <template #cell(title)="data">
        <a :href="data.item.url">{{ data.item.title }}</a>
      </template>
    </b-table>
  </div>
</template>
<script>
import getOutstandingReviews from "../graphql/outstandingReviews";
import Loader from './Loader.vue'
import {TimeAgo} from 'vue2-timeago'
import 'vue2-timeago/dist/vue2-timeago.css'

export default {
  name: 'OutstandingReviewsCardData',
  props: [],
  components: {TimeAgo, Loader},
  apollo: {
    codeReviews: {
      query: getOutstandingReviews,
      variables: {
        number_of_repos: 5
      },
    }
  },
  watch: {
    codeReviews: function (data) {
    }
  },
  data() {
    return {
      codeReviews: null,
      fields: [
        {key: 'title', class: ''},
      ],
      data: []
    }
  },
}
</script>
<style lang="less" scoped>
  /deep/ .table {
    font-size: @fontSizeBigger;

    > tbody > tr > td {
      padding: 8px;
    }
  }
</style>