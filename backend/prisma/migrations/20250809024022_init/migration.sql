-- CreateTable
CREATE TABLE "public"."Camera" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "condition" TEXT NOT NULL,
    "color" TEXT NOT NULL,
    "price" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Camera_pkey" PRIMARY KEY ("id")
);
