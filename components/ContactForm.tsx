"use client";

import {z} from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
// import FormButton from "./FormButton";
import { Toaster } from "./ui/sonner";
// import { validateContactForm } from "./server";
import { useFormState } from "react-dom";
import { toast } from "sonner";
import { useEffect, useState, useTransition } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import { contactFormSchema } from "@/lib/validationsSchemas";
import { sendMessage } from "@/actions/sendMessage";

const ContactForm2 = () => {
  const form = useForm<z.infer<typeof contactFormSchema>>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phonenumber: "",
      message: "",
    },
  });

  const [isPending, startTransition] = useTransition();


  const onSubmit = (values: z.infer<typeof contactFormSchema>) => {
  

    startTransition(() => {
      sendMessage(values).then((res) => {
        console.log(res);
        if (res?.status === "success") {
       
          toast.success(res.message)
        }

        if (res?.status === "error") {
          toast.error(res.message)
        }
      });
    });
  };

  return (
    <div className=" flex justify-center  ">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-2 text-secondary-foreground bg-white w-[60%] max-xl:w-[80%] max-lg:w-1/2 max-md:w-3/4 max-sm:w-full  flex flex-col
         gap-6 max-md:gap-4 p-4 shadow-xl -mt-24 rounded-md  "
        >
          <div className=" flex items-center gap-4">
            <Image
              src="/email.png"
              alt="mail icon"
              width={70}
              height={240}
              className=" max-xl:w-[60px] max-sm:w-[52px]"
            />
            <p className="max-sm:text-sm">
              Send us message and we&apos;ll reach out to you within {" "}
              <span className=" font-bold">24 hours</span>.
            </p>
          </div>
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel className=" text-xl max-sm:text-base font-semibold">
                  Name
                </FormLabel>
                <FormControl>
                  <Input
                    
                    type="text"
                    {...field}
                    className="  h-10 text-lg max-sm:text-base "
                  />
                </FormControl>
               
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className=" text-xl font-semibold max-sm:text-base ">
                  Email
                </FormLabel>
                <FormControl>
                  <Input
                    
                    type="email"
                    {...field}
                    className="  h-10 text-lg max-sm:text-base "
                  />
                </FormControl>
                
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="phonenumber"
            render={({ field }) => (
              <FormItem>
                <FormLabel className=" text-xl font-semibold max-sm:text-base ">
                  Phone Number
                </FormLabel>
                <FormControl>
                  <Input
                  
                    type="text"
                    {...field}
                    className="  h-10 text-lg max-sm:text-base "
                  />
                </FormControl>
               
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel className=" text-xl font-semibold max-sm:text-base ">
                  Message
                </FormLabel>
                <FormControl>
                  <Textarea
                  
                    {...field}
                    placeholder="Type your message here."
                    className="text-lg h-32 max-sm:text-base "
                  />
                </FormControl>
               
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" disabled={isPending}>{isPending?"Sending...":"Send"}</Button>
          <p className=" text-base text-center">
            Contact us at{" "}
            <span className=" text-primary font-bold">
              <Link href="mailto:contact@gmail.com">contact@gmail.com</Link>
            </span>{" "}
            for help
          </p>
          <Toaster richColors />
        </form>
      </Form>
    </div>
  );
};

export default ContactForm2;
