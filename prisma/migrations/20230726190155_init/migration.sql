-- CreateTable
CREATE TABLE "Comment" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "text" TEXT NOT NULL,
    "commentId" TEXT NOT NULL,
    CONSTRAINT "Comment_commentId_fkey" FOREIGN KEY ("commentId") REFERENCES "Project" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Comments" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "text" TEXT NOT NULL,
    "commentId" TEXT NOT NULL,
    CONSTRAINT "Comments_commentId_fkey" FOREIGN KEY ("commentId") REFERENCES "State" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
