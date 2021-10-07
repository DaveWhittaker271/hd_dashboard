import Vue from "vue";
import VueApollo from "vue-apollo";

import gitClient from './../js/api_git'

const apolloProvider = new VueApollo({
  clients: {
    gitClient: gitClient
  }
});

Vue.use(VueApollo);

export default apolloProvider;