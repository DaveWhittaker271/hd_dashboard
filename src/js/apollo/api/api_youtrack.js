import {HttpLink} from "apollo-link-http";
import {DefaultOptions, ApolloClient} from "apollo-client";
import {InMemoryCache} from "apollo-cache-inmemory";
import {ApolloLink} from 'apollo-link';

const youtrackLink = new HttpLink({
  uri: 'https://davetest1271.myjetbrains.com/youtrack/api/issues?fields=id,summary,project(name)&project=DEMO',
  customFetch,
  headers: {
    authorization: `Bearer perm:cm9vdA==.NDYtMA==.oIrEbsaEeryGiIYAdxlY3VzXj4g0iX`
  },
  useGETForQueries: true,
});

const contextLink = new ApolloLink((operation, forward) => {
  // Called before operation is sent to server
  operation.setContext({
    http: {includeQuery: false},
  });

  return forward(operation);
});

const customFetch = (uri, options) => {
  return fetch(uri, {
    headers: {
      authorization: `Bearer perm:cm9vdA==.NDYtMA==.oIrEbsaEeryGiIYAdxlY3VzXj4g0iX`,
    },
    mode: 'no-cors'
  });
};

const parseResponse = new ApolloLink((operation, forward) => {
  return forward(operation).map((response) => {
    response.data.parsed = transformData(response.data);
    return response
  })
})

function transformData (data) {
  console.log('data', data);
  return data;
}


export default new ApolloClient({
  link: contextLink.concat(parseResponse).concat(youtrackLink),
  cache: new InMemoryCache({addTypename: false}),
  fetchOptions: {
    mode: 'no-cors',
  },
});
;