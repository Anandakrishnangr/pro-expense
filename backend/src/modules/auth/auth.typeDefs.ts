import { gql } from 'graphql-tag'

const authTypeDefs = gql`

  type AuthPayload {
    accessToken: String!
    refreshToken: String!
  }

  input SignupInput {
    name: String!
    email: String!
    password: String!
  }

  input LoginInput {
    email: String!
    password: String!
  }

  type Mutation {
    login(data: LoginInput!): AuthPayload!
    logout: Boolean!
    refreshToken(token: String!): AuthPayload!
    revokeToken(token: String!): Boolean!
    signup(data: SignupInput!): AuthPayload!
  }

  type Query {
    isValidToken(token: String!): Boolean!
  }
`

export default authTypeDefs
