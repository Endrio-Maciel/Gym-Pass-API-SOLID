/*
  Warnings:

  - You are about to drop the column `descripition` on the `gyms` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "gyms" DROP COLUMN "descripition",
ADD COLUMN     "description" TEXT;
