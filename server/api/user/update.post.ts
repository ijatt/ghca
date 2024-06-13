import { Prisma } from "@prisma/client";
import prisma from "~/server/db/prisma";

export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event);

    if (body === null)
      return createError({ statusCode: 400, statusMessage: "Bad request" });

    if (!prisma)
      return createError({
        statusCode: 500,
        statusMessage: "Internal server error",
      });

    const user = await prisma.users.update({
      where: {
        id: body.id,
      },
      data: {
        email: body.email,
      },
    });

    if (!user)
      return createError({
        statusCode: 400,
        statusMessage: "Error updating user table.",
      });

    const applicant = await prisma.applicant.update({
      where: {
        userId: body.id,
      },
      data: {
        name: body.name,
        icNumber: body.icNumber,
        city: body.city,
        postcode: body.postcode,
        universityName: body.universityName,
        contactNumber: body.contactNumber,
        address: body.address,
      },
    });

    if (!applicant)
      return createError({
        statusCode: 400,
        statusMessage: "Error updating applicant table.",
      });

    return { ...user, ...applicant };
  } catch (error) {
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      if (error.code === "P2025") {
        return createError({
          statusCode: 400,
          statusMessage: "User not found",
        });
      } else {
        return createError({
          statusCode: 500,
          statusMessage: error.message,
        });
      }
    }
    console.log(error);

    return createError({ statusCode: 500, statusMessage: String(error) });
  }
});
