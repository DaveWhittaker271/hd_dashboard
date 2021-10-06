import gql from "graphql-tag";

export default gql`
{
  search: viewer {
    pullRequests(first: 100, states: OPEN, orderBy: {field: UPDATED_AT, direction: DESC}) {
      items: nodes {
        id
        title
        url
        createdAt
        comments
        {
          totalCount
        }
        latestReviews
        {
          totalCount
        }
      }
    }
  }
}
`;