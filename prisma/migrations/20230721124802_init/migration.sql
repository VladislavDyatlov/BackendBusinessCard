/*
  Warnings:

  - Added the required column `category` to the `State` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_State" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "photo" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "date" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "text" TEXT NOT NULL,
    "category" TEXT NOT NULL
);
INSERT INTO "new_State" ("date", "id", "photo", "text", "title") SELECT "date", "id", "photo", "text", "title" FROM "State";
DROP TABLE "State";
ALTER TABLE "new_State" RENAME TO "State";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
