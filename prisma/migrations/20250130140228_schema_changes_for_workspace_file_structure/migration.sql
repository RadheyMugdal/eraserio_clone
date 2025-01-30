/*
  Warnings:

  - You are about to drop the column `folderId` on the `Files` table. All the data in the column will be lost.
  - You are about to drop the `Folders` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `TeamMemberships` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Teams` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `workspaceId` to the `Files` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Files" DROP CONSTRAINT "Files_folderId_fkey";

-- DropForeignKey
ALTER TABLE "Folders" DROP CONSTRAINT "Folders_parentFolderId_fkey";

-- DropForeignKey
ALTER TABLE "Folders" DROP CONSTRAINT "Folders_teamId_fkey";

-- DropForeignKey
ALTER TABLE "TeamMemberships" DROP CONSTRAINT "TeamMemberships_teamId_fkey";

-- DropForeignKey
ALTER TABLE "TeamMemberships" DROP CONSTRAINT "TeamMemberships_userId_fkey";

-- AlterTable
ALTER TABLE "Files" DROP COLUMN "folderId",
ADD COLUMN     "workspaceId" TEXT NOT NULL;

-- DropTable
DROP TABLE "Folders";

-- DropTable
DROP TABLE "TeamMemberships";

-- DropTable
DROP TABLE "Teams";

-- CreateTable
CREATE TABLE "Workspaces" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Workspaces_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Files" ADD CONSTRAINT "Files_workspaceId_fkey" FOREIGN KEY ("workspaceId") REFERENCES "Workspaces"("id") ON DELETE CASCADE ON UPDATE CASCADE;
