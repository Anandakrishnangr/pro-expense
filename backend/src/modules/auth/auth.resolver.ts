import { prisma } from "@/config/prisma.config";
import { hashPassword } from "@/lib/bcrypt.lib";
import { Login,  SignupService } from "@/services/auth.services";

const authResolvers = {
  Query: {
    isValidToken: async (_: any, args: { token: string }) => {
      const { token } = args;
      if (!token) {
        throw new Error("Token is required");
      }
      return true;
    },
  },
  Mutation: {
    login: async (
      _: any,
      args: { data: { email: string; password: string } }
    ) => {
      const { email, password } = args.data;
      return Login({ email, password });
    },

    refreshToken: async (_: any, args: { refreshToken: string }) => {
      try {
      } catch {
        throw new Error("Invalid refresh token");
      }
    },

    logout: async (_: any, args: { userId: number }) => {
      return true;
    },

    revokeToken: async (_: any, args: { userId: number }) => {
      return true;
    },
    signup: SignupService
  },
};


export default authResolvers;
