import prisma from "~/server/db/prisma";

export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event);
    console.log(body);
    
    if (!body)
      return createError({ statusCode: 400, statusMessage: "Bad request." });

    if (!prisma)
      return createError({
        statusCode: 500,
        statusMessage: "Internal server error",
      });

    const application = await prisma.applications.update({
      where: {
        id: body.id
      },
      data: {
        status: body.status,
        approvedBy: body.approvedBy,
        approvedDate: new Date()
      }
    })

    if (!application) return createError({statusCode: 500, statusMessage: "eror Server error"})

    return application
  } catch (error: any) {
    return createError({ statusCode: 500, statusMessage: error.message });
  }
})
