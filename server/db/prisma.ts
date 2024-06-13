import Prisma from "@prisma/client";

declare global {
    var prisma: Prisma.PrismaClient;
}

let prisma: Prisma.PrismaClient;

if (process.env.NODE_ENV === "production") {
    prisma = new Prisma.PrismaClient();
} else {
    if (!global.prisma) {
        global.prisma = new Prisma.PrismaClient();
    }
    prisma = global.prisma;
}

export default prisma;