import { findBlogById, findBlogBySlug } from "../helpers/prisma-finder.helper";
import { generateSlug } from "../helpers/slug-generator.helper";
import { IBlogPost } from "../interface/blog.interface";
import prisma from "../lib/prisma";

export async function createBlogPostRepo(params: IBlogPost) {
  try {
    const slug = generateSlug(params.title);
    const checkTitle = await findBlogBySlug(slug);
    if (checkTitle) throw new Error("article or article title already exists");
    const response = await prisma.blog.create({
      data: {
        ...params,
        slug,
      },
    });

    return response;
  } catch (err) {
    throw err;
  }
}

export async function getAllBlogRepo() {
  try {
    const response = await prisma.blog.findMany();
    if (!response) throw new Error("data not found");

    return response;
  } catch (err) {
    throw err;
  }
}

export async function getBlogDataBySlugRepo(id: string) {
  try {
    const response = await findBlogById(id);
    if (!response) throw new Error("data not found");

    return response;
  } catch (error) {
    throw error;
  }
}

//filterBlogByDate
//filterBlogByAuthor
