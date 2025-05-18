import { PrismaClient } from "../generated/prisma";

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

// Avoid re-creating the client during hot reloads in dev (especially with Next.js)
export const prisma =
  globalForPrisma.prisma ??
  new PrismaClient({
    log: ['query'], // optional: logs all queries
  });

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma;
