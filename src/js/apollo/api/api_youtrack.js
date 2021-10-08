import {HttpLink} from "apollo-link-http";
import {DefaultOptions, ApolloClient} from "apollo-client";
import {InMemoryCache} from "apollo-cache-inmemory";
import {ApolloLink} from 'apollo-link';
import Vue from "vue";

const youtrackLink = new HttpLink({
  uri: 'https://davetest1271.myjetbrains.com/youtrack/api/issues?fields=id,idReadable,resolved,summary,project(iconUrl,shortName),customFields(name,value)&project=DEMO&assignee=root',
  headers: {
    authorization: `Bearer perm:cm9vdA==.NDYtMA==.oIrEbsaEeryGiIYAdxlY3VzXj4g0iX`,
  },
  useGETForQueries: true
});

const contextLink = new ApolloLink((operation, forward) => {
  // Called before operation is sent to server
  operation.setContext({
    http: {includeQuery: false},
  });

  return forward(operation);
});

const parseResponse = new ApolloLink((operation, forward) => {
  return forward(operation).map((response) => {
    const data = transformData(response);
    console.log('mapped data', data);
    return data;
  })
})

function transformData (data) {
  data.map((issue) => {
    Vue.delete(issue, '$type');
  });
/*
  data = data.filter((issue) => {
    const assignee = issue.
    customFields.
    filter((field) => {return field.name === 'assignee'});
    console.log(assignee);
    return Math.random() > 0.5;
  })
*/
  data = data.slice(0,5);
  return {data: {inProgressTasks: { tasks: data}}};
}

export default new ApolloClient({
  link: ApolloLink.from([contextLink, parseResponse, youtrackLink]),
  cache: new InMemoryCache({addTypename: false}),
  fetchOptions: {
    mode: 'no-cors',
  },
});
;