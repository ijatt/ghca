import { pipeToNodeWritable } from "vue/server-renderer"
import prisma from "~/server/db/prisma"

export default defineEventHandler(async (event) => {
  try {
    const userID = await checkAccessToken(event)
    
    if(!userID) return createError({ statusCode: 401, statusMessage: "Unauthorized" })

    if (!prisma) {
      return createError({ statusCode: 500, statusMessage: "Internal Server Error" })
    }

    const user = await prisma.users.findUniqueOrThrow({
      where: {
        id: userID as number
      }
    })

    let additionalData;
    if (user.role === 'APPLICANT') {
      additionalData = await prisma.users.findUniqueOrThrow({
        where: {
          id: userID as number,
        },
        select: {
          applicant: {
            select: {
              name: true,
              icNumber: true,
              city: true,
              postcode: true,
              universityName: true,
              contactNumber: true,
              address: true,
              occupation: true
            },
          },
        },
      });
    } else if (user.role === 'ADMIN') {
      additionalData = await prisma.users.findUniqueOrThrow({
        where: {
          id: userID as number,
        },
        select: {
          admin: {
            select: {
              // Add fields specific to admin
              department: true,
              name: true
            },
          },
        },
      });
    }

    // Merge the user data with the additional data
    const result = { ...user, ...additionalData };
    return result;

  } catch (error) {
    return createError({ statusCode: 500, statusMessage: "Internal Server Error" })
  }
})