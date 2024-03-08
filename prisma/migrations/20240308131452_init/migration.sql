/*
  Warnings:

  - Added the required column `number` to the `Question` table without a default value. This is not possible if the table is not empty.
  - Made the column `title` on table `Question` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Question" ADD COLUMN     "number" INTEGER NOT NULL,
ALTER COLUMN "title" SET NOT NULL;
