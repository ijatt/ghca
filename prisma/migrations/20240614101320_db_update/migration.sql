/*
  Warnings:

  - You are about to drop the column `isApproved` on the `applications` table. All the data in the column will be lost.

*/
-- CreateEnum
CREATE TYPE "Status" AS ENUM ('PENDING', 'REJECTED', 'APPROVED');

-- AlterTable
ALTER TABLE "applications" DROP COLUMN "isApproved",
ADD COLUMN     "status" "Status" NOT NULL DEFAULT 'PENDING',
ALTER COLUMN "approvedDate" DROP NOT NULL;
