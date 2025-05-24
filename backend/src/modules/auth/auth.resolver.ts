import { Login } from "@/services/auth.services";

const authResolvers = {
  Query: {
    isValidToken: async (_: any, args: { token: string }) => {
      const { token } = args;
      // Logic to validate the token
      // This could involve checking the token against a database or decoding it
      if (!token) {
        throw new Error("Token is required");
      }
      // For now, we assume the token is valid
      return true;
    }
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
  },
};

export default authResolvers;
