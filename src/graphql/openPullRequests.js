import gql from "graphql-tag";

export default gql`
query openPullRequests {
  pullRequestData: viewer {
    pullRequests(first: 100, states: OPEN, orderBy: {field: UPDATED_AT, direction: DESC}) {
      items: nodes {
        id
        title
        url
        createdAt
        reviewDecision
        reviewThreads(first: 100) {
          nodes {
            isResolved
            isCollapsed
            isOutdated 
          }
        }
      }
    }
  }
}
`