import { hashPassword } from "@/lib/bcrypt.lib";
import { prisma } from "../../config/prisma.config";

const userResolvers = {
  Query: {
    users: async () => {
      return prisma.user.findMany();
    },
  },
  Mutation: {
    createUser: async (
      _: any,
      args: { data: { name: string; email: string; password: string } }
    ) => {
      const { name, email, password } = args.data;
      const hashedPassword = await hashPassword(password);
      return prisma.user.create({
        data: { name, email, password: hashedPassword },
      });
    },
  },
};

export default userResolvers;
