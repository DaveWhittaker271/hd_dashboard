import gql from "graphql-tag";

export default gql`
query outstandingReviews {
  codeReviews: search(first: 100, query: "type:pr state:open review-requested:davewhittaker271", type: ISSUE) {
    issueCount
    items: nodes {
      ... on PullRequest {
        title
        url
      }
    }
  }
}
`