import Vue from "vue";
import VueApollo from "vue-apollo";

import gitClient from "./api/api_git"
import youtrackClient from "./api/api_youtrack"

const apolloProvider = new VueApollo({
  clients: {
    gitClient: gitClient,
    youtrackClient: youtrackClient
  }
});

Vue.use(VueApollo);

export default apolloProvider;