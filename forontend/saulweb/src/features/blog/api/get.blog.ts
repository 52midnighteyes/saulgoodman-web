import axios from "axios";
import { IPostBlogResult } from "../types/blog.interface";
import { IApiResponse } from "@/features/global-interface/api-response.interface";

export async function GetPostBlogService(
  slug: string
): Promise<IPostBlogResult> {
  try {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL;
    console.log(apiUrl);
    const respons = await axios.get<IApiResponse<IPostBlogResult>>(
      `${apiUrl}/api/blog/${slug}`
    );

    return respons.data.data;
  } catch (err) {
    if (axios.isAxiosError(err)) {
      throw err.response?.data || err.message;
    }
    throw err;
  }
}

export async function GetAllBlogService(): Promise<IPostBlogResult[]> {
  try {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL;
    console.log(apiUrl);

    const respons = await axios.get<IApiResponse<IPostBlogResult[]>>(
      `${apiUrl}/api/blog`
    );

    return respons.data.data;
  } catch (err) {
    if (axios.isAxiosError(err)) {
      throw err.response?.data || err.message;
    }
    throw err;
  }
}
