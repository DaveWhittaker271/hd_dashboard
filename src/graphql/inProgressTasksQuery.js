import gql from "graphql-tag";

export default gql`
query inProgressTasks {
  inProgressTaskData: viewer {
    pullRequests(first: 100, states: OPEN, orderBy: {field: CREATED_AT, direction: DESC}) {
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