import { Prisma } from "@prisma/client";
import prisma from "~/server/db/prisma";

export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event);

    if (!body)
      return createError({ statusCode: 400, statusMessage: "Bad request." });

    if (!prisma)
      return createError({
        statusCode: 500,
        statusMessage: "Internal server error",
      });

    const application = await prisma.applications.findMany({
      where: {
        userId: body.userId
      }
    })

    if (!application) return createError({statusCode: 500, statusMessage: "Internal Server error"})

    return application
  } catch (error: any) {
    return createError({ statusCode: 500, statusMessage: error.message });
  }
});
