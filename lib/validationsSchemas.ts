import { z } from "zod";


export const contactFormSchema = z.object({
  name: z.string().min(2, "Too short!"),
  email: z.string().email(),
  phonenumber: z.string().regex(/^[789][0-9]{9}$/,"Invalid Number!"),
  message:z.string().min(20,"Message is too short!")
});