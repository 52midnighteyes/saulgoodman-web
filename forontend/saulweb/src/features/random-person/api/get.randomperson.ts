import axios from "axios";
import { ISimplifiedUserResults } from "../types/randomperson.interface";
import { IApiResponse } from "@/features/global-interface/api-response.interface";

export async function RandomPersonService(
  params: number
): Promise<ISimplifiedUserResults[]> {
  try {
    console.log(params);
    const apiUrl = process.env.NEXT_PUBLIC_API_URL;
    const response = await axios.get<IApiResponse<ISimplifiedUserResults[]>>(
      `${apiUrl}/api/randomperson/?results=${params}`
    );

    return response.data.data;
  } catch (err) {
    if (axios.isAxiosError(err)) {
      throw err.response?.data || err.message;
    }
    throw err;
  }
}
