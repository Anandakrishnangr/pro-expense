-- CreateEnum
CREATE TYPE "TransactionType" AS ENUM ('CREDIT', 'DEBIT');

-- AlterTable
ALTER TABLE "Transaction" ADD COLUMN     "type" "TransactionType" NOT NULL DEFAULT 'DEBIT';
