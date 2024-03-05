/*
  Warnings:

  - You are about to drop the column `releaseDate` on the `Serie` table. All the data in the column will be lost.
  - Added the required column `firstAired` to the `Serie` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Serie" DROP COLUMN "releaseDate",
ADD COLUMN     "firstAired" TIMESTAMP(3) NOT NULL;
