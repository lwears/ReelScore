/*
  Warnings:

  - You are about to drop the column `imdbScore` on the `Movie` table. All the data in the column will be lost.
  - You are about to drop the column `rottenTomatoes` on the `Movie` table. All the data in the column will be lost.
  - You are about to drop the column `imdbScore` on the `Serie` table. All the data in the column will be lost.
  - You are about to drop the column `rottenTomatoes` on the `Serie` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Movie" DROP COLUMN "imdbScore",
DROP COLUMN "rottenTomatoes",
ADD COLUMN     "tmdbScore" INTEGER,
ALTER COLUMN "releaseDate" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Serie" DROP COLUMN "imdbScore",
DROP COLUMN "rottenTomatoes",
ADD COLUMN     "tmdbScore" INTEGER,
ALTER COLUMN "firstAired" DROP NOT NULL;
