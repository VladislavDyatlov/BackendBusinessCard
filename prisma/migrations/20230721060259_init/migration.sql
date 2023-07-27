-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Images" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "photo" TEXT NOT NULL,
    "imagesId" INTEGER NOT NULL
);
INSERT INTO "new_Images" ("id", "imagesId", "photo") SELECT "id", "imagesId", "photo" FROM "Images";
DROP TABLE "Images";
ALTER TABLE "new_Images" RENAME TO "Images";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
