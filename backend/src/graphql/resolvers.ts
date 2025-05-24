import userResolvers from '../modules/user/user.resolver'
import authResolvers from '@/modules/auth/auth.resolver'
export default {
  Query: {
    ...userResolvers.Query,
    ...authResolvers.Query
  },
  Mutation: {
    ...userResolvers.Mutation,
    ...authResolvers.Mutation
  },
}