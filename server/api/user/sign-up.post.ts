import { Prisma } from "@prisma/client" 
import { errorMessages } from "vue/compiler-sfc";
import prisma from "~/server/db/prisma";

export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event);
    if (body === null) {
      return createError({ statusCode: 400, statusMessage: "Bad Request" })
    }
    console.log(body.email);
    
    if (!prisma) {
      return createError({ statusCode: 500, statusMessage: "Internal Server Error" })
    }

    const user = await prisma.users.create({
      data: {
        email: body.email,
        password: await hashPassword(body.password),
      }
    })

    if (!user) {
      return createError({ statusCode: 500, statusMessage: "Internal Server Error" })
    }

    const profile = await prisma.applicant.create({
      data: {
        userId: user.id as number,
        name: body.fullName as string
      }
    })

    return profile.name
    
  } catch (error) {
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      if (error.code === 'P2002') {
        return createError({ statusCode: 400, statusMessage: "Email already exists" })
      } else {
        return createError({ statusCode: 500, statusMessage: "Internal Server Error" })
      }
    } 
  }
})