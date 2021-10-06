import gql from "graphql-tag";

export default gql`
    query($number_of_repos:Int!) {
      search(query: "is:merged is:pr is:public archived:false author:MichaelCurrin -user:MichaelCurrin", type: ISSUE, first: $number_of_repos) {
        issueCount
        results: edges {
          node {
            ... on PullRequest {
              number
              title
              publishedAt
              comments (last: 100) {
              nodes {
                author {
                  login
                }
                state
              }
            }
            }
          }
        }
      }
    }
`;