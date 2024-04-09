"use server";

import { z } from "zod";
import { contactFormSchema } from "@/lib/validationsSchemas";


export async function sendMessage(
  values: z.infer<typeof contactFormSchema>
) {
  try {
    // 1.) validate the  values using zod

    const validatedValues = contactFormSchema.safeParse(values);
    if (!validatedValues.success) {
      return {
        status: "error",
        message: "Invalid data!",
      };
    }

    return {
      status: "success",
      message: "Message sent successfully!",
    };
  } catch (err) {
    return {
      status: "error",
      message: "Something went wrong!",
    };
  }
}
