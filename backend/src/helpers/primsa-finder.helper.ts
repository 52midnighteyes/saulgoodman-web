import prisma from "../lib/prisma";

export async function findUserById(id: string) {
  try {
    const response = await prisma.users.findUnique({
      where: {
        id,
      },
    });

    return response;
  } catch (err) {
    throw err;
  }
}

export async function findUserByEmail(email: string) {
  try {
    const response = await prisma.users.findFirst({
      where: {
        email: {
          equals: email,
          mode: "insensitive",
        },
      },
    });
    return response;
  } catch (err) {
    throw err;
  }
}

export async function findUserByUsername(username: string) {
  try {
    const response = await prisma.users.findFirst({
      where: {
        email: {
          equals: username,
          mode: "insensitive",
        },
      },
    });
    return response;
  } catch (err) {
    throw err;
  }
}
