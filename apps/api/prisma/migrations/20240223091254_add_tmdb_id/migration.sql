/*
  Warnings:

  - A unique constraint covering the columns `[tmdbId]` on the table `Movie` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[tmdbId]` on the table `Serie` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `tmdbId` to the `Movie` table without a default value. This is not possible if the table is not empty.
  - Added the required column `tmdbId` to the `Serie` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Movie" ADD COLUMN     "tmdbId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Serie" ADD COLUMN     "tmdbId" INTEGER NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Movie_tmdbId_key" ON "Movie"("tmdbId");

-- CreateIndex
CREATE UNIQUE INDEX "Serie_tmdbId_key" ON "Serie"("tmdbId");
