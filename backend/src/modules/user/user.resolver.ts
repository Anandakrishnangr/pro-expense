import { prisma } from '../../config/prisma.config'

const userResolvers = {
  Query: {
    users: async () => {
      return prisma.user.findMany()
    },
  },
  Mutation: {
    createUser: async (
      _: any,
      args: { name: string; email: string; password: string }
    ) => {
      return prisma.user.create({
        data: {
          name: args.name,
          email: args.email,
          password: args.password,
        },
      })
    },
  },
}

export default userResolvers
