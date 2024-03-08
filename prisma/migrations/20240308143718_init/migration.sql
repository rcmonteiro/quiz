/*
  Warnings:

  - You are about to drop the column `level` on the `Question` table. All the data in the column will be lost.
  - Added the required column `difficulty` to the `Question` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Question" DROP COLUMN "level",
ADD COLUMN     "difficulty" TEXT NOT NULL;
