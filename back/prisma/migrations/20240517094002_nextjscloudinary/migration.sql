-- AlterTable
ALTER TABLE "Movie" ADD COLUMN     "poster_image_url" TEXT,
ALTER COLUMN "poster_image" DROP NOT NULL,
ALTER COLUMN "score" DROP NOT NULL;
