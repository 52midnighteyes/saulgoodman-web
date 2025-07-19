import { IEmailSubmissionParam } from "../interface/emailSubmission.interface";
import prisma from "../lib/prisma";

export async function createEmailSubmissionRepo(params: IEmailSubmissionParam) {
  try {
    const response = await prisma.emailSubmission.create({
      data: {
        ...params,
      },
    });
    return response;
  } catch (err) {
    throw err;
  }
}
