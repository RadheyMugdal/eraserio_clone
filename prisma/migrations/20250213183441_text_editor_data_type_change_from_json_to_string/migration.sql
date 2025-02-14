/*
  Warnings:

  - Made the column `text_data` on table `Files` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Files" ALTER COLUMN "text_data" SET NOT NULL,
ALTER COLUMN "text_data" SET DEFAULT '',
ALTER COLUMN "text_data" SET DATA TYPE TEXT;
