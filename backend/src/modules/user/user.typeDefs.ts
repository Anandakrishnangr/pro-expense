import { gql } from 'graphql-tag'

const userTypeDefs = gql`
  type User {
    id: String!
    name: String!
    email: String!
    createdAt: String!
  }

  type Query {
    users: [User!]!
  }

  type Mutation {
    createUser(name: String!, email: String!, password: String!): User!
  }
`

export default userTypeDefs
