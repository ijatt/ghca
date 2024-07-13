import { Prisma } from "@prisma/client" 
import prisma from "~/server/db/prisma";

export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event);
    if (body === null) {
      return createError({ statusCode: 400, statusMessage: "Bad Request" })
    }
    console.log(body.name);
    
    if (!prisma) {
      return createError({ statusCode: 500, statusMessage: "Internal Server Error" })
    }

    const user = await prisma.users.create({
      data: {
        email: body.email,
        password: await hashPassword(body.password),
        role: "ADMIN"
      }
    })

    if (!user) {
      return createError({ statusCode: 500, statusMessage: "Internal Server Error" })
    }

    console.log(user);
    
    const admins = await prisma.admin.create({
      data: {
        userId: user.id as number,
        name: body.name,
        contactNumber: body.contactNumber,
        department: body.department
      }
    })
    if (!admins) return createError({statusCode: 500, statusMessage: "Internal Server Error"})
    
    return admins.name
    
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