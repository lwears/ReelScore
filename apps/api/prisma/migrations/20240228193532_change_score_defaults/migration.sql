/*
  Warnings:

  - Made the column `score` on table `Movie` required. This step will fail if there are existing NULL values in that column.
  - Made the column `tmdbScore` on table `Movie` required. This step will fail if there are existing NULL values in that column.
  - Made the column `score` on table `Serie` required. This step will fail if there are existing NULL values in that column.
  - Made the column `tmdbScore` on table `Serie` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Movie" ALTER COLUMN "score" SET NOT NULL,
ALTER COLUMN "score" SET DEFAULT 0,
ALTER COLUMN "tmdbScore" SET NOT NULL,
ALTER COLUMN "tmdbScore" SET DEFAULT 0;

-- AlterTable
ALTER TABLE "Serie" ALTER COLUMN "score" SET NOT NULL,
ALTER COLUMN "score" SET DEFAULT 0,
ALTER COLUMN "tmdbScore" SET NOT NULL,
ALTER COLUMN "tmdbScore" SET DEFAULT 0;
