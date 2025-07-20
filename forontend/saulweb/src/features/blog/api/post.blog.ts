import axios from "axios";
import { IPostBlogParam, IPostBlogResult } from "../types/blog.interface";
import { IApiResponse } from "@/features/global-interface/api-response.interface";

export async function PostBlogService(
  params: IPostBlogParam
): Promise<IPostBlogResult> {
  try {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL;
    const response = await axios.post<IApiResponse<IPostBlogResult>>(
      `${apiUrl}/api/blog`,
      {
        title: params.title,
        content: params.content,
        author: params.author,
        tag: params.tag,
        category: params.category,
      }
    );

    return response.data.data;
  } catch (err) {
    throw err;
  }
}
