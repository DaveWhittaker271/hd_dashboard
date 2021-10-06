<template>
  <div v-if="$apollo.queries.search.loading">
    Loading
  </div>
  <div v-else-if="!$apollo.queries.search.loading" >
    <b-table striped hover :fields="fields" :items="search.results" borderless>
      <template #cell(comments)="data">
        <b-icon icon="chat-right-text"/>
        {{ data.title }}
      </template>
    </b-table>
  </div>
</template>
<script>
import repositoriesQuery from "./../graphql/repositories";

export default {
  name: 'OpenPullRequestsCardData',
  props: [],
  apollo: {
    search: {
      query: repositoriesQuery,
      variables: {
        number_of_repos: 5
      },
    }
  },
  data() {
    return {
      search: null,
      fields: [
        {
          key: 'name',
          label: 'Pull Request Title',
        },
        {
          key: 'comments',
          label: '',
        },
        {
          key: 'created',
        }
      ],
      data: []
    }
  }
}
</script>
<style lang="less" scoped>
table {
  margin: 0;

  th {
    font-weight: normal;
  }

}

</style>