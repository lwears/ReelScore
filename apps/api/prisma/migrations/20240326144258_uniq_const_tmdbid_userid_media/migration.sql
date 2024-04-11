/*
  Warnings:

  - A unique constraint covering the columns `[tmdbId,userId]` on the table `Movie` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[tmdbId,userId]` on the table `Serie` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "Movie_title_key";

-- DropIndex
DROP INDEX "Movie_tmdbId_key";

-- DropIndex
DROP INDEX "Serie_title_key";

-- DropIndex
DROP INDEX "Serie_tmdbId_key";

-- CreateIndex
CREATE UNIQUE INDEX "Movie_tmdbId_userId_key" ON "Movie"("tmdbId", "userId");

-- CreateIndex
CREATE UNIQUE INDEX "Serie_tmdbId_userId_key" ON "Serie"("tmdbId", "userId");
