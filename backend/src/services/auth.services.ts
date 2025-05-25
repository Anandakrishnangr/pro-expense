import { comparePassword, hashPassword } from "@/lib/bcrypt.lib";
import { prisma } from "../config/prisma.config";
import { generateAccessToken, generateRefreshToken } from "@/lib/jwt.lib";

export const Login = async ({
  email,
  password,
}: {
  email: string;
  password: string;
}) => {
  try {
    console.log("Login attempt with email:", email);
    console.log("Login attempt with password:", password);
    const user = await prisma.user.findFirstOrThrow({ where: { email } });
    const hashpassword = user.password;
    const isUser = await comparePassword(password, hashpassword);
    const refreshToken = generateRefreshToken(email);
    const accessToken = generateAccessToken(email);
    console.log({ user });
    return {
      refreshToken,
      accessToken,
    };
  } catch (error) {
    console.error("Error during login:", error);
  }
};

export const SignupService = async (
  _: any,
  args: { data: { name: string; email: string; password: string } }
) => {
  try {
    const { name, email, password } = args.data;
    console.log("Signup attempt with email:", email);
    const hashedPassword = await hashPassword(password);
    const response = await prisma.user.createManyAndReturn({
      data: { name, email, password: hashedPassword },
    });
    const refreshToken = generateRefreshToken(email);
    const accessToken = generateAccessToken(email);
    console.log("User created:", response);
    return {
      accessToken,
      refreshToken,
    };
  } catch (error) {
    console.log("Error during signup:", error);
  }
};
