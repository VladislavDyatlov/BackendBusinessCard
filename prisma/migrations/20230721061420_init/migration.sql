-- CreateTable
CREATE TABLE "Images" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "photo" TEXT NOT NULL,
    "imageId" TEXT NOT NULL,
    CONSTRAINT "Images_imageId_fkey" FOREIGN KEY ("imageId") REFERENCES "Project" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
