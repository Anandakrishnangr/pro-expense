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

  input CreateUserInput {
  name: String!
  email: String!
  password: String!
}

  type Mutation {
    createUser(data:CreateUserInput!): User!
  }
`

export default userTypeDefs
