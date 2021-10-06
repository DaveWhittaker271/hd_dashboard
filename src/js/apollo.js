import Vue from "vue";
import VueApollo from "vue-apollo";
import ApolloClient from "apollo-client";
import { HttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";

const getHeaders = () => {
    return {authorization: `Bearer ${process.env.GITHUB_TOKEN}`};
};

const githubLink = new HttpLink({
    uri: 'https://api.github.com/graphql',
    fetch,
    headers: getHeaders()
});

const client = new ApolloClient({
    link: githubLink,
    cache: new InMemoryCache({
        addTypename: true
    }),
    defaultOptions: {
        watchQuery: {fetchPolicy: "cache-and-network"}
    }
});

const apolloProvider = new VueApollo({defaultClient: client});

Vue.use(VueApollo);

export default apolloProvider;