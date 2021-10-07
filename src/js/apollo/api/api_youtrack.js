import {HttpLink} from "apollo-link-http";
import ApolloClient from "apollo-client";
import {InMemoryCache} from "apollo-cache-inmemory";
import { ApolloLink, concat, split } from 'apollo-link';
import { setContext } from "apollo-link-context";
import { InMemoryCache } from "apollo-cache-inmemory";

const youtrackLink = new HttpLink({
  uri    : 'https://tomcoupe.myjetbrains.com/youtrack/api/issues?fields=id,summary,project(name)&project=CCL0001',
  fetch,
  headers: {authorization: `Bearer ${process.env.YOUTRACK_TOKEN}`},
  useGETForQueries: true,
});

const authMiddleware = new ApolloLink((operation, forward) => {
  // add the authorization to the headers
  operation.setContext({
      includeQuery: false,
  });
  return forward(operation);
})

const client = new ApolloClient({
  link          : authMiddleware,
  cache         : new InMemoryCache({addTypename: true}),
  fetchOptions: {mode: 'no-cors'},
  defaultOptions: {
    watchQuery: {fetchPolicy: "cache-and-network"}
  },
  http: {
    includeQuery: false,
  }
});

export default client;