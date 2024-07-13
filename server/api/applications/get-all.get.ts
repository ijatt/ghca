import prisma from "~/server/db/prisma";

export default defineEventHandler(async (event) => {
  try {
    if (!prisma)
      return createError({
        statusCode: 500,
        statusMessage: "Internal server error",
      });

    const application = await prisma.applications.findMany({
      include: {
        admin: true
      }
    })

    if (!application) return createError({statusCode: 500, statusMessage: "Internal Server error"})

    return application
  } catch (error: any) {
    return createError({ statusCode: 500, statusMessage: error.message });
  }
});
