import { prisma } from "../config/prisma.config";

export const Login = async ({
  email,
  password,
}: {
  email: string;
  password: string;
}) => {
  const user = await prisma.user.findFirstOrThrow({ where: { email } });
  console.log(user)
};
