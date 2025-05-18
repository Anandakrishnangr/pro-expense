import userResolvers from '../modules/user/user.resolver'
export default {
  Query: {
    ...userResolvers.Query,
  },
  Mutation: {
    ...userResolvers.Mutation,
  },
}