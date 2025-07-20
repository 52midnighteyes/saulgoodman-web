import prisma from "../lib/prisma";

export async function findUserById(id: string) {
  try {
    const response = await prisma.user.findUnique({
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
    const response = await prisma.user.findFirst({
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
    const response = await prisma.user.findFirst({
      where: {
        username: {
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

export async function findBlogById(id: string) {
  try {
    const response = await prisma.blog.findUnique({
      where: {
        id,
      },
    });
    return response;
  } catch (err) {
    throw err;
  }
}

export async function findBlogBySlug(slug: string) {
  try {
    const response = await prisma.blog.findFirst({
      where: {
        slug: {
          equals: slug,
          mode: "insensitive",
        },
      },
    });
    return response;
  } catch (err) {
    throw err;
  }
}
