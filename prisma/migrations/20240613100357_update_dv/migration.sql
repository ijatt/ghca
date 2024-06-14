-- CreateTable
CREATE TABLE "applications" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "finding" TEXT NOT NULL,
    "userId" INTEGER NOT NULL,
    "isApproved" BOOLEAN NOT NULL,
    "approvedBy" INTEGER,
    "approvedDate" TIMESTAMP(3) NOT NULL,
    "fileName" TEXT,

    CONSTRAINT "applications_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "applications" ADD CONSTRAINT "applications_userId_fkey" FOREIGN KEY ("userId") REFERENCES "applicant"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "applications" ADD CONSTRAINT "applications_approvedBy_fkey" FOREIGN KEY ("approvedBy") REFERENCES "admin"("id") ON DELETE SET NULL ON UPDATE CASCADE;
