import {HttpLink} from "apollo-link-http";
import ApolloClient from "apollo-client";
import {InMemoryCache} from "apollo-cache-inmemory";

const githubLink = new HttpLink({
  uri    : 'https://api.github.com/graphql',
  fetch,
  headers: {authorization: `Bearer ${process.env.GITHUB_TOKEN}`}
});

export default new ApolloClient({
  link          : githubLink,
  cache         : new InMemoryCache({addTypename: true}),
  defaultOptions: {
    'watchQuery': {
      'fetchPolicy': 'no-cache',
      'errorPolicy': 'ignore',
    },
    'query': {
      'fetchPolicy': 'no-cache',
      'errorPolicy': 'all',
    },
  },
});
