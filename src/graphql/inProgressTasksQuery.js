import gql from "graphql-tag";

export default gql`
query inProgressTasks {
  inProgressTasks {
    tasks {
      id,
      idReadable,
      summary,
      resolved
    }
  }
}
`